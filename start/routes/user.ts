import Route from '@ioc:Adonis/Core/Route'

Route.get('users', 'UserController.all')
Route.get('users/:id', 'UserController.one')
Route.post('users', 'UserController.save')
Route.put('users/:id', 'UserController.update')
Route.delete('users/:id', 'UserController.remove')
