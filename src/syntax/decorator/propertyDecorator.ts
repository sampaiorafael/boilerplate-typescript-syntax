function showProperty (target: any, key: string) {
    console.log(target, key);
}
  
class GenericClass1 {

    @showProperty
    public property: number;

    constructor(property: number) {
        this.property = property;
    }
}

// Out: {} 'property'