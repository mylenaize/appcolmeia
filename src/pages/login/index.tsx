import React, { useState } from 'react';
import { style } from './styles';
import Logo from '../../assets/logo-transparente-escura-horizontal.png';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (storedEmail === email && storedPassword === password) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Questions', { user: { email } });
      } else {
        Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao verificar credenciais:', error);
      Alert.alert('Erro', 'Não foi possível realizar o login.');
    }
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={style.logoContainer}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={style.title}>Bem-vindo de volta!</Text>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={style.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={style.input}
        />
      </View>
      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={style.footerText}>
        Não tem uma conta?{' '}
        <Text style={style.footerLink} onPress={() => navigation.navigate('Register')}>
          Crie agora
        </Text>
      </Text>
    </View>
  );
}
