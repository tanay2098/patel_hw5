class Square{
    constructor(side){
        this.side=side;
    }

    Perimeter(){
        return 4*this.side;
    }

    Area(){
        return this.side*this.side;
    }

    Diagonal(){
        return Math.sqrt(2*this.side*this.side);
    }

    describe(){
        return `Square with side ${this.side} has perimeter of ${this.Perimeter()}, area of ${this.Area()}, and diagonal of ${this.Diagonal()}`;

    }
};

const sqr1=new Square(2);
console.log(sqr1.describe());

const sqr2=new Square(4);
console.log(sqr2.describe());

const sqr3=new Square(6);
console.log(sqr3.describe());