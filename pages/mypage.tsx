import HeadInfo from '../components/Headinfo';
import Image from 'next/image';
import Input from 'components/Input';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from 'utils/resolver/auth.schema';
import { useState } from 'react';

interface ProfileFormInput {
  height: number;
  weight: number;
}

export const getStaticProps = async () => {
  const initialData: ProfileFormInput = {
    height: 160,
    weight: 60,
  };

  return {
    props: {
      initialData,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch('api-endpoint-here');
//   const data = await res.json();

//   return {
//     props: {
//       initialFormData: data,
//     },
//   };
// };

const Mypage = ({ initialData }: { initialData: ProfileFormInput }) => {
  const [formData, setFormData] = useState(initialData);

  const {
    register,
    handleSubmit: submitHandler,
    formState: { errors },
  } = useForm<ProfileFormInput>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<ProfileFormInput> = (data) => {
    setFormData(data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateSQLData = () => {
    // Make API call to update SQL data
    // You can use any library or method to make the API call, such as Axios or fetch
    // Here's an example using fetch:
    fetch('/api/updateUserData', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };



  return (
    <>
      <div>
        <HeadInfo title='Yammy mypage' />

        <div className='pt-[40px]'>
          <form className='flex flex-col gap-4 items-center' onSubmit={submitHandler(onSubmit)}>

            <div>
              <Image className='rounded-full' src='/sampleprofile.png' width={124}
                height={124} alt="profile-image" />
            </div>

            <Input
              register={register}
              name='height'
              type='text'
              placeholder={`키 ${formData && formData.height ? formData.height : ''}cm`}
              message={errors.height?.message}
              error={errors.height}
              onChange={handleInputChange}
            />

            <Input
              register={register}
              name='weight'
              type='text'
              placeholder={`몸무게 ${formData && formData.weight ? formData.weight : ''}kg`}
              message={errors.weight?.message}
              error={errors.weight}
              onChange={handleInputChange}
            />


            <button onClick={ updateSQLData } className='w-[100%] max-w-[342px] h-[54px] mt-[18px] m-auto bg-primary text-white rounded-[50px]' type='submit'> 수정하기 </button>

          </form>
        </div>

      </div>
    </>
  );
};

export default Mypage;
