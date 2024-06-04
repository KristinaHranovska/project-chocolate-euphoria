import { useState } from 'react';

import dbCategories from 'shared/data/categories';
import { Container, MainTitle } from 'shared/components';
import Products from '../Products/Products';
import ProductsCategories from '../ProductsCategories/ProductsCategories';
import SectionMain from 'shared/components/SectionMain/SectionMain';

import style from './OurProducts.module.scss';

const OurProducts = () => {
  const [currentCategory, setCurrentCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <>
      <SectionMain id="ourProducts">
        <Container>
          <MainTitle className={style.mainTitle}>
            Our <span className={style.accentMainTitle}>products</span>
          </MainTitle>
          <ProductsCategories
            categoriseList={dbCategories}
            chooseCategory={handleCategoryChange}
            currentCategory={currentCategory}
          />
          <Products currentCategory={currentCategory} />
        </Container>
      </SectionMain>
    </>
  );
};

export default OurProducts;
