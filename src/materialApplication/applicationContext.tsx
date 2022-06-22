import { createContext, ReactNode, useContext, useState } from "react";

export type Condition = 'used' | 'new';
export type LeaseType = 'financial' | 'operational' | 'saleAndLeaseBack';

export type ApplicationData = {
    brand: string;
    model: string;
    year: string;
    condition: Condition;
    value: string;
    leaseType: LeaseType;

    // and more if necessary
}

type ApplicationContextValue = {
    data: ApplicationData;
    shadowData: ApplicationData;
    setData: (data: ApplicationData) => void;
    saveData: () => void;
}
const applicationContext = createContext<ApplicationContextValue | undefined>(undefined);

export const ApplicationContextProvider = ({ children, value }: { children?: ReactNode, value: ApplicationData }) => {
    const [data, setData] = useState(value);
    const [shadowData, setShadowData] = useState(value);

    const onSave = () => {
        setData(shadowData);
    };

    return (
        <applicationContext.Provider value={{
            data,
            shadowData,
            setData: setShadowData,
            saveData: onSave
        }}>
            {
                children
            }
        </applicationContext.Provider>
    );
}

export const useApplicationContext = () => {
    const context = useContext(applicationContext);

    if (!context) {
        throw Error('ApplicationContext can only be used in a ApplicationContextProvider');
    }

    return context;
}