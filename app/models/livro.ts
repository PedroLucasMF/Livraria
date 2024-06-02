import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  declare id: Number
  
  @column()
  declare titulo:string

  @column()
  declare autor:string

  @column()
  declare editora:string

  @column()
  declare ano_Publicacao:string

  @column()
  declare qnt_Total:Number

  @column()
  declare qnt_Disponivel:Number

  @column()
  declare isbn:Number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}