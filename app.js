//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.d, argv.c);
        console.log(`Actualizar tarea ${actualizado}`);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.d);
        console.log(`Borrar tarea ${borrado}`);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log(colors.green('==============Por Hacer=============='));
            console.log(tarea.descripcion);
            console.log(`Estado ${tarea.completado? colors.blue('Completada'): colors.red('Pendiente')}`);
            console.log(colors.green('====================================='));
        }
        break;
    default:
        console.log('Comando no reconocido');
        break;
}