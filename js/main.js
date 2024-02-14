
let lista = new Array(11).fill(undefined);
for(let i in lista){
    console.group(`Table del ${i}`);
    for(let x in lista){
        console.log(`${i} X ${x} = ${Number(i)*Number(x)}`);
    }
    console.groupEnd("");
}


// let list = new Array(10).fill(undefined);

// for (let i = 0; i < list.length; i++) {
//     console.group(`Table del ${i}`);
//     for (let x = 0; x < list.length; x++) {
//         console.log(`${i} X ${x+1} = ${i*(x+1)}`);
//     }
//     console.groupEnd("");
// }


