import { Link } from 'react-router-dom';
import { ToggleButtonOpen } from '../Mobile/ToggleButtonOpen';
import { DesktopMenu } from './DesktopMenu';

export const DesktopHeader = (props) => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
      <div className='flex justify-between items-center py-6 md:justify-start md:space-x-10'>
        {/* Logo */}
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <Link to='/'>
            <span className='sr-only'>Workflow</span>
            <img
              className='h-8 w-auto sm:h-10'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt=''
            />
          </Link>
        </div>
        <ToggleButtonOpen />
        <DesktopMenu
          isLogged={props.isLogged}
          handleLogout={props.handleLogout}
        />
      </div>
    </div>
  );
};
