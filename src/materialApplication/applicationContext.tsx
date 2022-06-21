import { createContext, ReactNode, useContext, useState } from "react";

export type Condition = 'used' | 'new';
export type LeaseType = 'financial' | 'operational' | 'saleAndLeaseBack';

export type ApplicationData = {
    brand: string;
    model: string;
    year: Date;
    condition: Condition;
    value: string;
    leaseType: LeaseType;

    // and more if necessary
}

type ApplicationContextValue = {
    data: ApplicationData;
    setData: (data: ApplicationData) => void;
}
const applicationContext = createContext<ApplicationContextValue | undefined>(undefined);

export const ApplicationContextProvider = ({ children, value }: { children?: ReactNode, value: ApplicationData }) => {
    const [data, setData] = useState(value);

    return (
        <applicationContext.Provider value={{
            data,
            setData
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