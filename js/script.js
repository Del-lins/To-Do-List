const button = document.querySelector('.button');
const input = document.querySelector('.input');
const listComplet = document.querySelector('.list');
const mensagemErro = document.getElementById('mensagemErro');

let = listItems = []

function addNovaTarefa() {
  const valorInput = input.value.trim();

  if (valorInput !== '') {
  listItems.push( {
    tarefa: input.value,
    checked: false
  }
)
  input.value = ''
  mostrarTarefas();

    mensagemErro.textContent = '';
    input.classList.remove('erro');
}
  else {
    mensagemErro.textContent = '';
    input.placeholder = 'Digite alguma coisa !!!';
    input.classList.add('erro');
  }
}

input.addEventListener('input', function() {
  if (input.value.trim() !== '') {
    mensagemErro.textContent = '';
    input.classList.remove('erro');
    }
  }
);

function mostrarTarefas() {
  let novaLi = ''
  listItems.forEach((item, index) => {
    
    novaLi = novaLi + `
      <li class="task ${item.checked && "done"}">
        <img src="./img/checked.png" alt="" onclick="checkedTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="lixeira" onclick="deletItem()">
      </li>
    `
  }
)
  listComplet.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(listItems))
}

function checkedTarefa(index) {
  listItems[index].checked = !listItems[index].checked

  mostrarTarefas()
}

function deletItem(index) {
  listItems.splice(index, 1);

  mostrarTarefas()
}

function Enter(event) {
  if (event.key === "Enter") {
    addNovaTarefa();
  }
}

function recarregarLista() {
  const listaLocalStorage = localStorage.getItem('lista')

  if (listaLocalStorage) {
    listItems = JSON.parse(listaLocalStorage)
  }
  mostrarTarefas()
}

recarregarLista()
button.addEventListener('click', addNovaTarefa)