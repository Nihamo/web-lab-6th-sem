function vowelCount(input){
    const vowels = ['a','e','i','o','u'];
    const count = {a:0,e:0,i:0,o:0,u:0};

    const str = input.toLowerCase();

    for(let char of str){
        if(vowels.includes(char)){
            count[char]++;
        }
    }

    console.log(`occurances of a,e,i,o,u = ${count.a}, ${count.e}, ${count.i}, ${count.o}, ${count.u}`);
}

vowelCount("Le Tour de France");