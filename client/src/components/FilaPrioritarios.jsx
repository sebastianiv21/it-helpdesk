import React from 'react';

const FilaPrioritarios = ({ id, categoria, empresa }) => {
  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{categoria}</td>
      <td>{empresa.toUpperCase()}</td>
    </tr>
  );
};

export default FilaPrioritarios;
