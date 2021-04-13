/**
 * Number Enums
 * Possuem por padrão valores auto-increment a partir do antecessor
 */
enum weekDays {
    Sunday, // 0
    Monday, // 1
    Tuesday, // 2
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

/**
 * Podem ser utilizados como tipos na declaração de parâmetros e nas chamadas de funções
 */
function payDay (dayoFWeek: weekDays): void {}

payDay(weekDays.Monday) 
payDay(0)

/**
 * Enums podem ser declarados valores especificos e ainda possuir auto-increment
 */
enum StatusCodes {
    Success = 200,
    BadRequest = 400,
    Unauthorized, // 401
    PaymentRequired, // 402
    Forbidden,
    NotFound,
}

/**
 * Enums podem ter seus valores acessados
 */
const success = StatusCodes.Success;
const successCode = StatusCodes['Success'];
const badRequest = StatusCodes[400];

/**
 * String Enums
 * Todo membro precisa ter declaração de valor pode não haver auto-increment de strings
 */
enum CountryCapital {
    Brasil = 'Brasilia',
    USA = 'Washington',
    Peru = 'Lima' 
}

/**
 * Heterogeneous Enums
 * Aceitam strings e numbers na atribuição de valores
 */
enum weekDays2 {
    Sunday = 'Sunday',
    Monday = 1
}

/**
 * Acessando valores
 */
weekDays2['Sunday']
weekDays2['Monday']