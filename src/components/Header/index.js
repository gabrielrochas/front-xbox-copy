/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react';
import { JwtHandler } from '../../jwt-handler/JwtHandler';
import Logout from '../../pages/Logout/Logout';
import { Popover } from '@headlessui/react';
import { DesktopHeader } from './Desktop/DesktopHeader';
import { MobileHeader } from './Mobile/MobileHeader';

export default function Example() {
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  useEffect(() => {
    setIsLogged(Boolean(JwtHandler.getJwt()));
  }, [isLogged]);

  return (
    <Popover className='mx-auto inset-x-0 top-0 bg-primary'>
      <DesktopHeader isLogged={isLogged} handleLogout={Logout} />
      <MobileHeader isLogged={isLogged} handleLogout={Logout} />
    </Popover>
  );
}
