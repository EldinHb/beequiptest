import { FontIcon } from "@fluentui/react";
import { SelectHTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
    title: string;
    options: string[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = (props: Props) => {
    const { title, ...rest } = props;

    return (
        <div>
            <InputTitle>
                {
                    title
                }
            </InputTitle>
            <SelectContainer>
                <StyledSelect {...rest}>
                    {
                        props.options.map(x => <option key={x}>{x}</option>)
                    }
                </StyledSelect>
                <Icon
                    iconName="ChevronDownSmall"
                />
            </SelectContainer>
        </div>
    );
}

const InputTitle = styled.div`
    margin-bottom: .5rem;
    font-size: .9rem;
`;

const StyledSelect = styled.select`
    background-color: #f6f6f6;
    border: none;
    padding: .8rem;
    width: 100%;
    box-sizing: border-box;
    appearance: none;
    font-weight: 600;
    font-size: .9rem;

    :focus {
        outline: none;
    }
`;

const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f6f6f6;
    border-radius: 5px;
    overflow: hidden;
`;

const Icon = styled(FontIcon)`
    color: black;
    font-size: .8rem;
    padding: 5px 1.5rem 5px 0;
`;