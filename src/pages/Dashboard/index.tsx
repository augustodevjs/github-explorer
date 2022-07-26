import React, { FormEvent, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { RepositoryProps } from "../../types";

import api from "../../services/api";

import Header from "../../components/Header";
import { FiChevronRight } from "react-icons/fi";

import { Form, Title, Repositories, Error } from "./styles";

interface DashboardProps {
  toogleTheme: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ toogleTheme }) => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<RepositoryProps[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if(storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories]);

  async function handleAddRepository(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if(!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);
      const repository = response.data;
  
      setRepositories([...repositories, repository]);

      setNewRepo('');
      setInputError('');
    } catch(Error) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <Header toogleTheme={toogleTheme} show={false}/>
      
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input 
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório" 
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard;