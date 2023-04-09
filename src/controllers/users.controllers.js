export const getUsers = (req, res) => {
  res.status(404).son('No hay usuarios')
}

export const getUser = (req, res) => {

  const { id } = req.params
  //este getUser recibe un id por parámetro.

  res.json(`Usuario con id ${id} retornado exitosamente`)
}

export const createUser = (req, res)=> {
  const data = req.body
  res.status(201).json({
    message:`usuario ${data.username} creado`
  })
}
  //Verificar que la información ingresada sea valida
  //Guardar la info en la base de datos.

export const deleteUser =  (req, res)=> {
  res.json('Eliminar usuario')
}

export const upDateUser = (req, res)=> {
  res.json('Editar usuario')
}