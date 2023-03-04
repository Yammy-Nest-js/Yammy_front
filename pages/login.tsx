import { FC } from 'react';
import HeadInfo from 'components/Headinfo';
import Link from 'next/link';

const LoginPage: FC = () => {
  return (
    <>
      <div className='w-[90%] pt-6 m-auto'>
        <HeadInfo title='Yammy Login' />
        <h1 className='font-sans text-3xl mb-7'>로그인</h1>

        <div className='flex flex-col items-center gap-4'>
          <input
            className='w-full h-[50px] max-w-[342px] rounded-[50px] pl-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='text'
            placeholder='email'
          />
          <input
            className='w-full h-[50px] max-w-[342px] rounded-[50px] pl-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='password'
            placeholder='password'
          />

          <button className='w-full h-[54px] max-w-[342px] rounded-[50px] bg-primary text-white shadow-sm '>
            로그인
          </button>
          <Link className='text-gray-500' href='/signup'>
            회원이 아니신가요?
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
