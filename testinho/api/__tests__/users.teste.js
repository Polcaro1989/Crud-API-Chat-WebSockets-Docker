const axios = require('axios');

describe('Teste da rota GET "/"', () => {
  it('Retornando A lista de usuários', async () => {
    const response = await axios.get('http://localhost:8801/');

    expect(response.status).toBe(200);

    console.log("Dados retornados pela rota:");
    console.log(response.data);

    expect(response.data).toBeInstanceOf(Array); 

    response.data.forEach(user => {
      expect(user).toEqual(expect.objectContaining({
        data_nascimento: expect.any(String),
        email: expect.any(String),
        fone: expect.any(String),
        id: expect.any(Number),
        nome: expect.any(String)
      }));
    });
  });
});
