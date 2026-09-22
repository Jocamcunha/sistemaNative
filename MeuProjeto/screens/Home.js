import { View, Text, Button, StyleSheet } from "react-native";
import { auth } from "../config/firebase";
import { sair } from "../services/auth";

export default function Home({ navigation }) {

    async function realizarLogout() {
        await sair();
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Seja bem-vindo(a)!</Text>

            <Text style={styles.usuario}>
                Usuário: {auth.currentUser?.email}
            </Text>

            <View style={styles.botao}>
                <Button
                    title="Sair"
                    onPress={realizarLogout}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    usuario: {
        fontSize: 16,
        marginBottom: 25,
        color: '#555',
    },

    botao: {
        width: 150,
    },
});
