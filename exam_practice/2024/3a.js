function taxCollector(taxrate) {
    return function(price){
        return price+(price*taxrate);
    }
}
const tax = taxCollector(0.08);
console.log(tax(1000));