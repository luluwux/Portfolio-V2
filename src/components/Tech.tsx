import { skillsImage } from '~/contents/Images';
import { Contents } from '~/contents/Sentences';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Technologies() {
    return (
        <>
            <div className="pb-8 sm:pb-16 md:pb-32 max-w-6xl mx-auto">
                <div className="relative">
                    <motion.h1
                        initial={{ opacity: 0, translateY: -30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.8 }}
                        className="max-w-7xl font-display font-bold tracking-normal ml-2 sm:ml-8 pb-4 sm:pb-8 relative z-10">
                        <p className='text-5xl sm:text-6xl text-left overflow-hidden text-foreground/10 text-opacity-5 absolute font-bold'>Technologies</p>
                        <p className='pt-4 sm:pt-6 pl-1 text-4xl sm:text-5xl font-bold relative z-10'>
                            Technologies
                        </p>
                    </motion.h1>
                    <div className="absolute inset-0 bg-cover bg-center z-0">
                    </div>
                </div>
                <div>
                    <motion.div
                        initial={{ opacity: 0, translateY: -30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 1 }}
                        className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-8 w-[95%] mx-auto">
                        {Contents.Skills.map((skill) => (
                            <div
                                className="flex flex-col justify-between transition duration-300 transform hover:scale-105 border border-foreground/5 rounded-lg p-3 hover:border-foreground/20 bg-secondary"
                                key={skill}
                            >
                                <div className="flex items-center gradient-border-skills ">
                                    <Image
                                        className="w-8 h-8"
                                        src={skillsImage(skill)}
                                        alt={skill}
                                        width={50}
                                        height={50}
                                    />
                                    <p className="ml-2 text-white font-normal">{skill}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>

    )
}

export default Technologies;