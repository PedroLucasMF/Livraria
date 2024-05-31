import Membro from '#models/membro'
import type { HttpContext } from '@adonisjs/core/http'


export default class MembrosController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Membro.query().paginate(page,perPage)
    }

    async show({params}: HttpContext){
       return await Membro.findOrFail(params.id)
    } 

    async store({request}: HttpContext){
        
        const dados = request.only(['nome', 'cpf', 'email', 'telefone', 'endereco', 'status', 'dt_associacao'])
        
        return await Membro.create(dados)
    } 

    async update({params, request}: HttpContext){
        const item = await Membro.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'email', 'telefone', 'endereco', 'status', 'dt_associacao'])

        item.merge(dados)

        return await item.save()
        
    }

    async destroy({params}: HttpContext){

       const item = await Membro.findOrFail(params.id) 
       item.delete()
    } 
   
}