const axios = require('axios');

describe('Teste da rota GET "/user/:id"', () => {
  it('Retornando um usuário específico por ID', async () => {
    const userId = 1; 
    const response = await axios.get(`http://localhost:8801/${userId}`);
    
    expect(response.status).toBe(200);
    console.log("Dados retornados pela rota:");
    console.log(response.data);
    expect(response.data).toEqual(expect.objectContaining({
      data_nascimento: expect.any(String),
      email: expect.any(String),
      fone: expect.any(String),
      id: userId, 
      nome: expect.any(String)
    }));
  });
});
