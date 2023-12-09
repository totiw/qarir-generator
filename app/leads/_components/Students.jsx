// Dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Person1 from '../../../public/hieronymus_kopong_bali.jpeg'
import Person2 from '../../../public/zulkhaidir_purwanto.jpg'
import Person6 from '../../../public/agnes_friska_cyntia_puspitasari.jpeg'

// Icons
import { FaLinkedinIn } from 'react-icons/fa6'

// function Card({ data }) {
//   return (
//     <div className="relative z-10 bg-white border rounded-xl w-[350px]">
//       <Image
//         src={Student1}
//         alt="student"
//         quality={100}
//         priority={false}
//         className="w-full"
//       />
//       <div className="flex flex-col gap-3 px-5 py-7">
//         <div className="flex flex-row items-center gap-1">
//           <Image
//             src={data.thumbnail}
//             alt="student"
//             quality={100}
//             priority={false}
//             className="w-5 rounded-full"
//           />
//           <p>{data.name}</p>
//         </div>
//         <p>{data.message}</p>
//         <Link
//           href="/"
//           alt="detail student says"
//           className="flex justify-center items-center gap-3 text-white bg-[#101F50] px-4 py-2 font-medium text-center rounded-lg"
//         >
//           <span className="bg-white rounded-full p-2">
//             <FaLinkedinIn size="1.3em" color="#101F50" />
//           </span>
//           View Linkedin
//         </Link>
//       </div>
//     </div>
//   )
// }

function Card({ data }) {
  return (
    <div className="bg-white flex flex-col justify-between gap-5 p-10 border rounded-lg w-96">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-10">
          <Image
            src={data.thumbnail}
            alt="alumni thumbnail"
            priority={false}
            quality={100}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-medium text-base text-black">{data.name}</h3>
            <p className="font-medium text-xs text-slate-500">{data.role}</p>
          </div>
        </div>
        <p className="font-medium text-base">{data.desc}</p>
      </div>
      <Link
        href={data.link}
        target="_blank"
        className="capitalize bg-[#101F50] text-white flex flex-row justify-center items-center gap-2 p-2 rounded-lg"
      >
        <span className="bg-white rounded-full p-2">
          <FaLinkedinIn size="1.3em" color="#101F50" />
        </span>
        view linkedin
      </Link>
    </div>
  )
}

function Students() {
  // DUMMY DATA
  const dataStudent = [
    {
      name: 'Hieronymus Kopong Bali',
      role: 'Full Stack Digital Marketing - Batch 1',
      desc: `"Here, not only get to attend fun classes, but I also improve my networking and knowledge because of the highly experienced trainer." - Hieronymus`,
      thumbnail: Person1,
      link: 'https://www.linkedin.com/in/hieronymuskb/',
    },
    {
      name: 'Zulkhaidir Purwanto',
      role: 'Data Science - Batch 25',
      desc: `"QarirGenerator helped me to gain a deeper understanding of data science. After taking their course and staying connected with my mentor, I was able to start working at my dream company using the significantly improved skills." - Zulkhaidir`,
      thumbnail: Person2,
      link: 'https://www.linkedin.com/in/zulkhaidirpurwanto/',
    },
    {
      name: 'Agnes Friska Cyntia Puspitasari',
      role: 'Full Stack Digital Marketing - Batch 6',
      desc: `"High Quality Programme with the best mentors. Their services meet 5 stars" - Agnes Friska`,
      thumbnail: Person6,
      link: 'https://www.linkedin.com/in/agnesfcyntia/',
    },
  ]
  // const dataStudent = [
  //   {
  //     name: 'Hieronymus',
  //     thumbnail: Thumbnail,
  //     message:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
  //   },
  //   {
  //     name: 'Hieronymus',
  //     thumbnail: Thumbnail,
  //     message:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
  //   },
  //   {
  //     name: 'Hieronymus',
  //     thumbnail: Thumbnail,
  //     message:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
  //   },
  // ]

  return (
    <section className="relative container flex flex-col items-center gap-10 xl:gap-14 mt-28">
      <span className="absolute z-0 blur-[100px] top-40 right-20 w-[600px] h-[600px] rounded-full bg-[#101F50] bg-opacity-20"></span>
      <h2 className="relative z-10 text-2xl sm:text-5xl font-semibold">
        What QarirGenerator&apos;s Student Say?
      </h2>
      <div className="relative z-10 xl:w-auto w-full overflow-auto px-7">
        <div className="flex flex-row gap-10 w-fit">
          {dataStudent.length > 0
            ? dataStudent.map((student, index) => (
                <Card key={index} data={student} />
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default Students
