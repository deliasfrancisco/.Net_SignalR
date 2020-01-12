var connection = new signalR.HubConnectionBuilder().withUrl("/PromoHub").build(); // SEMPRE CRIAR A CONEXÃO PRIMEIRO!!

connection.start().then(function () {
    console.info("Connected"); // indica que a conexão foi feita

}).catch(function () {
    console.error(err.toString()); // retorna uma string informando que não houve a conexão

}); // caso de erro entra no cacth, caso de certo entra no then

var btnCadastrar = document.getElementById("BtnCadastrar");
if (btnCadastrar != null) {
    btnCadastrar.addEventListener("click", function () {

        var empresa = document.getElementById("Empresa").value;
        var chamada = document.getElementById("Chamada").value;
        var regras = document.getElementById("Regras").value;
        var enderecoUrl = document.getElementById("EnderecoURL").value;

        var promocao = { Empresa: empresa, Chamada: chamada, Regras: regras, EnderecoURL: enderecoUrl }; // o nome das propriedade do SignalR tem que ser indenticos ao nome das variaveis da classe

        connection.invoke("CadastrarPromocao", promocao).then(function () {
            console.info("Cadastrado com sucesso");
        }).catch(function (err) {
            console.error(err.toString());
        }); //aciona o metodo do Hub no C#// automaticamente ele ira serializar para o C#

        // TODO - SignalR chamar o cadastro de promocoes

    });
}


// HubConnectionBuilder
// withUrl -> onde vai ser indicado o endpoint
// Build() -> constroe a conexão



