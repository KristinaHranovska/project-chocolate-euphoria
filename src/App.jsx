import { MainPage } from './pages';
import { SharedLayout } from 'shared/components';

function App() {
  return (
    <>
     <h1>Hello</h1>
      <SharedLayout>
        <MainPage />
      </SharedLayout>
    </>
  );
}

export default App;
