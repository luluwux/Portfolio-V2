'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '~/components/Avatar';
import { Contents } from '~/contents/Sentences';


export default function Header() {
    return (
        <header className="pt-3">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto p-1 px-3 lg:pt-0 right-0 left-0 rounded-lg z-10">
                <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-3">
                        <div className="hidden lg:flex">
                            <Avatar />
                        </div>
                        <div>
                            <h1 className="text-black dark:text-white text-xl font-bold">{Contents.Name}</h1>
                            <p className="text-xs text-center text-white text-opacity-70 hidden sm:flex">{Contents.Version}</p>
                        </div>
                    </div>
                    <nav className="items-center justify-end space-x-2 sm:flex hidden">
                        <Link href={`https://discord.com/users/${Contents.DiscordID ? Contents.DiscordID : '852103749228036136'}`} className="group bg-foreground/5 rounded-3xl" aria-label="TaxPal on Discord" target='_blank'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-gray-500 duration-200 hover:text-gray-300 bg-gray-500 hover:bg-gray-600/10 bg-opacity-5 rounded-full p-2" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                            </svg>
                        </Link>
                        <Link href={`https://github.com/${Contents.GithubName ? Contents.GithubName : 'luluwux'}`} className="group bg-foreground/5 rounded-3xl" aria-label="TaxPal on GitHub" target='_blank'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-gray-500 duration-200 hover:text-gray-300 bg-gray-500 hover:bg-gray-600/10 bg-opacity-5 rounded-full p-2" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </Link>
                        <Link href={`https://www.instagram.com/${Contents.Instagram ? Contents.Instagram : '97alpw'}`} className="group bg-foreground/5 rounded-3xl" aria-label="TaxPal on Instagram" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30" className="text-gray-500 duration-200 hover:text-gray-300 bg-gray-500 hover:bg-gray-600/10 bg-opacity-5 rounded-full p-2" width="2em" height="2em">
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                            </svg>
                        </Link>
                    </nav>
                </div>
                <div>
                </div>
            </motion.div>
        </header>
    );
}