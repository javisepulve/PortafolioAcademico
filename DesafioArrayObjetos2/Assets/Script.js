var radiologia = [{
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA',
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE',
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA',
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA',
    },
];

var traumatologia = [{
        hora: '8:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA',
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA',
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE',
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE',
    },
];

var dental = [{
        hora: '8:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA',
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA',
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA',
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE',
    },
];

traumatologia.push({
    hora: '09:00',
    especialista: 'RENÉ POBLETE',
    paciente: 'ANA GELLONA',
    rut: '13123329-7',
    prevision: 'ISAPRE'
}, {
    hora: '09:30',
    especialista: 'MARÍA SOLAR',
    paciente: 'RAMIRO ANDRADE',
    rut: '12221451-K',
    prevision: 'FONASA'
}, {
    hora: '10:00',
    especialista: 'RAÚL LOYOLA',
    paciente: 'CARMEN ISLA',
    rut: '10112348-3',
    prevision: 'ISAPRE'
}, {
    hora: '10:30',
    especialista: 'ANTONIO LARENAS',
    paciente: 'PABLO LOAYZA',
    rut: '13453234-1',
    prevision: 'ISAPRE'
}, {
    hora: '12:00',
    especialista: 'MATIAS ARAVENA',
    paciente: 'SUSANA POBLETE',
    rut: '14345656-6',
    prevision: 'FONASA'
}, )

radiologia.shift();
radiologia.pop();



function atteFirstlast(specialty) {
    return specialty.length - 1;
};
let ultimoRad = atteFirstlast(radiologia);
let atencionRadio = `Primera Atencion: ${radiologia[0].paciente}, Previsión: ${radiologia[0].prevision} 
<br> Ultima Atencion: ${radiologia[ultimoRad].paciente}, Previsión: ${radiologia[ultimoRad].prevision}`;
document.getElementById('attention1').innerHTML = atencionRadio;
let ultimoTra = atteFirstlast(traumatologia);
let atencionTrauma = `Primera Atencion: ${traumatologia[0].paciente}, Previsión: ${traumatologia[0].prevision} 
<br> Ultima Atencion: ${traumatologia[ultimoTra].paciente}, Previsión: ${traumatologia[ultimoTra].prevision}`;
document.getElementById('attention2').innerHTML = atencionTrauma;
let ultimoDent = atteFirstlast(dental);
let atencionDent = `Primera Atencion: ${dental[0].paciente}, Previsión: ${dental[0].prevision} 
<br> Ultima Atencion: ${dental[ultimoDent].paciente}, Previsión: ${dental[ultimoDent].prevision}`;
document.getElementById('attention3').innerHTML = atencionDent;

let table1 = "<tr><th>Hora </th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (let i = 0; i < radiologia.length; i++) {
    table1 +=
        `<tr>
            <td>${radiologia[i].hora} - </td>
            <td>${radiologia[i].especialista}  - </td>
            <td>${radiologia[i].paciente} - </td>
            <td>${radiologia[i].rut} - </td>
            <td>${radiologia[i].prevision} - </td>
        </tr>`

}
document.getElementById('tabledoctors1').innerHTML = table1;
let table2 = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (let i = 0; i < traumatologia.length; i++) {
    table2 +=
        `<tr>
            <td>${traumatologia[i].hora} - </td>
            <td>${traumatologia[i].especialista} - </td>
            <td>${traumatologia[i].paciente} - </td>
            <td>${traumatologia[i].rut} - </td>
            <td>${traumatologia[i].prevision} - </td>
        </tr>`
}
document.getElementById('tabledoctors2').innerHTML = table2;
let table3 = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (let i = 0; i < dental.length; i++) {
    table3 +=
        `<tr>
            <td>${dental[i].hora} - </td>
            <td>${dental[i].especialista} - </td>
            <td>${dental[i].paciente} - </td>
            <td>${dental[i].rut} - </td>
            <td>${dental[i].prevision} - </td>
        </tr>`



}
document.getElementById('tabledoctor3').innerHTML = table3;

let paciradio = "<tr><th></th></tr>";
for (let i = 0; i < radiologia.length; i++) {
    paciradio +=
        `<tr>
            <td>${radiologia[i].paciente}  <br> </td>
        </tr>`
        //console.log(paciradio)
}
document.getElementById('paciradio').innerHTML = paciradio;

let pacitrauma = "<tr><th></th></tr>";
for (let i = 0; i < traumatologia.length; i++) {
    pacitrauma +=
        `<tr>
            <td>${traumatologia[i].paciente}  <br> </td>
        </tr>`
        //console.log(pacitrauma)
}
document.getElementById('pacitrauma').innerHTML = pacitrauma;

let pacident = "<tr><th></th></tr>";
for (let i = 0; i < dental.length; i++) {
    pacident +=
        `<tr>
            <td>${dental[i].paciente}  <br> </td>
        </tr>`
        //console.log(pacident)
}
document.getElementById('pacident').innerHTML = pacident;
for (let posicion in dental) {

    if (dental[posicion]["prevision"] == 'ISAPRE') {
        let dentIsapre = `Paciente: ${dental[posicion].paciente}, Previsión: ${dental[posicion].prevision} 
        <br> Paciente: ${dental[0].paciente}, Previsión: ${dental[0].prevision}
        <br> Paciente: ${dental[1].paciente}, Previsión: ${dental[1].prevision}`;
        document.getElementById('dentIsapre').innerHTML = dentIsapre;
        //console.log(dentIsapre)
    }
}
for (let posiciones in traumatologia) {

    if (traumatologia[posiciones]["prevision"] == 'FONASA') {
        let fonasaTrauma = `Paciente: ${traumatologia[posiciones].paciente}, Previsión: ${traumatologia[posiciones].prevision},
        <br> Paciente: ${traumatologia[0].paciente}, Previsión: ${traumatologia[0].prevision},
        <br> Paciente: ${traumatologia[8].paciente}, Previsión: ${traumatologia[8].prevision},
        <br> Paciente: ${traumatologia[4].paciente}, Previsión: ${traumatologia[4].prevision}`;
        document.getElementById('fonasaTrauma').innerHTML = fonasaTrauma;
        console.log(fonasaTrauma)
    }
}