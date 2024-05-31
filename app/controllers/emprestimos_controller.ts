import Emprestimo from '#models/emprestimo'
import type { HttpContext } from '@adonisjs/core/http'

export default class EmprestimosController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Emprestimo.query().preload('livro')
                                    .preload('membro')
                                    .paginate(page,perPage)
    }

    async show({params}: HttpContext){
    //    return await Produto.findOrFail(params.id)
        return await Emprestimo.query()
                            .where('id', params.id)
                            .preload('livro')
                            .preload('membro')
                            .first()

    } 

    async store({request}: HttpContext){
        
        const dados = request.only(['dt_emprestimo', 'dt_evolucao', 'dt_prevista', 'livro', 'membro'])
        
        return await Emprestimo.create(dados)
    } 

    async update({params, request}: HttpContext){
        const item = await Emprestimo.findOrFail(params.id)
        const dados = request.only(['dt_emprestimo', 'dt_evolucao', 'dt_prevista', 'livro', 'membro'])

        item.merge(dados)

        return await item.save()
        
    }

    async destroy({params}: HttpContext){

       const item = await Emprestimo.findOrFail(params.id) 
       item.delete()
    } 
}