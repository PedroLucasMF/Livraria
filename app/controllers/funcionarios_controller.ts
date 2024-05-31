import Funcionario from '#models/funcionario'
import type { HttpContext } from '@adonisjs/core/http'

    export default class FuncionariosController {
        async index({request}: HttpContext){
    
            const page = request.input('page', 1)
            const perPage = request.input('perPage', 10)
    
            return await Funcionario.query().paginate(page,perPage)
        }
    
        async show({params}: HttpContext){
           return await Funcionario.findOrFail(params.id)
        } 
    
        async store({request}: HttpContext){
            
            const dados = request.only(['nome', 'cpf', 'email', 'telefone', 'endereco', 'cargo', 'salario'])
            
            return await Funcionario.create(dados)
        } 
    
        async update({params, request}: HttpContext){
            const item = await Funcionario.findOrFail(params.id)
            const dados = request.only(['nome', 'cpf', 'email', 'telefone', 'endereco', 'cargo', 'salario'])
    
            item.merge(dados)
    
            return await item.save()
            
        }
    
        async destroy({params}: HttpContext){
    
           const item = await Funcionario.findOrFail(params.id) 
           item.delete()
        } 
}