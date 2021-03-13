import React, { useState } from 'react'; //this use hook
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
    const [name, setName] = useState('MT');
    const [age, setAge] = useState(30);

    return (
        <View style={styles.container}>
            <Text>Enter name:</Text>
            <TextInput
                multiline //multiple line see more at https://reactnative.dev/docs/textinput
                style={styles.input}
                placeholder="e.g. John Doe"
                onChangeText={val => setName(val)}
            />
            <Text>Enter age:</Text>
            <TextInput
                keyboardType="numeric" //type input. see more at https://reactnative.dev/docs/textinput
                style={styles.input}
                placeholder="e.g. 99"
                onChangeText={val => setAge(val)}
            />
            <Text>
                Name: {name}, age: {age}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
});
