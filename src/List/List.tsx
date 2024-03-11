import { StyleSheet, ScrollView } from 'react-native';
import { Material } from '../materials';
import { DataTable } from 'react-native-paper';

type Props = {
    list: Material[];
};

const List = ({ list }: Props) => {
    return (
        <ScrollView>
            <DataTable style={styles.table}>
                <DataTable.Header style={styles.header}>
                    <DataTable.Title textStyle={styles.materialHeaderText}>
                        Material
                    </DataTable.Title>
                    <DataTable.Title textStyle={styles.categoryHeaderText}>
                        Categoría
                    </DataTable.Title>
                </DataTable.Header>
                {list.map((material) => (
                    <DataTable.Row key={material.material} style={styles.row}>
                        <DataTable.Cell textStyle={styles.material}>
                            {material.material}
                        </DataTable.Cell>
                        <DataTable.Cell textStyle={styles.category}>
                            {material.category}
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    table: {
        backgroundColor: '#699ba0',
        paddingTop: 30,
    },
    header: {},
    materialHeaderText: {
        fontSize: 18,
    },
    categoryHeaderText: {
        fontSize: 18,
    },
    row: {
        borderRadius: 14,
        backgroundColor: '#bdc9ce',
        borderColor: '#000000',
        margin: 0.5,
    },
    category: {
        color: '#000',
    },
    material: {
        color: '#000',
        flex: 3,
    },
});

export default List;
