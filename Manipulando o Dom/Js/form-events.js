function save(){
    event.preventDefault
    let name = document.querySelector("input[name='name']").value 
    let language = document.querySelector("select[name='programming-lang']").value
    alert("Nome: " + name + "\nLinguagem de programação: " + language)
}