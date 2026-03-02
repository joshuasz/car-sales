import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const SyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;
const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  &:last-child {
    margin-right: 0; 
  }
`;

export default function Header() {
  return (
    <SyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Premium Car Club</Logo>
          <StyledNav>
            <NavLink href={"/"}>Pagina Principal</NavLink>
            <NavLink href={"/carros"}>Todos los autos</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </SyledHeader>
  );
}
