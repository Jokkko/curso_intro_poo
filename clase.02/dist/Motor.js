"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
class Motor {
    constructor(cilin) {
        this.cilindrada = cilin;
    }
    getCilindrada() {
        console.log(`La cilindrada de el motor es de ${this.cilindrada}`);
    }
}
exports.Motor = Motor;
