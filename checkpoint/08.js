const { LinkedList } = require('../DS');
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
// 8️⃣ ** EJERCICIO 8 LINKEDLIST** - tacharLista() 8️⃣ 
// 
// Llegó la hora de revisar el catálogo de ropa disponible! tendremos que tachar las que hayan se hayan agotado
// el stock
// Agregar al prototype de LinkedList el método 📄 tacharLista() 📄 el cuál recibirá por parámetros un array de strings,
// Tendrás que retornar una nueva lista en base a las prendas que hay en el array.
// Es decir, tendrás que agregar a la nueva lista los elementos que NO coincidan en la lista actual con el array.
//
// EJEMPLOS:
// Dada la siguiente lista de strings:
// ('Pantalon') ➡ ('Zapatos') ➡ ('Camisa') ➡ ('Calcetines') ➡ ('Gafas') ➡ ('Sweater') ➡
//
// Y dado el siguiente array por parámetros: ['Gafas', 'Zapatos']
// lista.tachar(array): Devuelve ➡
// ('Pantalon') ➡ ('Camisa') ➡ ('Calcetines') ➡ ('Sweater') ➡
//
// REQUISITOS:
// 🟢 Retornar una NUEVA LinkedList en base a los elementos del arreglo recibido por parámetros.
// 🟢 Si el arreglo viene vacío retornar la LinkedList COMPLETA.
// Tip: Tanto las LinkedList como los arreglos, contendrán siempre strings.

LinkedList.prototype.tacharLista = function(array) {
    // Tu código aquí:
    if (array.length === 0) return this;
    for (let i = 0; i < array.length; i++) {
        let current = this.head;
        //lista vacia
        if (!current) return this;
        //si la lista tiene un solo nodo
        if (!current.next) {
            if (current.value === array[i]) {
                this.head = null;
            }
        }
        //se busca sobre el primer nodo
        if (current.next) {
            if (current.value === array[i]) {
                this.head = current.next;
            }
        }
        //lista de un nodo o mas
        while (current.next) {
            if (current.next.value === array[i]) {
                if (current.next.next) {
                    current.next = current.next.next;
                } else {
                    current.next = null;
                }
            }
            current = current.next;
        }
    }
    return this;
};


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
    LinkedList
};