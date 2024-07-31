'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const isDarkMode = theme === 'dark';

    return (
        <button
            className="px-2"
            onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200 duration-100" />
            ) : (
                <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200 duration-100" />
            )}
        </button>
    );
}
