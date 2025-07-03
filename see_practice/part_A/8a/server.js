function vowelCounter(input){
    const vowel = ['a','e','i','o','u'];
    const count = {a:0,e:0,o:0,i:0,u:0};

    let str = input.toLowerCase();
    for(let char of str){
        if(vowel.includes(char)){
            count[char]++;
        }
    }

    console.log(
        `vowel count: a-${count.a},e-${count.e},o-${count.o},i-${count.i},u-${count.u}`
    );
}

vowelCounter("Le Tour de France");