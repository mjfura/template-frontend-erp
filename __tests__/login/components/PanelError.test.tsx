import { PanelError } from '@/app/components'
import { render, screen } from '@testing-library/react'

describe('Panel Error Component', () => {
  it('Should render correctly', () => {
    const data = {
      code: 400,
      title: 'Ha ocurrido un error',
      message: 'Este sitio no se encuentra registrado'
    }
    render(<PanelError data={data}/>)
    const title = screen.getByText(/Ha ocurrido un error/i)
    const description = screen.getByText(/este sitio no se encuentra registrado/i)
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
