import React from "react";

const DataContext = React.createContext();

const DataProvider = ({ children }) => {

    const [user, setUser] = React.useState({
        name: '',
        role: '',
        description: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        address: {
            street: '',
            streetNumber: '',
            postalCode: '',
            city: '', 
            country: '',
        },
        workExperience: [{
            id: 1,
            startYear: 2019,
            endYear: 2022,
            position: 'Frontend Developer',
            city: 'Berlin',
            company: 'Microsoft',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit accusantium rem necessitatibus totam aspernatur quis autem explicabo eum libero.'
        }],
        education: [{
            startYear: 2012,
            endYear: 2015,
            institution: 'Hochschule Berlin',
            city: 'Berlin',
            title: 'BSc Computer Science',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident alias nihil non voluptate ullam accusamus tenetur dolor, sint nulla reprehenderit.'
        }],
        skills: ['React', 'JavaScript'],
        interests: [],
        extracurricularActivities: []

    })

    return (
        <DataContext.Provider value={{user, setUser}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => React.useContext(DataContext);

export default DataProvider;