/* Elementos da lista */
const contentTableBody = document.querySelector('.contentTableBody');
const contentTable = document.querySelector('.content-table');

window.addEventListener('DOMContentLoaded', (e) => {
  dados.forEach((list) => {
    contentTableBody.innerHTML += `
      <tbody>
        <tr>
          <td>${list.name}</td>
          <td>${list.medida}</td>
          <td>${list.quantidade}</td>
          <td>${list.preco}</td>
          <td>${list.fabricacao}</td>
          <td>${list.validade}</td>
          <td>${list.perecivel}</td>
          <td>
            <button class="btn-table" onclick="updateClient()">Editar</button>
          </td>
          <td>
            <button class="btn-table" onclick="deleteClient()">Excluir</button>
          </td>
          <td>
            <button class="btn-table" onclick="newItem()">Novo Item</button>
          </td> 
        </tr>
      </tbody>`;
  });
});

menuToggle.addEventListener('click', () => {
  contentTable.classList.toggle('active');
});

const newItem = () => {
  window.location.href = 'pages/cadastro.html';
};

const getLocalStorage = () => JSON.parse(localStorage.getItem('prod')) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem('prod', JSON.stringify(dbClient));

// CRUD - create read update delete
const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);

  alert('Produto Removido!');
  location.reload();
};

const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
  window.location.href = 'pages/cadastro.html';
};

const readClient = () => getLocalStorage();
