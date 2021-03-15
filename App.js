import React, { useState } from 'react'; //this use hook
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './component/header';
import TodoItem from './component/todoItem';
import AddTodo from './component/addTodo';

export default function App() {
    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'buy coffee', key: '2' },
        { text: 'buy coffee', key: '3' },
    ]);

    const pressHandler = key => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.key != key);
        });
    };

    const submitHandler = text => {
        if (text.length > 3) {
            setTodos(prevTodos => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos,
                ];
            });
        } else {
            Alert.alert('Oops!', 'Todos must be over three chars long', [
                {
                    text: 'Understood',
                    onPress: () => console.log('alert close'),
                },
            ]);
        }
    };
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <TodoItem item={item} pressHandler={pressHandler} />
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
});
