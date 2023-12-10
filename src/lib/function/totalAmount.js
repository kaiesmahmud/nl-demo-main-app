export const getTotalAmount = (arr) =>{
    let total = 0 ; 
    arr.forEach(i => {
        total += parseFloat(i.p_price)
    });
    return total ;
}