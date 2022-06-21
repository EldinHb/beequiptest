import styled, { ThemeProvider } from 'styled-components';
import { Button } from './components/button/button';
import { Card } from './components/card/card';
import { Dialog } from './components/dialog/dialog';
import GlobalStyle from './styles/globalStyles';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Page>
          <Card title='Materieel in deze aanvraag'>
            <MaterialContainer>
              <div>
                <MaterialTitle>
                  Scania R730 - Topline Hydroliek
                </MaterialTitle>
                <MaterialSubtitle>
                  € 120.000
                  <MaterialDivider>|</MaterialDivider>
                  2020
                </MaterialSubtitle>
              </div>
              <Button>
                Gegevens aanvullen
              </Button>
            </MaterialContainer>
          </Card>
        </Page>
        <Dialog hidden title='1. Scania R730 - Topline Hydroliek' />
      </ThemeProvider>
    </>
  );
}

const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MaterialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MaterialTitle = styled.div`
  font-size: .9rem;
  font-weight: 700;
`;

const MaterialSubtitle = styled.div`
  font-size: .9rem;
`;

const MaterialDivider = styled.span`
  margin: 0 .5rem;
`;

export default App;
