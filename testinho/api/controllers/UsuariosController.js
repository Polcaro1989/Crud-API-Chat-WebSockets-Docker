import Usuario from '../models/ModelUsuarios.js';

export const getUsers = async (_, res) => {
  try {
    console.log("Buscando usuários...");
    const users = await Usuario.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao buscar usuários', error: err });
  }
};


export const addUser = async (req, res) => {
  try {
    const newUser = await Usuario.create({
      nome: req.body.nome,
      email: req.body.email,
      fone: req.body.fone,
      data_nascimento: req.body.data_nascimento
    });
    return res.status(201).json({ message: 'Usuário criado com sucesso.', user: newUser });
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao criar usuário', error: err });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await Usuario.update({
      nome: req.body.nome,
      email: req.body.email,
      fone: req.body.fone,
      data_nascimento: req.body.data_nascimento
    }, {
      where: { id: req.params.id }
    });
    if (updatedUser[0] === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao atualizar usuário', error: err });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await Usuario.destroy({
      where: { id: req.params.id }
    });
    if (deletedUser === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json({ message: 'Usuário deletado com sucesso.' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao deletar usuário', error: err });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await Usuario.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar o usuário", error: error.message });
  }
};

