function carregaDash(){
    var strUser = localStorage.getItem("dashcardUser");
    if (!strUser){
        window.location = "index.html";
    }

    // usuario está conectado... preciso consultar o relatórico consolidado no back end
    var strId = window.location.search;
    console.log(strId);

    var idAgente = strId.substr(4);
    console.log("ID recuperado = "+idAgente);

    fetch("http://localhost:8088/totaisconsolidados?id="+idAgente)
       .then(res => res.json())
       .then(lista => preencheDash(lista));
}

function preencheDash(lista){
    console.log(lista);
    var nomeAgente;
    var volume;
    var sucesso;
    var falha;
    var fraude;

    for (i=0; i<lista.length; i++){
        var ag = lista[i];
        nomeAgente = ag.nomeAgente;
        volume = ag.volume;
        if(ag.status ==0){
            sucesso = ag.numeroOp;
        }
        else if(ag.status == 1){
            falha = ag.numeroOp;
        }
        else{
            fraude = ag.numeroOp;
        }
    }

    document.getElementById("nomeAgente").innerHTML = "<h3>"+nomeAgente+": "+volume+"</h3>";
    //document.getElementById("nomeAgente").innerHTML = "<h3>"+nomeAgente+"</h3>";
    //document.getElementById("volumeAgente").innerHTML = "<h4>Volume Transacional: "+volume+"</h4>";

    document.getElementById("infoSucesso").innerHTML = "<h3>"+sucesso+"</h3>";
    document.getElementById("infoFalha").innerHTML = "<h3>"+falha+"</h3>";
    document.getElementById("infoFraude").innerHTML = "<h3>"+fraude+"</h3>";

    // Montar gráfico... 
    var ctx = document.getElementById('meuGrafico');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Sucesso', 'Falha', 'Fraude'],
            datasets: [{
                label: '# de operacoes',
                data: [sucesso, falha, fraude],
                backgroundColor: [
                    'rgba(0,0,255,0.5)',
                    'rgba(0,120,120,0.5)',
                    'rgba(255,0,0,0.5)'
                ]
           }]
        },
        options : {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


function logout(){
    localStorage.removeItem("dashcardUser");
    window.location = "index.html";

}
