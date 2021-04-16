// Igual ao methodDecorator, porém aplicado diretamente ao setter e getter

function enumerable2 (newValue: boolean) {

    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor): void => {
        propertyDescriptor.enumerable = newValue;
    }
}

class Client2 {

    _name: string = 'George'
    lastName: string = 'McDonald'

    @enumerable2(true)
    get name () {
        return this._name;
    }

    //Remover o comentario da linha 22 vai implicar em um error
    // error TS1207: Decorators cannot be applied to multiple get/set accessors of the same name
    //@enumerable2(true)
    set name (newName: string) {
        this._name = newName;
    }

}
