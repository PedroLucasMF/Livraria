import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Livro from './livro.js'
import Membro from './membro.js'
import Multa from './multa.js'

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

  @column()
  declare livroId:number

  @hasOne(()=> Livro)
  declare livro: HasOne<typeof Livro>

  @column()
  declare membroId:number

  @hasOne(()=> Membro)
  declare membro: HasOne<typeof Membro>

  @column()
  declare multaId:number

  @hasOne(()=>Multa)
  declare multa: HasOne<typeof Multa>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}