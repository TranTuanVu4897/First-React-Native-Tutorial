import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.boldText}>Hello</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.boldText}>
                    lorem <Text>ipsum</Text> dolor sit amet.
                </Text>
                <Text>lorem ipsum dolor sit amet.</Text>
                <Text>lorem ipsum dolor sit amet.</Text>
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
    header: {
        backgroundColor: 'pink',
        padding: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
    body: {
        backgroundColor: 'yellow',
        padding: 20,
        fontWeight: 'bold',
    },
});
