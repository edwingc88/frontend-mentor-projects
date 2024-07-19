/* import info from './data.json' assert { type: 'json' };
console.log('console: ',info) */

const colores=['#ff1493','#ffa500','#20b2aa','#0000ff']

function cargarNotas() {
    fetch('data.json')
        .then(response => response.json())
        .then(datos => {

            let tabla = document.getElementById('info')
            let tablaHTML = ''
            datos.forEach((data,index) => {
              console.log(index)
                tablaHTML += `
                 <div style="background:${colores[index]+10}">
                    <p style="color:${colores[index]}"><img src="${data.icon}">${data.category}</p>
                    <div><p><span>${data.score}</span> / 100</p></div>
                 </div>`
            })
            console.log(tabla)
            tabla.innerHTML = tablaHTML 
     
        })
}


cargarNotas()