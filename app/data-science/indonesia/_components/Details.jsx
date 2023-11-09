'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Accordion from '@/components/Accordion'
import Checklist from '@/components/icons/Checklist'

function Details() {
  const [distanceToTop, setDistanceToTop] = useState(0)
  const [distanceBottomToTop, setDistanceBottomToTop] = useState(0)

  const dataFaseBelajar = [
    {
      title: 'Persiapan',
      desc: 'QarirGenerator menyediakan persiapan karir. Segera setelah Anda diterima, Anda akan mendapatkan jadwal tetap pemetaan karir & kelas soft skill dengan pelatih kami yang bersemangat. Anda juga akan menerima sekitar 10-20 jam sumber belajar online, yang dikuratori dengan cermat oleh Pakar QarirGenerator agar intuitif dan interaktif. Fase persiapan ini akan memastikan Anda memiliki fondasi yang diperlukan dalam Python sebelum bootcamp dimulai.',
      icon: <Checklist />,
      moduleCount: 0,
    },
    {
      title: 'Data Analysis',
      desc: 'Kuasai penggunaan bahasa pemrograman Python, khususnya untuk aplikasi ilmu data, yang memerlukan kemahiran dalam mengekstraksi data dari basis data relasional, menangani kumpulan data yang luas, dan menghasilkan visualisasi data. Selain itu, dapatkan pemahaman menyeluruh tentang prinsip matematika dasar, seperti statistik dan aljabar linier, untuk memfasilitasi analisis data yang efisien (modul terbaru 2023).',
      icon: <Checklist />,
      moduleCount: 1,
    },
    {
      title: 'Decision Science',
      desc: 'Bayangkan menjadi konsultan data dan menguasai seni menavigasi melalui fase persiapan data dari kumpulan data yang sangat besar. Manfaatkan keahlian Anda dalam menafsirkan hasil statistik yang diperoleh dari berbagai alat seperti model regresi multivariat, pengujian hipotesis, dan interval kepercayaan untuk mengekstrak wawasan yang berharga.',
      icon: <Checklist />,
      moduleCount: 2,
    },
    {
      title: 'Machine Learning',
      desc: 'Jalankan Machine learning, yang melibatkan persiapan data, rekayasa fitur, pemilihan model, evaluasi, dan penyempurnaan. Kembangkan pemahaman tentang prinsip-prinsip matematika dan implementasi numerik dari model Machine Learning.',
      icon: <Checklist />,
      moduleCount: 3,
    },
    {
      title: 'Deep Learning',
      desc: 'Temukan rahasia Deep Learning! Pelajari tentang struktur dan komponen jaringan neural, buat jaringan Anda sendiri untuk memproses gambar, urutan, dan teks, terapkan model yang telah dilatih sebelumnya melalui pembelajaran transfer, dan praktikkan dengan pembuat enkode otomatis, pemrosesan batch, dan pelatihan GPU.',
      icon: <Checklist />,
      moduleCount: 4,
    },
    {
      title: 'Machine Learning Engineering',
      desc: 'Convert your superior handmade models into a Python package for cloud-based replication and training with virtual machines and online databases. Monitor and update performance with new data, and share predictions through APIs or websites (2023 newest module) Ubah model karya Anda yang unggul menjadi paket Python untuk replikasi dan pelatihan berbasis cloud dengan mesin virtual dan database online. Pantau dan perbarui kinerja dengan data baru, dan bagikan prediksi melalui API atau situs web.* (Modul Terbaru 2023)',
      icon: <Checklist />,
      moduleCount: 5,
    },
  ]

  // Cek jarak dari atas element ke atas page
  useEffect(() => {
    const element = document.getElementById('details') // Replace with the actual ID of the element you want to measure.

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
    const element = document.getElementById('details') // Replace with the actual ID of the element you want to measure.

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
      id="details"
      className="bg-white container mt-20 xl:mt-0 flex flex-row justify-between"
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
              ? 'fixed top-10'
              : ''
          } p-3 w-10/12 h-60`}
        >
          <div className="flex flex-col">
            <h3 className="w-3/4 font-black lg:text-2xl">
              Detail Kursus Data Science
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="#ringkasan" alt="ringkasan">
                Ringkasan
              </Link>
              <Link href="#fase-belajar" alt="fase belajar">
                Fase Belajar
              </Link>
              <Link href="#lokasi-belajar" alt="fase belajar">
                Lokasi Belajar
              </Link>
              <Link href="#cerita-alumni" alt="fase belajar">
                Cerita Alumni
              </Link>
              <Link href="#portfolio-alumni" alt="fase belajar">
                Portfolio Alumni
              </Link>
              <Link href="#portfolio-alumni" alt="fase belajar">
                Portfolio Alumni
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 w-full xl:w-3/4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          {dataFaseBelajar.length > 0
            ? dataFaseBelajar.map((fase, index) => (
                <Accordion key={index} data={fase} />
              ))
            : nul}
        </div>
      </div>
    </div>
  )
}

export default Details
