import {Container} from './styles/Container.styled'
import {Flex } from './styles/Flex.styled'
import {StyledFooter} from './styles/Footer.styled'

const Footer = () => {
    return ( 
        <StyledFooter>
            <Container>

                <img src="./images/logo:white.svg" alt="" />
                <Flex>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>+1-154-23434-223</li>
                        <li>exapmle@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contac Us</li>
                    </ul>
                    {/**socila icons */}
                </Flex>
                <p>&copy  All right reserved</p>

            </Container>
        </StyledFooter>
     );
}
 
export default Footer;