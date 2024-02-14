
//let lista = new Array(11).fill(undefined);
//for(let i in lista){
//    console.group(`Table del ${i}`);
//    for(let x in lista){
//        console.log(`${i} X ${x} = ${Number(i)*Number(x)}`);
//    }
//    console.groupEnd("");
//}
//

// let list = new Array(10).fill(undefined);

// for (let i = 0; i < list.length; i++) {
//     console.group(`Table del ${i}`);
//     for (let x = 0; x < list.length; x++) {
//         console.log(`${i} X ${x+1} = ${i*(x+1)}`);
//     }
//     console.groupEnd("");
// }

//let data = prompt ("ingrese el nombre")
//console.log(Data);
//
//parseInt()
//parseFloat()
//
//Number()
//
//let bandera = confirm("estoy entendiendo java script")
//console.log(bandera);
//

let lista = ["papa" , "yuca" , "cabolla" , "arroz"]
while(confirm("¿ deseas selecccionar un producto?")) {
    let plantilla = "";
    for (let i in lista){
    plantilla += `${Number(i)+1}. ${lista[i]}\n`;

}
    let opc = Number(prompt(`selecccione un producto de la lista:\n${plantilla}`));
    alert(`el producto que se selecciono es: ${lista[opc-1]}`)
}