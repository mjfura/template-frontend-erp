export interface UserEntity{
    id:string,
    nombres:string,
    correo:string,
    permiso:'1'|'2',
    photo:string,
    lastLogin:Date|string,
    creado:Date,
    modificado:Date
}
export interface UserPayload{
    correo:string,
    password:string,
    nombre:string,
    apellido:string,
    empresa_id?:string|null,
    permiso:'1'|'2'
}
