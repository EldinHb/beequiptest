import styled from "styled-components";

type Props = {
    children?: string | never[];
    className?: string;
}

export const Title = ({ children, className }: Props) => {
    return (
        <StyledTitle className={className}>
            {
                children
            }
        </StyledTitle>
    );
}

const StyledTitle = styled.h3`
    font-weight: bold;
    margin: 0;
`;