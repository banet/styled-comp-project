import { StyledHeader, Nav, Logo } from "./styles/Header.styled"

import {Container} from './styles/Container.styled'

import {Button} from './styles/Button.styled'

function Header() {

    return(
        <StyledHeader bg='red' >
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt="" />
                    <Button>Try it Free</Button>
                </Nav>
            </Container>
            
          
            </StyledHeader>
    )
}

 export default Header