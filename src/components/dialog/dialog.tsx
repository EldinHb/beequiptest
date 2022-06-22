import { FontIcon } from "@fluentui/react";
import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../text/title";

type Props = {
    hidden: boolean;
    title: string;
    onClose?: () => void;
    children?: ReactNode;
}

export const Dialog = (props: Props) => {
    const [isHidden, setIsHidden] = useState(props.hidden);

    useEffect(() => {
        setIsHidden(props.hidden);
    }, [props.hidden]);

    const onCloseClick = () => {
        setIsHidden(true);
        props.onClose?.();
    }

    if (isHidden) {
        return <></>;
    }

    return (
        <Overlay>
            <Container>
                <Header>
                    <Title>
                        {
                            props.title
                        }
                    </Title>
                    <CloseIcon onClick={onCloseClick} iconName="ChromeClose" />
                </Header>
                {
                    props.children
                }
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
    width: 50vw;
    background-color: white;

    margin: 50px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const CloseIcon = styled(FontIcon)`
    font-size: .7rem;
    :hover {
        cursor: pointer;
    }
`;