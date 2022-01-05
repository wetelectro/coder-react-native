import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeThemeColor, changeFontColor } from '../../Store/AppState/appState';
import CustomButton from '../UI/CustomButton';

const Settings = (props) => {
    const themeColor = useSelector( state => state.app.themeColor );
    const fontColor = useSelector( state => state.app.fontColor );
    const dispatch = useDispatch();
    const [currentColor, setCurrentColor] = useState(themeColor);
    const [currentFontColor,setCurrentFontColor] = useState(fontColor);

    return(
        <View style={styles.pages}>
            
            {/*Theme color setting*/}
            <View style={styles.block}>
                <Text style={styles.textTitle}>Elegir color de tema</Text>
                <View style={styles.container}>
                    <Text style={styles.textMessage}>Color Actual : {themeColor}</Text>
                    <TextInput
                        placeholder='#rrggbb'
                        placeholderTextColor="#909090"
                        style={styles.textInput}
                        onChangeText={(value) => {
                            setCurrentColor(value);
                        }}
                        value={currentColor}
                    />
                    <CustomButton
                        text='Cambiar Color'
                        onPress={() => {
                            dispatch(changeThemeColor(currentColor));
                        }}
                    />
                </View>
            </View>

            {/*Font color setting*/}
            <View style={styles.block}>
                <Text style={styles.textTitle}>Elegir color de fuente</Text>
                <View style={styles.container}>
                    <Text style={styles.textMessage}>Color Actual : {fontColor}</Text>
                    <TextInput
                        placeholder='#rrggbb'
                        placeholderTextColor="#909090"
                        style={styles.textInput}
                        onChangeText={(value) => {
                            setCurrentFontColor(value);
                        }}
                        value={currentFontColor}
                    />
                    <CustomButton
                        text='Cambiar Color'
                        onPress={() => {
                            dispatch(changeFontColor(currentFontColor));
                        }}
                    />
                </View>
            </View>

        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    pages: {
        padding: 15
    },
    block: {
        marginBottom: 30
    },
    container: {
        marginLeft: 15
    },
    textTitle: {
        fontSize: 18,
        marginBottom: 10
    },textInput: {
        paddingHorizontal: 5,
        backgroundColor: '#ffffff',
        marginVertical: 10,
        borderRadius: 5,
        color: '#505050',
        width: 150,
        textAlign: 'center'
    },
    textMessage: {
        marginVertical: 5,
        color: '#202020'
    }
})