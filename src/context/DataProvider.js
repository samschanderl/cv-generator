import React from "react";

const DataContext = React.createContext();

const DataProvider = ({ children }) => {
    // const [name, setName ] = React.useState('');
    // const [role, setRole ] = React.useState('');
    // const [dateOfBirth, setDateOfBirth] = React.useState('');

    const [user, setUser] = React.useState({
        name: '',
        role: '',
        dateOfBirth: '',

    })

    return (
        <DataContext.Provider value={{user, setUser}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => React.useContext(DataContext);

export default DataProvider;