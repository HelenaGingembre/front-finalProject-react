import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;
export const Span = styled.span`
  background: #51a2ff;
`;

export const Input = styled.input`
 opacity: 0;
  position: absolute;
 display: none;
 &:checked + ${Span} {
    background: #1e2939;
    }

  }
`;

