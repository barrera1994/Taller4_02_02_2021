let huevoFrito= parseInt(prompt("Quiere huevo frito \n 1: Si \n 2: No"));

if(huevoFrito==1){
    console.log(`Huevo se hace frito`);
}else if(huevoFrito==2){
    console.log(`Huevo se hace hervido`);
}else{
    alert(`Opción invalida`);
}

let Sal= parseInt(prompt("Quiere Sal \n 1: Si \n 2: No"));

if(Sal==1){
    console.log(`Le hecho sal y luego lo sirvo en el plato`);
}else if(Sal==2){
    console.log(`No lo sirvo en el plato`);
}else{
    alert(`Opción invalida`);
}