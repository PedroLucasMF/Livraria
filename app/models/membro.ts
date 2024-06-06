import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Emprestimo from './emprestimo.js'

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

  @column()
  declare emprestimoId:number

  @belongsTo(() => Emprestimo)
  declare emprestimo: BelongsTo<typeof Emprestimo>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}