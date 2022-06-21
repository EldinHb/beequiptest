import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
    children?: string | never[];
    className?: string;
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button = (props: Props) => {
    return (
        <StyledButton {...props.buttonProps} className={props.className}>
            {
                props.children
            }
        </StyledButton>
    );
}

const StyledButton = styled.button`
    padding: .5rem;
    background-color: ${p => p.theme.primary};
    border: none;
    color: white;
    font-weight: 600;
    font-size: .9rem;
    border-radius: 5px;
    box-shadow: rgb(45 54 66 / 7%) 0px 2px 4px, rgb(45 54 66 / 7%) 0px 1px 2px;

    :hover {
        cursor: pointer;
    }
`;