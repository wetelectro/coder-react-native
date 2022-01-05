import { Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useSelector } from 'react-redux';

const CustomButton = (props) => {
    const themeColor = useSelector( state => state.app.themeColor );
    const fontColor = useSelector( state => state.app.fontColor );

    const buttonStyle = {
        display: 'flex',
        backgroundColor: themeColor,
        width: 150,
        padding: 5,
        alignItems: 'center',
        borderRadius: 5,
    }

    return(
        <Pressable 
            style={{
                ...buttonStyle,
                ...props.style
            }}
            onPress={ props.onPress ? props.onPress : null }
        >
            <Text style={{ color: fontColor }}>
                <Ionicons name={props.icon ? props.icon : null} size={24} color='#fafafa' />{props.text}
            </Text>
        </Pressable>
    )
}


export default CustomButton;