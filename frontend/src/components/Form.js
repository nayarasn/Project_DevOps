import React, { useState } from 'react';

function Form() {
  const [form, setForm] = useState({
    nome: '',
    idade: '',
    localizacao: '',
    pretensao: 'tecnologo',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Erro ao salvar');

      alert('Dados salvos com sucesso!');
      setForm({ nome: '', idade: '', localizacao: '', pretensao: 'tecnologo' });
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar dados');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
      <input type="number" name="idade" placeholder="Idade" value={form.idade} onChange={handleChange} required />
      <input type="text" name="localizacao" placeholder="Localização" value={form.localizacao} onChange={handleChange} required />
      <select name="pretensao" value={form.pretensao} onChange={handleChange}>
        <option value="tecnologo">Tecnólogo</option>
        <option value="bacharel">Bacharel</option>
      </select>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Form;
