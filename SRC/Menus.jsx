import { Box, View, HStack, IconButton, Image  } from "native-base";
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';


const Menus = ( {children} ) => {
    const navigation = useNavigation();
   
    return <>
        <Box flex="1" bg="#EFE3FE" border="1" borderRadius="md">

            <Box bg="#9492FF" py={1} px={2} />
                
            <HStack bg="#9492FF" spacing={5} alignItems="center" w="100%" >
                
                <IconButton  onPress={() => navigation.navigate('Gerenciamento')}
                    icon={<Image 
                        source={require('./assets/menu.png')}
                        style={{ 
                            width: 30, 
                            height: 30, 
                        }}
                        alt="Alternate Text"
                    />}
                />
               
                <View position="absolute" left="61%" ml={-20} zIndex={1}>
                    <IconButton  onPress={() => navigation.navigate('Administrador')}
                        icon={<Image
                            source={require('./assets/Logo.jpeg')}
                            style={{ 
                                borderRadius: 20,
                                width: 40, 
                                height: 40,
                            }}
                            alt="Alternate Text"
                        />}
                    />
                </View> 
            </HStack>
            
           
           {children}

        </Box>


        <Box bg="#9492FF" px="1" py="2">
            <HStack justifyContent="space-between" alignItems="center">
                <IconButton onPress={() => navigation.navigate('Gerenciamento')}
                    icon={<Image
                        source={require('./assets/pesquisa.png')}
                        style={{ width: 30, height: 30 }}
                        alt="Alternate Text"
                    />}
                />          
                <IconButton onPress={() => navigation.navigate('Clientes')}
                    icon={<Image
                        source={require('./assets/pessoas.png')}
                        style={{ width: 30, height: 30 }}
                        alt="Alternate Text"
                    />}
                />
                <IconButton onPress={() => navigation.navigate('Administrador')}
                    icon={<Image
                        source={require('./assets/pessoa.png')}
                        style={{ width: 30, height: 30 }}
                        alt="Alternate Text"
                    />}
                />
            </HStack>
        </Box>
        
    </>

}

Menus.propTypes = {
    children: PropTypes.node,
  };

export default Menus;