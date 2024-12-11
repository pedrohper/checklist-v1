let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {

        ++contador;

        let novoItem = 
            `<div id="${contador}" class="item">
                <div onClick="marcarTarefa(${contador})" class="item-icone">
                    <i id="icone_${contador}" class="mdi mdi-checkbox-blank-circle-outline"></i>
                </div>
                <div onClick="marcarTarefa(${contador})" class="item-nome">
                    ${valorInput}
                </div>
                <div class="item-botao">
                    <button onClick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
                </div>
            </div>`;

        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    var icone = document.getElementById("icone_" + id);

    if (classe.includes("clicado")) {
        // Remover o estado clicado
        item.classList.remove("clicado");
        icone.classList.remove("mdi-checkbox-marked-circle-outline");
        icone.classList.add("mdi-checkbox-blank-circle-outline");
        item.parentNode.appendChild(item);
    } else {
        // Adicionar o estado clicado
        item.classList.add("clicado");
        icone.classList.remove("mdi-checkbox-blank-circle-outline");
        icone.classList.add("mdi-checkbox-marked-circle-outline");
    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
