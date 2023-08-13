export interface UserResponse{
    id:string,
    nombre:string,
    apellido:string,
    correo:string,
    permiso:'1'|'2',
    photo:string,
    lastLogin:string|null,
    creado:string,
    modificado:string
}
