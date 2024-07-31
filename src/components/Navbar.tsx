import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

import { cn } from "~/lib/utils";
import { Dock, DockIcon } from "~/components/ui/Dock";
import { Separator } from "~/components/ui/Separator";
import { buttonVariants } from "~/components/ui/Button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "~/components/ui/Tooltip";
import { Contents } from "~/contents/Sentences";
import { ThemeToggle } from "~/components/ThemeToggle";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function Navbar() {
    return (
        <TooltipProvider>
            <motion.div
             initial={{ opacity: 0, translateY: 30 }}
             animate={{ opacity: 1, translateY: 0 }}
             transition={{ delay: 0.4 }}
            className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-12 flex origin-bottom h-full max-h-16 ">
                <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background/50 to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
                <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center justify-center px-1 bg-secondary [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu border border-foreground/5">
                    {Contents.Navbar.map((item) => (
                        <DockIcon key={item.href}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12"
                                        )}
                                    >
                                        <item.icon className="size-4 duration-100" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(Contents.Contact.social)
                        .filter(([_, social]) => social.navbar)
                        .map(([name, social]) => (
                            <DockIcon key={name}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={social.url}
                                            className={cn(
                                                buttonVariants({ variant: "ghost", size: "icon" }),
                                                "size-12"
                                            )}
                                            target="_blank"
                                        >
                                            <social.icon className="size-4 duration-100" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        ))}
                    <Separator orientation="vertical" className="h-full py-2" />
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ThemeToggle />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </motion.div>
        </TooltipProvider>
    );
}
