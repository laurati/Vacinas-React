import * as React from 'react';
import './FormularioUsu.css'

const FormularioUsu = () => {
    return (
        <>
        
        <div>
            <h3>Cadastro de Usuários</h3>
            <form>
                <label for="fname">CPF</label>
                <input type="text" id="fname" name="firstname" placeholder="Digite o CPF"></input>

                <label for="lname">Nome</label>
                <input type="text" id="lname" name="lastname" placeholder="Digite o nome"></input>

                <label for="lname">E-mail</label>
                <input type="text" id="lname" name="lastname" placeholder="Digite o e-mail"></input>

                <label for="lname">Data de Nascimento</label>
                <input type="text" id="lname" name="lastname" placeholder="Digite a data de nascimento"></input>

                <label for="country">Categoria</label>
                <select id="country" name="country">
                    <option value="australia">A</option>
                    <option value="canada">B</option>
                    <option value="usa">C</option>
                </select>

                <input type="submit" value="Submit"></input>

            </form>
        </div>

        </>
    )
}

export default FormularioUsu