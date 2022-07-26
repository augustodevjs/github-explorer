import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.title === 'light' ? '#3A3A3A': '#E8E8E8'};
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: none;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    outline: none;
    border: 2px solid #fff;
    border-right: 0;
    ${(props) => props.hasError && css`
      border-color: #c53030;
    `};

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;