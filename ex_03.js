function checkStatus(machine){
    machine.then((resultat)=>{
        console.log(resultat)
        console.log("Checking status over")
    })
}


async function promiseMe(promise) {
    const resultat = await new Promise((resolve, reject) => {
        resolve("I promise you to " + promise)
    })
    return resultat
}

checkStatus(promiseMe("fly to the moon"))