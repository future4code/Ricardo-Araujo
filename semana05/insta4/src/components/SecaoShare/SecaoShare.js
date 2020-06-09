import React, { Component } from 'react'
import './SecaoShare.css'
import iconeTwitter from '../../img/twitter.svg'
import iconeTwitterBranco from '../../img/twitter-branco.svg'

export class SecaoShare extends Component {
	constructor(props) {
		super(props)

		this.state = {
			valorInput: "",
			iconeTwitter: false
		}
	}

	onChangeComentario = (event) => {
		const oQueDigitou = event.target.value;
		this.setState({
			valorInput: oQueDigitou
		})
	}

	onClickIcone = () =>{
		this.setState({
			iconeTwitter: !this.state.iconeTwitter
		})
	}

	onClickBotaoShare = () =>{
		this.setState({
      share: false
		})
    console.log("Você compartilhou no twitter " + this.state.valorInput);
	}

render() {
	let icone

	if (this.state.iconeTwitter) {
		icone = iconeTwitter;
	} else {
		icone = iconeTwitterBranco
	}

	return <div className={'share-container'}>

		<div>
			<img alt={'Icone'} src={icone} onClick={this.onClickIcone}/>
		</div>

		<div>
			<input
				className={'input-comentario'}
				placeholder={'Mensagem para compatilhar'}
				value={this.state.valorInput}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.onClickBotaoShare}>Compatilhar</button>
		</div>
	</div>
}
}
