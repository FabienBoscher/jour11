async function promiseMe(promise) {

    const resultat = await new Promise((resolve, reject) => {
        resolve("I promise you to " + promise)
    })
    return resultat
}

promiseMe("fly to the moon").then((resultat)=>{
    console.log(resultat)
})
