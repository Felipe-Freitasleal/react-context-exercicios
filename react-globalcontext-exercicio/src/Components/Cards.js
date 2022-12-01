import styled from "styled-components";
import { useState } from "react";

export default function Cards(props) {

    const [ click, setClick] = useState(false)
    console.log(click)
  
    
    const mudaEstado = () => {
        setClick(!click)
    }
    const { usuario } = props;

    const Div = styled.div`
    border: ${click? "2px solid orange": "2px solid transparent"};
    border-radius: 5px;
    margin: 10px;
    max-width: 300px;
    :hover{
        box-shadow: 0.5px 0.5px 8px;
    }
    `

    return (
        <Div onClick={mudaEstado}>
            <p>{usuario.name}</p>
            <p>{usuario.id}</p>
        </Div>
    );
}

