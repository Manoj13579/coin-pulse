import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { getAllCrypto } from '../../Store/getCryptoSlice';





export default function Example() {
const [selectedCurrency, setSelectedCurrency] = useState('usd');
const dispatch = useDispatch();

/* using one useEffect works for app. first selectedCurrency set to 'usd' so useEffect runs. so when first visited app
or refresh getAllCrypto runs so updates table and whenever currency changed updates again. this makes data in each component fetch again so refreshing page gets data again in searchResult too */
useEffect(() => {
  dispatch(getAllCrypto(selectedCurrency));
}, [selectedCurrency])
  
  return (
    <nav>
      <Disclosure as="nav" className="bg-gray-800">
 <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
   <div className="relative flex h-16 items-center justify-between">
     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
       {/* Mobile menu button */}
       <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
         <span className="absolute -inset-0.5" />
         <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
         <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
       </DisclosureButton>
     </div>
     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
     <div className="flex flex-shrink-0 items-center justify-center" >
      <Link to = '/'>
         <img
           alt="Crypto Pulse"
           src={'/logo.png'}
           className='h-10 w-10'
         /> 
       </Link>
       <Link to = '/'>
      <p className='text-cyan-500 font-bold'>Coin Pulse</p>
      </Link>
       </div>
       <div className="hidden sm:ml-6 sm:block">
         <div className="flex space-x-10">
           <Link to = '/'
             className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
             Home
           </Link>
           <Link to = '/'
             className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
             About
           </Link>
           <Link to = '/'
             className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
             Contact
           </Link>
         </div>
       </div>
     </div>

       {/* Currency dropdown */}
       <Menu as="div" className="relative ml-3">
         <div>
           <MenuButton className="relative flex rounded-full bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
             <span className="absolute -inset-1.5" />
             <p className= 'w-10 text-white'>{selectedCurrency}</p>
             <ChevronDownIcon className="ml-2 h-5 w-5 text-white" />
           </MenuButton>
         </div>
         <MenuItems
           transition
           className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
         >
           <MenuItem>
             <p onClick={() => setSelectedCurrency('usd')} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer">
               USD
             </p>
           </MenuItem>
           <MenuItem>
             <p onClick={() => setSelectedCurrency('eur')} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer">
               EUR
             </p>
           </MenuItem>
         </MenuItems>
       </Menu>
   </div>
 </div>
{/* for small screen */}
 <DisclosurePanel className="sm:hidden">
   <div className="space-y-1 px-2 pb-3 pt-2">
     <DisclosureButton
       as={Link}
       to='/'
       className="bg-gray-900  text-cyan-500 block rounded-md px-3 py-2 text-base font-medium"
     >
       Coin Pulse
     </DisclosureButton>
     <DisclosureButton
       as={Link}
       to='/team'
       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
     >
       Home
     </DisclosureButton>
     <DisclosureButton
       as={Link}
       to='/'
       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
     >
       About
     </DisclosureButton>
     <DisclosureButton
       as="a"
       href="#"
       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
     >
       Contact
     </DisclosureButton>
   </div>
 </DisclosurePanel>
</Disclosure>
      <Outlet />
      <Footer />
    </nav>
  );
};