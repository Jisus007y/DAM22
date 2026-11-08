import { useState } from "react";
import { Text, View, TextInput, KeyboardAvoidingView, Pressable, Keyboard, Platform, StyleSheet, Alert, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Inicio({ onRegresar }) {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    function iniciarSesion() {
        if (!correo.trim() || !contrasena.trim()) {
            Alert.alert("Error", "Por favor completa todos los campos");
            return;
        }
        Alert.alert("Éxito", `Bienvenido ${correo}`);
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar style="auto" />

            {/* CAMBIO CLAVE: Ya no es Pressable, es TouchableWithoutFeedback */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.contenido}>
                    <Text style={styles.titulo}>Iniciar Sesión</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tu correo"
                        value={correo}
                        onChangeText={setCorreo}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tu contraseña"
                        value={contrasena}
                        onChangeText={setContrasena}
                        secureTextEntry
                    />

                    <Pressable style={[styles.boton, styles.botonPrimario]} onPress={iniciarSesion}>
                        <Text style={styles.textoBoton}>Iniciar Sesión</Text>
                    </Pressable>

                    <Pressable 
                        style={[styles.boton, styles.botonSecundario]} 
                        onPress={() => {
                            console.log("Botón Regresar presionado"); // para que lo veas en la consola
                            onRegresar();
                        }}
                    >
                        <Text style={[styles.textoBoton, styles.textoBotonSecundario]}>Regresar</Text>
                    </Pressable>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    contenido: {
        flex: 1,
        justifyContent: 'center',
        padding: 24
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff'
    },
    boton: {
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    botonPrimario: {
        backgroundColor: '#007AFF',
    },
    botonSecundario: {
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc'
    },
    textoBoton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textoBotonSecundario: {
        color: '#333',
    }
});