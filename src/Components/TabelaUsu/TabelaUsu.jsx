import * as React from 'react';

import DataGrid from 'react-data-grid';
import NavBar from '../NavBar/NavBar';

const TabelaUsu = () => {

    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'cpf', name: 'CPF' },
        { key: 'nome', name: 'Nome' },
        { key: 'email', name: 'E-mail' },
        { key: 'dataNascimento', name: 'Data Nascimento' }
      ];
      
      const rows = [
        { id: 0, cpf: '000111000', nome: 'Laura', email: 'laura@mail.com', dataNascimento: '12/08/1963' },
        { id: 1, cpf: '000222000', nome: 'Rosa Custosa', email: 'rosa@mail.com', dataNascimento: '12/10/1956' }
      ];

    return (
      <>
        <NavBar/>
        <DataGrid columns={columns} rows={rows} />
      </>
    )
}

export default TabelaUsu