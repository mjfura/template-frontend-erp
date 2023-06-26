import { ErrorResponser, SuccessResponser } from './index.entity'

export class SuccessResponserValue<Data> implements SuccessResponser<Data> {
  public readonly status: true
  public readonly title:string
  public readonly message: string
  public readonly data:Data
  constructor ({ message, data, title }:SuccessResponser<Data>) {
    this.message = message
    this.title = title
    this.status = true
    this.data = data
  }
}
export class ErrorResponserValue implements ErrorResponser {
  public readonly message:string
  public readonly title:string
  public readonly status: false
  constructor ({ message, title }:ErrorResponser) {
    this.message = message
    this.title = title
    this.status = false
  }
}
