import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warning from '../../assets/images/icons/warning.svg';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que Você quer Dar aulas. " 
        description="O primeiro passo é preencher esse formulário de inscrição"      
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
            <Input name="name" label="Nome completo" id="name"/>
            <Input name="avatar" label="Avatar" id="avatar"/>   
            <Input name="whatsapp" label="WhatsApp" id="whatsapp"/>  
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
            <Input name="subject" label="Matéria"/>
            <Input name="cost" label="Custo da sua hora por aula"/>
        </fieldset>

        <footer>
          <p>
            <img src={warning} alt="Aviso Inportante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;