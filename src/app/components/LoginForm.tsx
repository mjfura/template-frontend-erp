'use client'
import PropTypes from 'prop-types'
import { Card, Typography, Input, Button } from '../../components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILoginForm } from '@/core/Validators/infraestructure/types'
import { loginResolver } from '@/core/Validators/infraestructure/dependencies'
import { useBoolean } from '@/components/hooks'
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
  const onSubmit: SubmitHandler<ILoginForm> = async data => {
    try {
      toggle()
      const response = await signIn('credentials', {
        correo: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: `${basePath}/userAccount`
      })
      if (response?.error) throw new Error(response.error)
      push(PrivateRoutes.Home)
    } catch (e) {
      console.log('error in login: ', e)
      handlerUIError(e)
    } finally {
      toggle()
    }
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
                  <Input error={!!errors.password} {...register('password')} labelProps={
                    {
                      htmlFor: 'password'
                    }
                  } name='password' id='password' className='text-xl' variant="standard" color='white' type='password' size="lg" label="Contraseña" />
              </div>

              <Button color="white" className="mt-6" fullWidth>
                  Ingresar
              </Button>

          </form>
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
