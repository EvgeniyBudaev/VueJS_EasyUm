'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database')

const Category = use('App/Models/Category')
const Todo = use('App/Models/Todo')

class DatabaseSeeder {
  async run () {
    await Database.table('todos').truncate()
    await Database.table('categories').truncate()

    await Category.create({ name: 'Work' })
    await Category.create({ name: 'Home' })

    const Category_1 = await Category.find(1)
    const Category_2 = await Category.find(2)

    const Todo_1 = await Todo.create({ label: 'Cleanup code', done: false, important: false })
    const Todo_2 = await Todo.create({ label: 'Call to boss', done: true, important: false })
    const Todo_3 = await Todo.create({ label: 'Buy some food', done: false, important: true })
    const Todo_4 = await Todo.create({ label: 'Pay bills', done: false, important: false })

    await Category_1.todos().save(Todo_1)
    await Category_1.todos().save(Todo_2)

    await Category_2.todos().save(Todo_3)
    await Category_2.todos().save(Todo_4)

  }
}

module.exports = DatabaseSeeder
