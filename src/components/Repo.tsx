'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';

import { Contents } from '~/contents/Sentences';

// Icons
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Repositories() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    `https://api.github.com/users/${Contents.GithubName ? Contents.GithubName : 'luluwux'}/repos`
                );

                setProjects(response.data.slice(0, 6));
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjects();
    }, []);

    const openGithubProject = (url: any) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <div className="pb-48">
                <div className='max-w-6xl mx-auto'>
                    <motion.h1
                        initial={{ opacity: 0, translateY: -30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl font-display font-bold tracking-normal ml-2 sm:ml-8 pb-4 sm:pb-8">
                        <p className='text-5xl sm:text-6xl text-left overflow-hidden text-foreground/10 absolute font-bold '>Repositories</p>
                        <p className='pt-5 sm:pt-6 pl-1 text-4xl sm:text-5xl font-bold '>Repositories</p>
                    </motion.h1>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, translateY: -30 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 w-[95%] mt-8 mx-auto ">
                            {projects.length > 0 ? (
                                projects.map((project: any) => (
                                    <div
                                        className="flex flex-col relative p-4 text-foreground m-1.5 h-[20vh] bg-secondary rounded-lg border border-foreground/5 hover:border-foreground/20 duration-300 justify-between hover:scale-105 "
                                        onClick={() => openGithubProject(project.html_url)}
                                    >
                                        <h3 className="text-xl font-bold">{project.name}</h3>
                                        <p className="text-left text-normal font-thin">{project.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <CodeIcon sx={{ width: 20, height: 20, marginRight: 1, color: "gray" }} />
                                                <span>{project.language ?? 'TypeScripts'}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <StarOutlineIcon sx={{ width: 20, height: 20, marginRight: 1, color: "gray" }} />
                                                <span className='pr-3'>{project.stargazers_count}</span>
                                                <CallSplitIcon sx={{ width: 20, height: 20, marginRight: 1, color: "gray" }} />
                                                <span>{project.forks_count}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>😴 No projects found.</p>
                            )}
                        </motion.div>
                    </div>
                    <div>
                    </div>
                </div>
                <motion.div
                 initial={{ opacity: 0, translateY: -30 }}
                 animate={{ opacity: 1, translateY: 0 }}
                 transition={{ delay: 0.6 }}
                className='flex flex-col items-center justify-center pt-5'>
                    <ExpandMoreIcon className='animate-bounce' />
                    <span className='pt-2'>
                        <a href={`https://github.com/${Contents.GithubName}`} >
                            <p className='text-foreground/70 hover:text-foreground/100 duration-300'>
                                Click For More
                            </p>
                        </a>
                    </span>
                </motion.div>

            </div>
        </>
    )
}

export default Repositories;


export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];