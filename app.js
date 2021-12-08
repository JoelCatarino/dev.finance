const Modal = {
    open() {
        // Abrir Modal
        // Add a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        // Fechar modal
        // Remove a class active ao modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

// Eu preciso somar as entradas
// Depois eu preciso somar as saídas e
// remover das entradas o valor das saídas
// assim, eu terei o total


const transactions = [{
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '12/10/2021'
    },
    {
        id: 2,
        description: 'Criaçao de web site',
        amount: 500000,
        date: '09/10/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '17/10/2021'
    },
    // {
    // id: 4,
    // description: 'Academia',
    // amount: -7000,
    // date: '07/10/2021'
    // }
]

const Transactions = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saidas
    },
    total() {
        // entradas - saidas 
    }
}

// Substituir os dados do HTML com os dados do JS

const DOM = {
    addTransactions() {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM
    },
    innerHTMLTransactions() {
        const html = ` 
        <td class="description">${transactions.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transactions.date}</td>
        <td>
            <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
        </td>
        `
        return html
    }
}

DOM.addTransactions(transactions[0])