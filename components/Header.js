import { SearchIcon } from '@heroicons/react/outline'
import { Autocomplete } from '@react-google-maps/api'

const Header = () => {
  return (
    <div className='bg-[#f73859] h-16 flex items-center justify-between px-12 font-mono'>
      <div className='text-gray-200 text-lg font-bold'>Travel Advisor</div>
      <div className='flex space-x-4 items-center'>
        <p className='text-gray-200 font-bold select-none'>
          Explore New Places
        </p>
        <div className='relative group'>
          <input
            type='text'
            className='rounded py-2 pl-8 focus:outline-none focus:ring-1 focus:ring-[#384259] focus:ring-offset-1 focus:ring-offset-[#384259]'
            placeholder='Search...'
          />
          <SearchIcon className='absolute inset-0 text-gray-500 top-2.5 left-2 h-5 w-5 transform animate-pulse group-hover:animate-none' />
        </div>
      </div>
    </div>
  )
}

export default Header
