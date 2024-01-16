import {Box, Button, Center, FormControl, HStack, Heading, Input, Link, VStack, Text, Flex} from 'native-base'
import { atualizarProjetos } from '../servicos/projetos';
import { useState } from 'react'
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function InfoProjeto() {
    const route = useRoute();
    const { item } = route.params;
    const [nome, setNome] = useState(route.params.item.Nome);
    const [formato, setFormato] = useState(route.params.item.formato);
    const [imagem, setImagem] = useState(route.params.item.imagem);
    
    console.log('Este é a estrutura do item:', item)

    async function salvar() {
      const item = route.params.item;

      if (!item) {
        Alert.alert('Dados do projeto não encontrados na rota.');
        return;
      }

      const id = item;

      if (!id) {
        Alert.alert('ID do projeto não encontrado nos dados do projeto.');
        return;
      }

      await new Promise((resolve) => {
        setNome(nome);
        setFormato(formato);
        resolve();
      })

      const nomeAtual = nome;
      const formatoAtual = formato;
      
      console.log('Valores antes de chamar atualizarProjetos:', id, nomeAtual, formatoAtual);

      const resultado = await atualizarProjetos(
            id, 
            { nome, 
            formato
            }
          );
          console.log('quando chama atualizarProjetos:', id, nome, formato);
      
      if(resultado === 'sucesso') {
        Alert.alert("Projeto atualizado!")
        navigation.goBack();
      }
      else {
        Alert.alert("Erro ao atualizar projeto!")
      }
    }


  return <>
    <Flex background={"#9492FF"}>
    
      <Center width="100%" height="100%">
        <Box backgroundColor={"#EFE3FE"} p="2" paddingY={"2"} width={"90%"} height={"70%"} maxWidth={"290"} >
        
          <Flex align='center' justifyContent={"center"}>
            <Heading mt={10} size="lg" fontWeight='700' color="#9492FF">
            Atualizar projeto 
            </Heading>
          </Flex>      
          
          <Flex justifyContent={"center"}>
            <VStack key={item.id}>
              <FormControl mt={10}>
                <FormControl.Label color={"#A67BFF"}>Nome</FormControl.Label>
                <Input value={nome} onChangeText={(text)=>{
                  console.log('onChangeText para nome:', text)
                  setNome(text)
                  }}/>
              </FormControl>
          
              <FormControl mt={5}>
                <FormControl.Label color={"#A67BFF"}>Formato</FormControl.Label>
                <Input value={formato} onChangeText={(text)=>{
                  console.log('onChangeText para formato:', text)
                  setFormato(text)
                }}/>
              </FormControl>

              <Button marginTop={"10"} colorScheme={"purple"} borderRadius={"md"} size={"md"}
                onPress={salvar}>
                Atualizar
              </Button>

            </VStack>
          </Flex>
        </Box>
      </Center>
    </Flex>
  </>
}
