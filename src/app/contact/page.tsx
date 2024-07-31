
"use client";
import React from 'react';
import Image from "next/image";

import Header from '~/components/Header';
import Footer from "~/components/Footer";
import { Navbar } from "~/components/Navbar";


export default function Contact() {
    return (
        <main>
            <Header />
            <div className="flex flex-1 w-full flex-col items-center justify-center text-center py-[8.5rem]">
                <div className="relative w-full max-w-lg items-center justify-center p-10 rounded-md boder-1 border-white border-opacity-5 space-y-3">
                    <div>
                        <h1 className="text-6xl font-bold flex justify-center my-10"> Contact</h1>
                    </div>
                    <div>
                        <input
                            type="search"
                            name="search"
                            placeholder={'Your Name'}
                            className="h-12 px-5 pr-10 w-full rounded-lg text-base focus:outline-none border border-foreground/5"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="search"

                            placeholder={'Your E-Mail'}
                            className="h-12 px-5 pr-10 w-full rounded-lg text-base focus:outline-none border border-foreground/5"
                        />
                    </div>
                    <div>
                        <input
                            type="search"
                            name="search"
                            placeholder={'Your Message'}
                            className="h-24 px-5 pr-10 w-full rounded-lg text-base focus:outline-none border border-foreground/5"
                        />
                    </div>
                    <div className="pt-7">
                        <button className="justify-center item-center rounded-md w-full h-12 bg-secondary text-black border border-foreground/5">
                            <p className="text-black font-normal">Send</p>
                        </button>

                    </div>
                </div>
            </div>
            <Navbar />
            <Footer />
            <Image className='absolute top-0 right-0 hidden overflow-hidden select-none lg:block blur-lg -z-50' width={1200} height={1000} src="/images/bg.svg" alt="" />
        </main>
    );
}
