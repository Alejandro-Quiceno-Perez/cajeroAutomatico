class Billete 
{
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}


var caja = [];
var entregado = [];
// Aca estamos enviado a nuestro array los valores gracias al metodo
// push 
caja.push( new Billete(50, 3));
caja.push( new Billete(20, 3));
caja.push( new Billete(10, 2));
var dinero = 210;
var div = 0;
var papeles = 0;
