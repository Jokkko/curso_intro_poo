"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ciruclo = void 0;
class Ciruclo {
    constructor(radio) {
        this.radio = radio;
    }
    setRadio(radio) {
        let error = 0;
        if (radio > 0) {
            this.radio = radio;
            error = 1;
        }
        return error;
    }
    getRadio() {
        return this.radio;
    }
}
exports.Ciruclo = Ciruclo;
