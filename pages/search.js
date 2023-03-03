import HeadInfo from "../components/Headinfo";
// import Image from "next/image";
// import photosStyles from "../styles/photos.module.scss";
// import Link from "next/link";

const search = () => {
  return (
    <>
      <div>
        <HeadInfo title="Yammy search" />
        <h1>my search </h1>

      </div>
    </>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
//   );
//   const photos = await res.json();

//   return {
//     props: {
//       photos,
//     },
//   };
// };

export default search;
