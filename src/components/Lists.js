import React, {useState} from 'react'
import styled from 'styled-components'

const Div = styled.div`
    height:calc(100vh - 6rem);
    position:absolute;
    width:100%;
    box-sizing:border-box;
    padding-right:1rem;
    top:3rem;
    overflow-y:scroll;

    &::after{
        content:"";
        position:fixed;
        pointer-events:none;
        width:100vw;
        height:calc(100vh - 6rem);
        top:3rem;
        left:0;
        z-index:100;
        background:linear-gradient(transparent 0%, rgba(255,255,255,0.5) 80%);
    }
`

const List = props=><Div>{props.children}</Div>

export default List