import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from '../SearchBar/SearchBar';
import List from '../List/List';
import { getMaterials } from '../materials';

const Main = () => {
    const [term, setTerm] = useState('');

    const list = getMaterials();

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} />
            <List list={list} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Main;
