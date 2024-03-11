import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
    term: string;
    onTermChange: (text: string) => void;
};

const SearchBar = ({ term, onTermChange }: Props) => {
    return (
        <View style={styles.searchBar}>
            <TextInput
                style={styles.text}
                onChangeText={onTermChange}
                value={term}
                placeholder="Busca un material"
                placeholderTextColor="#444"
                autoFocus
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        borderWidth: 2,
        borderColor: '#000000',
        textDecorationColor: '#000000',
        borderRadius: 5,
        fontSize: 15,
    },
    searchBar: {
        paddingTop: 20,
        marginBottom: 20,
    },
});

export default SearchBar;
