import { FC } from 'react';
import HeadInfo from 'components/Headinfo';
import Input from 'components/Input';
import Link from 'next/link';

const LoginPage: FC = () => {
  return (
    <>
      <div className='w-[90%] pt-6 m-auto'>
        <HeadInfo title='Yammy Login' />
        <h1 className='font-sans text-3xl mb-7'>로그인</h1>

        <div className='flex flex-col items-center gap-4'>
          
          <Input type="text" placeholder='email'/>
          <Input type="password" placeholder='password'/>

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
