import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '../home/styles';

export default function Home() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/backgroundhome.png')}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo-transparente.png')} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Comece a transformação que você merece...</Text>
        <Text style={styles.description}>
          Descubra a abordagem terapêutica que mais combina com você, de forma simples e acolhedora.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.infoButton]}
          onPress={() => navigation.navigate('Infos')}
        >
          <Text style={styles.buttonText}>Saiba Mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
