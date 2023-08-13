export interface LoginValidatorEntity{
    correo:string,
    password:string
}
export interface EditUserValidatorEntity{
    correo:string,
    nombres:string,
    apellidos:string,
    permiso:'1'|'2'
}
export interface CreateUserValidatorEntity extends EditUserValidatorEntity{
    password:string
}
