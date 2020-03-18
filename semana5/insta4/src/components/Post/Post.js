import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeFavoritoPreto from '../../img/bookmark-24px.svg'
import iconeFavoritoBranco from '../../img/bookmark_border-24px.svg'
import { IconeFavorito } from '../iconeFavorito/IconeFavorito'
import iconeShare from './../../img/forward-24px.svg'
import { SecaoShare } from '../SecaoShare/SecaoShare'


class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      curtido: false,
      numeroCurtidas: 0,
      comentando: false,
      numeroComentarios: 0,
      favorito: false,
      share:false,
      mensagemShare:"teste"
    }
  }

  onClickCurtida = () => {

    if(this.state.curtido===true){
      this.setState({
      curtido: false,
      numeroCurtidas: this.state.numeroCurtidas - 1
    })
  } else {
      this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
  }) 
  }
}


  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickFavorito = () => {
    this.setState({
      favorito: !this.state.favorito
    })
  }

  onClickShare = () => {
    this.setState({
      share: !this.state.share
    })
  }


  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeFavorito
    if(this.state.favorito) {
      iconeFavorito = iconeFavoritoPreto
    } else {
      iconeFavorito = iconeFavoritoBranco
    }


    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteShare

    if(this.state.share) {
      componenteShare = <SecaoShare aoEnviar={this.onClickBotaoShare}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeFavorito
          icone={iconeFavorito}
          onClickIcone={this.onClickFavorito}
        />

        <IconeFavorito
          icone={iconeShare}
          onClickIcone={this.onClickShare}
        />


      </div>
      {componenteComentario}
      {componenteShare}
    </div>
    
  }
}

export default Post