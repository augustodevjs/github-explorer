import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.title === 'light' ? '#878797': '#a8a8b3'};
    transition: color 0.2s;
    
    &:hover {
      color: ${props => props.theme.title === 'light' ? '#777789': '#C6C6CE'};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: ${props => props.theme.title === 'light' ? '#3D3D4D': '#FFFFFF'};
      }

      p {
        font-size: 18px;
        color: ${props => props.theme.title === 'light' ? '#737380': '#C5C5CB'};
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {

      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: ${props => props.theme.title === 'light' ? '#3D3D4D': '#DFDFE3'};
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${props => props.theme.title === 'light' ? '#6C6C80': '#AAAAAA'};
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  
  a {
    background-color: ${props => props.theme.title === 'light' ? '#FFFFFF': '#454545'};
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${props => props.theme.title === 'light' ? '#3D3D4D': '#FFFFFF'};
        font-weight: 500;
      }

      p {
        font-size: 18px;
        color: ${props => props.theme.title === 'light' ? '#A8A8B3': '#C5C5CB'};
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;