import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable()
      table.string('cpf', 45).notNullable()
      table.string('email', 45).notNullable()
      table.string('telefone', 45).notNullable()
      table.string('endereco').notNullable()
      table.string('cargo').notNullable()
      table.string('salario').notNullable()
      table.string('dt_contratacao').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}