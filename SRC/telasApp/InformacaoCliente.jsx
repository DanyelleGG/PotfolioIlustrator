import {Box, Button, Center, FormControl, HStack, Heading, Input, Link, VStack, Text, Flex} from 'native-base'
import { atualizarClientes } from '../servicos/usuarios'
import { useState } from 'react'
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function InfoCliente() {
    const route = useRoute();
    const { item } = route.params;
    const [nome, setNome] = useState(route.params.item.nome);
    const [email, setEmail] = useState(route.params.item.email);
    
   
async function salvar() {
  const resultado = await atualizarClientes(
        route.params.item.id, 
        nome, 
        email 
      );
  
  if(resultado === 'sucesso') {
    Alert.alert("Cliente atualizado!")
    navigation.goBack();
  }
  else {
    Alert.alert("Erro ao atualizar cliente!")
  }
}


  return <>
    <Flex background={"#9492FF"}>
    
      <Center width="100%" height="100%">
        <Box backgroundColor={"#EFE3FE"} p="2" paddingY={"2"} width={"90%"} height={"70%"} maxWidth={"290"} >
        
          <Flex align='center' justifyContent={"center"}>
            <Heading mt={10} size="lg" fontWeight='700' color="#9492FF">
            Atualizar cliente 
            </Heading>
          </Flex>      
          
          <Flex justifyContent={"center"}>
            <VStack key={item.id}>
              <FormControl mt={10}>
                <FormControl.Label color={"#A67BFF"}>Nome</FormControl.Label>
                <Input value={nome} onChangeText={setNome}/>
              </FormControl>
          
              <FormControl mt={5}>
                <FormControl.Label color={"#A67BFF"}>Email</FormControl.Label>
                <Input value={email} onChangeText={setEmail}/>
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
