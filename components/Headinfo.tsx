import Head from 'next/head';

interface IHeadInfo {
  title: string;
  contents?: string;
}

const Headinfo = ({ title = 'Yammy', contents = 'yammy yammy' }: IHeadInfo) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keyword' content={contents} />
        <meta name='description' content={contents} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      </Head>
    </>
  );
};

export default Headinfo;
