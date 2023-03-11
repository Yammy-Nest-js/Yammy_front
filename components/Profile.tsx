import Image from 'next/image';

export interface Profile {
  id: number;
  name: string;
  username: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface ProfileProps {
  profile: Profile;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <>
      <div className='profile flex justify-between w-[90%] pt-[20px] m-auto'>
        <div className='flex gap-[16px]'>
          <Image
            className='rounded-full'
            src='/sampleprofile.png'
            alt='Profile image'
            width={60}
            height={60}
          />
          <div className='flex flex-col gap-[10px]'>
            <span className='font-bold'>{profile.name}</span>
            <span className='opacity-80'>{profile.company.name}</span>
          </div>
        </div>

        <div>
          <div className='w-[50px] h-[50px] rounded-lg bg-gray flex justify-center'>
            <Image
              src='/icons/person.svg'
              alt='Home'
              width={16}
              height={15}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
