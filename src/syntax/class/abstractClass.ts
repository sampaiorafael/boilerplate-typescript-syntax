abstract class Shape {

    public abstract shapeName: string

    public abstract calcArea (): number

    protected fullInfo (): string {
        return `Shape: ${this.shapeName}, area: ${this.calcArea()}`
    }

}

class Square extends Shape {

    public shapeName: string = 'square'
    // public shapeName = 'square'
    // public shapeName: string
    // shapeName = 'square'
    // shapeName: string
    
    private squareSize: number

    public calcArea (): number {
        return this.squareSize*2
    }

    public get SquareInfo(): string {
        return this.fullInfo()
    }

}
