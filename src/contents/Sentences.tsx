import { CodeIcon, HomeIcon, Phone } from "lucide-react";
import { Icons } from "~/components/Icons";

export const Contents = {

    // Yardım İçin -> https://discord.gg/luppux
    Name: 'Lulu',
    About: 'Let me introduce myself, I am Alp. I am 18 y/o. I am a versatile developer with a deep passion for all aspects of software.',
    Version: 'v2.0.0',

    DiscordID: '852103749228036136', // Discord ID
    GithubName: 'luluwux', // Github İsmin
    Instagram: '97alpw', // Instagram İsmin

    Spotfy: {
        ClientID: '', // Spotify ClientID || Client oluşturmak için -> https://developer.spotify.com 
        ClientSecret: '', // Spotify Client Secret || Client oluşturmak için -> https://developer.spotify.com 
        RefreshToken: '' // Client Refresh Token || Client oluşturmak için -> https://developer.spotify.com 
    },

    MetaData: {
        Name: 'Lulu',
        Url: 'https://www.lulushu.live',
        Description: 'Lulu Official Website',
    },

    Skills: [
        'HTML',
        'CSS',
        'Javascript',
        'Typescript',
        'React',
        'Next JS',
        'Nuxt JS',
        'Bootstrap',
        'Tailwind',
        'Vue',
        'MongoDB',
        'MySQL',
    ],

    Navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/contact", icon: Phone, label: "Contact" },
    ],

    Contact: {
        social: {
            Instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/97alpw/",
                icon: Icons.Instagram,

                navbar: true,
            },
            Github: {
                name: "Github",
                url: "https://github.com/luluwux",
                icon: Icons.Github,
                navbar: true,
            },
            Discord: {
                name: "Discord",
                url: "https://discord.gg/luppux",
                icon: Icons.Discord,
                navbar: true,
            },
        },
    },

} as const