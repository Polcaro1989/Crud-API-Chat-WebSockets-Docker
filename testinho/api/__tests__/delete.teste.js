const axios = require('axios');

describe('Teste da rota DELETE "/:id"', () => {
  it('Excluindo um usuário', async () => {
    const userId = 91;
    const response = await axios.delete(`http://localhost:8801/${userId}`);
    expect(response.status).toBe(200);

    // console.log("Resposta da rota:");
    // console.log(response.data);

    expect(response.data.message).toBe('Usuário deletado com sucesso.');
    try {
      await axios.get(`http://localhost:8801/${userId}`);
    } catch (error) {
      expect(error.response.status).toBe(404);
      console.log("Erro ao obter os dados do usuário:");
      console.log(error.response.data);
    }
  });
});