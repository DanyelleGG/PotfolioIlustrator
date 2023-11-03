import axios from 'axios';


const config = {
    headers: {
      'Authorization': 'Bearer 6e8b068866e6c0482f88d47a97603608e327533ca30b8559068ed9cfaed9674078ddc23ae3a062d95f881e3ba753e1d79f812bedd81260ea0afb12890e539e5a78c833e371c99e3e49235543765c43495983fc88b325b3a0b443a4bef43937ef5ff8b94ed1c86032a128570027a3986e791fc3b4af8c00bb57dd0ef02828db7f'
    }
  }

export const dataAtual = new Date();

export const funcaoObter = async () => {
    try { 
        const response = await axios.get('https://backend-portifolio.mariaemanuele.repl.co/api/clientes', config)
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const funcaoAtualizar = async (dadoquevaiAtualizar) => {
    try {
        const response = await axios.put('https://backend-portifolio.mariaemanuele.repl.co/api/clientes', dadoquevaiAtualizar, config)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const funcaoDeletar = async (nome) => {
    try {
        const response = await axios.delete(`https://backend-portifolio.mariaemanuele.repl.co/api/clientes/${nome}`, config)
        return response.data;
    } catch(error) {
        throw error;
    }
}
export const funcaoInserir = async (novoClienteaSerInserido) => {
    try {
        const response = await axios.post('https://backend-portifolio.mariaemanuele.repl.co/api/clientes', novoClienteaSerInserido, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}


