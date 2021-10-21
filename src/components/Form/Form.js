import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const FormScope = tw.div`
  w-full
  h-screen
  flex
  items-center
  justify-center
`;

const FormBodyScobe = tw.div`
  bg-primary
  h-auto
  pt-8
  pb-8
  px-8
  flex
  flex-col
  items-center
  transform
`;

const FormBody = styled(FormBodyScobe)`
  width: ${(props) => props.inputwidth || '58rem'};
`;

export { FormScope, FormBody };
