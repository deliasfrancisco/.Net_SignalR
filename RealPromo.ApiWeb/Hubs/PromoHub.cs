using Microsoft.AspNetCore.SignalR;
using RealPromo.ApiWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealPromo.ApiWeb.Hubs
{
    //Rpc -> Hub tem o poder de acessar funções do JavaScript
    public class PromoHub : Hub
    {
        // Cliente - JS/Java/C#
        // Cliente(JS) - Hub(C# - Cadastrar promocao) -> cliente chama um metodo do HUB
        // Hub(C#) - Cliente(JS - Receber promocao) -> hub chama um metodo do cliente

        public async Task CadastrarPromocao(Promocao promocao)
        {
            /*
             * Banco de dados
             * Filas
             * Notificar o usuario (SignalR)
             */
            await Clients.Caller.SendAsync("Cadastrado com sucesso"); //notificar -> cadastro realizado com sucesso; metodo sendAsnyc() ele envia para o metodo javascript a informação, ele aciona o metodo javascript; como o metodo e assincrono tem que utilizar o await
            Clients.Others.SendAsync("ReceberPromocao", promocao); // ReceberPromocao - metodo javascript
        }
    }
}
