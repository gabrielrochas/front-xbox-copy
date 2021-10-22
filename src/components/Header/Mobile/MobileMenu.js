import { Link } from 'react-router-dom';

import tw from 'tailwind-styled-components';

const LinkStyleScope = tw.div`
  w-full
  flex
  items-center
  justify-center
  px-4
  py-2
  border
  border-transparent
  rounded-md
  shadow-sm
  text-base
  font-medium
  text-white
  bg-indigo-600
  hover:bg-indigo-700
`;

export const MobileMenu = (props) => {
  const isLogged = props.isLogged;
  return (
    <div className='py-6 px-5 space-y-6'>
      {isLogged !== true ? 
        <LinkStyleScope >
            <Link to='/signup'>Sign up</Link>
        </LinkStyleScope> : ''}
      <p className='mt-6 text-center text-base font-medium text-white'>
        {isLogged !== true ? (
          <span>
            Existing user?{' '}
            <Link to='/login' className='text-indigo-600 hover:text-indigo-500'>
              Sign in
            </Link>
          </span>
        ) : (
          <div className='flex flex-col mb-2'>
            <Link
              to='/games/create'
              className='inline-flex items-center justify-center mb-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
            >
              New Game
            </Link>
            <Link
              to='/login'
              onClick={props.handleLogout}
              className='text-indigo-600 hover:text-indigo-500'
            >
              Log out
            </Link>
          </div>
        )}
      </p>
    </div>
  );
};
