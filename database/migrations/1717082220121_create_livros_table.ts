import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'livros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo', 45).notNullable()
      table.string('autor', 45).notNullable()
      table.string('editora', 45).notNullable()
      table.integer('ano_Publicacao')
      table.integer('qnt_Total').notNullable()
      table.integer('qnt_Disponivel').notNullable()
      table.integer('isbn').notNullable()
      table.integer('emprestimo_id').unsigned().references('id').inTable('emprestimo')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}