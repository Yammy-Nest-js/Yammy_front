import axios from 'axios';
import HeadInfo from 'components/Headinfo';
import Input from 'components/Input';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from 'utils/resolver/auth.schema';

interface ISignupFormInput {
  type: string;
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
      // TODO : mock data 삭제하기
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
          <Input
            register={register}
            name='email'
            type='text'
            placeholder='email'
            message={errors.email?.message}
            error={errors.email}
          />

          <Input
            register={register}
            name='nickname'
            type='text'
            placeholder='nickname'
            message={errors.nickname?.message}
            error={errors.nickname}
          />

          <Input
            register={register}
            name='password'
            type='password'
            placeholder='password'
            message={errors.password?.message}
            error={errors.password}
          />

          <Input
            register={register}
            name='passwordCheck'
            type='password'
            placeholder='passwordCheck'
            message={errors.passwordCheck?.message}
            error={errors.passwordCheck}
          />

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
