import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const CardWrapperScope = tw.div`
  relative
  w-full
  h-64
  bg-cover
  bg-center
  group
  rounded-sm
  overflow-hidden
  shadow-lg
  hover:shadow-2xl
  transition
  duration-300
  ease-in-out
`;

export const CardWrapper = styled(CardWrapperScope)`
  background-image: url(${(props) => props.imgurl});
`;

export const CardOverlay = tw.div`
  absolute
  inset-0
  bg-black
  bg-opacity-50
  group-hover:opacity-75
  transition duration-300
  ease-in-out
`;

export const CardContent = tw.div`
  relative
  w-full
  h-full
  px-4
  sm:px-6
  lg:px-4
  flex
  justify-center
  items-center
`;

export const CardH3 = tw.h3`
  text-center
`;

export const CardLink = tw.p`
  text-white
  text-2xl
  font-bold
  text-center
`;

export const CardSpan = tw.span`
  absolute
  inset-0
`;
