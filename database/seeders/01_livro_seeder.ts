import Livro from '#models/livro'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Livro.createMany([
      {titulo: 'The Witcher',
        autor: 'Andrez',
        editora: 'Darkside',
        ano_Publicacao: '2001',
        qnt_Total: 10,
        qnt_Disponivel: 2,
        isbn: 9782123456803,
        emprestimoId: 1},

        {titulo: 'Sangue dos Elfos',
        autor: 'Andrez',
        editora: 'Darkside',
        ano_Publicacao: '2003',
        qnt_Total: 5,
        qnt_Disponivel: 4,
        isbn: 9782123456803,
        emprestimoId: 2}
    ])
  }
}