import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Button } from "../button/button";
import { NormalButton } from "../button/normalButton";
import { TextButton } from "../button/textButton";

export type StepperStep = {
    component: ReactNode;
    id: string;
}

type Props = {
    children?: ReactNode;
    steps: StepperStep[];
}

export const Stepper = (props: Props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const onNext = () => {
        setCurrentPage(p => ++p);
    }
    const onPrev = () => {
        setCurrentPage(p => --p);
    }

    return (
        <div>
            <StepperContainer>
                {
                    props.steps.map((_, i) => <Step key={i} state={currentPage - 1 === i ? 'active' : currentPage - 1 > i ? 'completed' : 'none'} />)
                }
            </StepperContainer>
            <ContentContainer>
                {
                    props.steps[currentPage - 1].component
                }
            </ContentContainer>
            <FooterContainer>
                {
                    currentPage > 0 && currentPage !== 1 && currentPage !== props.steps.length && <TextButton buttonProps={{
                        onClick: onPrev
                    }}>
                        Vorige
                    </TextButton>
                }
                {
                    currentPage === props.steps.length && <StyledButton>
                        Opslaan
                    </StyledButton>
                }
                {
                    currentPage < props.steps.length && currentPage !== props.steps.length && <StyledNormalButton buttonProps={{
                        onClick: onNext
                    }}>
                        Volgende
                    </StyledNormalButton>
                }
            </FooterContainer>
        </div>
    );
}

const StepperContainer = styled.div`
    display: flex;
    gap: .5rem;
`;

type StepProps = {
    state: 'active' | 'completed' | 'none';
}
const Step = styled.div<StepProps>`
    border-radius: 20px;
    background-color: ${p => {
        switch (p.state) {
            case 'completed':
                return p.theme.primary;
            case 'active':
                return '#b8babd';
            case 'none':
                return '#e5e6e7';
        }
    }};
    height: 3px;
    flex: 1;
`;

const ContentContainer = styled.div`
    padding: 2rem 0;
`;

const FooterContainer = styled.div`
    border-top: 1px solid #e9e9ea;
    padding-top: 1rem;
    display: flex;
    justify-content: end;
    gap: 1rem;
    height: 40px;
`;

const StyledButton = styled(Button)`
    padding-left: 1rem;
    padding-right: 1rem;
`;

const StyledNormalButton = styled(NormalButton)`
    padding-left: 1rem;
    padding-right: 1rem;
`;