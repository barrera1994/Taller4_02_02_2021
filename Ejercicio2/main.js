let producto = ["Bonais", "Palito de helado de agua", "Palito de helado de crema", "Bombón helado con arequipe", "Bombón helado con chispas de chocolate", "Bombón helado con fresas","Medio litro de helado"];
let valor = [400,1000,2200,1500,2500,2800,2000];

let opc = [];

for (let i = 0; i < 3; i++) {
    let nombre= prompt("Ingrese su nombre: ");
    let dinero= parseInt(prompt("Ingrese su dinero: "));
    let msg="Seleccione su helado : \n";
    let pos=0;
    for (let j = 0; j < producto.length; j++) {
        if(valor[j]<=dinero){
            opc[pos] = {producto : producto[j], valor : valor[j]};
            msg+=`${pos+1}. ${producto[j]} valor: ${valor[j]} \n`;
            pos++;
        }
    }
    let seleccion = parseInt(prompt(msg));
    let vueltos=dinero-opc[seleccion-1].valor;
    let helado=opc[seleccion-1].producto;
    console.log(`los vueltos de ${nombre} son: ${vueltos} y pidio el helado: ${helado}`);
    opc = [];
}
