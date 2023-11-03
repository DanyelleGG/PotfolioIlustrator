import Menus from "./Menus";
import { Checkbox, Divider, IconButton, Image,  Text, Box, FormControl, VStack } from 'native-base';
import { useState } from 'react';


const Adicionar = () => {
    const [groupValues, setGroupValues] = useState(''); 

    return <>
    <Menus>
        <VStack p={5}>
            <Box>
            <IconButton alignSelf={'center'} mt={2}
                            icon={<Image
                            source={require('./assets/cloud-uploading.png')}
                            style={{ 
                                borderRadius: 0,
                                width: 200, 
                                height: 200,
                            }}
                            />}
                            />
            
            <Text fontSize="20px" color="#702DFF">Adicionar ilustração</Text>
        
                          
             
            <Divider/>   
            <FormControl mt={5}>
                <FormControl.Label color={"#A67BFF"}>Nicho</FormControl.Label>
                    <Checkbox.Group onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
                        <Checkbox value="one">Cartoon</Checkbox>
                        <Checkbox value="two">Desenho</Checkbox>
                        <Checkbox value="three">Publicidade</Checkbox>

                    </Checkbox.Group>
              </FormControl>
              
              <Divider/>   
            <FormControl mt={5}>
                <FormControl.Label color={"#A67BFF"}>Formato</FormControl.Label>
                    <Checkbox.Group onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
                        <Checkbox value="one">Vetorial</Checkbox>
                        <Checkbox value="two">Bitmap</Checkbox>
                    </Checkbox.Group>
              </FormControl>
            </Box>
        </VStack>
    </Menus>
    </>
}

export default Adicionar;