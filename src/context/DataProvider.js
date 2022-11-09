import React from "react";

const DataContext = React.createContext();

const DataProvider = ({ children }) => {

    const [user, setUser] = React.useState({
        name: '',
        role: '',
        dateOfBirth: '',
        workExperience: [{
            startYear: 2019,
            endYear: 2022,
            position: 'Frontend Developer',
            city: 'Berlin',
            company: 'Microsoft',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit accusantium rem necessitatibus totam aspernatur quis autem explicabo eum libero.'
        }]

    })

    return (
        <DataContext.Provider value={{user, setUser}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => React.useContext(DataContext);

export default DataProvider;