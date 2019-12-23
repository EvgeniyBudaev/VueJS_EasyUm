'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const Todo = use('App/Models/Todo')
const Category = use('App/Models/Category')

Route.on('/').render('index')

Route.get('categories/:id/todos', async ({ params }) => {
  const category = await Category.find(params.id)
  return category.todos().fetch()
})

Route.get('categories/all', async () => {
  return Category.all()
})

Route.delete('categories/delete/:id', async ({ params }) => {
  const category = await Category.find(params.id)
  const categoryId = await category.delete()
  return { status: categoryId }
})

Route.post('categories/save', async ({ request }) => {
  const data = request.all()
  return await Category.create(data)
})

Route.put('categories/update/:id', async ({ request, params }) => {
  // request.only['sex', 'dob']
  const data = request.all()
  const category = await Category.find(params.id)
  category.merge(data)
  await category.save()
  return category
})

Route.get('todos/all', async () => {
  return Todo.all()
})

Route.delete('todos/delete/:id', async ({ params }) => {
  const todo = await Todo.find(params.id)
  const todoId = await todo.delete()
  return { id: todoId }
})

Route.post('todos/save', async ({ request }) => {
  const data = request.all()
  return await Todo.create(data)
})

Route.put('todos/update/:id', async ({ request, params }) => {
  const data = request.all()
  const todo = await Todo.find(params.id)
  todo.merge(data)
  await todo.save()
  return todo
})
