import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
export const ToggleButtonOpen = () => {
  return (
    <div className='-mr-2 -my-2 md:hidden'>
      <Popover.Button className='bg-theme-bg rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
        <span className='sr-only'>Open menu</span>
        <MenuIcon className='h-6 w-6' aria-hidden='true' />
      </Popover.Button>
    </div>
  );
};
