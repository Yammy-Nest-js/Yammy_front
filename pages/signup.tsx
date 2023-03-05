import axios from 'axios';
import HeadInfo from 'components/Headinfo';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from 'utils/resolver/auth.schema';

interface ISignupFormInput {
  email: string;
  nickname: string;
  password: string;
  passwordCheck?: string;
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignupFormInput>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmitSignup: SubmitHandler<ISignupFormInput> = async (data) => {
    delete data.passwordCheck;

    try {
      const res = await axios.post('http://localhost:3001/users', data);
      if (res.status === 201) {
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='w-[90%] pt-6 m-auto'>
        <HeadInfo title='Yammy 가입' />
        <h1 className='font-sans text-3xl mb-7'>회원가입</h1>

        <form
          onSubmit={handleSubmit(onSubmitSignup)}
          className='flex flex-col gap-4 items-center'
        >
          <input
            {...register('email')}
            className='w-full h-[50px] max-w-[342px] rounded-[50px] px-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='text'
            placeholder='email'
          />
          <input
            {...register('nickname')}
            className='w-full h-[50px] max-w-[342px] rounded-[50px] px-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='text'
            placeholder='nickname'
          />
          <input
            {...register('password')}
            className='w-full h-[50px] max-w-[342px] rounded-[50px] px-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='password'
            placeholder='password'
          />
          <input
            {...register('passwordCheck')}
            className='w-full h-[50px] max-w-[342px] rounded-[50px] px-[15px] border-2 border-default focus:border-primary  focus:outline-none'
            type='password'
            placeholder='passwordCheck'
          />
          <span className='text-rose-200 text-xs'>
            {errors.passwordCheck?.message}
          </span>
          <button
            type='submit'
            className='w-full h-[54px] max-w-[342px] rounded-[50px] bg-primary text-white shadow-sm '
          >
            회원가입
          </button>
          <Link className='text-gray-500 text-center' href='/login'>
            이미 가입하셨나요?
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
