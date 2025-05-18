import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/index.routes";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Questions'>;

const QUESTIONS = [
  {
    id: 1,
    question: "Quando está estressada, você…",
    options: [
      "Uso técnica simples (ex.: respirar e pensar)",
      "Reflito se há algo reprimido me incomodando",
      "Faço um desenho ou escrevo o que sinto",
      "Identifico o gatilho e tento mudar a reação.",
      "Paro para perceber meu corpo e o ambiente",
      "Faço uma lista de gratidão rápida"
    ],
  },
  {
    id: 2,
    question: "Ao receber uma crítica, você…",
    options: [
      "Anoto pontos para melhorar", 
      "Relembro situações antigas que tenham a ver",
      "Entendo qual resultado esse comportamento gera",
      "Reconheço minha emoção e falo com sinceridade",
      "Agradeço e destaco um lado positivo"
    ],
  },
  {
    id: 3,
    question: "Para tomar decisões, você…",
    options: [
      "Faço lista de prós e contras",
      "Lembro de padrões antigos que influenciam",
      "Ouço minha intuição ou sonho guia",
      "Vejo que consequência cada escolha traz",
      "Sinto no corpo o que me parece certo",
      "Busco meus valores e me inspiro neles"
    ],
  },
  {
    id: 4,
    question: "Diante de um obstáculo, você…",
    options: [
      "Faço um passo a passo para resolver",
      "Penso se isso vem de algo do meu passado",
      "Busco símbolos ou sonhos que ajudem a entender",
      "Analiso o que me leva a agir assim",
      "Fico atenta ao que sinto agora",
      "Penso no que há de bom nisso e sigo em frente"
    ],
  },
  {
    id: 5,
    question: "Sobre velhos hábitos, você…",
    options: [
      "Crio um plano claro para mudar",
      "Busco memórias que alimentam esse hábito",
      "Procuro o sentido simbólico por trás",
      "Analiso reforços que o mantêm vivo",
      "Testo algo novo e observo minhas sensações",
      "Celebro cada pequena conquista"
    ],
  },
  {
    id: 6,
    question: "Seu senso de identidade vem mais de…",
    options: [
      "Metas e pensamentos organizados",
      "Histórias e emoções do passado",
      "Sonhos, mitos e símbolos pessoais",
      "Hábitos e consequências no dia a dia",
      "Suas sensações no presente",
      "Suas forças e virtudes"
    ],
  },
  {
    id: 7,
    question: "Quando algo bom acontece, você…",
    options: [
      "Planejo como repetir o sucesso",
      "Penso se tem relação com minha infância",
      "Vê imagens ou sonhos que surgem",
      "Analiso o que reforçou esse comportamento",
      "Curto o momento sem pensar no passado",
      "Anoto em um diário de gratidão"
    ],
  },
  {
    id: 8,
    question: "Se sente ansiosa, você…",
    options: [
      "Faço respiração e questiono meu pensamento",
      "Investigo medos e desejos ocultos",
      "Uso arte ou imaginação ativa para me acalmar",
      "Identifico reação e tento substituí-la",
      "Conecto-me ao corpo e ao entorno",
      "Lembro de qualidades minhas que me sustentam"
    ],
  },
  {
    id: 9,
    question: "O que você espera de um terapeuta?",
    options: [
      "Ferramentas práticas e orientadas",
      "Entender meu inconsciente e sonhos",
      "Ajudar na minha jornada de autoconhecimento",
      "Planejar exercícios de comportamento",
      "Espaço acolhedor para me expressar",
      "Estimular minhas forças e otimismo"
    ],
  },
    {
    id: 10,
    question: "Para manter mudanças, você…",
    options: [
      "Segue um cronograma com metas",
      "Revisa conflitos que surgirem",
      "Vê o significado simbólico disso",
      "Monitora recompensas e punições",
      "Vive cada etapa com presença",
      "Reforça e celebra progressos"
    ],
  },
];

const ANSWER_MAP: { [key: number]: string[] } = {
  1: ["A", "B", "C", "D", "E", "F"],
  2: ["A", "B", "D", "E", "F"],
  3: ["A", "B", "C", "D", "E", "F"],
  4: ["A", "B", "C", "D", "E", "F"],
  5: ["A", "B", "C", "D", "E", "F"],
  6: ["A", "B", "C", "D", "E", "F"],
  7: ["A", "B", "C", "D", "E", "F"],
  8: ["A", "B", "C", "D", "E", "F"],
  9: ["A", "B", "C", "D", "E", "F"],
  10: ["A", "B", "C", "D", "E", "F"],
};

const therapyMap: { [key: string]: string } = {
  A: "Terapia Cognitivo-Comportamental (TCC)",
  B: "Psicanálise",
  C: "Psicoterapia Junguiana",
  D: "Terapia Analítico-Comportamental (TAC)",
  E: "Gestalt-terapia",
  F: "Psicologia Positiva"
};

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const navigation = useNavigation<NavigationProp>();

  const handleAnswer = (option: string) => {
    const questionId = QUESTIONS[currentQuestionIndex].id;
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // ✅ Calcular pontuação das abordagens
      const scores: { [key: string]: number } = {
        A: 0, B: 0, C: 0, D: 0, E: 0, F: 0
      };

      Object.entries(answers).forEach(([questionIdStr, selectedAnswer]) => {
        const questionId = parseInt(questionIdStr, 10);
        const optionIndex = QUESTIONS.find(q => q.id === questionId)?.options.indexOf(selectedAnswer) ?? -1;
        const letter = ANSWER_MAP[questionId][optionIndex];
        if (letter) scores[letter]++;
      });

      const [topLetter] = Object.entries(scores).reduce((a, b) => a[1] >= b[1] ? a : b);
      const result = therapyMap[topLetter] || "Terapia não identificada";

      navigation.navigate("Details", { result });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>

      <FlatList
        data={currentQuestion.options}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.option,
              answers[currentQuestion.id] === item ? styles.selectedOption : null,
            ]}
            onPress={() => handleAnswer(item)}
          >
            <Text
              style={[
                styles.optionText,
                answers[currentQuestion.id] === item ? styles.selectedOptionText : null,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.optionsContainer}
      />

      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={handlePrevious}
          style={[
            styles.navButton,
            currentQuestionIndex === 0 && styles.disabledButton,
          ]}
          disabled={currentQuestionIndex === 0}
        >
          <Text style={styles.navButtonText}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} style={styles.navButton}>
          <Text style={styles.navButtonText}>
            {currentQuestionIndex === QUESTIONS.length - 1 ? "Finalizar" : "Próximo"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Questions;