import SectionMain from 'shared/components/SectionMain/SectionMain';
import TasteCards from '../TasteCards/TasteCards';
import TasteText from '../TasteText/TasteText';

const Taste = () => {
  return (
    <SectionMain>
      <TasteText />
      <TasteCards />
    </SectionMain>
  );
};

export default Taste;
