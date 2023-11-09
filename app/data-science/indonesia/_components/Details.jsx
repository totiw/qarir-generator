'use client'

import React, { useState, useEffect } from 'react'

function Details() {
  const [distanceToTop, setDistanceToTop] = useState(0)
  const [distanceBottomToTop, setDistanceBottomToTop] = useState(0)

  // Cek jarak dari atas element ke atas page
  useEffect(() => {
    const element = document.getElementById('kocak') // Replace with the actual ID of the element you want to measure.

    const handleScroll = () => {
      if (element) {
        const rect = element.getBoundingClientRect()
        const scrollTop = window.scrollY || window.pageYOffset

        // Calculate the distance from the top of the element to the top of the viewport.
        const elementDistance = rect.top + scrollTop
        setDistanceToTop(elementDistance - window.scrollY)
      }
    }

    // Add a scroll event listener to update the distance as the user scrolls.
    window.addEventListener('scroll', handleScroll)

    // Initial measurement on component mount.
    handleScroll()

    // Clean up the event listener on unmount.
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Cek jarak dari bawah element ke atas page
  useEffect(() => {
    const element = document.getElementById('kocak') // Replace with the actual ID of the element you want to measure.

    const handleScroll = () => {
      if (element) {
        const rect = element.getBoundingClientRect()
        const scrollTop = window.scrollY || window.pageYOffset

        // Calculate the distance from the top of the element to the top of the viewport.
        const elementDistance = rect.bottom + scrollTop
        console.log(elementDistance - window.scrollY)
        setDistanceBottomToTop(elementDistance - window.scrollY)
      }
    }

    // Add a scroll event listener to update the distance as the user scrolls.
    window.addEventListener('scroll', handleScroll)

    // Initial measurement on component mount.
    handleScroll()

    // Clean up the event listener on unmount.
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      id="kocak"
      className="container flex flex-row justify-between bg-blue-500"
    >
      <div
        className={`${
          distanceBottomToTop < 300 && 'bottom-0'
        } relative py-10 bg-red-500 w-1/3`}
      >
        <div
          className={`${
            distanceBottomToTop < 300
              ? 'absolute bottom-0'
              : distanceToTop < 0 && distanceBottomToTop > 300
              ? 'fixed top-10'
              : ''
          } bg-orange-1 text-white p-3 w-40 h-60`}
        >
          Details
        </div>
      </div>
      <div className="p-3 bg-green-1 w-2/3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          modi fugit vero corporis accusantium quas sit, veritatis dolor. Iste
          vitae deleniti aut recusandae voluptatibus perspiciatis nesciunt neque
          cumque necessitatibus officia! Labore rem animi repellendus quisquam
          optio et nam deserunt culpa autem tempora. Accusantium distinctio at
          sint similique, itaque cumque dolor quis aperiam quam debitis odit
          autem quod corrupti fuga sapiente minima omnis, expedita, tempora
          fugiat magni quasi! Commodi corporis nemo reprehenderit excepturi,
          quas optio eius eos tempore dolores quam beatae sunt quo? Odio,
          perspiciatis officia maxime accusamus ex numquam saepe praesentium
          blanditiis expedita dolorem mollitia! Velit numquam veritatis nulla
          officiis facere eaque omnis! Reprehenderit aperiam nam facilis nulla
          quo sequi ad tempora sit corporis harum autem vitae ab assumenda quod
          nobis consequatur rem, veniam expedita quibusdam odio, pariatur culpa.
          Magnam accusantium quas accusamus repellat aut dolores aliquid commodi
          quae, beatae ullam vel soluta officia reprehenderit explicabo
          architecto cum vero quisquam consectetur delectus quidem incidunt
          cupiditate iste. A corporis error magni eligendi eveniet molestias
          soluta atque sequi minus, dolor sunt dolore voluptatibus incidunt?
          Vero aperiam animi omnis, vitae nulla, ea perferendis ut voluptas
          officia eius dolor ipsam labore aliquam tempore atque dolores sit
          laudantium suscipit, est repellendus? Qui voluptatibus ipsam fugit
          laudantium adipisci provident excepturi sapiente ad voluptas nobis
          quod ipsum similique architecto quas laborum ullam enim officia neque
          est quo repellendus dolor, placeat labore? Error vitae facilis eius
          corrupti, architecto doloribus nostrum. Nihil quis minus beatae,
          excepturi, nobis tenetur reiciendis neque quae cumque autem ducimus
          porro quidem labore aliquam temporibus voluptates quam possimus eaque
          quaerat velit blanditiis est fugit vero? A totam recusandae quod
          nesciunt consequuntur cupiditate error laudantium atque tempora
          possimus minima vitae modi, earum ipsa delectus necessitatibus
          dolores, laboriosam, assumenda illum beatae expedita blanditiis
          sapiente odio. Vel velit ea, sint quas deleniti modi quam qui
          blanditiis repudiandae. Inventore maiores tenetur natus blanditiis
          velit exercitationem adipisci? Magni voluptatum, amet fugiat saepe
          voluptate odit praesentium natus debitis alias molestiae corrupti
          necessitatibus eum neque recusandae ut rem cum laudantium asperiores
          suscipit ad. Ullam nesciunt quisquam architecto exercitationem eaque
          sequi. Est nostrum error qui eveniet magnam non rem nam accusantium in
          quia? Quo ratione reprehenderit recusandae reiciendis error repellat
          illum aliquam sint nemo necessitatibus iste in labore tempora
          praesentium, quaerat veniam architecto soluta est alias, aperiam
          mollitia consequuntur dolore assumenda. Minima voluptatibus omnis quos
          sit fugiat facere reprehenderit beatae totam at hic, nulla similique a
          repudiandae. Fuga in velit aperiam, dolore unde a laborum quos esse ea
          quia repudiandae magni, soluta rerum! Error omnis laudantium quasi
          impedit porro, delectus officiis? Minima veritatis nisi consequuntur,
          nihil eius repudiandae cum, odio unde aliquid optio recusandae sunt
          dolores totam facere enim voluptate placeat, libero alias provident.
          Quasi eos amet, dicta voluptatem dolore rem quisquam, consequuntur,
          neque error porro perferendis molestias. Voluptates repellendus
          officiis earum, totam veniam quibusdam quia quas excepturi et libero
          in perferendis aperiam temporibus minima! Veniam placeat nam similique
          eaque quidem voluptatibus, laborum at dolore provident facilis animi
          nisi, minus voluptatum nihil temporibus tempore magnam pariatur eos
          quae, soluta perferendis in vel quod?
        </p>
      </div>
    </div>
  )
}

export default Details
