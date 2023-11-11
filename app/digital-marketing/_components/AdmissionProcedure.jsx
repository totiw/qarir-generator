import { MdAppSettingsAlt } from 'react-icons/md'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { TbReportAnalytics } from 'react-icons/tb'
import { IoMdChatbubbles } from 'react-icons/io'
import { FaChevronDown } from 'react-icons/fa6'
import HandShake from '@/components/icons/HandShake'

function Card({ data }) {
  return (
    <div className="bg-white flex flex-col lg:flex-row items-center gap-3 p-8 rounded-lg shadow-sm">
      <span>{data.icon}</span>
      <p className="font-medium text-sm text-center lg:text-left lg:text-base text-slate-500">
        {data.desc}
      </p>
    </div>
  )
}

function AdmissionProcedure() {
  const dataAdmission = [
    {
      icon: <MdAppSettingsAlt size="48px" color="#2622B9" />,
      desc: 'Fill application form',
    },
    {
      icon: <BsFillPersonVcardFill size="48px" color="#2622B9" />,
      desc: 'Upload your latest cv/resume/student of university card',
    },
    {
      icon: <TbReportAnalytics size="48px" color="#2622B9" />,
      desc: 'Analytical assessment',
    },
    {
      icon: <IoMdChatbubbles size="48px" color="#2622B9" />,
      desc: 'Interview process & Consultation with mentor',
    },
    {
      icon: <HandShake height="48px" color="#2622B9" />,
      desc: 'Admission decision',
    },
  ]
  return (
    <section id="admission-procedure" className="flex flex-col gap-5">
      <p className="font-bold text-base text-slate-500">ADMISSION PROCEDURE</p>
      <h2 className="font-black text-2xl lg:text-4xl">Follow the procedure</h2>
      <div className="flex flex-col gap-5">
        {dataAdmission.length > 0
          ? dataAdmission.map((admission, index) => (
              <div className="flex flex-col gap-5">
                <Card key={index} data={admission} />
                {index < dataAdmission.length - 1 && (
                  <span className="self-center">
                    <FaChevronDown size="1.5em" color="#cccccc" />
                  </span>
                )}
              </div>
            ))
          : null}
      </div>
    </section>
  )
}

export default AdmissionProcedure
