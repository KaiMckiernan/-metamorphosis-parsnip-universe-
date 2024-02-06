//Were gonna take a string, and randomly input "Metamorphosis", "Parsnip" and "Universe" into it

console.log(produceMPU(30,0.8));

function produceMPU(length,sparsity) {
    //Length is how long the paragraph is
    //Sparsity is based on how many metamorphosis parsnip universes there are its a numhber under 1. 
    let text = "";
    let counter = 0;
    let straycount = 0;
    for(let i = 1; i < length; i++) {
        let random = Math.ceil(Math.random()*3);
        if(Math.random() < (sparsity)) {
            text = text.concat(" Metamorphosis Parsnip Universe");
            counter = 0;
            i += 2;
        } else{
            switch (random) {
                case 1:
                    text = text.concat(" Metamorphosis");
                    counter = 1;
                    straycount++;
                    break;
                case 2: 
                    text = text.concat(" Parsnip");
                    counter = (counter === 1) ? 2 : 0;
                    straycount++;
                    break;
                case 3:
                    text = text.concat(" Universe");
                    counter = (counter === 2) ? 3 : 0;
                    straycount++;
                    break;
                }
        }
            if(counter === 3) {straycount -=3}
    }
    return [text,straycount]
}