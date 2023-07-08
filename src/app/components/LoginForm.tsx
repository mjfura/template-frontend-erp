import PropTypes from 'prop-types'
import { Card, Typography, Input, Button } from '../../components'
function LoginForm ({ empresa }:PropTypes.InferProps<typeof LoginForm.propTypes>) {
  return (
      <Card className='p-4' color="transparent" shadow={false}>
          <Typography className="text-center" variant="h2" color="white" >
              {empresa.nombre}
          </Typography>
          <form data-testid="frmLogin" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                  <Input labelProps={
                    {
                      htmlFor: 'correo'
                    }
                  } name='correo' id='correo' className='text-xl' variant="standard" color='white' size="lg" label="Correo" />
                  <Input labelProps={
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
