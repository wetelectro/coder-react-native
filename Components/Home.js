import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, Modal, StyleSheet, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';

import CustomButton from './UI/CustomButton';
import Colors from '../Constants/colors.json';

const Home = ({ navigation }) => {
    const [modalVisibility, setModalVisibility] = useState(false);

    return(
        <View>
            <Modal
                visible={modalVisibility}
                animationType='fade'
                transparent={true}
            >
                <BlurView style={styles.blurStyles} tint='dark' intensity={100}>
                <View style={styles.modalStyles}>
                    <Text style={styles.modalContent}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut metus sit amet ante fringilla pulvinar ac ac.
                        Enviar $100 pesos a CBU : 12309981839103129
                    </Text>
                    <CustomButton
                        text='Close'
                        style={{ alignSelf: 'center' }}
                        onPress={() => { setModalVisibility(false); }}
                    />
                </View>
                </BlurView>
            </Modal>

            <View style={{
                padding: 10
            }}>
                
                <View>
                    <Text style={styles.pageTitle}>Menu</Text>
                    <View style={styles.buttonWrapper}>
                        <CustomButton 
                            text='Lista de Tareas'
                            style={{...styles.buttonsPlace, marginVertical: 5}}
                            onPress={() => {
                                navigation.navigate('Lista de Tareas')
                            }}
                        />
                        <CustomButton 
                            text='Productos'
                            style={{...styles.buttonsPlace, marginVertical: 5}}
                            onPress={() => {
                                navigation.navigate('Productos')
                            }}
                        />
                        <CustomButton 
                            text='Adivina el Numero'
                            style={{...styles.buttonsPlace, marginVertical: 5}}
                            onPress={() => {
                                navigation.navigate('Adivina el Numero')
                            }}
                        />
                        <CustomButton 
                            text='Geolocalizacion'
                            style={{...styles.buttonsPlace, marginVertical: 5}}
                            onPress={() => {
                                navigation.navigate('Geolocalizacion')
                            }}
                        />
                    </View>

                </View>

                <View style={{
                    marginTop: 20
                }}>
                    <TouchableOpacity onPress={() => { Alert.alert('Agustin Wet', 'Programador Full-Stack en Technisys', [{ text: 'Ok' }]) }}>
                        <Image 
                        style={{
                            alignSelf: 'center',
                            borderRadius: 5
                        }}
                        blurRadius={2}
                        source={{
                            uri: 'https://res.cloudinary.com/dq2mv5fxs/image/upload/c_crop,h_480,w_620,x_175,y_140/v1640362196/Yo_qflogg.jpg',
                            width:  300,
                            height: 200
                        }}
                        />
                    </TouchableOpacity>
                    <CustomButton
                        text='Donaciones'
                        onPress={() => { setModalVisibility(true) }}
                        style={{
                            width: '80%',
                            marginVertical: 10,
                            alignSelf: 'center'
                        }}
                    />
                </View>

            </View>
        </View>
    )
}
export { Home };

const styles = StyleSheet.create({
    modalStyles: {
        margin: 'auto',
        padding: 15,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: '75%',
    },
    modalContent: {
        padding: 10,
        marginBottom: 5
    },
    blurStyles: {
        height: '100%',
        width: '100%'
    },
    modalButton: {
        display: 'flex',
        backgroundColor: Colors.mainColor,
        width: 150,
        padding: 5,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 25,
        alignSelf: 'center'
    },
    pageTitle: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 20
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        alignSelf: 'center'
    },
    buttonsPlace: {
        width: '40%',
        marginHorizontal: '5%'
    }
});