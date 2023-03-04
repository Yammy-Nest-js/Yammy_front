import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='w-full max-w-[420px] fixed bottom-0 bg-white border-t-2 border-neutral-300 pl-1 z-[999]'>
      <ul className='flex justify-around'>
        <li className='flex items-center justify-center flex-none w-14 h-14 '>
          <Link href='/'>
            <Image src='/home.svg' alt='Home' width={16} height={15} priority />
          </Link>
        </li>
        <li className='flex items-center justify-center flex-none w-14 h-14'>
          <Link href='search'>
            <Image
              src='/search.svg'
              alt='검색'
              width={16}
              height={17}
              priority
            />
          </Link>
        </li>
        <li className='flex items-center justify-center flex-none w-14 h-14'>
          <button className='plusbtn'>
            <Image
              src='/plus.svg'
              alt='식단추가'
              width={14}
              height={14}
              priority
            />
          </button>
        </li>
        <li className='flex items-center justify-center flex-none w-14 h-14'>
          <Link href='board'>
            <Image
              src='/chat.svg'
              alt='게시판'
              width={18}
              height={17}
              priority
            />
          </Link>
        </li>
        <li className='flex items-center justify-center flex-none w-14 h-14'>
          <Link href='mypage'>
            <Image
              src='/person.svg'
              alt='마이페이지'
              width={12}
              height={17}
              priority
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
