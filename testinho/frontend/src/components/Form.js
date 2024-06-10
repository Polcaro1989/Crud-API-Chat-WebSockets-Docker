import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
  width:100%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 10px;
    
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 3cd ..
  c 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8801/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success("Usuário atualizado com sucesso!"))
        .catch(({ response }) => {
          if (response.status === 400) {
            toast.error("Erro ao atualizar usuário: Campos inválidos!");
          } else {
            toast.error("Erro ao atualizar usuário: O servidor não está respondendo.");
          }
        });
    } else {
      await axios
        .post("http://localhost:8801/", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success("Usuário adicionado com sucesso!"))
        .catch(({ response }) => {
          if (response.status === 400) {
            toast.error("Erro ao adicionar usuário: Campos inválidos!");
          } else {
            toast.error("Erro ao adicionar usuário: O servidor não está respondendo.");
          }
        });
    }

    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";

    setOnEdit(null);
    getUsers();
  };

  const handleDelete = async () => {
    if (!onEdit) return;
  
    const confirmed = window.confirm("Tem certeza que deseja excluir este usuário?");
    if (!confirmed) return;
  
    try {
      await axios.delete("http://localhost:8801/" + onEdit.id);
      toast.success("Usuário excluído com sucesso!");
      setOnEdit(null);
      getUsers();
    } catch (error) {
      toast.error("Erro ao excluir usuário: O servidor não está respondendo.");
    }
  };
  
  

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
  <InputArea>
    <Label>Nome</Label>
    <Input name="nome" />
  </InputArea>
  <InputArea>
    <Label>E-mail</Label>
    <Input name="email" type="email" />
  </InputArea>
  <InputArea>
    <Label>Telefone</Label>
    <Input name="fone" />
  </InputArea>
  <InputArea>
    <Label>Data de Nascimento</Label>
    <Input name="data_nascimento" type="date" />
  </InputArea>

  <Button type="submit">SALVAR</Button>
  {onEdit && (
    <Button type="button" onClick={handleDelete} hidden>
      EXCLUIR
    </Button>
  )}
</FormContainer>


  );
};

export default Form;
