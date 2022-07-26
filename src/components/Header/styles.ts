import styled from "styled-components";

export const HeaderLogo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      display: flex;
      align-items: center;
      color: ${props => props.theme.title === 'light' ? '#878797': '#a8a8b3'};
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${props => props.theme.title === 'light' ? '#777789': '#C6C6CE'};
      }

      svg {
        margin-right: 4px;
      }
    }
  }
`;