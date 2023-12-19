import Image from 'next/image'
import Ilustration from 'public/ilustration_10.png'

function GlobalApprenticeship() {
  return (
    <section
      id="global-apprenticeship"
      className="section flex flex-col-reverse lg:flex-row items-center gap-16"
    >
      <div className="lg:w-1/2 flex flex-col gap-5">
        <p className="font-bold text-base text-slate-500">
          Global Apprenticeship
        </p>
        <h2 className="font-black text-2xl lg:text-4xl">
          Connect with over 500 Industry Titans!
        </h2>
        <p className="font-normal text-base text-slate-500">
          Join our exclusive network of over 500 Fortune 500 companies across
          the bustling hubs of EMEA and Southeast Asia region. Leave those dull,
          ordinary jobs behind and embrace the thrill of working abroad!
        </p>
      </div>
      <div className="lg:w-1/2">
        <Image src={Ilustration} alt="ilustration" quality={100} priority />
      </div>
    </section>
  )
}

export default GlobalApprenticeship
