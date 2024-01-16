//funções crud para as ilustracoes do app;
import api from "./requisicoesApi";

export async function buscarProjetos() {
    try {
        const resultado = await api.get('api/ilustracaos') 
        return resultado.data.data.map(item=>{
          att = item.attributes;
          return {...att, id: item.id}
        });
    }
    catch (error){
        console.log(error)
        return {} 
    }
}

export async function atualizarProjetos(id, {nome, formato}) {
    try {
        console.log('Dados a serem enviados:', nome, formato);
        
        const response = await api.put(`/api/ilustracaos/${id}`, {
            id: id,
            attributes: {
              Nome: nome,
              formato: formato
        }
        })
        
        console.error('Erro na resposta da API:', response.status, response.data);

        if (response.status === 200) {
          return 'sucesso';
        } else {
          console.error('Erro na resposta da API:', response.status, response.data);
          return 'erro';
        }
      } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
        return 'erro';
      }
}

export const inserirProjeto = async (id, nome, formato, urlImagem) => {
  try {
    const response = await api.post('/api/ilustracaos', {
      id,
      nome,
      formato,
      urlImagem,
    });

    return response.data?.status;
  } catch (error) {
    console.error('Erro ao inserir projeto:', error);
    throw new Error('Erro ao inserir projeto. Por favor, tente novamente.');
  }
};

export const uploadImagemParaAPI = async (imagemUri) => {
    try {
      const formData = new FormData();
      formData.append('imagem', {
        uri: imagemUri,
        type: 'image/jpeg', 
        name: 'imagem.jpg', 
      });
  
      const response = await api.post('/api/ilustracaos/upload', formData);
      
      const urlDaImagem = response.data?.url;
  
      if (!urlDaImagem) {
        throw new Error('A API não retornou a URL da imagem após o upload.');
      }
  
      return urlDaImagem;
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
  
      throw new Error('Erro ao fazer upload da imagem. Por favor, tente novamente.');
    }
  };

export async function deletarProjeto(id) {
    try {
        console.log("[id]" + id);
        const resultado = await api.delete(`/api/ilustracaos/${id}`) 
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro' 
    }
    }

