export const getTotalAmount = (arr) =>{
    let total = 0 ; 
    let singleProductCost = 0 ;
    arr.forEach(i => {
        singleProductCost = parseInt(i.p_quantity) * parseFloat(i.p_price)
        total += singleProductCost
    });
    return total ;
}

export const productTotalPrice = (price,qty)=>{
    let total =  parseInt(qty) * parseFloat(price)
    return total
}