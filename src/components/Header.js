import React, {useState} from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
    padding:0;
    margin:0;
    height:3rem;
    background:rgba(50,50,50);
    font-size:1.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    color:rgba(220,220,220);
`

const Header = props=><H1>My To-Do's</H1>

export default Header