import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { MobileMenu } from './MobileMenu';

export const MobileHeader = (props) => {
  return (
    <Transition
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Popover.Panel
        focus
        className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
      >
        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-theme-bg divide-y-2 divide-white'>
          <div className='pt-5 pb-6 px-5'>
            <div className='flex items-center justify-between'>
              <div>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                  alt='Workflow'
                />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='bg-theme-bg rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <MobileMenu
            isLogged={props.isLogged}
            handleLogout={props.handleLogout}
          />
        </div>
      </Popover.Panel>
    </Transition>
  );
};
