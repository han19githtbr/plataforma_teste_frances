const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://plataforma_frances:19handyrio@cluster0.0e7xur0.mongodb.net/',{
  useNewUrlParser: true,
  useUnifiedTopology: true

}).then(() => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
}).catch((err) => {
  console.error('Erro de conexão com o MongoDB:', err);
  process.exit();
});

const usersRoute = require('./routes/user.route');
const membersRoute = require('./routes/member.route');

// Configurar rotas
app.use('/api/users', usersRoute);
app.use('/api/members', membersRoute);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
