function criar() {
    var ls = document.getElementById('ls').value
    var lista = document.getElementById('lista').innerHTML
    lista += "<label>" + ls + "</label>"
    document.getElementById("lista").innerHTML = lista
}




