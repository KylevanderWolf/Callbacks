
//Stap 1
let huiswerkMaken = (vak, callback) => {
    setTimeout(() => {
        console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)
    }, 200);
}


//Stap 2 
let klaarMetHuiswerk = () => {
    setTimeout(() => {
        console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
    }, 201);
}

//Stap 3
huiswerkMaken("wiskunde", klaarMetHuiswerk());

