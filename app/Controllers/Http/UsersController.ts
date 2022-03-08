import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async all(ctx: HttpContextContract): Promise<any> {
    return []
  }
}
