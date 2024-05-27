import { Benefits } from 'modules/benefit';
import { HowItsMade } from 'modules/howItsName';
import { MainPageHero } from 'modules/mainPageHero';
import { Taste } from 'modules/taste';
import { OurProducts } from 'modules/ourProducts';
import { PicturesPart } from 'modules/picturesPart';
import { Reviews } from 'modules/reviews';
// import { Cart } from 'modules/cart';

const MainPage = () => {
  return (
    <main>
      <MainPageHero />
      <Benefits />
      <Taste />
      <HowItsMade />
      <OurProducts />
      <PicturesPart />
      <Reviews />
      {/* <Cart/> */}
    </main>
  );
};

export default MainPage;
