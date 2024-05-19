import { Benefits } from 'modules/benefit';
import { MainPageHero } from 'modules/mainPageHero';
import { Taste } from 'modules/taste';

const MainPage = () => {
  return (
    <main>
      <MainPageHero />
      <Benefits />
      <Taste />
    </main>
  );
};

export default MainPage;
