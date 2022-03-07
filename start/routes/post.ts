import Route from '@ioc:Adonis/Core/Route'

Route.get('/posts', async () => {
  return { hello: 'posts' }
})

Route.get('/posts/:id', async () => {
  return { hello: 'posts' }
})

Route.post('/posts', async () => {
  return { hello: 'posts' }
})

Route.put('/posts/:id', async () => {
  return { hello: 'posts' }
})

Route.delete('/posts/:id', async () => {
  return { hello: 'posts' }
})
