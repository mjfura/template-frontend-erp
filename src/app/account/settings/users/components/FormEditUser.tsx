import { useAlert } from '@/components/hooks/useAlert'
import { userUseCase } from '@/core/Users/dependencies'
import { editUserResolver } from '@/core/Validators/infraestructure/dependencies'
import { IEditUserForm } from '@/core/Validators/infraestructure/types'
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Option, Select, Typography } from '@/components'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

interface Props {
    doAfter: () => void,
    formValues:{
        idUser:string
        nombres:string,
        apellidos:string,
        correo:string,
        permiso:'1'|'2'
    }
}
export const FormEditUser = ({ doAfter, formValues }: Props) => {
  const { data: session, status } = useSession()
  const { launchSuccessAlert, successAlert, launchErrorAlert, errorAlert } = useAlert()
  const { push } = useRouter()
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IEditUserForm>({
    resolver: editUserResolver,
    defaultValues: {
      correo: formValues.correo,
      nombres: formValues.nombres,
      apellidos: formValues.apellidos,
      permiso: formValues.permiso
    }
  })
  if (!session && status === 'unauthenticated') {
    push('/')
  }
  const onSubmit: SubmitHandler<IEditUserForm> = async (data) => {
    try {
      if (session) {
        const response = await userUseCase.editUser(formValues.idUser, {
          apellido: data.apellidos,
          correo: data.correo,
          nombre: data.nombres,
          permiso: data.permiso
        })
        if (response.status) {
          doAfter()
          return launchSuccessAlert({
            title: response.title,
            description: response.message,
            onClose: () => {}
          })
        }
        return launchErrorAlert({
          title: response.title,
          description: response.message,
          onClose: () => {
          }
        })
      }
    } catch (e) {
      console.log('error catch ', e)
      return launchErrorAlert({
        title: 'Error',
        description: 'Error al editar el usuario',
        onClose: () => {
        }
      }
      )
    }
  }
  return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {successAlert}
            {errorAlert}
            <Card className="mx-auto w-full max-w-[24rem]">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Editar Usuario
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input {...register('nombres')} label="Nombres" size="lg" />
                    {errors.nombres && <Typography variant="small" color="red">{errors.nombres.message}</Typography>}
                    <Input {...register('apellidos')} label="Apellidos" size="lg" />
                    {errors.apellidos && <Typography variant="small" color="red">{errors.apellidos.message}</Typography>}
                    <Input {...register('correo')} label="Correo" type='email' size="lg" />
                    {errors.correo && <Typography variant="small" color="red">{errors.correo.message}</Typography>}

                    <Controller
                        control={control}
                        name="permiso"
                        render={({ field: { onBlur, ref, value } }) =>
                            <Select onChange={(e) => setValue('permiso', e === '1' ? '1' : '2')} onBlur={onBlur} ref={ref} value={value} error={!!errors.permiso} label='Seleccionar Tipo de Usuario' size='lg' >
                                <Option value='1' >Administrador</Option>
                                <Option value='2' >Trabajador</Option>
                            </Select>}
                    />
                    {errors.permiso && <Typography variant="small" color="red">{errors.permiso.message}</Typography>}

                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" type='submit' fullWidth>
                        Guardar
                    </Button>

                </CardFooter>
            </Card>
        </form>
  )
}
