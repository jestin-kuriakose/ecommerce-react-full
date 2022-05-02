import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex:1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    text-decoration: none;
` 


const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Right = styled.div`
    flex:1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo><Link to={'/'}><img width={180} src={"https://teslaelectronics.ca/wp-content/uploads/2022/01/Logo-B-PNG-Transparent.png"} /></Link></Logo>
            <Desc>Tesla Electronics is a supplier of Cellphone repair parts. Quality is key in Cellphone Repair Industry and that is our aim as a company- to provide high quality, Industry standard repair parts.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem><Link to={'/'}>Home</Link></ListItem>
                <ListItem><Link to={'/'}>Cart</Link></ListItem>
                <ListItem><Link to={'/'}>My Account</Link></ListItem>
                <ListItem><Link to={'/'}>Back Glass</Link></ListItem>
                <ListItem><Link to={'/'}>Housing</Link></ListItem>
                <ListItem><Link to={'/'}>Display</Link></ListItem>
                
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>79 Florence Ave, Kitchener ON</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+1 519-722-0063</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>jestink@live.com</ContactItem>
            <Payment src="https://teslaelectronics.ca/wp-content/uploads/2022/05/images.jpg"/>
        </Right>
    </Container>
  )
}

export default Footer