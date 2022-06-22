import styled from "styled-components";
import { Choices } from "../../components/input/choiceGroup";
import { Input } from "../../components/input/input";
import { Select } from "../../components/input/select";
import { Condition, LeaseType, useApplicationContext } from "../applicationContext";


export const ApplicationInformation = () => {
    const appContext = useApplicationContext();

    return (
        <Container>
            <Input type={'text'} title='Merk' defaultValue={appContext.shadowData.brand} onChange={e => appContext.setData({
                ...appContext.shadowData,
                brand: e.target.value
            })} />

            <Input type={'text'} title='Model' defaultValue={appContext.shadowData.model} onChange={e => appContext.setData({
                ...appContext.shadowData,
                model: e.target.value
            })} />

            <Select
                title='Bouwjaar'
                // just a couple years added for show
                options={[
                    '2022',
                    '2021',
                    '2020'
                ]}
                defaultValue={appContext.shadowData.year}
                onChange={e => appContext.setData({
                    ...appContext.shadowData,
                    year: e.target.value
                })}
            />

            <Choices
                styles={{
                    flexContainer: {
                        display: 'flex',
                        gridGap: '1rem'
                    }
                }}
                onChange={(e, o) => appContext.setData({
                    ...appContext.shadowData,
                    condition: o ? o.key as Condition : 'used'
                })}
                defaultSelectedKey={appContext.shadowData.condition}
                title="Conditie" options={[
                    {
                        key: 'used',
                        text: 'Gebruikt'
                    },
                    {
                        key: 'new',
                        text: 'Nieuw'
                    }
                ]} />

            <Input
                icon="€"
                type={'text'}
                title='Aanschafwaarde'
                defaultValue={appContext.shadowData.value}
                onChange={e => appContext.setData({
                    ...appContext.shadowData,
                    value: e.target.value
                })} />

            <Choices
                styles={{
                    flexContainer: {
                        display: 'flex',
                        gridGap: '1rem'
                    }
                }}
                onChange={(e, o) => appContext.setData({
                    ...appContext.shadowData,
                    leaseType: o ? o.key as LeaseType : 'financial'
                })}
                defaultSelectedKey={appContext.shadowData.leaseType}
                title="Leasevorm" options={[
                    {
                        key: 'financial' as LeaseType,
                        text: 'Financial'
                    },
                    {
                        key: 'operational' as LeaseType,
                        text: 'Operational'
                    },
                    {
                        key: 'saleAndLeaseBack' as LeaseType,
                        text: 'Sale and leaseback'
                    }
                ]} />
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 50% 50%;
`;