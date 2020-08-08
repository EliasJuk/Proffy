import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return(
    <div>
      <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/49464828?s=460&u=b66b919c4ccb9be285ed64bc99716b8f70b0f4e0&v=4" alt="EliasJuk"/>
        <div>
          <strong>Elias Juk</strong>
          <span>Algoritimos</span>
        </div>
      </header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        <br/><br/>
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  </div>
  )
}

export default TeacherItem;