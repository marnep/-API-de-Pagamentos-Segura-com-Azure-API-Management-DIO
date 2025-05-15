const express = require('express');
const app = express();
app.use(express.json());

app.post('/pagamentos', (req, res) => {
  const { valor, moeda, metodo } = req.body;

  res.json({
    status: 'sucesso',
    valor,
    moeda,
    metodo,
    mensagem: 'Pagamento processado com sucesso.'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API rodando na porta ${port}`));
