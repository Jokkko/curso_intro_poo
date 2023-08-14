import { Auto } from './Auto'
import { Motor } from './Motor'
import { Rueda } from './Rueda'

const m1 = new Motor(1000)
const arrayRueda = [new Rueda(32),new Rueda(29), new Rueda(12), new Rueda(30)]
console.log('Hola mundo desde TypeScript TS')

const ferrariRojo = new Auto('Ferrari',m1,arrayRueda)
console.log(ferrariRojo)

const lamborghiniAzul = new Auto('Lamborghini',m1,arrayRueda)
console.log(lamborghiniAzul)

lamborghiniAzul.acelerar();

console.log(lamborghiniAzul.getModelo())
lamborghiniAzul.setModelo('Fake Ferrari')
console.log(lamborghiniAzul.getModelo())