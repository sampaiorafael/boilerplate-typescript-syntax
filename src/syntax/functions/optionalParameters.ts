/**
 * Parametros opcionais devem ser sempre os últimos parâmetros da função.
 * Parametros não opcionais não podem vir seguidos de parâmetros obrigatórios
 */
function genericFunction (foo: string, bar?: number) {

}

genericFunction('foo')
genericFunction('bar', 3)

/**
 * Métodos e construtores também podem receber parâmetros opcionais
 */
 class genericClass {

    constructor (foo: string, bar?: number) {

    }
}

new genericClass('foo')
new genericClass('foo', 3)




