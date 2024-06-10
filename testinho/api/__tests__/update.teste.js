const axios = require('axios');

describe('Teste da rota PUT "/:id"', () => {
  it('Atualizando um usuário', async () => {
    const userId = 1;

    const updatedUserData = {
      data_nascimento: '04/03/2001',
      email: 'usuario4.novo@example.com',
      fone: '9754543210',
      nome: 'este'
    };

    const response = await axios.put(`http://localhost:8801/${userId}`, updatedUserData);

    expect(response.status).toBe(200);
    console.log("Resposta da rota:");
    console.log(response.data);

    expect(response.data.message).toBe('Usuário atualizado com sucesso.');
  });
});