import React from "react";
import Login from "./Components/Login";
import TelaInicial from "./Components/TelaInicial";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListaCarros from "./Components/ListaCarros";
import ListaFuncionarios from "./Components/ListaFuncionarios"
import ListaCarrosReservados from "./Components/ListaCarrosReservados"
import NotFound from "./Services/NotFound";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return (
        <Router>
            <div>
                <Routes>

                    <Route path="/" element={<Login />} />

                    <Route path="/telaInicial" element={<TelaInicial />} />

                    <Route path="/listaCarrosGeral" element={<ListaCarros />} />

                    <Route path="/listaFuncionarios" element={<ListaFuncionarios />} />

                    <Route path="/listaCarrosReservados" element={<ListaCarrosReservados />} />

                    <Route path="*" element={<NotFound />} />

                </Routes>
            </div>
        </Router >
    )
}

export default App;