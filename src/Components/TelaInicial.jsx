import React from 'react'
import "../Styles/TelaInicial.css"
import Logo from '../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CarroReservado from '../images/CarroReservado.png'
import ListagemGeral from '../images/ListagemGeral.png'
import Funcionarios from '../images/Funcionarios.png'

function TelaInicial() {
    return (
        <div className='main'>
            <div className='headerTelaInicial'>
                <img alt='Logo' src={Logo} className='Logo' />
                <h1>AutoLuby</h1>
                <input type="text" className="searchbox" />

                <button className='btn_search'>
                    <FontAwesomeIcon className='submit' icon={faSearch} />
                </button>

                <Link to={'/'}>
                    <button className='btn_exit'> Sair
                        <FontAwesomeIcon className='submit_exit' icon={faArrowRightFromBracket} />
                    </button>
                </Link>
            </div>

            <div className='menuTelaInicial'>
                <h3>Bem-vindo, Carlos</h3>
                <span>Menu</span>
            </div>

            <div className='reservados'>
                <Link to={'/listaCarrosReservados'}>
                    <button className='btn_reservados'>
                        <h3>Veículos reservados e vendidos</h3>
                        <h6>Veículos reservados e vendidos por você</h6>
                        <span>147 Veículos</span>
                        <img alt='carroReservado' src={CarroReservado} className="carroReservado_img" />
                    </button>
                </Link>
            </div>

            <div className='listagem'>
                <Link to={'/listaCarrosGeral'}>
                    <button className='btn_listagem'>
                        <h3>Listagem geral de veículos</h3>
                        <h6>Listagem de veículos de toda a empresa</h6>
                        <span>180 Veículos</span>
                        <img alt='ListagemGeral' src={ListagemGeral} className="listagemGeral_img" />
                    </button>
                </Link>
            </div>

            <div className='funcionarios'>
                <Link to={'/listaFuncionarios'}>
                    <button className='btn_funcionarios'>
                        <h3>Funcionários da empresa</h3>
                        <h6>Listagem de todos os funcionários da empresa</h6>
                        <span>147 Funcionários</span>
                        <img alt='Funcionarios' src={Funcionarios} className="funcionarios_img" />
                    </button>
                </Link>
            </div >
        </div >
    )
}

export default TelaInicial