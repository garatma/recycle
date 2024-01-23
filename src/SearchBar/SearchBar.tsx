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
                placeholderTextColor="#777"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        borderWidth: 1,
        borderColor: '#aaa7a7',
        borderRadius: 5,
        fontSize: 15,
    },
    searchBar: { paddingTop: 170, paddingBottom: 30 },
});

export default SearchBar;
