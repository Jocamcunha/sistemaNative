import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { cadastrar } from "../services/auth";

export default function Cadastro({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function realizarCadastro() {
        if (!email || !senha) {
            alert("Preencha todos os campos.");
            return;
        }

        try {
            await cadastrar(email, senha);
            alert("Usuário cadastrado com sucesso!");
            navigation.navigate('Login');
        } catch (error) {
            alert("Não foi possível realizar o cadastro.");
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <View style={styles.botao}>
                <Button
                    title="Cadastrar"
                    onPress={realizarCadastro}
                />
            </View>

            <View style={styles.botao}>
                <Button
                    title="Já tem uma conta? Acesse"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
    },

    botao: {
        marginBottom: 10,
    },
});
