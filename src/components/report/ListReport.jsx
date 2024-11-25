import axios from 'axios';
import { url } from '../../api/url';
import { useEffect, useState } from 'react';

const ListReport = () => {
  const [activeUserId, setActiveUserId] = useState(null); // Храним ID активного пользователя
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('users');
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Запрашиваем данные с сервера
        const response = await axios.get(url);
        const { users, lastUpdated } = response.data;

        // Получаем сохраненные данные
        const savedData = JSON.parse(localStorage.getItem('users'));
        const savedLastUpdated = localStorage.getItem('usersLastUpdated');

        // Сравниваем данные и обновляем при необходимости
        if (!savedData || savedLastUpdated !== lastUpdated) {
          setData(users);
          localStorage.setItem('users', JSON.stringify(users));
          localStorage.setItem('usersLastUpdated', lastUpdated);
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <p className="flex justify-center text-3xl text-red-400">Загрузка...</p>
    );
  }

  // Функция для переключения аккордеона
  const toggleAccordion = (userId) => {
    setActiveUserId(activeUserId === userId ? null : userId); // Скрываем, если тот же ID
  };
  return (
    <ul className="flex flex-col gap-5">
      {data.map((d) => (
        <li
          key={d.user_id}
          className="w-80 min-h-20 flex flex-col bg-sky-600 rounded-lg text-white"
          onClick={() => toggleAccordion(d.user_id)}
        >
          <div className="h-20 px-3 flex items-center justify-between">
            <h2 className="flex justify-center items-center w-8 h-8 rounded-full text-lg bg-sky-500 font-bold">
              1
            </h2>
            <div className="w-[170px]">
              <h2 className="text-xl">Асхаб</h2>
              <h2 className="text-sm text-sky-400">Оператор</h2>
            </div>
            <h2 className="text-sm">25.11.2024г</h2>
          </div>
          {activeUserId === d.user_id && (
            <div className="p-3 bg-sky-700 rounded-b-lg">
            <h2 className='text-sky-500'>
              <span className="font-bold text-white">ID:</span> {d.user_id}
            </h2>
            <h2 className='text-sky-500'>
              <span className="font-bold text-white">Дата добавления:</span> {new Date(d.date).toLocaleDateString('ru-RU')}
            </h2>
            <h2 className='text-sky-500'>
              <span className="font-bold text-white">Смена:</span> Да
            </h2>
            <h2 className='text-sky-500'>
              <span className="font-bold text-white">Долг:</span> 100р
            </h2>
            <h2 className='text-sky-500'>
              Купил носки
            </h2>
            <h2 className='text-sky-500'>
              <span className="font-bold text-white">Штраф:</span> 300р
            </h2>
            <h2 className='text-sky-500'>
            Опоздал на 30 минут
            </h2>
            <h2 className='text-sky-500'>
              <span className="font-bold text-white">Дневная ставка:</span> 1000р
            </h2>
            <h2 className='text-sky-500'>
              <span className="font-bold text-white">Остаток:</span> 600р
            </h2>
          </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListReport;
