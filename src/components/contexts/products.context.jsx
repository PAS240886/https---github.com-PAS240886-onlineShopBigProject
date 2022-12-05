import {createContext, useState, useEffect} from 'react';
import {getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.jsx';

export const ProductsContext = createContext({
    products: [],
    setProducts: ()=> {},
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect (()=> {
        const getCategoryMap = async () =>{
            const categoryMap = await getCategoriesAndDocuments();
        };
    
    }, []);
    const value = {products};
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}
