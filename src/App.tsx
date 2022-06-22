import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { ThemeProvider as FluentThemeProvider } from '@fluentui/react';
import { Fragment, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from './components/button/button';
import { Card } from './components/card/card';
import { Dialog } from './components/dialog/dialog';
import { Stepper, StepperStep } from './components/stepper/stepper';
import { ApplicationContextProvider, ApplicationData, useApplicationContext } from './materialApplication/applicationContext';
import { ApplicationInformation } from './materialApplication/steps/applicationInformation';
import GlobalStyle from './styles/globalStyles';
import { defaultTheme, fluentTheme } from './styles/theme';
initializeIcons();

const MachineData: ApplicationData = {
  brand: 'Scania',
  condition: 'used',
  leaseType: 'financial',
  model: 'R730 - Topline Hydroliek',
  year: '2022',
  value: '120.000'
}

function App() {

  return (
    <>
      <GlobalStyle />
      <FluentThemeProvider theme={fluentTheme} as={Fragment}>
        <ThemeProvider theme={defaultTheme}>
          <ApplicationContextProvider value={MachineData}>
            <Application />
          </ApplicationContextProvider>
        </ThemeProvider>
      </FluentThemeProvider>
    </>
  );
}

const financeOrOpSteps: StepperStep[] = [
  {
    component: <ApplicationInformation />,
    id: 'machinedata'
  },
  {
    component: <div>supplier</div>,
    id: 'supplier'
  },
  {
    component: <div>rental</div>,
    id: 'rental'
  },
  {
    component: <div>lease details</div>,
    id: 'leaseDetails'
  },
  {
    component: <div>VAT</div>,
    id: 'VAT'
  }
];

const saleAndLeasebackSteps: StepperStep[] = [
  {
    component: <ApplicationInformation />,
    id: 'machinedata'
  },
  {
    component: <div>rental</div>,
    id: 'rental'
  },
  {
    component: <div>lease details</div>,
    id: 'leaseDetails'
  }
];

const Application = () => {
  const { data, shadowData, saveData } = useApplicationContext();

  const [isDialogHidden, setIsDialogHidden] = useState(true);
  const [steps, setSteps] = useState<StepperStep[]>(financeOrOpSteps);

  useEffect(() => {
    if (shadowData.leaseType === 'saleAndLeaseBack') {
      setSteps(saleAndLeasebackSteps);
    } else {
      setSteps(financeOrOpSteps);
    }

    if (shadowData.condition === 'used') {
      setSteps(s => [...s, {
        component: <div>mileage</div>,
        id: 'mileage'
      }]);
    } else {
      setSteps(s => s.filter(x => x.id !== 'mileage'));
    }
  }, [shadowData.leaseType, shadowData.condition]);

  const onSave = () => {
    saveData();
    setIsDialogHidden(true);
  }

  return (
    <>
      <Page>
        <Card title='Materieel in deze aanvraag'>
          <MaterialContainer>
            <div>
              <MaterialTitle>
                {
                  data.brand + ' ' + data.model
                }
              </MaterialTitle>
              <MaterialSubtitle>
                € {data.value}
                <MaterialDivider>|</MaterialDivider>
                {data.year}
              </MaterialSubtitle>
            </div>
            <Button buttonProps={{
              onClick: () => setIsDialogHidden(false)
            }}>
              Gegevens aanvullen
            </Button>
          </MaterialContainer>
        </Card>
      </Page>
      <Dialog
        onClose={() => setIsDialogHidden(true)}
        hidden={isDialogHidden}
        title={`1. ${data.brand} ${data.model}`}>
        <Stepper
          onSave={onSave}
          steps={steps}
        />
      </Dialog>
    </>
  );
};

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
