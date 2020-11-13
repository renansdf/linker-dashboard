import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 16px 16px;

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

export const Balance = styled.div`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  margin-top: 25px;
  padding: 8px 20px;

  div {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;

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

export const Text = styled.span`
  padding: 0 16px;

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