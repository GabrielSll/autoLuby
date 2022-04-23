import React, { useEffect, useState } from 'react'
import '../Styles/ListagemGerais.css'
import Logo from '../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowRightFromBracket, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Api from '../Services/Api.js'
import { Link } from 'react-router-dom'

const token = localStorage.getItem('Authorization')

function ListaCarros() {

    const [listCarros, setListCarros] = useState([])

    useEffect(() => {
        Api.get('vehicles', {
            headers: {
                'Accept': 'application/json',
                'Contenty-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                console.log(res.data.vehicles)
                setListCarros(res.data.vehicles)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const carros = listCarros.map((carro, key) => {
        return (
            <tr>
                <td>{carro.brand}</td>
                <td>{carro.model}</td>
                <td>{carro.yer}</td>
                <td>{carro.km}</td>
                <td>{carro.color}</td>
                <tr>
                    {carro.status === "Reservado" ?
                        <td className='Reservado'>
                            {carro.status}
                        </td> : ''}

                    {carro.status === "Vendido" ?
                        <td className='Vendido'>{carro.status}</td> :
                        ''}

                    {carro.status === "Disponível" ?
                        <td className='Disponivel'>
                            {carro.status}
                        </td> : ''}
                </tr>
                <td>{carro.chassi}</td>
                <td><span>R$</span>{carro.value}</td>
            </tr>
        )
    })

    return (
        <div className='main'>
            <div className='headerListaGeral'>
                <img alt='Logo' src={Logo} className='Logo' />
                <h1>AutoLuby</h1>

                <Link to={'/'}>
                    <button className='btn_exit'> Sair
                        <FontAwesomeIcon className='submit_exit' icon={faArrowRightFromBracket} />
                    </button>
                </Link>
            </div>


            <div className='menuListaGeral'>
                <h3>Todos Veículos</h3>

                <div className='listagemGeralAll'>
                    <h6>Listagem geral de veículos</h6>
                    <button className='btn_back'> Anterior
                        <FontAwesomeIcon className='submit_back' icon={faArrowLeft} />
                    </button>
                    <button className='btn_1'>1</button>
                    <button className='btn_2'>2</button>
                    <button className='btn_3'>3</button>
                    <button className='btn_next'> Próxima
                        <FontAwesomeIcon className='submit_next' icon={faArrowRight} />
                    </button>

                    <input type="text" className="searchbox_listagem" />
                    <button className='btnSearchListagem'>
                        <FontAwesomeIcon className='submit' icon={faSearch} />
                    </button>
                </div>

                <div className='informacoes'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Ano</th>
                                <th>Km</th>
                                <th>Cor</th>
                                <th>Status</th>
                                <th>Chassi</th>
                                <th>Valor</th>
                            </tr>
                            {carros}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default ListaCarros