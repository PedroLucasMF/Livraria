import { DateTime } from 'luxon'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Emprestimo from './emprestimo.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'



export default class Multa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare valor: number

  @column()
  declare status:string

  @column()
  declare dt_pagamento:string

  @hasOne(() => Emprestimo)
  declare emprestimo_id: HasOne<typeof Emprestimo>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}