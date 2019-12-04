export class Cart{

    constructor(){
        this.items=[];
    }

    get total() {
        var sum = 0;
        for (var item of this.items){
            sum +=item.totalPrice;
        }
        return sum
    }


}