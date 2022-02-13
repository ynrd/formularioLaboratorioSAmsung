
function mostrarValue() {
    let value = document.getElementById("tickmarks").value;
    alert ("Has valorado con " + value + " puntos");
}

function mostrarCuenta(){
    let pais1 = document.getElementById("pais").value;
    let iban1 = document.getElementById("iban").value;
    let entidad1 = document.getElementById("entity").value;
    let sucursal1 = document.getElementById("sucursal").value;
    let dc1 = document.getElementById("dc").value;
    let cuenta1= document.getElementById("bankAccount").value;
    let cuenta = pais1 + iban1 + entidad1 + sucursal1 + dc1 + cuenta1;
    alert ("Le informamos que su cuenta bancaria es: " + cuenta);
}

function mostrarFecha(){
    const fecha = document.getElementById("askDate").value;
    const dias = [ "domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sábado"];
    const numeroDia = new Date(fecha).getDay();
    const nombreDia = dias[numeroDia];
    alert("La fecha seleccionada en el elemento de fecha es un " + nombreDia);
}

const conjuntoProvincias = new Map ([
    [01,"Álava",],
    [02,"Albacete"],
    [03,"Alicante"],
    [04,"Almería"],
    [05,"Ávila"],
    [06,"Badajoz"],
    [07,"Islas Baleares"],
    [08, "Barcelona"],
    [09,"Burgos"],
    [10,"Cáceres"],
    [11,"Cádiz"],
    [12,"Castellón"],
    [13,"Ciudad Real"],
    [14,"Córdoba"],
    [15,"La Coruña"],
    [16,"Cuenca"],
    [17,"Gerona"],
    [18,"Granada"],
    [19,"Guadalajara"],
    [20,"Guipúzcua"],
    [21,"Huelva"],
    [22,"Huesca"],
    [23,"Jaén"],
    [24,"León"],
    [25,"Lérida"],
    [26,"La Rioja"],
    [27,"Lugo"],
    [28,"Madrid"],
    [29,"Málaga"],
    [30,"Murcia"],
    [31,"Navarra"],
    [32,"Orense"],
    [33,"Asturias"],
    [34,"Palencia"],
    [35,"Las Palmas"],
    [36,"Pontevedra"],
    [37,"Salamanca"],
    [38,"Santa Cruzz de Tenerife"],
    [39,"Cantabria"],
    [40,"Segovia"],
    [41,"Sevilla"],
    [42,"Soria"],
    [43,"Tarragona"],
    [44,"Teruel"],
    [45,"Toledo"],
    [46,"Valencia"],
    [47,"Valladolid"],
    [48,"Vizcaya"],
    [49,"Zamora"],
    [50,"Zaragoza"],
    [51,"Ceuta"],
    [52,"Melilla"]
]);

function checkProvincia(){
    
    let claveProvincia = parseInt(document.getElementById("codigoPostal").value);
    if(conjuntoProvincias.has(claveProvincia)){
        document.write(`El código postal introducido pertenece a la provincia de ${conjuntoProvincias.get(claveProvincia)}`);
    }
    else{
        document.write("El código introducido no pertenece a ninguna provincia");
    }
}