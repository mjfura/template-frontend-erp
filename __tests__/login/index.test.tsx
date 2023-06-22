import Login from '@/app/page'
import { screen, render } from '@testing-library/react'
describe('Login Page', () => {
  it('should render correctly', () => {
    render(<Login/>)
    expect(screen.getByText(/mygym/i)).toBeInTheDocument()
  })
})
