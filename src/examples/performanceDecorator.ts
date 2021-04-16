export function performanceDecorator (seconds: boolean = false) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value 

        descriptor.value = function (...args: any[]) {

            const t1 = performance.now()
            const originalObjectReturn = originalMethod.apply(this, args)
            const t2 = performance.now()

            const performanceTime = t2 - t1

            return originalObjectReturn
        }

        return descriptor
        
    }

}