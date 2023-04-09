import { Router } from 'express'
import { getUser, getUsers, createUser, deleteUser, upDateUser } from '../controllers/users.controllers.js'

const router = Router()

router.get('/', getUsers)

router.get('/:id', getUser)
//Todo lo que venga luego de la barra será id. entonces viene el desestructurador en user.controllers que dice: desestructura id que viene desde los params.

router.post('/', createUser)
  
router.put('/', upDateUser)

router.delete('/', deleteUser)

export default router