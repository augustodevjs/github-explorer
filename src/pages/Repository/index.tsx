import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";
import Header from '../../components/Header';

import { RepositoryInfo, Issues } from "./styles";
import { Issue, Repos } from "../../types";

interface RepositoryProps {
  toogleTheme: () => void;
}

const Repository: React.FC<RepositoryProps> = ({ toogleTheme }) => {
  const { repository, user } = useParams<{ user: string, repository: string }>();
  const [repos, setRepos] = useState<Repos | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  
  useEffect(() => {
    api.get(`repos/${user}/${repository}`).then((response) => {
      console.log(response.data)
      setRepos(response.data);
    });

    api.get(`repos/${user}/${repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [repository, user]);

  return (
    <>
      <Header toogleTheme={toogleTheme} show={true}/>
      <RepositoryInfo>
        {repos && (
          <header>
            <img src={repos.owner.avatar_url} alt={repos.owner.login} />
            <div>
              <strong>{repos.full_name}</strong>
              <p>{repos.description}</p>
            </div>
          </header>
        )}
        <ul>
          <li>
            <strong>{repos?.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repos?.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repos?.open_issues_count}</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        {issues.map((issue) => {
          return (
            <a key={issue.id} href={issue.html_url}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          )
        })}
      </Issues>
    </>
  )
}

export default Repository;