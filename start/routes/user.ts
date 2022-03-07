import Route from '@ioc:Adonis/Core/Route'

Route.get('/users', async () => {
  return { hello: 'users' }
})

Route.get('/users/:id', async () => {
  return { hello: 'users' }
})

Route.post('/users', async () => {
  return { hello: 'users' }
})

Route.put('/users/:id', async () => {
  return { hello: 'users' }
})

Route.delete('/users/:id', async () => {
  return { hello: 'users' }
})
