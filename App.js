import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaAbertura from './SRC/TeladeApresentacao';
import Login from './SRC/Login';
import Cadastro from './SRC/Cadastro';
import Gerenciamento from './SRC/Gerenciamento';
import Adicionar from './SRC/Adicionar';
import Clientes from './SRC/Clientes';
import dadosCliente from './SRC/dadosCliente';
import Administrador from './SRC/Administrador';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './SRC/estilos/temas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.fundo}/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TeladeApresentacao">
            <Stack.Screen name="TelaAbertura" component={TelaAbertura} options={{ headerShown: false }}  />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
            <Stack.Screen name="Gerenciamento" component={Gerenciamento} />
            <Stack.Screen name="Adicionar" component={Adicionar} />
            <Stack.Screen name="Administrador" component={Administrador} />
            <Stack.Screen name="Clientes" component={Clientes} />
            <Stack.Screen name="dadosCliente" component={dadosCliente} />
          </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}



