import { Search } from "@material-ui/icons"
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
    Navigate
  } from "react-router-dom";
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import { logout } from "../redux/apiCalls";

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: none;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector((state)=> state.user)
    const cUser = user.currentUser ? user.currentUser : false;
    const dispatch = useDispatch()

   const cart = useSelector(state=>state.cart)
   console.log(cart)

   const handleLogout = (e) => {
       e.preventDefault();
    logout(dispatch);
   }
   
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input /> 
                    <Search style={{ color:"gray", fontSize: 16 }}/>
                </SearchContainer>
            </Left>

            <Link to={'/'}><Center><img width={140} src={"https://teslaelectronics.ca/wp-content/uploads/2022/01/Logo-B-PNG-Transparent.png"} /></Center></Link>

            <Right>
                <MenuItem><Link to={'/register'} element={cUser ? <Navigate to="/" /> : <Register/>}>REGISTER</Link></MenuItem>
                { !cUser && <MenuItem><Link to={'/login'} element={cUser ? <Navigate to="/" /> : <Register/>}>SIGN IN</Link></MenuItem>}
                { cUser && <MenuItem onClick={handleLogout}><Link to={'/login'} element={cUser ? <Navigate to="/" /> : <Register/>}>LOGOUT</Link></MenuItem>}
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
            
        </Wrapper>
    </Container>
  )
}

export default Navbar