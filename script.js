//menu
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //retirar menu
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//menu responsivo
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//contato
const btn = document.getElementById('button');

document.getElementById('form')
    
    .addEventListener('submit', function(event) {
        event.preventDefault();
    btn.value = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_cs6uocn';
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Enviar Mensagem';
        alert('Mensagem enviada com sucesso');
    }, (err) => {
        btn.value = 'Enviar Mensagem';
        alert(JSON.stringify(err));
    });
});

// Mascara de tel
function mascara(i,t){
    var v = i.value;
    
    if(t === "tel"){
        if (v.length === 1) i.value = "(" + i.value;
        if (v.length === 3) i.value += ") ";
        if(v[5] == 9){
            i.setAttribute("maxlength", "15");
            if (v.length === 10) i.value += "-";
        }else{
            i.setAttribute("maxlength", "14");
            if (v.length === 9) i.value += "-";
        }
        if(isNaN(v[v.length-1])){
            i.value = v.substring(0, v.length-1);
            return;
        }
    }
}