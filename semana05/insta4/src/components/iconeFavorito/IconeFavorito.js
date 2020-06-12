import React from 'react'
// import './IconeComContador.css'

export function IconeFavorito(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}
