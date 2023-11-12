'use client'

// Dependencies
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// Components
import Benefit from './Benefit'
import GlobalApprenticeship from './GlobalApprenticeship'
import StudyFee from './StudyFee'
import LearningPhase from './LearningPhase'
import CareerSupport from './CareerSupport'
import AdmissionProcedure from './AdmissionProcedure'
import TimelineSchedule from './TimelineSchedule'
import Eligibility from './Eligibility'

function Details() {
  const [distanceToTop, setDistanceToTop] = useState(0)
  const [distanceBottomToTop, setDistanceBottomToTop] = useState(0)

  // Cek jarak dari atas element ke atas page
  useEffect(() => {
    const element = document.getElementById('details') // Replace with the actual ID of the element you want to measure.

    const handleScroll = () => {
      if (element) {
        const rect = element.getBoundingClientRect()
        const scrollTop = window.scrollY || window.pageYOffset

        // Calculate the distance from the top of the element to the top of the viewport.
        const elementDistance = rect.top + scrollTop - 20
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
    const element = document.getElementById('details') // Replace with the actual ID of the element you want to measure.

    const handleScroll = () => {
      if (element) {
        const rect = element.getBoundingClientRect()
        const scrollTop = window.scrollY || window.pageYOffset

        // Calculate the distance from the top of the element to the top of the viewport.
        const elementDistance = rect.bottom + scrollTop - 200
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
      id="details"
      className="min-h-screen container mt-20 xl:mt-0 py-10 flex flex-row justify-between"
    >
      <div
        className={`${
          distanceBottomToTop < 300 && 'bottom-0'
        } relative w-1/4 hidden xl:flex`}
      >
        <div
          className={`${
            distanceBottomToTop < 300
              ? 'absolute bottom-0'
              : distanceToTop < 0 && distanceBottomToTop > 300
              ? 'fixed z-[0] top-10'
              : ''
          } p-3 w-10/12`}
        >
          <div className="w-80 flex flex-col gap-5 px-3">
            <h3 className="w-3/4 font-black lg:text-2xl">
              Detail Kursus <br /> Data Science
            </h3>
            <div className="flex flex-col text-[#A5A5A5] font-medium text-lg">
              <Link
                className="relative py-3 before:absolute before:z-20 before:-translate-x-5 before:bg-blue-2 before:w-1 before:h-full before:top-0 before:left-0"
                href="#eligibility"
                alt="eligibility"
              >
                Eligibility
              </Link>
              <Link className="relative py-3" href="#benefit" alt="benefit">
                Why Qarir
              </Link>
              <Link
                className="relative py-3"
                href="#global-apprenticeship"
                alt="global apprenticeship"
              >
                Global Apprenticeship
              </Link>
              <Link className="relative py-3" href="#study-fee" alt="study fee">
                Study Fee
              </Link>
              <Link
                className="relative py-3"
                href="#learning-phase"
                alt="learning phase"
              >
                Learning Phase
              </Link>
              <Link
                className="relative py-3"
                href="#career-support"
                alt="career support"
              >
                Career Support
              </Link>
              <Link
                className="relative py-3"
                href="#admission-procedure"
                alt="admission procedure"
              >
                Admission Procedure
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 p-3 w-full xl:w-3/4 flex flex-col gap-20">
        {/* <Ringkasan /> */}
        <Eligibility />
        <Benefit />
        <GlobalApprenticeship />
        <StudyFee />
        <LearningPhase />
        <CareerSupport />
        <AdmissionProcedure />
        <TimelineSchedule />
        {/* <FaseBelajar /> */}
      </div>
    </div>
  )
}

export default Details
