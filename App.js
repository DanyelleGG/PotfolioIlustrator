import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaAbertura from './SRC/telasApp/TeladeApresentacao';
import Login from './SRC/telasApp/Login';
import Cadastro from './SRC/telasApp/Cadastro';
import Gerenciamento from './SRC/telasApp/Gerenciamento';
import Adicionar from './SRC/telasApp/Adicionar';
import Clientes from './SRC/telasApp/Clientes';
import dadosCliente from './SRC/modais/dadosCliente';
import Administrador from './SRC/telasApp/Administrador';
import InfoCliente from './SRC/telasApp/InformacaoCliente';
import InfoProjeto from './SRC/telasApp/InformacaoProjeto';
import { NativeBaseProvider, StatusBar } from 'native-base';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar/>
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
            <Stack.Screen name="InfoCliente" component={InfoCliente} />
            <Stack.Screen name="InfoProjeto" component={InfoProjeto} />
          </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}



