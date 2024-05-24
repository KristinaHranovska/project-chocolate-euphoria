import style from './OurProducts.module.scss';

import { Container, MainTitle } from 'shared/components';
import Products from '../Products/Products';
import ProductsCategories from '../ProductsCategories/ProductsCategories';
import SectionMain from 'shared/components/SectionMain/SectionMain';

const OurProducts = () => {
  return (
    <>
      <SectionMain id="ourProducts">
        <Container>
          <MainTitle className={style.mainTitle}>
            Our <span className={style.accentMainTitle}>products</span>
          </MainTitle>
          <ProductsCategories />
          <Products />
        </Container>
      </SectionMain>
    </>
  );
};

export default OurProducts;
