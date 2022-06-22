import { ChoiceGroup, IChoiceGroupProps } from "@fluentui/react";
import styled from "styled-components";

type Props = {
    title: string;
} & IChoiceGroupProps;

export const Choices = (props: Props) => {
    const { title, ...rest } = props;

    return (
        <div>
            <InputTitle>
                {
                    title
                }
            </InputTitle>
            <ChoiceGroup {...rest} />
        </div>
    );
}

const InputTitle = styled.div`
    margin-bottom: .5rem;
    font-size: .9rem;
`;