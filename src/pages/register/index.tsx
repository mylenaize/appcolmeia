import React, { useState } from 'react';
import { style } from './styles';
import Logo from '../../assets/logo-transparente-escura-horizontal.png';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      // Salva email e senha separadamente (como o login espera)
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login'); // Redireciona para login
    } catch (error) {
      console.error('Erro ao salvar dados do usuário:', error);
      Alert.alert('Erro', 'Não foi possível completar o cadastro.');
    }
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={style.logoContainer}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={style.title}>Seja bem-vindo!</Text>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={style.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={style.input}
        />
        <TextInput
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={style.input}
        />
      </View>
      <TouchableOpacity style={style.button} onPress={handleRegister}>
        <Text style={style.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={style.footerText}>
        Já tem uma conta?{' '}
        <Text style={style.footerLink} onPress={() => navigation.navigate('Login')}>
          Faça login
        </Text>
      </Text>
    </View>
  );
}
