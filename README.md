# 🐝 Colmeia – Saúde Mental para Mulheres em Transformação

**Colmeia** é um aplicativo mobile criado como prova de conceito para o Projeto Integrador do 5º semestre de TADS/TSI, com foco em tecnologia e bem-estar emocional. Ele é voltado para mulheres em fase de amadurecimento que desejam compreender melhor sua saúde mental e encontrar uma abordagem terapêutica adequada ao seu perfil.


---
Membros do projeto:
- Mylena Torres Flores (Backend)
- Pamela Ramos Martins (Frontend)
- Joao Rodrigo Lapsky (Arquitetura)
- Rafael da Silva Domingos (Pesquisa)
- Michael Dione da Silva (Pesquisa)

---

## 🎯 Objetivo do Projeto
Desenvolver uma **prova de conceito funcional**, demonstrável e publicável, que aborde a importância da saúde mental com foco em personalização, empatia e orientação terapêutica.

---

## 📱 Funcionalidades
- Questionário com 10 perguntas que analisa estilo emocional e comportamental
- Mapeamento com 6 abordagens terapêuticas (TCC, Psicanálise, Junguiana, TAC, Gestalt, Positiva)
- Recomendação personalizada de abordagem terapêutica
- Sugestão de psicólogos fictícios com contato e planos atendidos
- Edição de dados no perfil do usuário

---

## 🧩 Tecnologias Utilizadas

### Frontend (Mobile)
- React Native + Expo
- TypeScript + React Navigation
- AsyncStorage para simulação de banco de dados local

### Backend
- Simulado via lógica embutida no próprio app (sem servidor externo)
- Dados persistidos localmente no dispositivo usando `AsyncStorage`

### Banco de Dados (Modelo)
- Utilização de estrutura JSON simulada para cadastro de usuários e respostas
- Modelo físico entregue em SQL com tabelas `usuarios`, `respostas`, `abordagens`, `psicologos`

### Landing Page
- Desenvolvida em React Native com tela “Quem Somos”, “Como podemos ajudar?” e “Abordagens Terapêuticas”

---

## 📂 Organização do Código
- `/src/pages` – telas principais (Login, Register, Questions, Details, Perfil)
- `/assets` – imagens da logo e ícones
- `routes` – configuração das rotas do app
- `AsyncStorage` – simula persistência de dados (login e dados pessoais)

---

## 🧪 Requisitos do Projeto Integrador
| Entregável                                | Status     |
|-------------------------------------------|------------|
| Modelo físico de banco de dados (SQL)     | ✅ Entregue |
| Frontend funcional (mobile)               | ✅ Entregue |
| Backend (simulado com AsyncStorage)       | ✅ Entregue |
| GitHub com README.md e membros            | ✅ Entregue |
| Landing Page publicada (tela informativa) | ✅ Entregue |
| Vídeo demonstrativo (1 minuto)            | ✅ Entregue |

---

## 📝 Observações Finais
O Colmeia entrega uma proposta acessível, empática e funcional, com potencial de crescimento futuro para incluir:
- Cadastro de múltiplos usuários
- Integração com banco externo
- Sistema de agendamento real com profissionais

> *“Cuidar da mente é um gesto de respeito consigo mesma.”*
