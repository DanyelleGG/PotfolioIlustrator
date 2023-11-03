import React, { useEffect, useState } from 'react';
import { VStack, FormControl, Modal, Center, Input, Button, Checkbox, TextArea } from 'native-base';  
import { dataAtual, funcaoAtualizar, funcaoInserir } from './requisicoesApi';

function NovoCliente(props) {
  
  const [formaPagamento, setFormaPagamento] = useState([]);
  const [statusPagamento, setStatusPagamento] = useState([]);  
  const [mensagem, setMensagem] = useState([]); 
  const datadeCadastro = `${dataAtual.getFullYear()}-${dataAtual.getMonth()+1}-${dataAtual.getDate()} `;

  const [novoClienteaSerInserido, setCliente] = useState ({
      Nome: '',
      Email: '',
      DataCadastro: datadeCadastro,

  });
  
  const mudarEntrada = Object.assign({}, novoClienteaSerInserido);
  mudarEntrada[name] = value;
  setCliente(mudarEntrada);


  const valorSubmetido = async () => {
    try {
      const response = await funcaoInserir(novoClienteaSerInserido);
      console.log('Objeto criado com sucesso:', response);
      setCliente({
        Nome:'',
        Email:'',
        DataCadastro: datadeCadastro,
      })
      props.onClose();
    } catch (error) {
    console.error('Erro ao criar o objeto:', error);
  }
}

useEffect(()=> {
  funcaoAtualizar();
}, []);


    return <>
    
      <Modal isOpen={props.visible} onClose={props.onClose} size="lg" >
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header backgroundColor="#EFE3FE">Informações do cliente</Modal.Header>
        <Modal.Body backgroundColor="#EFE3FE">
        <Center>
            <VStack mt={10} bg="#EFE3FE" spacing={1} alignItems="center" w="85%">
              <FormControl fontSize={"15"} >
                <FormControl.Label color={"#A67BFF"} onSubmit={mudarEntrada}>Nome do Cliente*</FormControl.Label>
                <Input value ={novoClienteaSerInserido} onChange={(text)=>mudarEntrada('Nome', text)}/>
              </FormControl>

              <FormControl mt={5}>
                <FormControl.Label color={"#A67BFF"} onSubmit={mudarEntrada}>Email*</FormControl.Label>
                <Input value ={novoClienteaSerInserido} onChange={(text)=>mudarEntrada('Email', text)}/>
              </FormControl>

              <FormControl mt={5}>
                <FormControl.Label color={"#A67BFF"}>Forma de Pagamento</FormControl.Label>
                
              </FormControl>

              <FormControl mt={5}>
                <FormControl.Label color={"#A67BFF"}>Status pagamento</FormControl.Label>
                    <Checkbox.Group onChange={setStatusPagamento} value={statusPagamento} accessibilityLabel="choose numbers">
                        <Checkbox value="one">Pago</Checkbox>
                        <Checkbox value="two">Não Pago</Checkbox>
                    </Checkbox.Group>
               </FormControl>

              <FormControl mt={5}>
                <FormControl.Label color={"#A67BFF"}>Status da obra</FormControl.Label>
                    <Checkbox.Group onChange={setFormaPagamento} value={formaPagamento} accessibilityLabel="choose numbers">
                        <Checkbox value="one">Em andamento</Checkbox>
                        <Checkbox value="two">Finalizado</Checkbox>
                        <Checkbox value="three">Cancelado</Checkbox>
                    </Checkbox.Group>
              </FormControl>
            
              <FormControl mt={10}>
                <FormControl.Label color={"#A67BFF"}>Observações</FormControl.Label>
                <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" onChange={setMensagem} value={mensagem}/>
              </FormControl>

        </VStack>
        </Center>
        </Modal.Body>
        <Modal.Footer backgroundColor="#EFE3FE">
          <Button.Group space={2}>
          <Button variant="ghost" colorScheme="blueGray" onPress={props.onClose}>
            Cancelar
          </Button>
          <Button onPress = { () => { 
            valorSubmetido();
          }
          }> Salvar</Button>
            </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
      
    </>
}

export default NovoCliente;
