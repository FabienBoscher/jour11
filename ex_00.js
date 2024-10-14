async function aaa() {
    const resultat = await new Promise((resolve, reject) => {
        resolve("Hello World")
    })
    return resultat
}

aaa().then((resultat) => {
    console.log(resultat)
})