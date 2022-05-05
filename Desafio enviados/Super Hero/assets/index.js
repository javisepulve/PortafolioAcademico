$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        let valueInput = parseInt($("#heroInput").val());
        $.ajax({
            type: "GET",
            url: "https://superheroapi.com/api.php/10222869999070857/" + valueInput,
            dataType: "json",
            success: function(data) {
                if (valueInput > 732) {
                    alert("Error, Favor ingrese número entre 1 y 732")
                } else {
                    let image = data.image.url
                    let Name = data.name
                    let connections = data.connections["group-affiliation"]
                    let published = data.biography.publisher
                    let occupation = data.work.occupation
                    let publication = data.biography["first-appearance"]
                    let Feet = data.appearance.height["0"]
                    let Meters = data.appearance.height["1"]
                    let Pounds = data.appearance.weight["0"]
                    let Kilos = data.appearance.weight["1"]
                    let aliases = data.biography.aliases
                    if (occupation == "-") {
                        occupation = "Sin ocupación conocida";
                    }
                    if (connections == "-") {
                        connections = "Sin conexiones conocidas";
                    }
                    if (publication == "-") {
                        publication = "No se tiene registro";
                        alert('Este Heroe puede que le falten algunos datos de Estadisticas')
                    }
                    $("#heroInfo").html(`
                    <div>
                    <h1 class="titulo ms-5 mb-3">SuperHero Encontrado</h1>  
                    <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${image}" class="img-fluid rounded-start ms-3" style="margin-top: 40%"alt="SuperHero ${Name}">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title fw-bold">${Name}</h3>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Conexiones:</p> ${connections}</li>
                            <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Publicado por:</p> ${published}</li>
                            <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Ocupación:</p> ${occupation}</li>
                            <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Primera Aparición:</p> ${published}</li>
                            <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Altura:</p> ${Feet} - ${Meters}</li>
                            <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Peso:</p> ${Pounds} - ${Kilos}</li>
                            <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Alianzas:</p> ${aliases}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                `);
                    let statistics = [];
                    for (let key in data.powerstats) {
                        if (data.powerstats[key] == null) {
                            $("#heroStats")
                        } else {
                            statistics.push({ y: data.powerstats[key], name: key })
                            var chart = new CanvasJS.Chart("heroStats", {
                                exportEnabled: true,
                                animationEnabled: true,
                                title: {
                                    text: `Estadística Habilidad Para: 
                                    ${Name}`
                                },
                                legend: {
                                    cursor: "pointer",
                                    itemclick: explodePie
                                },
                                data: [{
                                    type: "pie",
                                    showInLegend: true,
                                    toolTipContent: "{name}: <strong>{y} Pts</strong>",
                                    indexLabel: "{name} - {y} Pts",
                                    dataPoints: statistics
                                }]
                            });
                            chart.render();
                        }

                        function explodePie(e) {
                            if (typeof(e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                                e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
                            } else {
                                e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
                            }
                            e.chart.render();
                        }
                    }
                }
            }
        })
    })
})