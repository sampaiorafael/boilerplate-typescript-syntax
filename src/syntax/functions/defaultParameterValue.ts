/**
 * Parametros com default values são "opcionais"
 * Parametros explicitamente declarados como opcionais não podem possuir default values
 */
function fooFunction (foobar: string, foo: string = 'bar', bar?: number) {

}

fooFunction('foobar parameter')
fooFunction('foobar param', 'foo param')
fooFunction('foobar param', 'foo param', 3)