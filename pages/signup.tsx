import { FC } from 'react';
import HeadInfo from 'components/Headinfo';

const signupPage: FC = () => {
  return (
    <>
      <div className='w-[90%] pt-6 m-auto'>
        <HeadInfo title='Yammy 가입' />
        <h1 className='font-sans text-3xl mb-7'>회원가입</h1>

        <div className='flex flex-col items-center gap-4'>
          <input
            className='w-full h-[50px] max-w-[342px] rounded-[50px] pl-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='text'
            placeholder='email'
          />
          <input
            className='w-full h-[50px] max-w-[342px] rounded-[50px] pl-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='text'
            placeholder='nickname'
          />
          <input
            className='w-full h-[50px] max-w-[342px] rounded-[50px] pl-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='password'
            placeholder='password'
          />
          <input
            className='w-full h-[50px] max-w-[342px] rounded-[50px] pl-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='password-check'
            placeholder='password-check'
          />

          <button className='w-full h-[54px] max-w-[342px] rounded-[50px] bg-primary text-white shadow-sm '>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default signupPage;
