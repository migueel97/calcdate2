document.getElementById("enviar1").addEventListener("click", calcWT);
document.getElementById("enviar2").addEventListener("click", calcWY);
document.getElementById("enviar3").addEventListener("click", calcNT);
document.getElementById("enviar4").addEventListener("click", calcNY);

document.getElementById("calcWT").addEventListener("click", function(){
    document.getElementById("uno").style.display = 'block';
    document.getElementById("dos").style.display = 'none';
    document.getElementById("tres").style.display = 'none';
    document.getElementById("cuatro").style.display = 'none';
});

document.getElementById("calcWY").addEventListener("click", function(){
    document.getElementById("dos").style.display = "block";
    document.getElementById("uno").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
});

document.getElementById("calcNT").addEventListener("click", function(){
    document.getElementById("tres").style.display = "block";
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
});

document.getElementById("calcNY").addEventListener("click", function(){
    document.getElementById("cuatro").style.display = "block";
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
});

document.getElementById("ventana").addEventListener("click", function(){
    window.open("index2.html", "index", "width=500px height=400px");
})

function calcWT(){
    let diaInicio, dias, diaFinal;

    diaInicio = document.getElementById("diaInicio1").value;
    dias = document.getElementById("dias1").value;
    diaInicio = diaInicio.split("-");
    diaInicio = new Date(diaInicio[0], diaInicio[1]-1, diaInicio[2]);

    document.getElementById("diaFinal1").value = calcWorkingDate(diaInicio, dias);
}

function calcWY(){
    let diaInicio, diaFinal;

    diaInicio = document.getElementById("diaInicio2").value;
    diaFinal = document.getElementById("diaFinal2").value;

    diaInicio = diaInicio.split("-");
    diaInicio = new Date(diaInicio[0], diaInicio[1]-1, diaInicio[2]);

    diaFinal = diaFinal.split("-");
    diaFinal = new Date(diaFinal[0], diaFinal[1]-1, diaFinal[2]);

    document.getElementById("dias2").value = getWorkingDays(diaInicio, diaFinal);
}

function calcNT(){
    let diaInicio, dias, diaFinal;

    diaInicio = document.getElementById("diaInicio3").value;
    dias = document.getElementById("dias3").value;
    diaInicio = diaInicio.split("-");
    diaInicio = new Date(diaInicio[0], diaInicio[1]-1, diaInicio[2]);

    document.getElementById("diaFinal3").value = calcDate(diaInicio, dias);
}

function calcNY(){
    let diaInicio, diaFinal;

    diaInicio = document.getElementById("diaInicio4").value;
    diaFinal = document.getElementById("diaFinal4").value;

    diaInicio = diaInicio.split("-");
    diaInicio = new Date(diaInicio[0], diaInicio[1]-1, diaInicio[2]);

    diaFinal = diaFinal.split("-");
    diaFinal = new Date(diaFinal[0], diaFinal[1]-1, diaFinal[2]);

    document.getElementById("dias4").value = getDays(diaInicio, diaFinal);
}