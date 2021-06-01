import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= "https://scontent.fthe12-1.fna.fbcdn.net/v/t1.6435-9/93157114_126621608948298_8609610301039443968_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHzMZq16py2wdVllOpqqnvaVEFmiFHSfftUQWaIUdJ9-4hhOomn3NlTuxRobwDDVBW0B8Ep4LBuUts08aAT9dPH&_nc_ohc=45i-u3xJrzsAX8vpN6I&_nc_ht=scontent.fthe12-1.fna&oh=34a0f764865ba853c8a7999bc9e49e42&oe=60DB68AD"
          nome="Elaini Cristina"
          descricao="Oi, eu sou o Elaini. Sou aluna da Labenu. Adoro contar, jogar e ando viciada em codar, se não faço projeto pessoal eu fico sonhando fazendo."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno 
        email="Email: elaini@tuta.io"
        />
        <CardPequeno
        endereco="Endereço: Conjunto Tancredo Neves, Tancredo Nves"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fthe12-1.fna.fbcdn.net/v/t1.6435-9/117998350_165220908421701_2778837912459764430_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_eui2=AeETENFnY7AmV1NnS3V-CPQJYgmqtOaYpcRiCaq05pilxJc1fgLZ8wW4ngHmOHjEHO3vaG10SYF0WPPCeF_Dkuiu&_nc_ohc=8DKwTlMaVuoAX99njNi&_nc_ht=scontent.fthe12-1.fna&oh=6ebfa7f42f868813cfa9aaeda6171c9f&oe=60DAFF7C" 
          nome="Empresa da Beleza" 
          descricao="Formanda em ser linda!" 
        />
        
        <CardGrande 
          imagem="https://scontent.fthe12-1.fna.fbcdn.net/v/t1.6435-9/100093626_140248154252310_8488608075740086272_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_eui2=AeES8klvmjjzMqcANfDYEFEoNxuBTEma6AQ3G4FMSZroBIou80_r3NfmatGwMUC92WFZivvVzdhaV73FeugFw6_q&_nc_ohc=FssO3yWINj8AX-PEVZE&_nc_ht=scontent.fthe12-1.fna&oh=3f3881261ebb6474dab776409f61d3b6&oe=60DDD784" 
          nome="Empresa Aguas" 
          descricao="Ser sereia!" 
        />
      </div>

      
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
