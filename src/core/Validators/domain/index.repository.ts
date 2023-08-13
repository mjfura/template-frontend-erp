import { Resolver } from 'react-hook-form'
import { CreateUserValidatorEntity, EditUserValidatorEntity, LoginValidatorEntity } from './index.entity'

export interface ValidatorRepository{
    loginValidator():Resolver<LoginValidatorEntity>
    createUserValidator():Resolver<CreateUserValidatorEntity>
    editUserValidator():Resolver<EditUserValidatorEntity>
}
