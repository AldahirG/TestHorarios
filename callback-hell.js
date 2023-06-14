const empleados=[
    {
    id:1,
    nombre:'Aldo'

}
,{
    id:2,
    nombre:'Linda'
}

,{
    id:3,
    nombre:'Karen'
}
]

const salarios=[
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:2000
    }
]


const getEmpleado=(id, callback)=>{
    const empleado = empleados.find(e => e.id ===id)
    if (empleado) {
        callback (null,empleado)
    } else{
        callback (`Empleado con id  ${id} no existente`)
    }
    
}

const getSalario=(id, callback)=>{
    const empleado = empleados.find(e => e.id===id)
    if (empleado) {
        const salario = salarios.find(s => s.id===id)
        if (salario) {
            callback(null,empleado,salario)
        } else{
            callback(`No se encontro salario para el empleado ${empleado.nombre}`)
        }
    }
}

const salario = 1
getEmpleado(3,( err,empleado)=>{
    if (err) {
         console.log('Error!')
         return console.log(err)
    }
    console.log(empleado)

    getSalario(salario,(err,empleado,salario)=>{
        if (err) {
            console.log('Error!')
            return console.log(err)
       }
       console.log(`El empleado ${empleado.nombre} tiene un salario de $ ${salario.salario}`)
    }
    )

})


