// Dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Article1 from 'public/article1.png'

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
        <h2 className="font-bold text-3xl sm:text-5xl text-center">
          Digital Marketing Offline Class
        </h2>
        <p className="text-lg sm:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac mi
          vel libero cursus laoreet. Integer posuere quam vel odio congue, eu
          aliquet nunc tincidunt. Duis vitae massa vel mi dictum vulputate.
          Proin sed dapibus odio. Sed id felis vel libero bibendum laoreet.
          Curabitur volutpat ex nec orci laoreet, ac vestibulum purus laoreet.
        </p>
        <p className="text-lg sm:text-2xl">
          Vivamus lacinia, mauris vitae scelerisque tincidunt, tortor nisl
          laoreet elit, vel bibendum augue odio vitae libero. Duis fermentum
          metus nec leo efficitur, vitae convallis lectus pellentesque. Sed
          ullamcorper odio in lectus facilisis, at hendrerit libero fermentum.
          Aenean auctor nisl a nunc volutpat laoreet. Nulla facilisi. Proin
          hendrerit erat vitae fermentum volutpat. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla
          facilisi. Quisque auctor, enim vel fermentum volutpat, sapien felis
          rhoncus risus, euismod luctus arcu urna vitae leo. Nulla facilisi.
          Integer aliquam, leo ac tristique fringilla, lectus lacus posuere
          augue, vel ullamcorper quam nisl ut turpis.
        </p>
        <p className="text-lg sm:text-2xl">
          Sed fermentum dolor id lectus aliquet, a iaculis purus facilisis. Ut
          eget eleifend justo. Phasellus tincidunt facilisis nibh, ut cursus
          justo scelerisque id. Nullam nec justo non ante tincidunt congue a id
          metus. Sed dapibus, mauris in efficitur bibendum, enim odio luctus
          sapien, a fermentum elit leo a dolor.
        </p>
        <p className="text-lg sm:text-2xl mt-5 font-semibold">
          Check out the Digital Marketing Offline Class:
        </p>
        <div className="relative w-4/5 sm:w-3/5 self-center flex flex-col items-center justify-center">
          <Image
            src={Article1}
            alt="class video"
            quality={100}
            priority={false}
            className="relative z-0"
          />
          <Link
            href="https://youtu.be/FPZxdd4fZ_k"
            className="absolute z-10 flex justify-center items-center bg-[#2196F3] text-white w-12 sm:w-20 h-12 sm:h-20 rounded-full"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <FaPlay size="1.5em" />
          </Link>
        </div>
        <p className="sm:text-2xl mt-5 text-center">
          by <strong>Admin</strong>
        </p>
      </section>
    </article>
  )
}

export default Current
