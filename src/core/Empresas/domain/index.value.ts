import { Empresa } from './index.entity'

export class EmpresaValue implements Empresa {
  public readonly id: string
  public readonly nombre:string
  constructor ({ id, nombre }:Empresa) {
    this.id = id
    this.nombre = nombre
  }
}
