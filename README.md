
# 🌻 Colmeia - Aplicativo de Apoio à Saúde Mental Feminina 40+

**Colmeia** é um aplicativo mobile desenvolvido como prova de conceito para o Projeto Integrador do 5º semestre dos cursos de TADS/TSI. Ele tem como objetivo apoiar mulheres acima de 40 anos a identificarem abordagens terapêuticas compatíveis com seu perfil emocional e comportamental, conectando-as com psicólogos fictícios que atendem planos de saúde.

## 🌟 Funcionalidades
- Questionário com 10 perguntas comportamentais
- Mapeamento automático para abordagens terapêuticas (TCC, Psicanálise, Junguiana etc.)
- Exibição da abordagem mais compatível com descrição completa
- Sugestão de psicólogos fictícios com planos e contatos
- Tela de perfil com dados pessoais editáveis

## 🧰 Tecnologias utilizadas
### Frontend
- React Native + Expo
- TypeScript + React Navigation

### Backend
- Flask (simula dados via JSON)
- Endpoints REST para respostas e psicólogos (mocked)

### Banco de Dados
- Modelo Físico em SQL (PostgreSQL)
- Tabelas: `usuarios`, `perguntas`, `respostas`, `abordagens`, `psicologos`

### Landing Page
- HTML5 + CSS3
- Publicada via GitHub Pages

## 🎩 Como rodar o projeto
```bash
# Clonar o repositório
https://github.com/seu-usuario/colmeia

# Instalar dependências do app mobile
cd mobile
npm install
npx expo start

# (Opcional) Rodar backend local
cd backend
python app.py
```

## 🌍 Link da landing page
[Acessar Landing Page](https://seu-usuario.github.io/colmeia)

## 🎥 Demonstração em vídeo
[Assista ao vídeo de 1 minuto](https://youtube.com/seu-video-link)

## 👥 Membros do projeto
- @usuario1 (Frontend e UX)
- @usuario2 (Backend e Banco de Dados)
- @usuario3 (Documentação e Landing Page)

## ✅ Status do Projeto
Projeto funcional e publicado como prova de conceito. Pronto para evolução com dados reais e autenticação segura.
![image](https://github.com/user-attachments/assets/a91be54d-b370-403c-9f69-1ec201c5675c)
