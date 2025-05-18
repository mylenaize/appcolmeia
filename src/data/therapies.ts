export const THERAPIES = {
  "Terapia Cognitivo-Comportamental (TCC)": {
    descricao: {
      definicao: "Abordagem breve e estruturada que trabalha a relação entre pensamentos, emoções e comportamentos, partindo do princípio de que crenças disfuncionais geram sofrimento psicológico.",
      objetivos: [
        "Identificar e reformular distorções cognitivas",
        "Desenvolver estratégias práticas de enfrentamento",
        "Consolidar mudanças comportamentais por meio de tarefas de casa"
      ],
      tecnicas: [
        "Reestruturação cognitiva",
        "Exposição graduada a situações temidas",
        "Registro de pensamentos e emoções",
        "Planejamento de atividades prazerosas"
      ],
      indicacoes: [
        "Transtornos de ansiedade (TAG, fobias, pânico)",
        "Depressão",
        "Transtornos alimentares",
        "Estresse pós-traumático"
      ],
      beneficios: [
        "Foco em resultados mensuráveis",
        "Curta duração (12–20 sessões em média)",
        "Grande base de evidência científica"
      ]
    },
    psicologos: [
      { nome: "Dra. Ana Martins", telefone: "(11) 91234-5678", planos: ["Amil", "Unimed"] },
      { nome: "Dr. João Souza", telefone: "(11) 99876-5432", planos: ["Particular"] }
    ]
  },
  "Psicanálise": {
    descricao: {
      definicao: "Fundada por Sigmund Freud, explora o inconsciente por meio da livre associação, interpretação de sonhos e análise de resistências, buscando trazer à consciência conflitos reprimidos.",
      objetivos: [
        "Tornar conscientes conteúdos inconscientes",
        "Entender a dinâmica entre id, ego e superego",
        "Promover insight e elaboração de conflitos internos"
      ],
      tecnicas: [
        "Associação livre",
        "Interpretação de sonhos",
        "Análise de transferências e resistências",
        "Trabalho com lapsos de fala"
      ],
      indicacoes: [
        "Sintomas neuróticos (ansiedade, fobias, obsessões)",
        "Dificuldades relacionais",
        "Questões identitárias e existenciais"
      ],
      beneficios: [
        "Aprofundamento do autoconhecimento",
        "Alterações estruturais de personalidade",
        "Autonomia emocional a longo prazo"
      ]
    },
    psicologos: [
      { nome: "Dra. Carla Mendes", telefone: "(21) 98765-4321", planos: ["SulAmérica", "Particular"] },
      { nome: "Dr. Fernando Lima", telefone: "(11) 93456-7810", planos: ["Bradesco Saúde"] }
    ]
  },
  "Psicoterapia Junguiana": {
    descricao: {
      definicao: "Baseada nas teorias de Carl Gustav Jung, enfatiza o processo de individuação — integração dos conteúdos conscientes e inconscientes por meio de símbolos e mitos.",
      objetivos: [
        "Favorecer a individuação (crescimento do self)",
        "Integrar arquétipos (ex.: sombra, anima/animus)",
        "Promover equilíbrio entre o consciente e o inconsciente"
      ],
      tecnicas: [
        "Análise de sonhos e símbolos",
        "Imaginar ativa",
        "Trabalhos com mitos, contos e arquétipos",
        "Uso de mandalas e arte-terapia"
      ],
      indicacoes: [
        "Crises existenciais e de identidade",
        "Sintomas psíquicos crônicos",
        "Desorientação após grandes mudanças de vida"
      ],
      beneficios: [
        "Maior conexão com o próprio potencial criativo",
        "Processamento simbólico de conflitos",
        "Aprofundamento do sentido de vida"
      ]
    },
    psicologos: [
      { nome: "Dra. Regina Borges", telefone: "(31) 92222-3344", planos: ["Unimed", "Particular"] },
      { nome: "Dr. Daniel Rocha", telefone: "(71) 98888-7788", planos: ["Particular"] }
    ]
  },
  "Terapia Analítico-Comportamental (TAC)": {
    descricao: {
      definicao: "Inspirada na Análise do Comportamento Experimental (Skinner) e na Análise do Comportamento Aplicada, foca na função dos comportamentos e em sua modificação por meio de contingências.",
      objetivos: [
        "Analisar as funções de comportamentos-alvo",
        "Planejar intervenções baseadas em reforço",
        "Ensinar habilidades e extinguir padrões disfuncionais"
      ],
      tecnicas: [
        "Análise funcional (ABC)",
        "Encadeamento de comportamento",
        "Treino de habilidades sociais",
        "Modelagem e reforçamento diferencial"
      ],
      indicacoes: [
        "Transtornos de comportamento (ex.: TDAH, T.O.C.)",
        "Déficits de habilidades sociais",
        "Problemas de adaptação e hábitos indesejados"
      ],
      beneficios: [
        "Plano de tratamento transparente",
        "Intervenções personalizadas",
        "Foco em resultados mensuráveis"
      ]
    },
    psicologos: [
      { nome: "Dra. Sônia Ribeiro", telefone: "(85) 97777-6666", planos: ["Hapvida", "Particular"] },
      { nome: "Dr. Caio Freitas", telefone: "(19) 90000-1122", planos: ["SulAmérica"] }
    ]
  },
  "Gestalt-terapia": {
    descricao: {
      definicao: "Criada por Fritz Perls, valoriza o \"aqui e agora\" e o contato autêutico. Enfatiza a autoconsciência por meio de experiências e experimentos terapêuticos.",
      objetivos: [
        "Aumentar a consciência corporal e emocional",
        "Estimular a responsabilidade pessoal",
        "Resolver \"gestalts\" (padrões interrompidos de experiência)"
      ],
      tecnicas: [
        "Cadeira vazia",
        "Experimentos criativos",
        "Foco na linguagem corporal",
        "Diálogo fenomenológico"
      ],
      indicacoes: [
        "Dificuldades relacionais",
        "Bloqueios emocionais",
        "Baixa autoestima",
        "Crises de transição (aposentadoria, divórcio)"
      ],
      beneficios: [
        "Acesso direto às emoções",
        "Mudanças vivenciais profundas",
        "Ampliar a percepção pessoal"
      ]
    },
    psicologos: [
      { nome: "Dra. Beatriz Lima", telefone: "(13) 91234-8899", planos: ["Unimed", "Bradesco"] },
      { nome: "Dr. Lucas Nery", telefone: "(14) 92345-8899", planos: ["Particular"] }
    ]
  },
  "Psicologia Positiva": {
    descricao: {
      definicao: "Estudo científico das condições e processos que contribuem para o florescimento humano, desenvolvido por Martin Seligman e Mihaly Csikszentmihalyi.",
      objetivos: [
        "Identificar e fortalecer pontos fortes e virtudes",
        "Promover bem-estar e satisfação com a vida",
        "Desenvolver resiliência e otimismo"
      ],
      tecnicas: [
        "Inventário de forças pessoais",
        "Exercícios de gratidão",
        "Savoring (apreciação de experiências positivas)",
        "Ativação de virtudes"
      ],
      indicacoes: [
        "Prevenção de transtornos emocionais",
        "Melhora do clima organizacional",
        "Aumento de satisfação e motivação pessoal"
      ],
      beneficios: [
        "Foco no potencial em vez do sintoma",
        "Aumento duradouro de emoções positivas",
        "Fortalecimento de relações interpessoais"
      ]
    },
    psicologos: [
      { nome: "Dra. Helena Silva", telefone: "(11) 97654-3210", planos: ["NotreDame", "Particular"] },
      { nome: "Dr. Rafael Duarte", telefone: "(21) 98811-2233", planos: ["Amil", "SulAmérica"] }
    ]
  }
};
