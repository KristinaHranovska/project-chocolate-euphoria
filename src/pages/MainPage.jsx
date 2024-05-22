import { Benefits } from 'modules/benefit';
import { HowItsMade } from 'modules/howItsName';
import { MainPageHero } from 'modules/mainPageHero';
import { Taste } from 'modules/taste';

const MainPage = () => {
  return (
    <main>
      <MainPageHero />
      <Benefits />
      <Taste />
      <HowItsMade />
    </main>
  );
};

export default MainPage;
