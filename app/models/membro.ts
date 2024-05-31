import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Membro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare nome:string

  @column()
  declare cpf:string

  @column()
  declare email:string

  @column()
  declare telefone:string

  @column()
  declare endereco:string

  @column()
  declare dt_associacao:string

  @column()
  declare status:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}