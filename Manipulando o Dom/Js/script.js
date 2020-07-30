function salvarCasas(){
    let area = document.querySelector("input[name='area']").value 
    let numero = document.querySelector("input[name='numero']").value 
    let bairro = document.querySelector("input[name='bairro']").value 
    let cidade = document.querySelector("input[name='cidade']").value 

    let novaLista = document.createElement("li")
    novaLista.innerText = area + "m², numero " + numero + " (" + bairro + " - " + cidade + ")"

    let removerBotao = document.createElement("button")
    removerBotao.type = "button"
    removerBotao.innerText = "Remover"
    removerBotao.setAttribute("onclick", "removerCasas(this)")
    
    novaLista.appendChild(removerBotao)
    document.getElementById("listadecasas").appendChild(novaLista)
}

function removerCasas(button){
    let listaParaRemover = button.parentNode
    document.getElementById("listadecasas").removeChild(listaParaRemover)
}