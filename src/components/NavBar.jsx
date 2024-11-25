import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import {
  ClipboardDocumentListIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="flex items-center min-w-full h-20 px-2 fixed bottom-0 rounded-t-xl bg-sky-700 text-white">
      <ul className="w-full flex justify-between">
        <li className="w-20">
          <Link
            className="flex flex-col items-center gap-1 text-xs"
            to="/report"
          >
            <ClipboardDocumentListIcon className="size-6" />
            Отчет
          </Link>
        </li>
        <li className="w-20">
          <Link className="flex flex-col items-center gap-1 text-xs" to='/chart'>
            <CurrencyDollarIcon className="size-6" />
            Касса
          </Link>
        </li>
        <li className="w-20">
          <Link className="flex flex-col items-center gap-1 text-xs" to='/users'>
            <UsersIcon className="size-6" />
            Сотрудники
          </Link>
        </li>
        <li className="w-20">
          <Link className='flex flex-col items-center gap-1 text-xs' to='/user'>
            <UserIcon className="size-6" />
            Профиль
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
