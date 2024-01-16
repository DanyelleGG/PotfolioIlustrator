import { useState } from 'react';
import Menus from './Menus';
import { Heading, Center, ScrollView, TextArea, Divider, Text, View, IconButton, Image,  Box, Input, Title, HStack, FormControl, VStack } from 'native-base';



const Administrador = () => {
    
    return <>
    <Menus>
        <ScrollView>
            <Center>
                <Heading fontSize="xl"  p="4" pb="3" color={"#702DFF"}>
                    Perfil
                </Heading>
            </Center>

    <Divider />        

    <VStack  spacing={5} alignItems="center" w="100%" >
        <Box w="100%"  bgColor={"#605DC8"}>
            <Text color={"white"} alignSelf="center">
                Início
            </Text>
        </Box>
     
              <FormControl mt={0} p={3}>
                <FormControl.Label color={"#A67BFF"}>Introdução I</FormControl.Label>
                <Input borderRadius={'20'} bg="#9492FF"/>
              </FormControl>
            
              <FormControl mt={-4} p={3}>
                <FormControl.Label color={"#A67BFF"}>Introdução II</FormControl.Label>
                <Input borderRadius={'20'} bg="#9492FF"/>
              </FormControl>
              
              <FormControl mt={-4} p={3}>
                <FormControl.Label color={"#A67BFF"}>Introdução II</FormControl.Label>
                <Input borderRadius={'20'} bg="#9492FF" />
              </FormControl>
    
        <Box alignSelf={'flex-start'} mt={2}>
            <Image size={200} borderRadius={0} source={require('../assets/designer.png')} alt="Foto do administrador" />
        </Box>

    <Divider />

    <Box w="100%"  bgColor={"#605DC8"}>
            <Text color={"white"} alignSelf="center">
                Sobre mim
            </Text> 
    </Box> 

    <TextArea borderRadius={'20'} > Olá! Sou Maria Emanuelle, uma artista visual apaixonada e ilustradora profissional. Desde pequena, sempre fui encantada por cores, formas e histórias, e, com o passar do tempo, decidi transformar essa paixão em minha profissão. Vivo para criar imagens que contam histórias, provocam emoções e trazem conceitos à vida.
        </TextArea>   
        <Box alignSelf={'flex-start'} mt={2}>
            <Image size={100} borderRadius={0} source={require('../assets/designer.png')} alt="Foto do administrador" />
        </Box>     

         

        </VStack>
        </ScrollView> 
       </Menus>
    </>
}

export default Administrador;