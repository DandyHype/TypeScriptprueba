"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new camiseta_1.Camiseta("Rojo", "Sudadera", "Adidas");
    };
    return Main;
}());
new Main();
