function enumerable (newValue: boolean) {

    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor): void => {
        propertyDescriptor.enumerable = newValue;
    }
}

class Client {

    name: string = 'George'
    lastName: string = 'McDonald'

    @enumerable(false)
    changePassword (newPassword: string): void {

    }
}

const user = new Client();
for (const key in user) {
    console.log(key);
}

// Out: name, lastName