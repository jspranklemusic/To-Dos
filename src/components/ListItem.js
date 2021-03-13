import React, {useState} from 'react'
import styled from 'styled-components'

const Div = styled.div`
    border-bottom:2px solid rgba(0,0,0,0.200);
    padding-bottom:0.5rem;
    box-sizing:border-box;
    margin:0.5rem;
    padding:0.5rem 1rem;
    text-align:left;
    display:flex;
    font-size:1rem;
    align-items:center;
    justify-content:space-between;
    
`

const List = styled.div`
    word-break: break-all;
    box-sizing:border-box;
    padding-right:1rem;
`

const DeleteBtn = styled.button`
    background:rgba(200,200,200);
    border:none;
    height:1rem;
    cursor:pointer;
    transition:0.2s;
    border-radius:5px;
    &:hover{
        opacity:0.8;
    }
    &:transition{
        opacity:0.6;
    }
    
`

const ListItem = props=><Div><List>{props.children}</List><DeleteBtn onClick={(e)=>props.methods.removeItem(props.item)}>Delete</DeleteBtn></Div>

export default ListItem