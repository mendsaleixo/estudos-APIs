const apiUrl = "https://689245cf447ff4f11fbfc668.mockapi.io/tarefas";
const listaTarefasElement = document.getElementById("lista-tarefas");
const formTarefa = document.getElementById("form-tarefa");
const inputTarefa = document.getElementById("input-tarefa");
const buttonTarefa = document.getElementById("button-tarefa");
const loadingMessage = document.getElementById("loading-message");

formTarefa.addEventListener("submit", async (event) => {
  event.preventDefault();

  const texto = inputTarefa.value.trim();
  if (texto) {
    console.log("Adicionando nova tarefa...");
    await adicionarTarefa(texto);

    console.log("Tarefa adicionada, atualizando a lista...");
    buscarTarefas();

    inputTarefa.value = "";
    inputTarefa.focus();
  }
});

async function buscarTarefas() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Não foi possível encontrar as tarefas.");
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

async function adicionarTarefa(texto) {
  try {
    const novaTarefa = {
      texto: texto,
      completa: false,
    };
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaTarefa),
    });
    if (!response.ok) {
      throw new Error("Não foi possível adicionar a tarefa.");
    }
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
}

document.addEventListener("DOMContentLoaded", buscarTarefas);
