import { LoginForm } from '@/app/components'
import { render, screen, within } from '@testing-library/react'

describe('LoginForm Component', () => {
  it('should render correctly', async () => {
    const empresa = {
      id: '1',
      nombre: 'b2'
    }
    render(<LoginForm empresa={empresa} />)
    expect(screen.getByText(/b2/i)).toBeInTheDocument()
    const form = screen.getByTestId('frmLogin')
    expect(form).toBeInTheDocument()
    const inputCorreo = within(form).getByLabelText(/correo/i)
    const inputPassword = within(form).getByLabelText(/contraseña/i)
    const btnIngresar = within(form).getByRole('button', { name: /ingresar/i })
    expect(inputCorreo).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(btnIngresar).toBeInTheDocument()
  })
})
