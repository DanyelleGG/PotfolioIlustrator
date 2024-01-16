import { useState, useEffect } from "react";
import Menus from './Menus';
import { Box, FlatList, Fab, Pressable, HamburgerIcon, Icon, Heading, HStack, VStack, Spacer, Text, Center, IconButton, Image, View, Menu } from "native-base";
import DadosCliente from "../modais/dadosCliente";
import { AntDesign } from "@expo/vector-icons";
import { buscarClientes, deletarCliente } from "../servicos/usuarios";
import { Alert } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";


const Clientes = () => {
    const [showModal, setShowModal] = useState(false);
    const [cliente, setCliente] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const estaNaTela = useIsFocused() //função para atualizar a informação quando cliente for editado e quando fizer o goBack para a tela da lista de clientes 
 
    const toggleModal = ()=> {
        setShowModal(!showModal)
    }

    async function busca() {
        const resultado = await buscarClientes();
        console.log(resultado)
        
        if(resultado){
            setCliente(resultado)
        } else {
            Alert.alert('Cliente não encontrado')
        }
    }
     
    useEffect(()=> {
        const mostrarListaClientes = async () => {
            await busca();
        };
        mostrarListaClientes();
    }, [estaNaTela])
    
    async function deletar(id) {
        const resultado = await deletarCliente(id);
        
        if(resultado === 'sucesso') {
        Alert.alert("Cliente deletado!")
        }
        else {
        Alert.alert("Erro ao deletar cliente!")
        }
      }


    return (
        <>
            <Menus>
                <DadosCliente visible={showModal} onClose={toggleModal} />
                <FlatList
                    data={cliente}
                    keyExtractor={(item) => item?.id?.toString()}
                    renderItem={({ item }) => {
                        if (!item) {
                          return null;
                        }
                        return (
                                <Box borderBottomWidth="1"
                                    _dark={{ borderColor: "muted.50" }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                                    <HStack padding={"5"} space={[2, 3]} justifyContent="space-between" backgroundColor="#BDBCEF">
                                        <VStack width="100%" key={item.id}>
                                            <Text fontSize="xl" _dark={{ color: "warmGray.50" }} color="coolGray.800" bold>
                                                {item.Nome}
                                            </Text>
                                            <Text fontSize="lg" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                                                {item.Email}
                                            </Text>
                                            <Text fontSize="md" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                                                {item.DataCadastro}
                                            </Text>
                                            
                                            <Box w="90%" alignItems="stretch" position="absolute" top={0} right={-315}>
                                                <Menu  backgroundColor="#EFE3FE" w="190" trigger={triggerProps => {
                                                return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                                        <HamburgerIcon size={7} color="#FF00FF"/>
                                                        </Pressable>;
                                                }}>
                                                    <Menu.Item onPress={() => navigation.navigate('InfoCliente', {item})}>Editar</Menu.Item>
                                                    <Menu.Item onPress={()=>deletar(item.id)}>Apagar</Menu.Item>
                                                </Menu>
                                                </Box>
                                        </VStack>

                                    <Spacer />

                                    </HStack>
                                </Box>
                            );
                        }
                    }
                />
                <Fab
                    renderInPortal={false}
                    shadow={2}
                    size="16"
                    onPress={() => {
                        toggleModal();
                        navigation.navigate('Clientes', { id: route.params?.id });
                    }}
                    icon={
                        <Icon
                            color="white"
                            as={AntDesign}
                            name="adduser"
                            size="8"
                        />
                    }
                />
            </Menus>
        </>
    );
}

export default Clientes;