import { Button, Card, Input, Typography } from '../components'
export default function Login () {
  return (
    <section className="flex min-h-screen bg-[url('/img/gym_bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className='bg-[rgba(0,0,0,0.7)] flex flex-1 justify-center items-center min-h-screen' >

      <Card className='p-4' color="transparent" shadow={false}>
        <Typography className="text-center" variant="h2" color="white" >
          MyGym
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input className='text-xl' variant="standard" color='white' size="lg" label="Correo" />
            <Input className='text-xl' variant="standard" color='white' type="password" size="lg" label="Contraseña" />
          </div>

          <Button color="white" className="mt-6" fullWidth>
            Ingresar
          </Button>

        </form>
      </Card>
      </div>
    </section>
  )
}
