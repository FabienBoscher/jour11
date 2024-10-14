async function checkFuel(fuel){

    return await new Promise((resolve, reject) => {
    
        if (fuel>=9){
        resolve("Ready to launch")
        }
        else {
        reject("Please refill fuel")
        }

})

}

checkFuel(15).then((resultat)=>{
    console.log(resultat)
}).catch((resultat)=>{
    console.log(resultat)
})

