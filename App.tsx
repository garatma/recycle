import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './src/Main/Main';
import { PaperProvider } from 'react-native-paper';

const App = () => {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Main />
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#699ba0',
    },
    text: {
        color: '#fff',
    },
});

export default App;
