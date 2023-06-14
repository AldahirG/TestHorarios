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


const getEmpleado=(id)=>{
    const empleado = empleados.find(e => e.id ===id)
    const promesa = new Promise((resolve, reject)=>{
    if(empleado){
        resolve(empleado)
    }else {
        reject(`No existe el empleado con id ${id}`)
    }
    })
    return promesa
}

const getSalario=(id)=>{
    const salario = salarios.find(s => s.id ===id)
    const promesa = new Promise((resolve, reject)=>{
    if(salario){
        resolve(salario)
    }else {
        reject(`No existe el salario con id ${id}`)
    }
    })
    return promesa
}


const id = 1

// getEmpleado(id)
// .then(empleado => console.log(empleado))
// .catch( err => console.log(err))

// getSalario(id)
// .then(salario => console.log(salario))
// .catch( err => console.log(err))

// getEmpleado(id)
// .then(empleado => {
//     getSalario(id)
//     .then(salario => console.log(`El empleado ${empleado.nombre} tiene un salario de ${salario.salario}`))
//     .catch(err => console.log(err))
// })
//Promesas en cadena
let nombre;
getEmpleado(id)
.then(empleado => {
    nombre = empleado;
    return getSalario(id)
})
.then(salario => console.log('el empleado:', nombre, 'tiene un salario de:', salario))
.catch(err => console.log(err))

