import { Link } from 'react-router-dom';

export const DesktopMenu = (props) => {
  return (
    <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
      {props.isLogged !== true ? (
        <>
          <Link
            to='/login'
            className='whitespace-nowrap text-base font-medium text-white hover:text-gray-900'
          >
            Sign in
          </Link>
          <Link
            to='/signup'
            className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
          >
            Sign up
          </Link>
        </>
      ) : (
        <>
          <Link
            to='/games/create'
            className='mr-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
          >
            New Game
          </Link>
          <a
            href='/#'
            className='whitespace-nowrap text-base font-medium text-white hover:text-gray-900 mr-3'
            onClick={props.handleLogout}
          >
            User Details
          </a>
          <Link
            to='/logout'
            className='whitespace-nowrap text-base font-medium text-white hover:text-gray-900'
            onClick={props.handleLogout}
          >
            Sign out
          </Link>
        </>
      )}
    </div>
  );
};
