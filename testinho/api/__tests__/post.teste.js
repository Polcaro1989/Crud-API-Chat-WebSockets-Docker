const axios = require('axios');

describe('Teste da rota POST "/"', () => {
  it('Adicionando um usuário', async () => {
    const userData = {
      data_nascimento: '01/01/1990',
      email: 'usuario@example.com',
      fone: '1234567890',
      nome: 'Usuário'
    };

    const response = await axios.post('http://localhost:8801/', userData);

    expect(response.status).toBe(201);

    console.log("Resposta da rota:");
    console.log(response.data);

    expect(response.data).toEqual(
      expect.objectContaining({
        message: 'Usuário criado com sucesso.',
        user: expect.objectContaining({
          data_nascimento: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
          email: 'usuario@example.com',
          fone: '1234567890',
          nome: 'Usuário'
        })
      })
    );
  });
});