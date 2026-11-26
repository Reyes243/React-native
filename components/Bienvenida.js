import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Bienvenida({
  usuario,
  onCerrarSesion,
  onIrARegistro,
}) {
  const nombre = usuario?.nombre || 'Invitado';
  const correo = usuario?.correo || 'Sin sesión iniciada';
  const inicial = nombre.charAt(0).toUpperCase();

  return (
    <View style={styles.card}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{inicial}</Text>
      </View>

      <Text style={styles.title}>¡Bienvenido, {nombre}!</Text>
      <Text style={styles.subtitle}>
        Has ingresado correctamente a la aplicación.
      </Text>

      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Usuario</Text>
          <Text style={styles.infoValue}>{nombre}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Correo</Text>
          <Text style={styles.infoValue}>{correo}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Estado</Text>
          <Text style={styles.infoValue}>
            {usuario ? 'Sesión activa' : 'Modo vista previa'}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        activeOpacity={0.85}
        onPress={onCerrarSesion}
      >
        <Text style={styles.primaryButtonText}>
          {usuario ? 'Cerrar sesión' : 'Ir a Iniciar sesión'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        activeOpacity={0.85}
        onPress={onIrARegistro}
      >
        <Text style={styles.secondaryButtonText}>Crear otra cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  badge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#eef2ff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4f46e5',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 22,
  },
  infoBox: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  infoLabel: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#0f172a',
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#4f46e5',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 10,
  },
  secondaryButtonText: {
    color: '#334155',
    fontSize: 15,
    fontWeight: '600',
  },
});
