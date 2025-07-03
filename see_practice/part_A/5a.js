function Pluralize(word,num){
    const irreg={"child":"children","sheep":"sheep","goose":"geese","person":"people"};

    let pnoun;

    if(num ==1){
        pnoun = word;
    }else if(irreg[word]){
        pnoun = irreg[word];
    }else{
        pnoun = word+"s";
    }

    return num + " "+pnoun;
}

console.log(Pluralize("child",1)); 
console.log(Pluralize("girl",3));
