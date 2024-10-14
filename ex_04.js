async function initializeMachine(machineName, timeRequired) {
    let seconds = timeRequired + "000"
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (machineName + " initialized")
        }, seconds);
    })
}

initializeMachine("Computer", 3).then(value=>{console.log(value)}) 