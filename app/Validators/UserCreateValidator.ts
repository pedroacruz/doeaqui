import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string({}, [rules.minLength(4)]),
    lastname: schema.string({}, [rules.minLength(3)]),
    password: schema.string({}, [rules.minLength(6)]),
    email: schema.string({}, [rules.email()]),
  })
  public messages = {
    required: 'O campo {{ field }} é obrigatório para criar o usuário.',
  }
}
