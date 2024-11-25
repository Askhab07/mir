import {MagnifyingGlassCircleIcon} from '@heroicons/react/24/solid';

const SearchReport = () => {
    return (
        <div className='flex justify-between items-center w-80 h-10 bg-sky-700 rounded-lg px-3 text-white mb-5'>
            <input className='w-64 bg-inherit outline-none placeholder:text-sky-600' type='text' placeholder='Поиск...'/>
            <MagnifyingGlassCircleIcon className='size-6'/>
        </div>
    );
};

export default SearchReport;