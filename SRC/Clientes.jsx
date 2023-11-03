import { useState, useEffect } from "react";
import Menus from "./Menus";
import { funcaoObter } from "./requisicoesApi";
import { Box, FlatList, Fab, Icon, Heading, HStack, Avatar, VStack, Spacer, Text, Center, IconButton, Image, View, Menu } from "native-base";
import DadosCliente from "./dadosCliente";
import { AntDesign } from "@expo/vector-icons";




const Clientes = () => {
    const [showModal, setShowModal] = useState(false);
    const [clientes, setClientes] = useState([]);
    
    const toggleModal = ()=> {
        setShowModal(!showModal)
    }

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const data = await funcaoObter();
                setClientes(data);
            } catch(error) {
                console.log('Erro ao buscar dados dos clientes', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Menus>
                <DadosCliente visible={showModal} onClose={toggleModal} />
                <FlatList
                    data={clientes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        if (item.id === 'header') {
                            return (
                                <HStack spacing={5} alignItems="center" w="100%">
                                    <Center>
                                        <Heading fontSize="xl" p="4" pb="3" color={"#702DFF"}>
                                            Lista de Clientes
                                        </Heading>
                                    </Center>
                                </HStack>
                            );
                        } else {
                            return (
                                <Box borderBottomWidth="1"
                                    _dark={{ borderColor: "muted.50" }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                                    <HStack padding={"5"} space={[2, 3]} justifyContent="space-between" backgroundColor="#BDBCEF">
                                        <Avatar size="50px" source={item.imagemCliente} />
                                        <VStack>
                                            <Text _dark={{ color: "warmGray.50" }} color="coolGray.800" bold>
                                                {item.Nome}
                                            </Text>
                                            <Text color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                                                {item.Email}
                                            </Text>
                                            <Text color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                                                {item.DataCadastro}
                                            </Text>

                                        </VStack>
                                        <Spacer />
                                    </HStack>
                                </Box>
                            );
                        }
                    }}
                />
                <Fab
                    renderInPortal={false}
                    shadow={2}
                    size="16"
                    onPress={toggleModal}
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