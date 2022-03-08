import Route from '@ioc:Adonis/Core/Route'

Route.get('posts', 'PostsController.all')
Route.get('posts/:id', 'PostsController.one')
Route.post('posts', 'PostsController.save')
Route.put('posts/:id', 'PostsController.update')
Route.delete('posts/:id', 'PostsController.remove')
