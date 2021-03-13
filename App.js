import React, { useState } from 'react'; //this use hook
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    const [name, setName] = useState('MT');

    const [person, setPerson] = useState({ name: 'mario', age: 40 }); //example for an object

    const clickHandler = () => {
        setName('TM');
        setPerson({ name: 'luigi', age: 45 });
    };

    return (
        <View style={styles.container}>
            <Text>My name is {name}</Text>
            <Text>
                His name is {person.name} and he is {person.age}
            </Text>
            <View style={styles.buttonContainer}>
                {/* button in react is self close tag */}
                <Button title="update state" onPress={clickHandler} />
            </View>
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
});
