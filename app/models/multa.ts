import { DateTime } from 'luxon'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import Emprestimo from './emprestimo.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'



export default class Multa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare valor: number

  @column()
  declare status:string

  @column()
  declare dt_pagamento:string

  @column()
  declare emprestimoId:number

  @belongsTo(() => Emprestimo)
  declare emprestimo: BelongsTo<typeof Emprestimo>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}