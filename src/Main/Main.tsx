import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from '../SearchBar/SearchBar';
import List from '../List/List';
import { getMaterials } from '../materials';

const Main = () => {
    const [term, setTerm] = useState('');

    const list = getMaterials();

    const filteredList = list.filter(({ material, category }) => {
        // TODO: remove accents (áéíóú) from term and list
        return (
            material.toLowerCase().includes(term.toLowerCase()) ||
            category.toLowerCase().includes(term.toLowerCase())
        );
    });

    return (
        <View style={styles.main}>
            <SearchBar term={term} onTermChange={setTerm} />
            <List list={filteredList} />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        minWidth: '95%',
        paddingBottom: 380,
    },
});

export default Main;
