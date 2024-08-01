'use client';
import Image from "next/image";
import { motion } from "framer-motion";

import Header from '~/components/Header';
import Footer from "~/components/Footer";
import Repositories from "~/components/Repo";
import Technologies from "~/components/Tech";
import { Contents } from '~/contents/Sentences';
import { Navbar } from "~/components/Navbar";
import Spotify from "~/components/spotify/Card"


export default function Home() {
  return (
    <main>
      <Header />
      <motion.section
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="flex flex-1 w-full flex-col items-center justify-center text-center min-h-screen pb-24">
        <Spotify />
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-opacity-100 sm:text-8xl ">
          Hello! This is <br />
          <span className="relative whitespace-nowrap">
            <span className="linear-wipe relative italic fancy"> {Contents.Name}&apos;s </span>
          </span>universe.
        </h1>
        <p className="mx-auto mt-8 sm:max-w-xl max-w-xs sm:text-lg text-base text-foreground/70 leading-7">
          {Contents.About}
        </p>
      </motion.section>
      <Repositories />
      <Technologies />
      <section className="bg-secondary">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-24 mb-32">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Bu Siteye Sahip Ol
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Github üzerinden bu sitenin şablonunu indirip kendi kişisel websiteni oluştur.
            </p>
            <div className="space-x-3">
              <a href='https://github.com/luluwux/Portfolio-V2' className="inline-block rounded-lg bg-foreground text-background px-6 py-2 text-sm" target="_blank">
                Şablon
              </a>
              <a href='https://discord.gg/luppux' className="inline-block rounded-lg bg-foreground text-background px-6 py-2 text-sm" target="_blank">
                Sunucum
              </a>
            </div>
          </div>
        </div>
      </section>

      <Navbar />
      <Footer />

      <Image className='absolute top-0 right-0 hidden overflow-hidden select-none lg:block blur-lg -z-50' width={1200} height={1000} src="/images/bg.svg" alt="" />
    </main>
  );
}
