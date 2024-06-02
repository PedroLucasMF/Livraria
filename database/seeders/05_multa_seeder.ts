import Multa from '#models/multa'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Multa.createMany([
      {valor: 0.0,
        status: 'quitado',
        dt_pagamento: '',
        emprestimo_id: 1
        },

        {valor: 3.0,
          status: 'pedente',
          dt_pagamento: '',
          emprestimo_id: 2}
    ])
  }
}