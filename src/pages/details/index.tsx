import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { style } from './styles';
import { RootStackParamList } from '../../routes/index.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { THERAPIES } from '../../data/therapies'; // <- importa os dados completos

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;
type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function Details() {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<DetailsRouteProp>();

  const result = route.params?.result;
  const user = route.params?.user;

  const [name, setName] = useState(user?.name || '');
  const [age, setAge] = useState(user?.age || '');
  const [city, setCity] = useState(user?.city || '');
  const [state, setState] = useState(user?.state || '');
  const [plan, setPlan] = useState(user?.plan || '');
  const [accessibility, setAccessibility] = useState(user?.accessibility || '');

  useEffect(() => {
    if (!result && !user) {
      const fetchUserData = async () => {
        try {
          const data = await AsyncStorage.getItem('userDetails');
          if (data) {
            const parsed = JSON.parse(data);
            setName(parsed.name || '');
            setAge(parsed.age || '');
            setCity(parsed.city || '');
            setState(parsed.state || '');
            setPlan(parsed.plan || '');
            setAccessibility(parsed.accessibility || '');
          }
        } catch (error) {
          console.error('Erro ao carregar dados:', error);
        }
      };
      fetchUserData();
    }
  }, [result, user]);

  const handleSaveDetails = async () => {
    try {
      const updatedDetails = { name, age, city, state, plan, accessibility };
      await AsyncStorage.setItem('userDetails', JSON.stringify(updatedDetails));
      Alert.alert('Sucesso', 'Informações atualizadas com sucesso!');
      navigation.navigate('Perfil');
    } catch (error) {
      console.error('Erro ao salvar detalhes:', error);
      Alert.alert('Erro', 'Não foi possível salvar as informações.');
    }
  };

  if (result) {
    const abordagem = THERAPIES[result];

    return (
      <ScrollView style={style.container} contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={style.title}>Sua abordagem terapêutica ideal é:</Text>
        <Text style={style.result}>{result}</Text>

        <Text style={style.sectionTitle}>Definição</Text>
        <Text style={style.paragraph}>{abordagem.descricao.definicao}</Text>

        <Text style={style.sectionTitle}>Objetivos</Text>
        {abordagem.descricao.objetivos.map((item, idx) => (
          <Text key={idx} style={style.listItem}>• {item}</Text>
        ))}

        <Text style={style.sectionTitle}>Principais Técnicas</Text>
        {abordagem.descricao.tecnicas.map((item, idx) => (
          <Text key={idx} style={style.listItem}>• {item}</Text>
        ))}

        <Text style={style.sectionTitle}>Indicações</Text>
        {abordagem.descricao.indicacoes.map((item, idx) => (
          <Text key={idx} style={style.listItem}>• {item}</Text>
        ))}

        <Text style={style.sectionTitle}>Benefícios</Text>
        {abordagem.descricao.beneficios.map((item, idx) => (
          <Text key={idx} style={style.listItem}>• {item}</Text>
        ))}

        <Text style={style.sectionTitle}>Psicólogos Indicados</Text>
        {abordagem.psicologos.map((p, idx) => (
          <View key={idx} style={style.psicologoCard}>
            <Text style={style.psicologoNome}>{p.nome}</Text>
            <Text style={style.psicologoInfo}>Telefone: {p.telefone}</Text>
            <Text style={style.psicologoInfo}>Planos: {p.planos.join(', ')}</Text>
          </View>
        ))}

        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Home')}>
          <Text style={style.buttonText}>Voltar para Início</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Seus Dados</Text>

      <TextInput style={style.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={style.input} placeholder="Idade" value={age} onChangeText={setAge} />
      <TextInput style={style.input} placeholder="Cidade" value={city} onChangeText={setCity} />
      <TextInput style={style.input} placeholder="Estado" value={state} onChangeText={setState} />
      <TextInput style={style.input} placeholder="Plano" value={plan} onChangeText={setPlan} />
      <TextInput style={style.input} placeholder="Acessibilidade" value={accessibility} onChangeText={setAccessibility} />

      <TouchableOpacity style={style.button} onPress={handleSaveDetails}>
        <Text style={style.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
