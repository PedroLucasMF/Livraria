import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Emprestimo from './emprestimo.js'

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
  declare ano_Publicacao:Number

  @column()
  declare qnt_Total:Number

  @column()
  declare qnt_Disponivel:Number

  @column()
  declare isbn:Number

  @column()
  declare emprestimoId:number

  @belongsTo(() => Emprestimo)
  declare emprestimo: BelongsTo<typeof Emprestimo>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}