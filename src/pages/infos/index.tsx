import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logo-transparente.png';
import LoginIcon from '../../assets/logo-transparente-escura-horizontal.png';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function LearnMore() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [activeButton, setActiveButton] = useState<string>('');

  return (
    <ScrollView contentContainerStyle={style.container}>
      {/* Cabeçalho */}
      <View style={style.header}>
        {/* Logo à Esquerda */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={Logo} style={style.logo} resizeMode="contain" />
        </TouchableOpacity>

        {/* Imagem de Login à Direita */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={LoginIcon} style={style.loginIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {/* Botões Interativos */}
      <View style={style.buttonsContainer}>
        <TouchableOpacity
          style={[style.button, activeButton === 'approaches' && style.buttonPressed]}
          onPress={() => {
            setActiveButton('approaches');
            navigation.navigate('Approaches');
          }}
        >
          <Text style={style.buttonText}>Quem somos?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.button, activeButton === 'mentalHealth' && style.buttonPressed]}
          onPress={() => {
            setActiveButton('mentalHealth');
            navigation.navigate('MentalHealthData');
          }}
        >
          <Text style={style.buttonText}>Abordagens Terapêutica</Text>
        </TouchableOpacity>
      </View>

      {/* Título Principal */}
      <Text style={style.title}>Saúde Mental Masculina: Cuidando da Mente com Empatia</Text>

      {/* Seção de Introdução */}
      <Text style={style.paragraph}>
        A saúde mental é um aspecto essencial do bem-estar geral, mas, historicamente, os homens têm enfrentado desafios únicos quando se trata de buscar apoio psicológico. Questões como estigma, pressão social e a expectativa de serem "fortes" muitas vezes impedem que homens falem abertamente sobre suas emoções e dificuldades.
      </Text>

      {/* Texto Informativo */}
      <View style={style.section}>
        <Text style={style.sectionTitle}>Por Que Falar sobre Saúde Mental é Importante?</Text>
        <Text style={style.paragraph}>
          - <Text style={{ fontWeight: 'bold' }}>Quebra de Estigmas</Text>: Discutir saúde mental ajuda a desmistificar problemas como depressão, ansiedade e estresse, mostrando que todos, independentemente do gênero, podem passar por dificuldades emocionais.
        </Text>
        <Text style={style.paragraph}>
          - <Text style={{ fontWeight: 'bold' }}>Melhora na Qualidade de Vida</Text>: Cuidar da saúde mental pode levar a relacionamentos mais saudáveis, aumento da produtividade e uma vida mais satisfatória.
        </Text>
        <Text style={style.paragraph}>
          - <Text style={{ fontWeight: 'bold' }}>Promoção do Autoconhecimento</Text>: O processo terapêutico oferece um espaço seguro para que os homens explorem suas emoções e identifiquem padrões de comportamento, promovendo crescimento pessoal.
        </Text>
      </View>


      <View style={style.section}>
        <Text style={style.sectionTitle}>Sinais de Alerta</Text>
        <Text style={style.paragraph}>
          É importante estar atento a alguns sinais que podem indicar a necessidade de buscar apoio:
        </Text>
        <Text style={style.paragraph}>- Mudanças de humor drásticas</Text>
        <Text style={style.paragraph}>- Isolamento social</Text>
        <Text style={style.paragraph}>- Dificuldade para dormir</Text>
        <Text style={style.paragraph}>- Aumento do uso de álcool ou substâncias</Text>
        <Text style={style.paragraph}>- Sentimentos persistentes de tristeza ou ansiedade</Text>
      </View>

      <View style={style.section}>
        <Text style={style.sectionTitle}>Como o MenTal Pode Ajudar</Text>
        <Text style={style.paragraph}>
          Nosso aplicativo é projetado para conectar homens a psicólogos que compreendem suas necessidades específicas. Através de uma abordagem personalizada, você pode encontrar um profissional que:
        </Text>
        <Text style={style.paragraph}>
          - <Text style={{ fontWeight: 'bold' }}>Entenda as Questões Masculinas</Text>: Profissionais que reconhecem os desafios únicos enfrentados pelos homens.
        </Text>
        <Text style={style.paragraph}>
          - <Text style={{ fontWeight: 'bold' }}>Utilize Abordagens Adaptadas</Text>: Métodos que ressoam com a experiência masculina, promovendo um ambiente de confiança.
        </Text>
        <Text style={style.paragraph}>
          - <Text style={{ fontWeight: 'bold' }}>Ofereça Flexibilidade</Text>: Agende sessões no seu próprio ritmo e no conforto da sua casa.
        </Text>
      </View>

      {/* Rodapé */}
      <Text style={style.footer}>
        Vamos Falar? Buscar ajuda é um sinal de força. Use o MenTal para encontrar o suporte que você merece.
      </Text>

      {/* Botão de Cadastro */}
      <TouchableOpacity
        style={style.registerButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={style.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
