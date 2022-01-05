import { Pressable, Text, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Task = (props) => {

    const deleteTask = props.onDel;
    const finishTask = props.onEnd;
    
    return(
        <View style={styles.itemWrapper}>
            <Text style={ props.isEnded ? styles.itemTextFinished : styles.itemText }>{props.message}</Text>
            <Pressable style={{...styles.buttons, ...styles.doneButton}} onPress={finishTask}>
                <Text style={styles.buttonsText}>
                <Ionicons name={'ios-checkmark'} size={14} color='#fafafa' />
                </Text>
            </Pressable>
            <Pressable style={{...styles.buttons, ...styles.deleteButton}} onPress={deleteTask}>
                <Text style={styles.buttonsText}>
                    <Ionicons name={'ios-trash'} size={14} color='#fafafa' />
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    itemWrapper: {
        display: "flex",
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#cecece',
        alignItems: 'center'
    },
    itemText: {
        flex: 6,
    },
    itemTextFinished: {
        flex: 6,
        color: '#505050',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    buttons: {
        marginLeft: 10,
        paddingVertical: 2.5,
        paddingHorizontal: 7.5,
        backgroundColor: '#147ACF',
        borderRadius: 5
    },
    buttonsText: {
        color: 'white'
    },
    deleteButton: {
        backgroundColor: '#D73710'
    },
    doneButton: {
        backgroundColor: '#61AB3A'
    }
})

export { Task };