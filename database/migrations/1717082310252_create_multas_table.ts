import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'multas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('valor', 45).notNullable()
      table.string('status', 45).notNullable()
      table.string('dt_pagamento', 45).notNullable()
      table.integer('emprestimo_id').unsigned().references('id').inTable('Emprestimo').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}