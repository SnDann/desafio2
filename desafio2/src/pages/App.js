import { useState } from 'react';
import gitLogo from '../assets/github.png'
import ItemRepo from '../components/ItemRepo';
import Input from './components/Input';
import Button from './components/Button';
import { api } from './services/api';

import { Container } from './styles';
function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
    const {data} = await api.get(`repos/${currentRepo}`);

    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist) {
      setRepos(prev => [...prev, data]);
      setCurrentRepo('');
          } else {
            alert('Repositório já cadastrado');
          }
          } 
        } catch (error) {

      alert('Repositório não encontrado');
        }
    };

    const handleRemoveRepo = (id) => {
      const updatedRepos = repos.filter(repo => repo.id !== id);
      setRepos(updatedRepos);
    };

  return (
      <Container>
      <img src={gitLogo} width={72} height={72} alt='github logo'/>
      <Input value={currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo  handleRemoceRepo={handleRemoveRepo} repo={repo}/>)}
      </Container>
  );
}

export default App;
