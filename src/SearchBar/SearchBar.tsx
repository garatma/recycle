import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SearchBar = () => {
    const [term, setTerm] = useState('');

    const onTermChange = (text: string) => {
        setTerm(text);
    };

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
