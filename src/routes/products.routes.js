import { Router } from 'express'

const router = Router()

router.get('/', (req, res)=> {
  res.json('Obtener productos')
})

router.get('/', (req, res)=> {
  res.json('Obtener un producto')
})

router.post('/', (req, res)=> {
  res.json('Agregar producto')
})

router.put('/', (req, res)=> {
  res.json('Editar Producto')
})

router.delete('/', (req, res)=> {
  res.json('Eliminar producto')
})

export default router