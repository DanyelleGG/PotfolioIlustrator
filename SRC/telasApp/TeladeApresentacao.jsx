import React, {useEffect} from 'react';
import {Box, Text, Image, Center} from 'native-base';
import { useNavigation } from '@react-navigation/native';

const TelaAbertura = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const tempo = setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);

        return () => clearTimeout(tempo);
    }, [navigation]);

    return <>
        <Box flex={1} justifyContent={"center"} alignItems={"center"}>
            <Box 
                position="absolute" 
                top={0} 
                left={0} 
                right={0} 
                bottom="50%"
                backgroundColor={"#9492FF"} 
                borderBottomLeftRadius={0} 
                borderBottomRightRadius={150} 
                zIndex={1}
/>
            <Box 
                position="absolute" 
                top="50%" 
                left={0} 
                right={0} 
                bottom={0} 
                backgroundColor={"#EFE3FE"} 
                borderTopLeftRadius={150} 
                borderTopRightRadius={0} 
                zIndex={1}
/>
            <Box
                position="absolute"
                top="0"
                left={0}
                right={0}
                bottom="50%"
                backgroundColor="#EFE3FE" 
            />

            <Box
                position="absolute"
                top="50%"
                left={0}
                right={0}
                bottom="0"
                backgroundColor="#9492FF" 
            />
            <Center zIndex={4}>
                <Image size={200} borderRadius={170} source={require('../assets/Logo.jpeg')} alt="logo do APP portfólio" />
            </Center>
            <Text fontSize="30px" color="#702DFF" zIndex={4}>PORTFÓLIO</Text>
        </Box>
    </>
}


export default TelaAbertura;