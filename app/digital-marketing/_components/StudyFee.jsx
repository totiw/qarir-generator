import { AiFillClockCircle } from 'react-icons/ai'
import { GrInstallOption } from 'react-icons/gr'

function Card({ children, price, excerpt }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-md">
      <div className="flex flex-col gap-1 bg-blue-4 bg-opacity-50 p-5">
        <p className="font-black text-lg text-blue-2">{price}</p>
        <p className="font-medium text-sm text-blue-2">{excerpt}</p>
      </div>
      {children}
    </div>
  )
}

function StudyFee() {
  return (
    <section id="study-fee" className="flex flex-col gap-5">
      <p className="font-bold text-base text-slate-500">STUDY FEE</p>
      <h2 className="font-black text-2xl lg:text-4xl">Full Payment</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card
          price="Pro Rp 14,500,000"
          excerpt="(KTP holders & Non Student of University)"
        >
          <div className="bg-white p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2 font-medium text-sm">
              <p>{`- Hybrid access (Offpne-Onpne) if available -> priority`}</p>
              <p>{`- Priority 1on1 mentoring access`}</p>
              <p>{`- Money back guarantee`}</p>
              <p>{`- Free choose 2 add-ons program (for normal full payment)`}</p>
              <p>{`- Access Learning module up to 12 month (for normal full payment)`}</p>
            </div>
            <div className="font-normal text-sm flex flex-col gap-1">
              <p className="flex items-center gap-2">
                <AiFillClockCircle size="1em" color="#FF9500" /> Down Payment
                <strong>Rp 2,550,000</strong>
              </p>
              <p className="flex items-center gap-2">
                <GrInstallOption size="1em" color="#FF9500" />
                Installment <strong>Rp 1,125,000/month x 12 times</strong>
              </p>
            </div>
          </div>
        </Card>
        <Card price="Pro MYR 4,900" excerpt="(General)">
          <div className="bg-white p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2 font-medium text-sm">
              <p>{`- All Lite`}</p>
              <p>{`- Hybrid access (Offline-Online) if available -> priority`}</p>
              <p>{`- Priority 1on1 mentoring access`}</p>
              <p>{`- Money back guarantee`}</p>
              <p>{`- Free choose 2 add-ons program (for normal full payment)`}</p>
              <p>{`- Access Learning module up to 12 month (for normal full payment)`}</p>
            </div>
          </div>
        </Card>
        <Card price="TURKEY" excerpt="">
          <div className="bg-white p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2 font-medium text-sm">
              <p>{`- Refugees Price  -> Contact your consultant`}</p>
              <p>{`- Turkish Citizen  -> Contact your consultant`}</p>
              <p>{`- Non Turkish  -> Contact your consultant`}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default StudyFee
