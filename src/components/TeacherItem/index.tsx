import React from 'react';

// import { Container } from './styles';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
// import whatsappIcon from '../../../assets'


const TeacherItem: React.FC = () => {
  return (
    <article>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/15263395?s=460&u=4ee422b74a486820fd98052a2097586d8bb2cecc&v=4" alt="meu perfil" />

      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
      <br /><br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>

      <footer>
        <p>
          Preço/Hora
        <strong> R$ 80,00</strong>
        </p>

        <button>
          <img src={whatsappIcon} alt="whatssap" />
        Entrar em contato
      </button>
      </footer>
    </article>
  );
}

export default TeacherItem;