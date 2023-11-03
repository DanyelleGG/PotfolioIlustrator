import {Box, Button, Center, FormControl, HStack, Heading, Input, Link, VStack, Text, Flex} from 'native-base'
import api from './servicos/api';

export default function Login({navigation}) {
function Busca(){
  api.get('/admin').then(
    response => {
      console.log(response.data)
    }
  ).catch(error=>{
    console.log(error)
  })
}

  return <>
    <Flex background={"#9492FF"}>
    
      <Center width="100%" height="100%">
        <Box backgroundColor={"#EFE3FE"} p="2" paddingY={"8"} width={"90%"} height={"55%"} maxWidth={"290"} >
        
          <Flex align='center' justifyContent={"center"}>
            <Heading mt={10} size="lg" fontWeight='700' color="#9492FF">
            Login
            </Heading>
          </Flex>      
          
          <Flex justifyContent={"center"}>
            <VStack>
              <FormControl mt={10}>
                <FormControl.Label color={"#A67BFF"}>Email</FormControl.Label>
                <Input />
              </FormControl>
          
              <FormControl mt={3}>
                <FormControl.Label color={"#A67BFF"}>Senha</FormControl.Label>
                <Input type='password'/>
                <Link _text={{
                  fontSize:"xs", 
                  fontWeight: "500", 
                  color:"#9492FF" 
                }} alignSelf= "flex-end" marginTop={"1"}
                  onPress={() => navigation.navigate('Cadastro')}>
                  Esqueceu sua senha?
                </Link>
              </FormControl>

              <Button marginTop={"10"} colorScheme={"purple"} borderRadius={"md"} size={"md"}
                onPress={() => navigation.navigate('Gerenciamento')}>
                Entrar
              </Button>

              <HStack mt="6" justifyContent={"center"}>
                <Text fontSize="sm" color="#9492FF">
                  Novo usuário. {" "}
                </Text>
                <Link _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm"
               }} href='#' 
                  onPress={() => navigation.navigate('Cadastro')}>
                  Cadastrar
                </Link>
              </HStack>
            </VStack>
          </Flex>
        </Box>
      </Center>
    </Flex>
  </>
}



