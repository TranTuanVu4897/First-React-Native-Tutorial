import React, { useState } from 'react'; //this use hook
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        { name: 'John', key: '1' },
        { name: 'Mike', key: '2' },
        { name: 'Tome', key: '3' },
        { name: 'Mart', key: '4' },
        { name: 'Anna', key: '5' },
        { name: 'Bobs', key: '6' },
        { name: 'Lizt', key: '7' },
        { name: 'Nine', key: '8' },
        { name: 'Trav', key: '9' },
        { name: 'Cerv', key: '10' },
        { name: 'Dodg', key: '11' },
        { name: 'Illi', key: '12' },
    ]);

    return (
        <View style={styles.container}>
            <ScrollView>
                {people.map(i => (
                    <View key={i.key}>
                        <Text style={styles.item}>{i.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'aqua',
        fontSize: 24,
    },
});
