import React, {useState} from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import warning from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

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
            <Textarea name="bio" label="Biografia" id="bio"/>
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
            <Select 
              name="subject" 
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação fisica', label: 'Educação fisica' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Portugêses', label: 'Portugêses' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input name="cost" label="Custo da sua hora por aula"/>
        </fieldset>

        <fieldset>
          <legend>Horários disponiveis
            <button type="button" onClick={addNewScheduleItem} >
              + Novo horário
            </button>
          </legend>
          
          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
              <Select 
                  name="subject" 
                  label="Matéria"
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sabado' },
                  ]}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
            </div>

            );
          })}
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