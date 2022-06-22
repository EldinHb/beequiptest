import { InputHTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
    title: string;
    icon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
    const { title, ...rest } = props;

    return (
        <div>
            <InputTitle>
                {
                    title
                }
            </InputTitle>
            {
                props.icon && <IconInputContainer>
                    <Icon>{props.icon}</Icon>
                    <StyledInput {...rest} />
                </IconInputContainer>
            }
            {
                !props.icon && <StyledInput {...rest} />
            }
        </div>
    );
}

const InputTitle = styled.div`
    margin-bottom: .5rem;
    font-size: .9rem;
`;

const IconInputContainer = styled.div`
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
`;

const Icon = styled.div`
    padding: .8rem 1rem;
    background-color: #e5e6e7;
`;

const StyledInput = styled.input`
    background-color: #f6f6f6;
    border: none;
    padding: .8rem;
    border-radius: 5px;
    font-size: .9rem;
    font-weight: 600;
    width: 100%;
    box-sizing: border-box;

    :focus {
        outline: ${p => p.theme.primary} solid 1px;
    }
`;