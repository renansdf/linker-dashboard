import styled from 'styled-components';

export const Container = styled.div`
  margin: 16px 0;

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #53575E;

    padding: 12px 24px 8px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 18px;
  font-weight: 600;
  color: #A1A5AC;

  padding: 0 28px;

  label {
    input {
      margin-right: 8px;
      transform: scale(1.5);
    }
  }
`;