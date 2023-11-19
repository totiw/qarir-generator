import Image from 'next/image'
import Thumbnail from 'public/benefit-qarir.png'
import ChecklistBlue from '../icons/checklist-blue.png'
import CrossYellow from '../icons/cross-yellow.png'
import Tilde from '../icons/tilde.png'

function Benefit() {
  const dataBenefit = [
    {
      name: 'Theory development knowledge',
      campus: ChecklistBlue,
      qarir: CrossYellow,
    },
    {
      name: 'Social Life',
      campus: ChecklistBlue,
      qarir: ChecklistBlue,
    },
    {
      name: 'Intensive work experience',
      campus: CrossYellow,
      qarir: ChecklistBlue,
    },
    {
      name: 'Validation of analytical thinking from Hands-on projects',
      campus: Tilde,
      qarir: ChecklistBlue,
    },
    {
      name: 'Jaringan profesional dan pemimpin industri',
      campus: CrossYellow,
      qarir: ChecklistBlue,
    },
    {
      name: 'Soft skills management, leadership and communication',
      campus: Tilde,
      qarir: ChecklistBlue,
    },
    {
      name: 'Connection with HR',
      campus: ChecklistBlue,
      qarir: ChecklistBlue,
    },
    {
      name: 'Soft skills management, leadership and communication',
      campus: Tilde,
      qarir: ChecklistBlue,
    },
  ]

  return (
    <section className="container flex flex-col gap-20 py-20 mt-28">
      <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-20 px-10">
        <div className="relative before:z-0 before:absolute before:border-4 before:border-orange-1 xl:before:-left-5 before:bottom-5 before:right-5 xl:before:top-5 before:w-full before:h-full">
          <Image
            src={Thumbnail}
            alt="benefit qarir generator"
            quality={100}
            priority={false}
            className="w-96 xl:w-[600px] relative z-10"
          />
        </div>
        <h2 className="font-bold text-3xl xl:text-6xl">
          Campus Experience VS Career Accelerator Experience at QarirGenerator
        </h2>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
          <thead className="text-2xl text-center text-white font-bold uppercase bg-[#101F50] dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-8">
                Benefit
              </th>
              <th scope="col" className="px-6 py-7 border-x-2 border-slate-700">
                Campus
              </th>
              <th scope="col" className="px-6 py-7">
                QarirGenerator <br /> Acceleration
              </th>
            </tr>
          </thead>
          <tbody className="text-center px-6 py-4 font-medium text-lg">
            {dataBenefit.length > 0
              ? dataBenefit.map((benefit, index) => (
                  <tr
                    key={index}
                    className={`${
                      (index + 1) % 2 === 0
                        ? 'bg-[#D9D9D9] bg-opacity-50'
                        : 'bg-white'
                    } text-black border-b-2 border-slate-300`}
                  >
                    <td className="px-10 py-4 text-left">{benefit.name}</td>
                    <td className="px-6 py-4 border-x-2 border-slate-300">
                      <div className="flex justify-center">
                        <Image
                          src={benefit.campus}
                          alt="benefit"
                          quality={100}
                          priority={false}
                          className="w-8"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <Image
                          src={benefit.qarir}
                          alt="benefit"
                          quality={100}
                          priority={false}
                          className="w-8"
                        />
                      </div>
                    </td>
                  </tr>
                ))
              : null}
            <tr>
              <td colSpan="3" className="px-6 py-4">
                <div className="w-full flex flex-row gap-5">
                  <div className="flex flex-row items-center gap-1">
                    <Image
                      src={CrossYellow}
                      alt="hint"
                      quality={100}
                      priority={false}
                      className="w-7"
                    />
                    <span className="text-black text-sm sm:text-base">
                      : Not Available,{' '}
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <Image
                      src={ChecklistBlue}
                      alt="hint"
                      quality={100}
                      priority={false}
                      className="w-7"
                    />
                    <span className="text-black text-sm sm:text-base">
                      : Available,{' '}
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <Image
                      src={Tilde}
                      alt="hint"
                      quality={100}
                      priority={false}
                      className="w-7"
                    />
                    <span className="text-black text-sm sm:text-base">
                      : depending on campus{' '}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Benefit
