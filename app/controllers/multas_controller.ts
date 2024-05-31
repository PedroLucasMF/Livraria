import Multa from '#models/multa'
import type { HttpContext } from '@adonisjs/core/http'

export default class MultasController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Multa.query().preload('emprestimo')
                                    .paginate(page,perPage)
    }

    async show({params}: HttpContext){
    //    return await Produto.findOrFail(params.id)
        return await Multa.query()
                            .where('id', params.id)
                            .preload('emprestimo')
                            .first()

    } 

    async store({request}: HttpContext){
        
        const dados = request.only(['valor', 'status', 'dt_pagamento', 'emprestimo'])
        
        return await Multa.create(dados)
    } 

    async update({params, request}: HttpContext){
        const item = await Multa.findOrFail(params.id)
        const dados = request.only(['valor', 'status', 'dt_pagamento', 'emprestimo'])

        item.merge(dados)

        return await item.save()
        
    }

    async destroy({params}: HttpContext){

       const item = await Multa.findOrFail(params.id) 
       item.delete()
    } 
}