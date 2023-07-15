import { ValidatorRepository } from '../domain'

export class ValidatorUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly repository:ValidatorRepository) {}
  public loginValidator () {
    return this.repository.loginValidator()
  }
}
