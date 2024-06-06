import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'emprestimos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('dt_emprestimo', 45).notNullable()
      table.string('dt_devolucao', 45).notNullable()
      table.string('dt_prevista', 45).notNullable()
      table.string('status', 45).notNullable()
      table.integer('livro_id').unsigned().references('id').inTable('livro').notNullable()
      table.integer('membro_id').unsigned().references('id').inTable('membro').notNullable()
      table.integer('multa_id').unsigned().references('id').inTable('multa').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}