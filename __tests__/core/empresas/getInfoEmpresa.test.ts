import { api } from '@/config'
import { empresaUseCase } from '@/core/Empresas/dependencies'
import MockAdapter from 'axios-mock-adapter'
jest.mock('@/config', () => {
  const originalConfig = jest.requireActual('@/config')

  return {
    ...originalConfig,
    API_URL: 'http://localhost:4000/api'
  }
})
describe('getInfoEmpresa Service GET', () => {
  it('should return an error response when subdominio is not passed', async () => {
    const subdomain = undefined as any // nota: para testear si se pasara undefined en tiempo de ejecución
    const result = await empresaUseCase.getInfoEmpresa(subdomain)

    // Verificar que los datos retornados sean los esperados
    expect(result).toEqual({
      status: false,
      message: 'No se pudo obtener el subdominio',
      title: 'Error'
    })
  })
  it('should return an error response when subdominio is equal to ""', async () => {
    const subdomain = ''
    const result = await empresaUseCase.getInfoEmpresa(subdomain)

    // Verificar que los datos retornados sean los esperados
    expect(result).toEqual({
      status: false,
      message: 'No se pudo obtener el subdominio',
      title: 'Error'
    })
  })
  it('should return an error response when subdominio doesnt exist', async () => {
    const mockData = {

      status: false,
      message: 'El subdominio no existe',
      title: 'Error'

    }
    const mock = new MockAdapter(api)
    mock.onGet('/empresas/getEmpresaBySubdominio?subdominio=demo').reply(400, mockData)

    // Establecer el resultado esperado de la llamada a la API

    const subdomain = 'demo'
    const result = await empresaUseCase.getInfoEmpresa(subdomain)

    // Verificar que los datos retornados sean los esperados
    expect(result).toEqual({
      status: false,
      message: 'El subdominio no existe',
      title: 'Error'
    })
  })
  it('should return an error response when request doesnt exist', async () => {
    const mock = new MockAdapter(api)
    mock.onGet('/empresas/getEmpresaBySubdominio?subdominio=demo').reply(404)

    // Establecer el resultado esperado de la llamada a la API

    const subdomain = 'demo'
    const result = await empresaUseCase.getInfoEmpresa(subdomain)

    // Verificar que los datos retornados sean los esperados
    expect(result).toEqual({
      status: false,
      message: 'Ruta errónea',
      title: 'Error'
    })
  })
})
