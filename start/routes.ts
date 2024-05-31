/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import EmprestimosController from '#controllers/emprestimos_controller'
import FuncionariosController from '#controllers/funcionarios_controller'
import LivrosController from '#controllers/livros_controller'
import MembrosController from '#controllers/membros_controller'
import MultasController from '#controllers/multas_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/livros', LivrosController).apiOnly()
router.resource('/Membros', MembrosController).apiOnly()
router.resource('/Emprestimos', EmprestimosController).apiOnly()
router.resource('/Multas', MultasController).apiOnly()
router.resource('/Funcionarios', FuncionariosController).apiOnly()