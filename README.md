# TaskMaster - Sistema de Gerenciamento de Tarefas

## 🎨 Demonstração

https://github.com/user-attachments/assets/844bafe7-2a12-4d8c-8c8f-54b2e965441f

## 📝 Descrição

O **TaskMaster** é uma aplicação web moderna para gerenciamento pessoal de tarefas, desenvolvida com React e Firebase. Com uma interface intuitiva e recursos eficientes, ajuda usuários a organizarem suas atividades diárias, aumentando produtividade e controle sobre seus compromissos.

## ✨ Funcionalidades Principais

- ✅ **CRUD completo de tarefas** (Criar, Ler, Atualizar, Deletar)
- 🔐 **Autenticação segura** via Firebase Authentication
- 🔄 **Sincronização em tempo real** com Firestore Database
- 🏷️ **Marcação de tarefas concluídas** com data de finalização
- 🎨 **Interface responsiva** e acessível
- 📱 **Design mobile-friendly**
- 🔍 **Visualização detalhada** de cada tarefa
- ⚡ **Navegação rápida** entre seções

## 🛠️ Tecnologias Utilizadas

- **Frontend**: 
  - React.js
  - React Router
  - Tailwind CSS
  - React Icons
  - React Hot Toast

- **Backend**:
  - Firebase Authentication
  - Cloud Firestore

- **Ferramentas**:
  - Vite
  - ESLint
  - Prettier

## 🚀 Como Executar o Projeto

1. **Pré-requisitos**:
   - Node.js (v16+)
   - Conta Firebase

2. **Instalação**:
   ```bash
   git clone https://github.com/seu-usuario/taskmaster.git
   cd taskmaster
   npm install
   ```

3. **Configuração**:
   - Crie um projeto no Firebase Console
   - Adicione as configurações do Firebase em `/firebase/firebaseConfig.js`
   - Ative Authentication (Email/Senha) e Firestore Database

4. **Execução**:
   ```bash
   npm run dev
   ```

## 📂 Estrutura do Projeto

```
taskmaster/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── context/          # Contextos React
│   ├── firebase/         # Configurações Firebase
│   ├── pages/            # Páginas da aplicação
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada
├── public/               # Assets estáticos
└── README.md             # Documentação
```

## 🌟 Recursos Futuros

- [ ] Categorização de tarefas
- [ ] Lembretes e notificações
- [ ] Compartilhamento de tarefas
- [ ] Modo escuro/claro
- [ ] Exportação de tarefas (PDF/CSV)

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**Desenvolvido com ❤️ por Matheus Pereira Costa**  
📧 Contato: seu-dev.matheuspc@gmail.com  
🌐 LinkedIn: https://www.linkedin.com/in/matheus-pc/  

---
