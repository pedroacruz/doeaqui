import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

import Database from '@ioc:Adonis/Lucid/Database'

export default class PostsController {
  public async all({ request, logger }: HttpContextContract): Promise<any> {
    logger.info(request.ip())

    return Database.from('posts').select('*')
  }

  public async one({ request }: HttpContextContract): Promise<any> {
    console.log(request.all())
    return [
      {
        id: 1233,
      },
    ]
  }

  public async save({ request, logger }: HttpContextContract): Promise<any> {
    logger.info(request.ip() + 1)
    const coverImage = request.file('cover_image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'gif'],
    })!

    await coverImage.moveToDisk('./')

    const fileName = coverImage.fileName

    console.log(fileName)

    return [
      {
        id: 1233,
      },
    ]
  }

  public async update({ request }: HttpContextContract): Promise<any> {
    console.log(request.all())
    return [
      {
        id: 1233,
      },
    ]
  }

  public async remove({ request }: HttpContextContract): Promise<any> {
    console.log(request.all())
    return [
      {
        id: 1233,
      },
    ]
  }
}
