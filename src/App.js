import React from 'react';
import logo from './assets/img/b6d61315-9266-4569-bfb7-bb82fbce079f.jpg'
const App = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src= {logo} alt="Logo" width="75" height="50" class="d-inline-block align-text-top"></img>
                    </a>
                    <div className='container mt-4'>
                    <table class="table">
                            <tr>
                                    <th scope="col">Inicio</th>
                                    <th scope="col">Precios</th>
                                    <th scope="col">Recursos</th>
                                    <th scope="col">Clientes</th>
                                    <td><button type="button" class="btn btn-success">Acceso</button></td>

                                </tr>
                    </table>
                    </div>
                </div>
            </nav>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-8'>
                        <h1>Lista</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Función</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Jesus</td>
                                    <td>Garlan</td>
                                    <td>Jesus@simplisoft.cl</td>
                                    <td><button type="button" class="btn btn-success">Editar</button></td>
                                    <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Felipe</td>
                                    <td>Mandiola</td>
                                    <td>felipe@simplisoft.cl</td>
                                    <td><button type="button" class="btn btn-success">Editar</button></td>
                                    <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Tamara</td>
                                    <td>Aguilar</td>
                                    <td>tamara@simplisoft.cl</td>
                                    <td><button type="button" class="btn btn-success">Editar</button></td>
                                    <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Valeria</td>
                                    <td>Alvarez</td>
                                    <td>Valeria@simplisoft.cl</td>
                                    <td><button type="button" class="btn btn-success">Editar</button></td>
                                    <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Elvis</td>
                                    <td>Perez</td>
                                    <td>elvis@simplisoft.cl</td>
                                    <td><button type="button" class="btn btn-success">Editar</button></td>
                                    <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-4'>
                        <h1>Formulario</h1>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-primary me-md-2" type="button">Enviar</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;

<button type="button" class="btn btn-success">Enviar</button>