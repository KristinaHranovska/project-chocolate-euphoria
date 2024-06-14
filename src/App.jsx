import { MainPage } from './pages';
import { SharedLayout } from 'shared/components';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <>
      <SharedLayout>
        <MainPage />
      </SharedLayout>
    </>
  );
}

export default App;
