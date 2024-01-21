import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Material } from '../materials';

type Props = {
    material: Material;
};

const Element = ({ material }: Props) => {
    return (
        <View style={styles.table}>
            <Text style={styles.text}>{material.material}</Text>
            <Text style={styles.text}>{material.category}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    table: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text: {
        color: '#fff',
    },
});

export default Element;
