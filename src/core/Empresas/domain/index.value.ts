import { Empresa } from './index.entity'

export class EmpresaValue implements Empresa {
  public readonly id: string
  public readonly nombre:string
  public readonly subdominio:string
  constructor ({ id, nombre, subdominio }:Empresa) {
    this.id = id
    this.nombre = nombre
    this.subdominio = subdominio
  }
}
