import styled from 'styled-components';

interface IHeaderProps {
  activeHeader: 'monthly' | 'yearly';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  a {
    height: 48px;
    margin-top: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 25px;
    font-weight: 800;
    text-decoration: none;
    color: #fff;

    background: #306292;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    cursor: default;
  }
`;

export const Wrapper = styled.div`
  margin: 0 16px;
`;

export const Header = styled.div<IHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  button {
    width: 100%;

    font-size: 18px;
    font-weight: 600;
    color: #A1A5AC;
    
    background: none;
    border: none;
    outline: none;

    border-bottom: 5px solid #fff;
    border-radius: 4px;
  }

  button.${props => props.activeHeader} {
    border-color: #FA6D6C;
  }
`;

export const Balance = styled.div`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  margin-top: 8px;
  padding: 8px 20px;

  div {
    display: flex;
    justify-content: space-between;
    
    & + div {
      padding-top: 4px;
    }

    span {
      font-size: 18px;
      font-weight: 600;
      color: #A1A5AC;
    }

    span.income {
      color: #53DC8D;
    }

    span.costs {
      color: #666;
    }
  }
`;

export const Text = styled.p`
  margin: 0 16px;

  font-size: 18px;
  font-weight: 500;
`;

export const Insights = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 25px;

  div {
    width: 148px;
    background: #EFF7FF;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    padding: 16px 4px 16px 10px;

    span {
    font-size: 18px;
    font-weight: 600;
    color: #53575D;
    }
  } 
`;