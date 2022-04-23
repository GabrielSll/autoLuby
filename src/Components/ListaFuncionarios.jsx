import React, { useEffect, useState } from 'react'
import '../Styles/ListagemGerais.css'
import Logo from '../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowRightFromBracket, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Api from '../Services/Api.js'
import { Link } from 'react-router-dom'


const token = localStorage.getItem('Authorization')


function ListaCarros() {

    const [listFuncionario, setListFuncionario] = useState([])

    useEffect(() => {
        Api.get('employees', {
            headers: {
                'Accept': 'application/json',
                'Contenty-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                console.log(res.data)
                setListFuncionario(res.data.employees)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const funcionarios = listFuncionario.map((funcionario, key) => {
        return (
            <tr>
                <td>{funcionario.name}</td>
                <td>{funcionario.email}</td>
                <td>{funcionario.cpf}</td>
                <td><span>R$</span> {funcionario.salary}</td>
                <td>{funcionario.bio}</td>
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
                <h3>Funcionários</h3>

                <div className='listagemGeralAll'>
                    <h6>Listagem de funcionários da empresa</h6>
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
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Cpf</th>
                                <th>Valor</th>
                                <th>Bio</th>
                            </tr>
                            {funcionarios}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default ListaCarros