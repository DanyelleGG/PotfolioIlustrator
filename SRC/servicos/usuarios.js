//funções crud para os clientes do app;
import api from "./requisicoesApi";

function extrairIdDoItem(item) {
    return item.id;
  }

export async function buscarClientes() {
    try {
        const resultado = await api.get('api/clientes') 
        return resultado.data.data.map(item=>{
            const att = item.attributes;
            const id = extrairIdDoItem(item);
            return {...att, id: item.id}
    });
}
    catch (error){
        console.log(error)
        return [] /*retorna array vazio significando que ele não encontrou nada*/
    }
}

export async function atualizarClientes(item, {nome, email, dataDeCadastro}) {
    try {
        await api.put(`/api/clientes/${id}`, {
            id: data.id,
            attributes: {
            Nome: nome,
            Email: email,
            DataCadastro: dataDeCadastro
        }
        }) 
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro' 
    }
}
export const dataAtual = new Date();

export async function inserirClientes(item, ...att) {
    try {
        console.log("valores variveis" + item, ...att)
       
        const resultado = await api.post(`/api/clientes`, {
            data:{
                id: item.id,
                attributes: {
                    Nome: att.Nome,
                    Email: att.Email,
                    DataCadastro: att.DataCadastro
                }
            }
        });
        
        return 'sucesso';
    } catch (error) {
        console.log(error);
        console.error("Detalhes do erro:", error.response);
        console.error("Detalhes dos erros de validação:", error.response.data.error.details.errors);
        return 'erro';
    }
}


export async function deletarCliente(id) {
    try {
        console.log("[id]" + id);
        const resultado = await api.delete(`/api/clientes/${id}`) 
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro' 
    }
}

