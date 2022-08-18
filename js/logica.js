//Obtenemos los componentes por id
var textInput = document.getElementById("textoEntrada");
var encriptar = document.getElementById("btnEncriptar");
var desencriptar = document.getElementById("btnDesencriptar");
var copiar = document.getElementById("btnCopiar");
var textArea = document.getElementById("textArea");

//variables replace  donde g = emparejamiento global, i = ignorar mayúsculas
var regexE = /e/gi;
var llaveE = "enter";
var regexEd = /enter/gi;
var llaveEd = "e";

var regexI = /i/gi;
var llaveI = "imes";
var regexId = /imes/gi;
var llaveId = "i";

var regexA = /a/gi;
var llaveA = "ai";
var regexAd = /ai/gi;
var llaveAd = "a";

var regexO = /o/gi;
var llaveO = "ober";
var regexOd = /ober/gi;
var llaveOd = "o";

var regexU = /u/gi;
var llaveU = "ufat";
var regexUd = /ufat/gi;
var llaveUd = "u";

//Valida que el texto ingresado solo contenga letras minusculas sin caracteres 
function validaEntrada(texto) {
    var soloLetras = /^[a-z !ñ]+$/;
    if (texto == "") return false; 
        return soloLetras.test(texto);
}
//Encripta el texto
function encriptaTexto() {
    var texto = textInput.value; //Obtiene el texto
//Valida que el texto ingresado sea valido
    if (validaEntrada(texto)) {
        //Reeemplaza cada letra opr su llave de encriptacion
        var textoCifrado = texto.replace(regexE, llaveE).replace(regexI, llaveI).replace(regexA, llaveA).replace(regexO, llaveO).replace(regexU, llaveU);
        textArea.value = textoCifrado; //Actualiza el text area con el texto encriptado
        textInput.value = "";
    }else{
        alert('Atencion! No deben ser utilizados letras con acentos ni caracteres especiales')
    }
}
//Desencripta el texto
function desencriptaTexto() {
    var texto = textInput.value; //Obtiene el texto
        //Valida que el texto ingresado sea valido
    if (validaEntrada(texto)) {
        //Reeemplaza el valor encriptado, por la letra correspondiente
        var textoDecifrado = texto.replace(regexEd, llaveEd).replace(regexId, llaveId).replace(regexAd, llaveAd).replace(regexOd, llaveOd).replace(regexUd, llaveUd);
        textArea.value = textoDecifrado; //Actualiza el text area con el texto desencriptado
        textInput.value = "";
    }
    else{
        alert('Atencion! Ingrese su mensaje, no deben ser utilizados letras con acentos ni caracteres especiales')
    }
}

function copiarTexto() {
    textArea.select();
    document.execCommand('copy');
    textArea.value = "";
}

//Asigna las funciones a los botones encriptar, desencriptar y copiar
encriptar.onclick = encriptaTexto;
desencriptar.onclick = desencriptaTexto;
copiar.onclick = copiarTexto;