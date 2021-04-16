
function propertyOnChange (target: any, key: string) {
    
    const newKey = `_${key}`;
    
    // Adciona um getter e um setter a propriedade 'key' do alvo do decorator
    Object.defineProperty(target, key, {
        
        set (newVal) {
            //console.log(`Set: ${key} => ${newVal}`);
            this[newKey] = newVal;
        },
    
        get () {
            //console.log(` Get: ${key} => ${this[newKey]}`);
            return this[newKey];
        },
        
        enumerable: true,
        configurable: true

    });

}
  
class Task {
  
    @propertyOnChange
    public id: number;
  
    @propertyOnChange
    public title: string;
  
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

}
  
const task = new Task(1, 'Write more articles');

// Out: Set: id => 1
// Out: Set: title => Write more articles

console.log(task.id, task.title);
// Out: Get: id => 1 
// Out: Get: title => Write more articles
// Out: 1 'Write more articles'