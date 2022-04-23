import React, { useState } from 'react'
import Api from '../Services/Api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import "../Styles/Login.css"
import Logo from '../images/Logo.png'
import Carro from '../images/Carro.png'
import * as yup from 'yup';
import { Formik } from 'formik'
import { history } from '../Services/History'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        Api.post('/login', { email: email, password: password }).then((response) => {
            localStorage.setItem('Authorization', response.data.token)
            history.push({
                pathname: '/telaInicial'
            })
            window.location.reload(false);
        })
        console.log("submit", { email, password })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(5).required()
    })

    return (
        <div className='main'>
            <div className='header'>
                <img alt='Logo' src={Logo} className='Logo' />
                <h1>AutoLuby</h1>
            </div>

            <div className='menu'>
                <h3>Bem-vindo à AutoLuby</h3>
                <span>Faça o login para acessar sua conta.</span>
            </div>

            <Formik
                initialValues={{}}
                onSubmit={onSubmit}
                validationSchema={validations}>
                <form className='login_form' onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='email' className='email'>Endereço de email</label>
                        <input
                            className='input_login_email'
                            type={'email'}
                            name='email'
                            placeholder='@mail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor='password' className='password'>Senha</label>
                        <input
                            className='input_login_password'
                            type={'password'}
                            name='password'
                            placeholder='senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <button type='submit' className='btn' >
                            Entrar
                        </button>
                    </div>
                </form >
            </Formik>

            <div className='custom_checkbox'>
                <label> Lembrar minha senha</label>
                <button className='btn_check'>
                    <FontAwesomeIcon icon={faCheck} className={'icon_check'}></FontAwesomeIcon>
                </button>
            </div>

            <label className='esqueceu_senha'>Esqueceu a senha?</label>

            <pre className='nova_conta'>
                Ainda não tem uma conta?
                <label className='criar_conta'> Criar Conta</label>
            </pre>

            <div className='content'>
                <img alt='Carro' src={Carro} className='carro' />
            </div>
        </div >
    )
}

export default Login