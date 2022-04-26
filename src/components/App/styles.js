import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  text-align: center;
  margin: 48px 0;

  h1 > strong {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const WalletInfoContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: block;
    font-size: 16px;
  }

  strong {
    margin-top: 4px;
    font-size: 28px;
  }
`;

export const AssetsList = styled.ul`
  list-style-type: none;

  h2 {
    margin-bottom: 8px;

    font-weight: normal;
    font-size: 16px;
  }

  > span:last-child {
    display: block;
    margin-top: 14px;
    text-align: center;

    color: ${({ theme }) => theme.colors.white[100]};
  }

`;

export const Asset = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 14px 14px;

  box-shadow: 0px 4px 10px rgba(250, 250, 250, 0.04);
  border-radius: 8px;

  cursor: pointer;
  transition: transform 0.2s ease-in;

  div:first-child {
    span {
      color: ${({ theme }) => theme.colors.white[900]};
    }
  }

  > div:last-child {
    text-align: right;

    h3 {
      color: ${({ theme }) => theme.colors.primary.main};

      small {
        font-size: 12px;
        text-transform: lowercase;
      }

    }

    span {
      color: ${({ theme }) => theme.colors.white[900]};
    }

  }

  & + & {
    margin-top: 12px;
  }

  &:hover {
    transform: translateY(-2.5px);
  }

`;
