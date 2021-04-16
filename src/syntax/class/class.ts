class Person {

    public name: string = 'Generic'
    protected lastName: string
    private birth: number = 1989
    private country: string
    readonly world: string = 'Earth'
    public readonly age : number = 20
    private readonly adress: string = 'anywhere'

    /**
     * Método com inicialização automática quando a classe é instanciada
     * Parametros do constructor declarados com public, private... se tornam propriedades da classe
     */
    constructor (lastName: string, public readonly motherName: string, private zipCode: number) {
        this.lastName = lastName
    }

    /**
     * Getters são usados para busca valores sem acessar diretamente as variaveis
     */
    public get getFullName (): string {
        return `${this.name} ${this.lastName}`
    }

    /**
     * Setters são usados para atribuir valores sem acessar diretamente as variaveis
     * Setters não podem ter declaração de retorno
     */
    public set setLastName (lastName: string) {
        this.lastName = lastName
    }

    /** 
     * Como retornar um novo array sem acessar diretamente uma array
     * A array enviada entraria dentro dos paraenteses de concat
    */
    public returnNewArray (): Array<string> {
        return [].concat()
    }

    /**
     * Método comum
     */
    public fullInfo (): string {
        return `Name: ${this.name}, age: ${this.age}, birth: ${this.birth}, addres: ${this.adress}`
    }

    /**
     * Método inserido em uma várivel
     * Pode ser usado caso haja necessidade de tipar o método/variável para inferir parametros
     * Ex: "RequestHandler" é um tipo da lib Express e possui como param somente: Req, Res, Next
     */
    private genericMethod: any = (): string => {
        return 'foo'
    }

}