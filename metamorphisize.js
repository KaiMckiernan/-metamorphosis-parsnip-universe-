//Were gonna take a string, and randomly input "Metamorphosis", "Parsnip" and "Universe" into it

console.log(produceMPU(1000,0.5));

function produceMPU(length,sparsity) {
    //Length is how long the paragraph is
    //Sparsity is based on how many metamorphosis parsnip universes there are its a number under 1. 
    let text = "";
    let counter = 0;
    let mpu = 0;
    for(let i = 0; i < length; i++) {
        let random = Math.ceil(Math.random()*3);
        if(Math.random() < (sparsity)) {
            text = text.concat(" Metamorphosis Parsnip Universe");
            i += 2;
            mpu++;
        } else{
            switch (random) {
                case 1:
                    text = text.concat(" Metamorphosis");
                    counter = 1;
                    break;
                case 2: 
                    text = text.concat(" Parsnip");
                    counter = (counter === 1) ? 2 : 0;
                    break;
                case 3:
                    text = text.concat(" Universe");
                    counter = (counter === 2) ? 3 : 0;
                    break;
                }
        }
            if(counter === 3) {mpu++}
    }
    return [text,mpu];

}