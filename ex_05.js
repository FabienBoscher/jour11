var seed = 0;

function getID() {
    return new Promise(resolve => {
        setTimeout(() => {
            var id = Math.sin(seed++) * 10000;
            id = parseInt(id < 0 ? -id : id);
            resolve(id);
        }, 500);
    });
}

// Do not modify what's above, write your code below
// Don't forget to re-assign seed !

async function assignID(machineName, newSeed) {
    return await new Promise((resolve, reject) => {
        seed=newSeed
        resolve ( getID().then((id) =>{
            return `${machineName} : ${id}`;
        }))
        
    })
}


assignID ("Oxygen filter : ", 1).then(value=>{
    console.log(value)}) 