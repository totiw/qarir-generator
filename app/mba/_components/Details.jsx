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
  const [activeSection, setActiveSection] = useState('')
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section') // Adjust the selector based on your HTML structure

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isSectionVisible =
          rect.top <= window.innerHeight / 10 &&
          rect.bottom >= window.innerHeight / 10

        if (isSectionVisible) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
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
          distanceBottomToTop < 400 && 'bottom-0'
        } relative w-1/4 hidden xl:flex`}
      >
        <div
          className={`${
            distanceBottomToTop < 400
              ? 'absolute bottom-0'
              : distanceToTop < 0 && distanceBottomToTop > 400
              ? 'fixed z-[0] top-10'
              : ''
          } p-3 w-10/12`}
        >
          <div className="w-80 flex flex-col gap-5 px-3">
            <h3 className="w-3/4 font-black lg:text-2xl">
              Detail Kursus <br /> Digital Marketing
            </h3>
            <div className="flex flex-col text-[#A5A5A5] font-medium text-lg">
              <Link
                className={`${
                  activeSection === 'eligibility' && 'active'
                } sidebar`}
                href="#eligibility"
                alt="eligibility"
              >
                Eligibility
              </Link>
              <Link
                className={`${activeSection === 'benefit' && 'active'} sidebar`}
                href="#benefit"
                alt="benefit"
              >
                Why Qarir
              </Link>
              <Link
                className={`${
                  activeSection === 'global-apprenticeship' && 'active'
                } sidebar`}
                href="#global-apprenticeship"
                alt="global apprenticeship"
              >
                Global Apprenticeship
              </Link>
              <Link
                className={`${
                  activeSection === 'study-fee' && 'active'
                } sidebar`}
                href="#study-fee"
                alt="study fee"
              >
                Study Fee
              </Link>
              <Link
                className={`${
                  activeSection === 'learning-phase' && 'active'
                } sidebar`}
                href="#learning-phase"
                alt="learning phase"
              >
                Learning Phase
              </Link>
              <Link
                className={`${
                  activeSection === 'career-support' && 'active'
                } sidebar`}
                href="#career-support"
                alt="career support"
              >
                Career Support
              </Link>
              <Link
                className={`${
                  activeSection === 'admission-procedure' && 'active'
                } sidebar`}
                href="#admission-procedure"
                alt="admission procedure"
              >
                Admission Procedure
              </Link>
              <Link
                className={`${
                  activeSection === 'timeline-schedule' && 'active'
                } sidebar`}
                href="#timeline-schedule"
                alt="timeline schedule"
              >
                Timeline Schedule
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
