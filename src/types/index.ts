export interface Repos {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

export interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

export interface RepositoryProps {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}