function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

// Verifica se o nome e o telefone foram preenchidos
    if (nome && telefone) {
        var table = document.getElementById("tabelaContatos");
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;

// Limpa os campos do formulário após adicionar o contato
        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}