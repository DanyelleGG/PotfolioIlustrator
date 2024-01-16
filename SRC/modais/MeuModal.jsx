import React from 'react';
import { useState } from 'react';
import { Center, VStack, Box, IconButton, Image, Text, Divider, Modal, Checkbox, FormControl, Button } from 'native-base';

function MeuModal (props) {
  const [nichoValues, setNichoValues] = useState([]); 
  const [formatoValues, setFormatoValues] = useState([]); 
  
  return <>
    <Modal isOpen={props.visible} onClose={props.onClose} size="lg" >
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header backgroundColor="#EFE3FE">Adicionar Projeto</Modal.Header>
        <Modal.Body backgroundColor="#EFE3FE">
            <Center>
              <VStack p={1}>
                                <Box>
                                <IconButton alignSelf={'center'} mt={2}
                                                icon={<Image
                                                source={require('../assets/cloud-uploading.png')}
                                                style={{ 
                                                    borderRadius: 0,
                                                    width: 200, 
                                                    height: 200,
                                                }}
                                                alt="imagem de adicionar projeto"/>}
                                                onPress={props.onClose}
                                                />
                                
                                <Text fontSize="20px" color="#702DFF">Adicionar ilustração</Text>
                            
                                            
                                
                                <Divider/>   
                                <FormControl mt={1}>
                                    <FormControl.Label color={"#A67BFF"}>Nicho</FormControl.Label>
                                        <Checkbox.Group onChange={setNichoValues} value={nichoValues} accessibilityLabel="choose numbers">
                                            <Checkbox value="one">Cartoon</Checkbox>
                                            <Checkbox value="two">Desenho</Checkbox>
                                            <Checkbox value="three">Publicidade</Checkbox>

                                        </Checkbox.Group>
                                </FormControl>
                                
                                <Divider/>   
                                <FormControl mt={1}>
                                    <FormControl.Label color={"#A67BFF"}>Formato</FormControl.Label>
                                        <Checkbox.Group onChange={setFormatoValues} value={formatoValues} accessibilityLabel="choose numbers">
                                            <Checkbox value="one">Vetorial</Checkbox>
                                            <Checkbox value="two">Bitmap</Checkbox>
                                        </Checkbox.Group>
                                </FormControl>
                                </Box>
                            </VStack>
            </Center>
                   </Modal.Body>
        <Modal.Footer backgroundColor="#EFE3FE">
          <Button.Group space={2}>
          <Button variant="ghost" colorScheme="blueGray" onPress={props.onClose}>
            Cancelar
          </Button>
          <Button onPress={props.onClose}>
            Salvar</Button>
            </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </>
};

export default MeuModal;