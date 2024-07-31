
import Image from "next/image";

import Header from '~/components/Header';
import Footer from "~/components/Footer";
import { Navbar } from "~/components/Navbar";


export default function Error() {
    return (
        <main>
            <Header />
            <div className="flex flex-1 w-full flex-col items-center justify-center text-center py-72">
                <a href="/" className="bg-foreground border border-foreground p-2 w-32 rounded-lg text-background">
                    Home
                </a>
                <h1 className="mx-auto max-w-6xl font-display text-8xl font-bold tracking-normal text-opacity-100 sm:text-9xl">
                    <span className="relative whitespace-nowrap">
                        <span className="linear-wipe relative italic">Oops!</span>
                    </span>
                </h1>
                <p className="mx-auto mt-4 sm:max-w-xl max-w-xs sm:text-2xl text-base text-foreground/70 leading-7">
                    Page Not Found
                </p>
            </div>
            <Footer />
            <Image className='absolute top-0 right-0 hidden overflow-hidden select-none lg:block blur-lg -z-50' width={1200} height={1000} src="/images/bg.svg" alt="" />
        </main>
    );
}
