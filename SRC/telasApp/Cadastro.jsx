import {Box, Button, Center, FormControl, HStack, Heading, Input, Link, VStack, Text, Flex} from 'native-base'

export default function Cadastro({navigation}) {
  return (
    <Flex background={"#9492FF"}>
    
        <Center width="100%" height="100%">
            <Box backgroundColor={"#EFE3FE"} p="2" paddingY={"8"} width={"90%"} height={"55%"} maxWidth={"290"} >
            
                <Flex align='center' justifyContent={"center"}>
                    <Heading mt={10} size="lg" fontWeight="700" color="#9492FF">
                    Cadastro
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
                        </FormControl>

                        <FormControl mt={3}>
                            <FormControl.Label color={"#A67BFF"}>Confirme a senha</FormControl.Label>
                            <Input type='password'/>
                        </FormControl>


                        <Button marginTop={"10"} 
                                colorScheme={"purple"} 
                                borderRadius={"md"} 
                                size={"md"} 
                                onPress={() => navigation.navigate('Gerenciamento')}>
                            Cadastrar
                        </Button>
                </VStack>
            </Flex>
        </Box>
    </Center>
    </Flex>
  );
}


