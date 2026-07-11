import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Logo from './assets/Productos/a.jpg';
import HeaderImg from './assets/Productos/b.jpg';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Image source={HeaderImg} style={styles.headerImg} />
        <Text style={styles.headerTitle}>Tienda Videojuegos</Text>
      </View>

      <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>producto1</Text>
        <Image source={Logo} style={styles.ImgProducto} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => { alert('prado bañate'); }}
        >
          <Text style={styles.subtitulo}>agregar al carrito</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>producto1</Text>
        <Image source={Logo} style={styles.ImgProducto} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => { alert('prado bañate'); }}
        >
          <Text style={styles.subtitulo}>agregar al carrito</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Tienda</Text>
        <Text style={styles.footerSubtext}>Todos los derechos reservados</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304000',
  },
  headerImg: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    zIndex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.85)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  tarjetas: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    margin: 12,
    padding: 16,
    borderRadius: 10,
  },
  ImgProducto: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  Titulo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#304000',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 150,
    alignItems: 'center',
  },
  subtitulo: {
    color: '#fff',
  },
  footer: {
    width: '100%',
    backgroundColor: '#304000',
    alignItems: 'center',
    paddingVertical: 24,
    marginTop: 12,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerSubtext: {
    color: '#d0d0d0',
    fontSize: 13,
    marginTop: 4,
  },
});
