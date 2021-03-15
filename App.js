import React, { useState } from 'react'; //this use hook
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './component/header';

export default function App() {
    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'buy coffee', key: '2' },
        { text: 'buy coffee', key: '3' },
    ]);
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                {/* todo form */}
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => <Text>{item.text}</Text>}
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
