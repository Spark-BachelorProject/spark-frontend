import styled from "styled-components";
import { ReactComponent as LogoIcon } from "@/assets/icons/logo.svg";

export const Wrapper = styled.nav`
  width: 100vw;
  height: 70px;
  position: fixed;
  top: 0;
  background-color: white;
  padding: 0 20px;
  display: flex;
`;

export const IconsWrapper = styled.div`
  width: 100vw;
  max-width: 476px;
  display: flex;
  margin: 16px auto;
  height: 38px;
  align-items: center;
  justify-content: space-between;
`;

export const InnerIconsWrapperLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const InnerIconsWrapperRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 16px 0;
  height: 38px;
`;

export const IconBorder = styled.div`
  border: solid 1px #f1f5f9;
  height: 39px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 13px;
  border-radius: 7px;
  margin-left: 10px;
`;

export const Divider = styled.div`
  border-left: 1px solid #f1f5f9;
  height: 22px;
  margin: 0 15px;
`;

export const SearchBar = styled.input`
  background-color: white;
  padding: 11px 13px;
  border-radius: 7px;
  border: 1px solid #f1f5f9;
  outline: none;
  width: clamp(40px, 100%, 400px);
`;

export const StyledLogoIcon = styled(LogoIcon)`
  min-width: 74px;
  width: 180px;
`;
