import { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { Task } from './Task.js';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';

import CustomButton from '../UI/CustomButton.js';
import { addTask, deleteTask, finishTask } from '../../Store/ToDoSlice/todoSlice.js';

const ToDo = (props) => {
  const [message, setMessage] = useState('');

  const list = useSelector( state => state.todo.tasks );
  const dispatch = useDispatch();

  console.log(list);
    
  const handleChange = (value) => {
    setMessage(value);
  }

  const createTask = () => {
    dispatch(addTask(message));
    setMessage('');
  }

  return(
      <View style={styles.todo}>

        <View style={styles.inputWrapper}>
          <TextInput 
            placeholder='enter some information'
            placeholderTextColor="#909090" 
            style={styles.textInputStyle}
            onChangeText={handleChange}
            value={message}
          />
          <CustomButton
            text=''
            style={{ width: 60, height: 36 }}
            onPress={createTask}
            icon='ios-add-circle-outline'
          />
        </View>

        <FlatList 
          style={styles.taskListStyle}
          data={list}
          keyExtractor={(item) => { return item.id }}
          renderItem={ item => (
            <Task
              message={item.item.text}
              onDel={() => {
                dispatch(deleteTask(item.item.id));
              }}
              onEnd={() => {
                dispatch(finishTask(item.item.id))
              }}
              isEnded={item.item.isFinished}
            />
          )}
        />
      </View>
  );

}

const styles = StyleSheet.create({
  todo: {
    padding: 15
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 20
  },
  textInputStyle: {
    backgroundColor: '#333333',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 20,
    borderRadius: 5,
    flex: 4
  },
  addButtonStyle: {
    flex: 1
  },
  taskListStyle: {
    height: 300,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#333333',
    borderRadius: 5
  }
})

export { ToDo };