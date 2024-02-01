import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const App: React.FC = (): JSX.Element => {
  const [currentScreen, setCurrentScreen] = useState<string | null>(null);

  const navigateToProfile = (profileType: string) => {
    setCurrentScreen(profileType);
  };

  return (
    <SafeAreaView>
      {currentScreen === 'personal' && (
        <ScrollView contentContainerStyle={styles.svContenedor}>
          <Text style={styles.encabezadoRojo}>Alejandro Isaac Gonzalez Zelaya</Text>
          <Image
            style={styles.fotoperfil}
            source={require('./imagenes/Alejandro.jpeg')}
          />
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Lugar de Nacimiento:</Text>
            <Text style={styles.seccionContentNegro}>Tegucigalpa, Honduras</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Fecha de Nacimiento:</Text>
            <Text style={styles.seccionContentNegro}>25 de Enero del 2004</Text>
            </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Pasatiempos:</Text>
            <Text style={styles.seccionContentNegro}>
              Me gusta el deporte,Voy al gimnasio,{'\n'}
              ME gustan los corridos tumbados{'\n'}
              y me gustan las mujeres.
            </Text>
          </View>
          {/* Agrega más detalles sobre tu perfil personal aquí */}
          <TouchableOpacity onPress={() => setCurrentScreen(null)}>
            <Text style={styles.botonNavegacion}>Regresar</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {currentScreen === 'admirado' && (
        <ScrollView contentContainerStyle={styles.svContenedor}>
          <Text style={styles.encabezadoAzul}>Canserbero</Text>

          <View style={styles.imagenContainer}>
            <Image
              style={styles.fotoperfil}
              source={require('./imagenes/Cancerbero.jpg')}
            />
          </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Nombre:</Text>
            <Text style={styles.seccionContentNegro}>Canserbero </Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Fecha de Nacimiento:</Text>
            <Text style={styles.seccionContentNegro}>11 de marzo de 1988, Caracas, Venezuela</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Pasatiempos:</Text>
            <Text style={styles.seccionContentNegro}>Musica</Text>
          </View>
          <View style={styles.textoCentrado}>
            <Text style={styles.seccionContentNegro}>
              {'Canserbero, fue un rapero, compositor y activista venezolano. Es considerado como uno de los exponentes más significativos del rap independiente en su país de origen​ y en el resto de América Latina'}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setCurrentScreen(null)}>
            <Text style={styles.botonNavegacion}>Regresar</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {!currentScreen && (
        <View style={styles.Inicio}>
          {/* Pantalla de bienvenida con botones de navegación */}
          <Text style={styles.encabezadoOcre}>Hola</Text>
          <TouchableOpacity onPress={() => navigateToProfile('personal')}>
            <Text style={styles.botonNavegacion}>Ver a Alejandro Gonzalez</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToProfile('admirado')}>
            <Text style={styles.botonNavegacion}>Ver a Canserbero</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Inicio: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20, 
  },
  botonNavegacion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#001F3F',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    textAlign: 'center',
  },
  encabezadoAzul: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#001F3F',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  encabezadoOcre: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  seccionContentNegro: {
    fontSize: 18,
    color: 'black',
  },
  fotoperfil: {
    width: 200,
    height: 220,
  },
  imagenContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  regresar: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  seccion: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  seccionContent: {
    fontSize: 18,
    color: 'red',
  },
  seccionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  seccionHeaderAzul: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001F3F',
  },
  svContenedor: {
    alignItems: 'center',
  },
  textoCentrado: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  encabezadoRojo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#8B0000', 
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default App;