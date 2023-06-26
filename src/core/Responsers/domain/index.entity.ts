export interface Responser{
    title:string,
    message:string,
    status:boolean
}
export interface SuccessResponser<Data> extends Responser{
    data:Data,
    status:true
}
export interface ErrorResponser extends Responser{
    status:false
}
