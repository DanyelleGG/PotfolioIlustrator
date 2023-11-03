
import { useState } from "react";
import { Button,  Text, FlatList, Fab, Icon } from "native-base";
import { useNavigation } from '@react-navigation/native';
import projetos from '../SRC/dados';
import { Card, f } from 'react-native-paper';
import Menus from "./Menus";
import { AntDesign } from '@expo/vector-icons';
import MeuModal from "./MeuModal";

const TelaGerenciamento = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const toggleModal = ()=> {
        setShowModal(!showModal)
    }

    return <>
    <MeuModal visible={showModal} onClose={toggleModal} />
                   
        <Menus>
            <FlatList
                data={projetos}
                numColumns={2}
                renderItem={({ item }) => (
                    <Card style={{ 
                                    backgroundColor: "#B8E5FF", 
                                    height: "auto", 
                                    width:"45%", 
                                    margin:'2,5%', 
                                    justifyContent: 'center', 
                                    alignItems:"center" 
                                    }} 
                        key={item.id}>
                        <Text>{item.nome}</Text>
                        <Card.Title title={item.nome} />            
                        <Card.Cover source={ item.imagem } />
                        <Card.Content style={{
                            marginHorizontal: 18,
                            marginVertical: 10,
                            color: '#01579B',
                            textAlign: 'center'
                            }}>

                            <Text>{item.nome}</Text>
                            
                        </Card.Content>
                        <Card.Actions>
                            <Fab 
                                renderInPortal={false}
                                shadow={2}
                                size="sm"
                                onPress={toggleModal} 
                                icon={
                                    <Icon
                                        color="black" 
                                        as={AntDesign} 
                                        name="delete" 
                                        size="5" 
                                        />
                                    }
                                position="absolute"
                                bottom="275"
                                right="-30"
                                backgroundColor="transparent"
                                    />
                        </Card.Actions>
                    </Card> 
                )}
                keyExtractor={(item) => item.id.toString()}
                
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
                        name="plus" 
                        size="8" 
                        />
                    }
                    />
        </Menus>  
    </>       
}

export default TelaGerenciamento;