const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Estado de la tarea'
    }
}

//Esta libreria permite una facilidad al desarrollar comandos para llamar nuestras aplicaciones
const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', opts)
    .command('actualizar', 'Actualizar el estado completado de una tarea', opts)
    .command('borrar', 'Borra una tarea existente', opts)
    .help()
    .argv;


module.exports = {
    argv
}