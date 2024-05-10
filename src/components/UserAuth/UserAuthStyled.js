import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const StyledHeaderUserItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
export const StyledHeaderUserItemLink = styled(Link)`
  color: var(--primary-blue);
  text-decoration: none;
`;
