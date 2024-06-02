import Emprestimo from '#models/emprestimo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Emprestimo.createMany([
      {dt_emprestimo: '01/01/2024',
        dt_devolucao: '20/01/2024',
        dt_prevista: '01/02/2024',
        status: 'Devolvido',
        livro_id: 2,
        membro_id: 1},

        {dt_emprestimo: '01/02/2024',
        dt_devolucao: '',
        dt_prevista: '01/03/2024',
        status: 'Atrasado',
        livro_id: 1,
        membro_id: 2}
    ])
  }
}