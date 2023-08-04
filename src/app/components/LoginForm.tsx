'use client'
import PropTypes from 'prop-types'
import { Card, Typography, Input, Button, Spinner, Dialog, DialogHeader, DialogBody } from '../../components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILoginForm } from '@/core/Validators/infraestructure/types'
import { loginResolver } from '@/core/Validators/infraestructure/dependencies'
import { useBoolean } from '@/components/hooks'
import { authUseCase } from '@/core/Auth/infraestructure/dependencies'
import { useRouter } from 'next/navigation'
import { BASE_PATH } from '@/config'
import { ErrorResponserValue } from '@/core/Responsers/domain'
import { useState } from 'react'
function LoginForm ({ empresa }:PropTypes.InferProps<typeof LoginForm.propTypes>) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({
    resolver: loginResolver,
    defaultValues: {
      correo: '',
      password: ''
    }
  })
  const { toggle, value: loading } = useBoolean(false)
  const { on, toggle: handler, value: isOpen } = useBoolean(false)
  const [alert, setAlert] = useState({
    title: '',
    message: ''
  })
  const { push } = useRouter()

  const onSubmit: SubmitHandler<ILoginForm> = async data => {
    toggle()
    const response = await authUseCase.login({
      ...data,
      idEmpresa: empresa.id
    }, BASE_PATH)
    console.log(response)
    if (response instanceof ErrorResponserValue) {
      setAlert({
        title: response.title,
        message: response.message
      })
      toggle()
      on()
      return
    }
    toggle()
    push('/account')
  }
  return (
      <Card className='p-4' color="transparent" shadow={false}>
          <Typography className="text-center" variant="h2" color="white" >
              {empresa.nombre}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} data-testid="frmLogin" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">

              <div className="mb-4 flex flex-col gap-6">
                  <Input error={!!errors.correo} {...register('correo')} labelProps={
                    {
                      htmlFor: 'correo'
                    }
                  } name='correo' id='correo' className='text-xl' variant="standard" color='white' size="lg" label="Correo" />
                  {
                    errors.correo && <p className='text-sm text-red-500 font-bold' >{errors.correo.message}</p>
                  }
                  <Input error={!!errors.password} {...register('password')} labelProps={
                    {
                      htmlFor: 'password'
                    }
                  } name='password' id='password' className='text-xl' variant="standard" color='white' type='password' size="lg" label="Contraseña" />
          {
            errors.password && <p className='text-sm text-red-500 font-bold' >{errors.password.message}</p>
          }
              </div>
                {
                  loading
                    ? <Spinner/>
                    : <Button color="white" className="mt-6" type='submit' fullWidth>
                  Ingresar
              </Button>
                }

          </form>
          <Dialog open={isOpen} handler={handler} >
            <DialogHeader>{alert.title}</DialogHeader>
            <DialogBody divider>
              {alert.message}
            </DialogBody>

          </Dialog>
      </Card>
  )
}

LoginForm.propTypes = {
  empresa: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    logo: PropTypes.string
  }).isRequired
}

export {
  LoginForm
}
