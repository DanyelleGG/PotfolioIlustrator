import axios from 'axios';


const api = axios.create({
    baseURL: "https://backend-portifolio.mariaemanuele.repl.co",
    headers: {
        'Authorization': 'Bearer 6e8b068866e6c0482f88d47a97603608e327533ca30b8559068ed9cfaed9674078ddc23ae3a062d95f881e3ba753e1d79f812bedd81260ea0afb12890e539e5a78c833e371c99e3e49235543765c43495983fc88b325b3a0b443a4bef43937ef5ff8b94ed1c86032a128570027a3986e791fc3b4af8c00bb57dd0ef02828db7f'
      }
})

export default api;

















//FUNÇÃO DE BUSCA NO PRIMEIRO FORMATO ESTUDADO USANDO THeN CATCH
/*export default function Busca() {
    api.create('/api/clientes').then( 
        response => {
            console.log(response.data.data)
        }
    ).catch(error => {
        console.log(error)
    })
    
}*/

//FUÇÃO PARA EXPORTAR DATA AUTOMATICAMENTE
/*export const dataAtual = new Date();

PRIMEIRA TENTATIVA DE USAR O CRUD - AGORA VOU FAZER NA PASTA USUARIOS.JS
export const funcaoObter = async () => {
    try { 
        const response = await api.get('/api/clientes')
        return response.data.data.map(item=>item.attributes);
    } catch (error) {
        throw error;
    }
}

export const funcaoAtualizar = async (id, {attributes}) => {
    try {
        const response = await api.put(`/api/clientes/${id}`, {attributes})
        return 'sucesso';
    } catch (error) {
        throw error;
    }
}

export const funcaoDeletar = async ({attributes}) => {
    try {
        const response = await api.delete(`/api/clientes/${attributes.Nome}`)
        return 'sucesso';
    } catch(error) {
        throw error;
    }
}
export const funcaoInserir = async ({attributes}) => {
    try {
        const response = await api.post('/api/clientes', attributes);
        return 'sucesso';
           
    } catch (error) {
        throw error;
    }
}

*/
