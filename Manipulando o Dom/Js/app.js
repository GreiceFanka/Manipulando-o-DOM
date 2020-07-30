class App {
    addPropriedade(){
        event.preventDefault()
        let tipo = document.querySelector("select[name='tipo']").value 
        let area = document.querySelector("input[name='area']").value
        let alugado = document.querySelector("input[name='alugado']").checked
        let propriedade = new Propiedade(tipo,area,alugado)
        this.addNaListaDePropiedades(propriedade)
        this.limparForm()
    }
    addNaListaDePropiedades(propiedade) {
        let listaElementos = document.createElement("li")
        let propiedadeInfo = "tipo: " + propiedade.tipo + "(Área:" + propiedade.area + "m²)"
        if(propiedade.alugado){
            let marcaAlugado = this.criarMarcaAlugado()
            listaElementos.appendChild(marcaAlugado)
        }
        listaElementos.innerHTML += propiedadeInfo
        let botaoParaRemover = this.criarBotaoRemover()
        listaElementos.appendChild(botaoParaRemover)
        document.getElementById("propiedades").appendChild(listaElementos)
    }
    criarMarcaAlugado(){
        let marcaAlugado = document.createElement("span")
        marcaAlugado.style.color = "white"
        marcaAlugado.style.background = "red"
        marcaAlugado.innerHTML = "ALUGADO"
        return marcaAlugado
    }
    criarBotaoRemover(){
        let botaoParaRemover = document.createElement("button")
        botaoParaRemover.setAttribute("onclick", "app.remover()")
        botaoParaRemover.innerText = "Remover"
        return botaoParaRemover
    }

    limparForm(){
        document.querySelector("input[name = 'area']").value = ""
        document.querySelector("input[name = 'alugado']").checked = false
    }

    remover(){
        let liParaRemover = event.target.parentNode
        document.getElementById("propiedades").removeChild(liParaRemover)
    }

}

