import { Link } from 'react-router-dom';
import ListReport from '../components/report/ListReport';
import SearchReport from '../components/report/SearchReport';

const Report = () => {
    return (
        <div className='min-h-screen bg-sky-800 pt-8 px-7'>
            <h1 className='text-2xl text-whitetext-3xl text-white mb-5 font-semibold'>Отчеты</h1>
            <SearchReport />
            <ListReport/>
            <Link className='w-80 h-10 flex justify-center items-center text-xl text-white bg-sky-400 rounded-lg  fixed bottom-24' to='/report/add'>
              <button>Добавить отчет</button>
            </Link>
        </div>
    );
};

export default Report;