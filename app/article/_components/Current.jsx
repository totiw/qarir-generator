// Dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Article1 from 'public/article-banner1.jpg'
import Article2 from 'public/article-img.png'

// Icons
import { FaPlay } from 'react-icons/fa'

function Current() {
  return (
    <article className="flex flex-col gap-3 sm:gap-7">
      <section className="container py-10">
        <div className="container flex flex-col gap-2">
          <div className=" max-h-[80vh] overflow-hidden">
            <Image
              src={Article1}
              alt="article banner"
              width={100}
              height={100}
              quality={100}
              priority={false}
              className="w-full"
            />
          </div>
          <small className="text-lg opacity-50">
            Posted by Admin | 12 Hours ago
          </small>
        </div>
      </section>
      <section className="container flex flex-col gap-8">
        <h2 className="font-bold text-3xl sm:text-4xl text-center">
          How to Nailed Your First Internship?
        </h2>
        <p className="text-lg sm:text-xl">
          Imagine chatting with your coolest friends over coffee, not about the
          latest Netflix drama, but about how to become freaking superheroes in
          the job market! No capes or tights involved, just brains on fire with
          new skills and the coolest tech at our fingertips.
        </p>
        <p className="text-lg sm:text-xl">
          Think robots taking over factories? We&apos;ll be the ones coding them
          to dance the Macarena! AI threatening to steal our jobs? Ha! We will
          speak their language so fluently, they will ask us for career advice!
          This reskilling and upskilling thing isn&apos;t some boring lecture –
          it&apos;s about unlocking hidden powers and dominating the future of
          work.
        </p>
        <p className="text-lg sm:text-xl">
          Sure, the Fourth Industrial Revolution sounds scary-ish, with
          automation whirring and bots everywhere. But that&apos;s just the
          playground for our new skills! We will learn to code like rocket
          scientists, analyse data like mind readers, and chat with robots in
          their own binary babble. It&apos;s not about surviving, it&apos;s
          about thriving in a world cooler than a sci-fi movie!
        </p>
        <p className="text-lg sm:text-xl">
          Online courses are our training grounds, where we can pick and choose
          superpowers like a buffet.Coding wizardry? Marketing mastery? Data
          dancing? Grab them all! Companies are begging for people who can speak
          robot and think outside the cubicle. We&apos;re not just workers,
          we&apos;re future architects, building a world where work is like
          playing a mind-blowing video game.
        </p>
        {/* <p className="text-lg sm:text-2xl mt-5 font-semibold">
          Check out the Digital Marketing Offline Class:
        </p> */}
        <div className="relative w-4/5 sm:w-3/5 self-center flex flex-col items-center justify-center">
          <Image
            src={Article2}
            alt="class video"
            width={100}
            height={100}
            quality={100}
            priority={false}
            className="w-full relative z-0"
          />
          {/* <Link
            href="https://youtu.be/FPZxdd4fZ_k"
            className="absolute z-10 flex justify-center items-center bg-[#2196F3] text-white w-12 sm:w-20 h-12 sm:h-20 rounded-full"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <FaPlay size="1.5em" />
          </Link> */}
        </div>
        <p className="sm:text-2xl mt-5 text-center">
          by <strong>Admin</strong>
        </p>
      </section>
    </article>
  )
}

export default Current
