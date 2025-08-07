const apiUrl = "https://689245cf447ff4f11fbfc668.mockapi.io/tarefas";
const listaTarefasElement = document.getElementById("lista-tarefas");
const loadingMessage = document.getElementById("loading-message");

async function buscarTarefas() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Não foi possível buscar os dados da API.");
    }
    const tarefas = await response.json();
    renderizarTarefas(tarefas);
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
}

function renderizarTarefas(tarefas) {
  listaTarefasElement.innerHTML = "";
  if (tarefas.length === 0) {
    listaTarefasElement.innerHTML = "<p>Nenhuma tarefa cadastrada.</p>";
    return;
  }
  tarefas.forEach((tarefa) => {
    const li = document.createElement("li");
    li.textContent = tarefa.texto;
    li.dataset.id = tarefa.id;
    listaTarefasElement.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", buscarTarefas);
