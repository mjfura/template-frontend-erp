import { UserEntity } from './index.entity'

export class UserValue implements UserEntity {
  public readonly id: string
  public readonly nombres:string
  public readonly correo:string
  public readonly permiso:'1'|'2'
  public readonly creado:Date
  public readonly modificado:Date
  public readonly lastLogin:Date|string
  public readonly photo:string
  constructor ({ id, nombres, correo, creado, modificado, permiso, photo, lastLogin }:UserEntity) {
    this.id = id
    this.nombres = nombres
    this.correo = correo
    this.creado = creado
    this.modificado = modificado
    this.permiso = permiso
    this.photo = photo
    this.lastLogin = lastLogin
  }
}
