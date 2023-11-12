import Image from 'next/image'
import Ilustration from 'public/ilustration_10.png'

function GlobalApprenticeship() {
  return (
    <section
      id="global-apprenticeship"
      className="flex flex-col-reverse lg:flex-row items-center gap-16"
    >
      <div className="lg:w-1/2 flex flex-col gap-5">
        <p className="font-bold text-base text-slate-500">
          Global Apprenticeship
        </p>
        <h2 className="font-black text-2xl lg:text-4xl">
          Connect over 500 fortune companies
        </h2>
        <p className="font-normal text-base text-slate-500">
          Working abroad and earning dollars is more possible by joining
          QarirGenerator. We connect you with over 500 fortune companies &
          leaders across EMEA Countries & South East Asia. Consult your needs
          and your profile background to our career expert before apply.
        </p>
      </div>
      <div className="lg:w-1/2">
        <Image src={Ilustration} alt="ilustration" quality={100} priority />
      </div>
    </section>
  )
}

export default GlobalApprenticeship
