import Emprestimo from '#models/emprestimo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Emprestimo.createMany([
      {dt_emprestimo: '01/01/2024',
        dt_devolucao: '20/01/2024',
        dt_prevista: '01/02/2024',
        status: 'Devolvido',
        livroId: 2,
        membroId: 1,
        multaId:1},

        {dt_emprestimo: '01/02/2024',
        dt_devolucao: '',
        dt_prevista: '01/03/2024',
        status: 'Atrasado',
        livroId: 1,
        membroId: 2,
        multaId: 2}
    ])
  }
}