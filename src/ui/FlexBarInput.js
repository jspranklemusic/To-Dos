import styled from 'styled-components'

const FlexBarInput = styled.div`
    display:flex;
    width:calc(100% - 1rem);
    align-items:center;
    overflow:hidden;
    height:2rem;
    position:absolute;
    bottom:0.5rem;
    left:0.5rem;
    z-index:10;
    


    & input{
        flex:1;
        height:100%;
        font-size:1rem;
        box-sizing:border-box;
        padding:0.5rem;
        border-top-left-radius:2rem;
        border-bottom-left-radius:2rem;
        border:none;
        outline:none;
        transition:0.2s;
        
        &:focus{
            background:var(--color-lightgreen);
        }
    }

    & button{
        flex:0;
        background:green;
        color:white;
        border:none;
        outline:none;
        font-size:2rem;
        height:2rem;
        width:2rem;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-bottom:0.25rem;
        margin-left:-1rem;
        border-radius:50%;
        cursor:pointer;
        transition:0.2s;

        &:hover{
            background:rgba(0,175,0)
        }
        &:active{
            background:rgba(0,100,0)
        }
       
    }

`

export default FlexBarInput