import Membro from '#models/membro'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Membro.createMany([
      {nome: 'Pedro',
        cpf: '090-994-053-22',
        email: 'gg34@gmail.com',
        telefone: '9992-0087',
        endereco: 'shs 8 conj r casa 3',
        dt_associacao: '08/09/2018',
        status : 'Ativo'},

        {nome: 'Ana',
        cpf: '789-053-651-33',
        email: 'ana90@gmail.com',
        telefone: '972-653-077-51',
        endereco: 'qrr 301 conj d lote 1',
        dt_associacao: '09/08/2020',
        status : 'Inativo'}
    ])
  }
}