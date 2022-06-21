import { ReactNode } from "react";
import styled from "styled-components";
import { Title } from "../text/title";

type Props = {
    children?: ReactNode;
    title: string;
}

export const Card = ({ children, title }: Props) => {
    return (
        <CardContainer>
            <Section>
                <Title>
                    {
                        title
                    }
                </Title>
            </Section>
            <BottomSection>
                {
                    children
                }
            </BottomSection>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid ${p => p.theme.borderColor};

    background-color: white;
    overflow: hidden;
    width: 35%;
`;

const Section = styled.div`
    padding: 1.3rem;
`;

const BottomSection = styled(Section)`
    border-top: 1px solid ${p => p.theme.borderColor};
    border-bottom: 3px solid ${p => p.theme.borderColor};
`;