import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const StyledDropdownToggle = styled(Dropdown.Toggle)`
  position: relative;
  background-color: transparent;
  height: 16px;
  width: 16px;
  border: none;
`;

export const StyledDropdownMenu = styled(Dropdown.Menu)`
  display: flex;
  flex-direction: column;

  /* position: absolute;
  inset: 0px auto auto 0px;
  transform: translate3d(428px, 47.5px, 0px); */

  margin-top: 25px;
  row-gap: 16px;
  border-radius: 10px;
  padding: 16px;
  width: 118px;
  height: 88px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  background: #fff;
`;

export const StyledDropdownItem = styled(Dropdown.Item)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #407bff;
  text-decoration: none;
`;

export const StyledHeaderUserSelect = styled.svg`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: var(--primary-blue);
  height: 15px;
  width: 15px;
  border: none;
`;
export const StyledHeaderUserSelectIcon = styled.svg`
  /* fill: transparent; */
  stroke: var(--primary-blue);
  fill: transparent;
  height: 15px;
  width: 15px;
`;
export const StyledWrapSelectUserItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
