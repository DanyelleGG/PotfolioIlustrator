import Menus from '../telasApp/Menus';
import { Checkbox, Divider, IconButton, Image, Text, Box, FormControl, VStack } from 'native-base';
import { useState } from 'react';
import { inserirProjeto, uploadImagemParaAPI } from '../servicos/projetos';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

const Adicionar = () => {
  const [groupValues, setGroupValues] = useState('');
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState(null);
  const [formato, setFormato] = useState('');

  const pickImage = async () => {
    console.log('Clicou no botão'); 
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      console.log('Permissão negada para acessar a galeria de imagens');
      return;
    }

    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(resultado);

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  const criar = async () => {
    try {
      if (!imagem) {
        Alert.alert('Selecione uma imagem antes de criar o projeto.');
        return;
      }
  
      const urlDaImagemNaAPI = await uploadImagemParaAPI(imagem);
 
      const resultado = await inserirProjeto(
        route.params?.id,
        nome,
        formato,
        urlDaImagemNaAPI
      );
  
      if (resultado === 'sucesso') {
        Alert.alert('Projeto adicionado!');
        navigation.goBack();
      } else {
        Alert.alert('Erro ao adicionar cliente!');
      }
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
    }
  };

  return (
    <>
      <Menus>
        <VStack p={5}>
          <Box>
            <IconButton
              alignSelf={'center'}
              mt={2}
              onPress={pickImage}
              icon={
                <Image
                  source={require('../assets/cloud-uploading.png')}
                  style={{
                    borderRadius: 0,
                    width: 200,
                    height: 200,
                  }}
                />
                }
            />
            
            {
              imagem && <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }}/>
            }

            <Text fontSize="20px" color="#702DFF">
              Adicionar ilustração
            </Text>

            <Divider />
            <FormControl mt={5}>
              <FormControl.Label color={'#A67BFF'}>Nicho</FormControl.Label>
              <Checkbox.Group
                onChange={setGroupValues}
                value={groupValues}
                accessibilityLabel="choose numbers"
              >
                <Checkbox value="one">Cartoon</Checkbox>
                <Checkbox value="two">Desenho</Checkbox>
                <Checkbox value="three">Publicidade</Checkbox>
              </Checkbox.Group>
            </FormControl>

            <Divider />
            <FormControl mt={5}>
              <FormControl.Label color={'#A67BFF'}>Formato</FormControl.Label>
              <Checkbox.Group
                onChange={setGroupValues}
                value={groupValues}
                accessibilityLabel="choose numbers"
              >
                <Checkbox value="one">Vetorial</Checkbox>
                <Checkbox value="two">Bitmap</Checkbox>
              </Checkbox.Group>
            </FormControl>
          </Box>
        </VStack>
      </Menus>
    </>
  );
};

export default Adicionar;
