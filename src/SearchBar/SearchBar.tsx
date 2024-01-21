import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
    term: string;
    onTermChange: (text: string) => void;
};

const SearchBar = ({ term, onTermChange }: Props) => {
    return (
        <View>
            <TextInput
                style={styles.text}
                onChangeText={onTermChange}
                value={term}
                placeholder="Buscá un material"
                placeholderTextColor="#777"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
    },
});

export default SearchBar;
