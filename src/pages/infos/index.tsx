import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logo-transparente.png';
import LoginIcon from '../../assets/Imagem1.png';
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
          style={[style.button, activeButton === 'about' && style.buttonPressed]}
          onPress={() => setActiveButton('about')}
        >
          <Text style={style.buttonText}>Quem somos?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.button, activeButton === 'mentalHealth' && style.buttonPressed]}
          onPress={() => setActiveButton('mentalHealth')}
        >
          <Text style={style.buttonText}>Abordagens Terapêuticas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.button, activeButton === 'ajuda' && style.buttonPressed]}
          onPress={() => setActiveButton('ajuda')}
        >
          <Text style={style.buttonText}>Como podemos ajudar?</Text>
        </TouchableOpacity>
      </View>

      {/* Título Principal */}
      {activeButton === 'ajuda' && (
        <Text style={style.title}>Saúde Mental Feminina: Cuidando da Mente com Consciência e Autocuidado</Text>
      )}

      {/* Seção de Introdução */}
      {activeButton === 'ajuda' && (
        <>
          <Text style={style.paragraph}>
            A saúde mental é uma dimensão essencial do bem-estar integral, especialmente em fases da vida que trazem novas perspectivas, desafios e transformações. Mulheres maduras frequentemente conciliam múltiplos papéis e responsabilidades, o que pode afetar sua qualidade emocional. Cuidar da mente é um gesto de respeito consigo mesma.
          </Text>

          <View style={style.section}>
            <Text style={style.sectionTitle}>Por Que Falar sobre Saúde Mental é Importante?</Text>
            <Text style={style.paragraph}>
              - <Text style={{ fontWeight: 'bold' }}>Quebra de Estigmas</Text>: Falar sobre saúde mental ajuda a desconstruir tabus, mostrando que emoções como ansiedade, tristeza ou sobrecarga são humanas e legítimas.
            </Text>
            <Text style={style.paragraph}>
              - <Text style={{ fontWeight: 'bold' }}>Qualidade de Vida</Text>: O equilíbrio emocional contribui para relações mais saudáveis, mais energia no dia a dia e maior clareza nas decisões.
            </Text>
            <Text style={style.paragraph}>
              - <Text style={{ fontWeight: 'bold' }}>Autoconhecimento</Text>: O processo terapêutico permite identificar padrões, redescobrir forças e cultivar autoestima com leveza e profundidade.
            </Text>
          </View>

          <View style={style.section}>
            <Text style={style.sectionTitle}>Sinais de Alerta</Text>
            <Text style={style.paragraph}>
              Estar atenta a si mesma é um ato de amor. Alguns sinais podem indicar que é hora de buscar apoio:
            </Text>
            <Text style={style.paragraph}>- Alterações no sono ou apetite</Text>
            <Text style={style.paragraph}>- Sensação constante de cansaço ou irritação</Text>
            <Text style={style.paragraph}>- Falta de motivação para atividades antes prazerosas</Text>
            <Text style={style.paragraph}>- Dificuldade em lidar com mudanças ou perdas</Text>
            <Text style={style.paragraph}>- Sensação de estar “carregando o mundo” sozinha</Text>
          </View>

          <View style={style.section}>
            <Text style={style.sectionTitle}>Como o Colmeia Pode Ajudar</Text>
            <Text style={style.paragraph}>
              O Colmeia é um aplicativo pensado com carinho para apoiar mulheres que desejam se reconectar com sua saúde emocional. Por meio de um questionário leve e intuitivo, você descobre qual abordagem terapêutica combina mais com seu jeito de ser.
            </Text>
            <Text style={style.paragraph}>
              - <Text style={{ fontWeight: 'bold' }}>Acolhimento Personalizado</Text>: Entendemos que cada mulher tem sua história, seus desafios e sua forma de sentir o mundo.
            </Text>
            <Text style={style.paragraph}>
              - <Text style={{ fontWeight: 'bold' }}>Abordagens Terapêuticas Diversas</Text>: Escolha profissionais que utilizam técnicas adaptadas à sua realidade.
            </Text>
            <Text style={style.paragraph}>
              - <Text style={{ fontWeight: 'bold' }}>Cuidado no seu tempo</Text>: Agende sessões com liberdade, no seu ritmo e com quem você se sentir segura.
            </Text>
          </View>
        </>
      )}

      {activeButton === 'mentalHealth' && (
        <View style={style.section}>
          <Text style={style.sectionTitle}>Abordagens Terapêuticas</Text>
          <Text style={style.paragraph}>
            Cada mulher possui uma história única e, por isso, o Colmeia propõe diferentes abordagens terapêuticas que se adequam ao seu momento e perfil emocional. Através do nosso questionário, você identifica qual delas mais se conecta com a sua forma de sentir, pensar e agir.
          </Text>
          <Text style={style.paragraph}>
            Dentre elas, você encontrará caminhos como:
            Terapia Cognitivo-Comportamental (prática e focada em resultados), Psicanálise (exploração do inconsciente), Junguiana (baseada em símbolos e arquétipos), Gestalt, Psicologia Positiva, entre outras. Cada uma contribui para que você compreenda melhor a si mesma e fortaleça seu bem-estar emocional.
          </Text>
        </View>
      )}

      {/* Seção Quem Somos */}
      {activeButton === 'about' && (
        <View style={style.section}>
          <Text style={style.sectionTitle}>Quem Somos</Text>
          <Text style={style.paragraph}>
            O Colmeia nasceu da iniciativa de um grupo de estudantes apaixonados por tecnologia e cuidado emocional. Nosso propósito é criar um ambiente acolhedor e funcional para mulheres que desejam compreender melhor sua saúde mental e buscar apoio com segurança e empatia.
          </Text>
          <Text style={style.paragraph}>
            Este aplicativo foi desenvolvido como parte de um projeto acadêmico com o intuito de unir tecnologia, psicologia e acessibilidade, respeitando as individualidades e promovendo o bem-estar emocional.
          </Text>
          <Text style={style.paragraph}>
            Acreditamos que toda mulher merece ter acesso à informação, escuta qualificada e ferramentas para florescer emocionalmente.
          </Text>
        </View>
      )}

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
