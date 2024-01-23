import { FlatList, StyleSheet, View } from 'react-native';
import { Material } from '../materials';
import Element from '../Element/Element';

type Props = {
    list: Material[];
};

const List = ({ list }: Props) => {
    return (
        <View>
            <FlatList
                data={list}
                renderItem={({ item }) => <Element material={item} />}
                keyExtractor={(item) => item.material}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({});

export default List;
