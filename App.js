import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Registro from './components/Registro';
import Login from './components/Login';
import Bienvenida from './components/Bienvenida';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('login');
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  const handleRegistroExitoso = (nuevoUsuario) => {
    setUsuarioRegistrado(nuevoUsuario);
    setUsuarioActivo({
      nombre: nuevoUsuario.nombre,
      correo: nuevoUsuario.correo,
    });
    setPantallaActual('bienvenida');
  };

  const handleLoginExitoso = (usuario) => {
    setUsuarioActivo(usuario);
    setPantallaActual('bienvenida');
  };

  const handleCerrarSesion = () => {
    setUsuarioActivo(null);
    setPantallaActual('login');
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.navBar}>
          <TouchableOpacity
            style={[
              styles.navButton,
              pantallaActual === 'login' && styles.navButtonActive,
            ]}
            onPress={() => setPantallaActual('login')}
          >
            <Text
              style={[
                styles.navText,
                pantallaActual === 'login' && styles.navTextActive,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.navButton,
              pantallaActual === 'registro' && styles.navButtonActive,
            ]}
            onPress={() => setPantallaActual('registro')}
          >
            <Text
              style={[
                styles.navText,
                pantallaActual === 'registro' && styles.navTextActive,
              ]}
            >
              Registro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.navButton,
              pantallaActual === 'bienvenida' && styles.navButtonActive,
            ]}
            onPress={() => setPantallaActual('bienvenida')}
          >
            <Text
              style={[
                styles.navText,
                pantallaActual === 'bienvenida' && styles.navTextActive,
              ]}
            >
              Bienvenida
            </Text>
          </TouchableOpacity>
        </View>

        {pantallaActual === 'registro' && (
          <Registro
            onRegistroExitoso={handleRegistroExitoso}
            onIrALogin={() => setPantallaActual('login')}
          />
        )}

        {pantallaActual === 'login' && (
          <Login
            onLoginExitoso={handleLoginExitoso}
            onIrARegistro={() => setPantallaActual('registro')}
            usuarioRegistrado={usuarioRegistrado}
          />
        )}

        {pantallaActual === 'bienvenida' && (
          <Bienvenida
            usuario={usuarioActivo}
            onCerrarSesion={handleCerrarSesion}
            onIrARegistro={() => setPantallaActual('registro')}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 52 : 64,
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#e2e8f0',
    padding: 6,
    borderRadius: 12,
    marginBottom: 24,
    width: '100%',
  },
  navButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  navButtonActive: {
    backgroundColor: '#ffffff',
  },
  navText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
  },
  navTextActive: {
    color: '#4f46e5',
  },
});
