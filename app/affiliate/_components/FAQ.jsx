'use client'

import { useState } from 'react'
import Image from 'next/image'

import FaqImg from 'public/faq.png'

function Accordion({ data }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <h2>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`${
            open ? 'text-black' : 'text-gray-500'
          } flex items-center justify-between w-full py-5 font-semibold rtl:text-right border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3`}
        >
          <span>{data.title}</span>
          <svg
            className={`${open && 'rotate-0'} w-3 h-3 rotate-180 shrink-0`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div className={!open && 'hidden'}>
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{data.desc}</p>
        </div>
      </div>
    </>
  )
}

function FAQ() {
  const dataFAQ = [
    {
      title: 'What is QarirGenerator Affiliate Program?',
      desc: 'QarirGenerator Affiliate Program is a program where you will get a commission for every QarirGenerator product sold by sharing the product link generated through QarirGenerator Affiliate platform to your social media such as Youtube, Facebook, Instagram, Twitter, TikTok, website, and other public sites.',
    },
    {
      title: 'How much is the commission of QarirGenerator Affiliate Program?',
      desc: 'QarirGenerator Affiliate Program is a program where you will get a commission for every QarirGenerator product sold by sharing the product link generated through QarirGenerator Affiliate platform to your social media such as Youtube, Facebook, Instagram, Twitter, TikTok, website, and other public sites.',
    },
    {
      title: 'How do I sign up as an affiliate?',
      desc: 'QarirGenerator Affiliate Program is a program where you will get a commission for every QarirGenerator product sold by sharing the product link generated through QarirGenerator Affiliate platform to your social media such as Youtube, Facebook, Instagram, Twitter, TikTok, website, and other public sites.',
    },
    {
      title:
        'What are the requirements to join QarirGenerator Affiliate Program?',
      desc: 'QarirGenerator Affiliate Program is a program where you will get a commission for every QarirGenerator product sold by sharing the product link generated through QarirGenerator Affiliate platform to your social media such as Youtube, Facebook, Instagram, Twitter, TikTok, website, and other public sites.',
    },
    {
      title: 'When will I receive my commission?',
      desc: 'QarirGenerator Affiliate Program is a program where you will get a commission for every QarirGenerator product sold by sharing the product link generated through QarirGenerator Affiliate platform to your social media such as Youtube, Facebook, Instagram, Twitter, TikTok, website, and other public sites.',
    },
  ]

  return (
    <section className="bg-blue-1 h-full -mb-28 mt-28">
      <div className="container flex flex-col-reverse xl:flex-row items-center justify-evenly gap-10 py-20">
        <div className="flex flex-col gap-10 sm:w-3/4 xl:w-1/2">
          <h2 className="font-semibold text-white text-4xl">
            Frequently asked questions (FAQ)
          </h2>
          <div className="w-full bg-white p-10 rounded-xl">
            {dataFAQ.length > 0
              ? dataFAQ.map((faq, index) => (
                  <Accordion key={index} data={faq} />
                ))
              : null}
          </div>
        </div>
        <div>
          <Image
            src={FaqImg}
            alt="faq image"
            quality={100}
            priority={false}
            className=""
          />
        </div>
      </div>
    </section>
  )
}

export default FAQ
