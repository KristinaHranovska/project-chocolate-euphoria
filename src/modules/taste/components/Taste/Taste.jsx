import SectionMain from 'shared/components/SectionMain/SectionMain';
import TasteCards from '../TasteCards/TasteCards';
import TasteText from '../TasteText/TasteText';
import { Container } from 'shared/components';

const Taste = () => {
  return (
    <SectionMain>
      <Container>
        <TasteText />
        <TasteCards />
      </Container>
    </SectionMain>
  );
};

export default Taste;
