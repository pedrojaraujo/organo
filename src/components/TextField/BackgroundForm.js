import React from 'react'
import "./styles.css"
import TextField from './TextField'

const BackgroundForm = () => {
  return (
    <form className='text__container'>
      <h1 className='title__text__field'>Preencha os dados para criar o card do colaborador.</h1>
      <TextField type="text" label="Nome" placeholder="Digite seu nome" />
      <TextField type="text" label="Cargo" placeholder="Digite seu cargo" />
      <TextField type="url" label="Imagem" placeholder="InTextFielde o endereço da imagem" />
      <TextField type="number" label="Time" placeholder="" />
      <button className='btn'>Criar card</button>
    </form>
  )
}

export default BackgroundForm