import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import PlayList from './Components/TelaAdcList'
import ListPlay from './Components/ListPlay'
import MusicaArtista from './Components/AdcMusicaArtista'


export default class App extends React.Component {

  state = {
    telaAtual: "adicionar",
    editId: null
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "adicionar":
        return <PlayList irParaListPlay={this.irParaListPlay} />
      case "list":
        return <ListPlay irParaPlay={this.irParaPlay} irParaEditList={this.irParaEditList}  />
      case "editList":
        return <MusicaArtista playListId={this.state.editId} irParaListPlay={this.irParaListPlay}/>
      default:
        return <div>ERRO</div>
    }
  }

  irParaPlay = () => {
    this.setState({telaAtual: "adicionar"})
  }

  irParaListPlay = () => {
    this.setState({telaAtual:"list"})
  }

  irParaEditList = (id) => {
    this.setState({
      telaAtual:"editList",
      editId: id
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        {this.escolherTela()}
        <Footer/>
      </div>
    );

  }
  
}

