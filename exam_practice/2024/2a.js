const getMonthName = () =>{
    const month =["jan","feb","march","apr","may","jun","jul","aug","sept","oct","nov","dec"];

    return function(monthInput){
        const parsedno = parseFloat(monthInput);
        if(isNaN(parsedno))return "bad number";
        const monthnum = Math.floor(parsedno);
        if(monthnum < 1 || monthnum > 12) return "bad number";
        return month[monthnum-1];
    };
};
const getmonthname = getMonthName();

console.log(getmonthname(4));
console.log(getmonthname(0));
console.log(getmonthname(7.9));
console.log(getmonthname("abc"));
console.log(getmonthname(13));