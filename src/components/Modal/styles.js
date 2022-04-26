import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.white[900]};
      margin-bottom: 16px;
    }

    button {
      background: none;
      border: none;

      font-size: 24px;
      color: ${({ theme }) => theme.colors.white[900]};

      transform: translateY(-10%);
      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(.5);
      }

    }
  }
  
  input, select {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;

  .removeButton {
    background: none;
    border: none;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.danger.main};
    transition: color 0.2s ease-in;
    &:focus, &:hover {
      color: ${({ theme }) => theme.colors.danger.dark};
    }
  }

`;
