import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Funcionario.createMany([
      {nome: 'Jose',
        cpf: '190-794-753-22',
        email: 'Jose34@gmail.com',
        telefone: '9892-0087',
        endereco: 'qnp 8 conj r casa 3',
        cargo: 'vendedor',
        salario: '1400',
        dt_contratacao: '09/01/2024'},

        {nome: 'Julia',
        cpf: '789-053-651-33',
        email: 'ana90@gmail.com',
        telefone: '972-653-077-51',
        endereco: 'qrr 301 conj d lote 1',
        cargo: 'Gerente',
        salario: '3000',
        dt_contratacao: '09/01/2020'}
    ])
  }
}