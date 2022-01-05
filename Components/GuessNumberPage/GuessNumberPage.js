import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import CustomButton from './../UI/CustomButton';
import { useEffect } from 'react/cjs/react.development';
import Colors from './../../Constants/colors.json';

const GuessNumberApp = () => {

    const [secretNumber, setSecretNumber] = useState();
    const [userNumber, setUserNumber] = useState(0);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        setSecretNumber(Math.trunc( Math.random() * 100 ));
    },[])

    const makeGuess = () => {
        if( secretNumber === parseInt(userNumber) ){
            setFeedback('Ganaste');
        }else{
            if( secretNumber <= parseInt(userNumber) ){
                setFeedback('El numero que intentas adivinar es menor a ' + userNumber);
            }
            if( secretNumber >= parseInt(userNumber) ){
                setFeedback('El numero que intentas adivinar es mayor a ' + userNumber);
            }
        }
        setUserNumber('');
    }

    return(
        <View>
            <Text style={styles.pageTitle}>Adivina el Numero</Text>
            <Text style={styles.instructions}>Ingresa un numero entre 0 y 100</Text>

            {feedback ? <Text style={styles.alertStyle}>{feedback}</Text> : null}

            <View>
                <TextInput
                    style={styles.numberInput}
                    keyboardType="numeric"
                    value={userNumber.toString()}
                    onChangeText={(value) => {
                        setUserNumber(value);
                    }}
                />
                <View style={styles.buttonWrapper}>
                    <CustomButton
                        text='Re-Generate'
                        style={{
                            width: 100,
                            marginRight: 10,
                            backgroundColor: Colors.dangerColor
                        }}
                        onPress={() => {
                            setUserNumber(0);
                            setSecretNumber(Math.trunc( Math.random() * 100 ));
                            setFeedback('Nuevo numero generado, comienza a adivinar');
                        }}
                    />
                    <CustomButton
                        text='Adivinar'
                        style={{
                            width: 100
                        }}
                        onPress={makeGuess}
                    />
                </View>
            </View>
        </View>
    )
}

export default GuessNumberApp;

const styles = StyleSheet.create({
    pageStyle: {

    },
    pageTitle: {
        fontSize: 24,
        alignSelf: 'center',
        marginVertical: 20
    },
    numberInput: {
        backgroundColor: '#dadada',
        margin: 10,
        padding: 5,
        width: 200,
        alignSelf: 'center',
        textAlign: 'center'
    },
    buttonWrapper: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    alertStyle: {
        padding: 10,
        backgroundColor: '#B7FFB3',
        margin: 15,
        borderRadius: 5,
        borderColor: '#88D13F',
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: 'center',
        width: 260,
        alignSelf: 'center'
    },
    instructions: {
        textAlign: 'center'
    }
});