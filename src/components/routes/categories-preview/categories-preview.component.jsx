import {useContext} from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CAtegoryPreview from '../../product-card/product-card.component';
import  './categories-preview.styles.scss';




const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <div className='category-preview-container'>
                {Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CAtegoryPreview key={title} title={title} products={products}  />
                })}Renaming and categories preview added
        </div>
    );
};

export default CategoriesPreview;