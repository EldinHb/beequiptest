import { ReactNode } from "react";
import styled from "styled-components";
import { Stepper } from "../stepper/stepper";
import { Title } from "../text/title";

type Props = {
    hidden: boolean;
    title: string;
    children?: ReactNode;
}

export const Dialog = (props: Props) => {
    return (
        <Overlay>
            <Container>
                <Header>
                    <Title>
                        {
                            props.title
                        }
                    </Title>
                    close
                </Header>
                <Stepper
                    steps={[
                        {
                            component: <div>test</div>,
                            id: '1'
                        },
                        {
                            component: <div>test2</div>,
                            id: '2'
                        },
                        {
                            component: <div>test3</div>,
                            id: '3'
                        }
                    ]}
                />
            </Container>
        </Overlay>
    );
}

const Overlay = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`;

const Container = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 22px 3px rgb(125 125 125 / 27%);
    padding: 2rem;
    width: 40vw;
    background-color: white;

    margin: 50px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;