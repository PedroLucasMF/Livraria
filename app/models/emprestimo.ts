import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne, } from '@adonisjs/lucid/types/relations'
import Livro from './livro.js'
import Membro from './membro.js'

export default class Emprestimo extends BaseModel {
  @column({ isPrimary: true })
  declare id: Number
  
  @column()
  declare dt_emprestimo:string

  @column()
  declare dt_devolucao:string

  @column()
  declare dt_prevista:string

  @column()
  declare status:string

  @hasOne(()=> Livro)
  declare livro_id: HasOne<typeof Livro>

  @hasOne(()=> Membro)
  declare membro_id: HasOne<typeof Membro>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}