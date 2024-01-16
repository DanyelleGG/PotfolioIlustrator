
import { useEffect, useState } from "react";
import { Button,  Text, FlatList, Fab, Icon } from "native-base";
import { useNavigation } from '@react-navigation/native';
import projetos from '../dados'
import { Card } from 'react-native-paper';
import Menus from '../telasApp/Menus';
import { AntDesign } from '@expo/vector-icons';
import MeuModal from '../modais/MeuModal';
import { buscarProjetos, deletarProjeto } from "../servicos/projetos";
import { useIsFocused } from "@react-navigation/native";
import { Alert } from "react-native";


const TelaGerenciamento = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [projeto, setProjetos] = useState([]);
    
    const toggleModal = ()=> {
        setShowModal(!showModal)
    }
    
    const estaNaTela = useIsFocused()

    async function busca() {
        const resultado = await buscarProjetos();
        console.log(resultado)
        
        if(resultado){
            setProjetos(resultado)
        } else {
            Alert.alert('Projeto não encontrado')
        }
    }
     
    useEffect(()=> {
        const mostrarListaProjetos = async () => {
            await busca();
        };
        mostrarListaProjetos();
    }, [estaNaTela])
    
    async function deletar(id) {

        const resultado = await deletarProjeto(id);
      
        if(resultado === 'sucesso') {
        Alert.alert("Projeto deletado!")
        navigation.goBack();
        }
        else {
        Alert.alert("Erro ao deletar projeto!")
        }
      }
 
    return <>
    <MeuModal visible={showModal} onClose={toggleModal} />
                   
        <Menus>
        <FlatList
            data={projeto}
            numColumns={2}
            keyExtractor={(item) => (item && item.id ? item.id.toString() : '')}
            renderItem={({ item }) => {
                console.log('ItemIP:', item);
                return (
                <Card
                    onPress={() => navigation.navigate('InfoProjeto', { item: item })}
                    style={{
                    backgroundColor: "#B8E5FF",
                    height: "auto",
                    width: "45%",
                    margin: '2,5%',
                    justifyContent: 'center',
                    alignItems: "center",
                    borderRadius: "0",
                    }}
                    key={item.id}
                >
                    <Card.Title title={item.Nome} fontSize="xl" />
                    <Card.Cover source={{ uri: item.imagem && item.imagem.url }} />
                    <Card.Content style={{
                    marginHorizontal:18,
                    marginVertical: 10,
                    color: '#01579B',
                    textAlign: 'center'
                    }}>
                    <Text fontSize="md">{item.formato}</Text>
                    </Card.Content>
                    <Card.Actions>
                    <Fab
                        renderInPortal={false}
                        shadow={2}
                        size="sm"
                        onPress={() => deletar(item.id)}
                        icon={
                        <Icon
                            color="#FF00FF"
                            as={AntDesign}
                            name="delete"
                            size="5"
                        />
                        }
                        position="absolute"
                        bottom="245"
                        right="-40"
                        backgroundColor="transparent"
                        color=""
                    />
                    </Card.Actions>
                </Card>
                );
            }}
            />
            <Fab
                    renderInPortal={false}
                    shadow={2}
                    size="16"
                    onPress={() => {
                        toggleModal();
                        navigation.navigate('Gerenciamento');
                    }}
                    icon={
                        <Icon
                            color="white"
                            as={AntDesign}
                            name="plus"
                            size="8"
                        />
                    }
                />
        </Menus>  
    </>       
}

export default TelaGerenciamento;