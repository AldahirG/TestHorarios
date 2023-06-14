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

const getInfoUsuario = async(id) =>{
    // return 'Hola mundo'
    const empleado = await getEmpleado(id)
    const salario = await getSalario(id)
    return `el empleado ${empleado} tiene un salario de ${salario}`
}
getInfoUsuario()
.then(msg => console.log(msg))
.catch(err => console.log(err))


const id = 1