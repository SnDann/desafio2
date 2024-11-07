import React from 'react';
import { ItemContainer } from './style';

function ItemRepo({ repo, handleRemoveRepo }) {
  if (!repo || !repo.name || !repo.full_name || !repo.html_url) {
    return <p>Error: Missing repository information</p>;
  }

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
      <button onClick={handleRemove} className="remover">Remover</button>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
