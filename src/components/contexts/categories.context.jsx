import {createContext, useState, useEffect} from 'react';
import {getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.jsx';

export const CategoriessContext = createContext({
    categoriesMap: {},
    setCategoriesMap: ()=> {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect (()=> {
        const getCategoryMap = async () =>{
            const categoriesMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoriesMap);
        };
    
    }, []);
    const value = {categoriesMap};
    return (
        <CategoriessContext.Provider value={value}>{children}</CategoriessContext.Provider>
    )
}
