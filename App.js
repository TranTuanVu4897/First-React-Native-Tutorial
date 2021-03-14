import React, { useState } from 'react'; //this use hook
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        { name: 'John', id: '1' },
        { name: 'Mike', id: '2' },
        { name: 'Tome', id: '3' },
        { name: 'Mart', id: '4' },
        { name: 'Anna', id: '5' },
        { name: 'Bobs', id: '6' },
        { name: 'Lizt', id: '7' },
        { name: 'Nine', id: '8' },
        { name: 'Trav', id: '9' },
        { name: 'Cerv', id: '10' },
        { name: 'Dodg', id: '11' },
        { name: 'Illi', id: '12' },
    ]);

    return (
        <View style={styles.container}>
            {/* less code than scroll view, performance better? */}
            <FlatList
                numColumns={2}
                keyExtractor={item => item.id}
                data={people}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.name}</Text>
                )}
            />
            {/* <ScrollView>
                {people.map(i => (
                    <View key={i.key}>
                        <Text style={styles.item}>{i.name}</Text>
                    </View>
                ))}
            </ScrollView> */}
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
