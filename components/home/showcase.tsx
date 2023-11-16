"use client"

/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from "next/image"
import { motion } from "framer-motion"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import HeroPictureDark from "../../public/images/DevMgrDark.png"
import HeroPictureWhite from "../../public/images/DevMgrWhite.png"
import AppWindow from "../ui/window"

export default function Showcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <section
        id="showcase"
        className="relative overflow-hidden border-t bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pb-28 pt-20 sm:py-32"
      >
        <ShowcaseGradient />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <h2
              className={cn(
                "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-heading text-3xl text-transparent sm:text-4xl md:text-5xl",
                fontHeading.variable
              )}
            >
              Eklentilerimiz
            </h2>
            <p className="mt-6 max-w-4xl text-lg tracking-tight text-blue-100">
              Liman Merkezi Yönetim Sistemi'nin genişletilebilir yapısı
              sayesinde birçok eklenti geliştirilmiştir. Bu eklentileri
              kullanarak Liman'ı istediğiniz gibi genişletebilirsiniz. HAVELSAN
              A.Ş. olarak geliştirdiğimiz öne çıkan eklentiler aşağıdadır.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
              <div
                className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
                role="tablist"
                aria-orientation="vertical"
              >
                <div className="group relative rounded-full bg-white px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:bg-white/10 lg:p-6 lg:ring-1 lg:ring-inset lg:ring-white/10">
                  <h3>
                    <button
                      className="font-display ui-not-focus-visible:outline-none text-lg text-blue-600 lg:text-white"
                      id="headlessui-tabs-tab-:R2baalla:"
                      role="tab"
                      type="button"
                      aria-selected="true"
                      tabIndex={0}
                      data-headlessui-state="selected"
                      aria-controls="headlessui-tabs-panel-:Rdaalla:"
                    >
                      <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                      Payroll
                    </button>
                  </h3>
                  <p className="mt-2 hidden text-sm text-white lg:block">
                    Keep track of everyone's salaries and whether or not they've
                    been paid. Direct deposit not supported.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div
                id="headlessui-tabs-panel-:Rdaalla:"
                role="tabpanel"
                tabIndex={0}
                data-headlessui-state="selected"
                aria-labelledby="headlessui-tabs-tab-:R2baalla:"
                style={{}}
              >
                <div className="mt-10 w-[45rem] shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <AppWindow>
                    <Image
                      src={HeroPictureWhite}
                      className="block dark:hidden"
                      alt="Liman Merkezi Yönetim Sistemi"
                      quality={100}
                      placeholder="blur"
                      width={1200}
                      height={800}
                    />
                    <Image
                      src={HeroPictureDark}
                      className="hidden dark:block"
                      alt="Liman Merkezi Yönetim Sistemi"
                      quality={100}
                      placeholder="blur"
                      width={1200}
                      height={800}
                    />
                  </AppWindow>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function ShowcaseGradient() {
  return (
    <svg
      width={608}
      height={535}
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 top-[-5rem]"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#60A5FA" stopOpacity={0} offset="0%" />
          <stop stopColor="#F472B6" offset="100%" />
        </linearGradient>
        <filter
          x="-37.5%"
          y="-37.5%"
          width="175%"
          height="175%"
          filterUnits="objectBoundingBox"
          id="b"
        >
          <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
        </filter>
      </defs>
      <circle
        filter="url(#b)"
        cx={304}
        cy={223}
        r={200}
        fill="url(#a)"
        fillRule="evenodd"
        fillOpacity=".32"
      />
    </svg>
  )
}
