import { Contents } from '~/contents/Sentences';

function Footer() {
    return (
        <footer className="text-center h-16 max-w-7xl mx-auto w-full border-t flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-foreground/10">
            <div className="text-foreground/70">
                © 2022-2023 All Rights Reserved {" "}
            </div>
            <div className="flex space-x-4 pb-4 sm:pb-0">
                <h2>
                    Developed with 💚 by
                    <a className="px-1 text-[#00dc83] " href={`https://github.com/${Contents.GithubName}`} target="_blank">
                        {Contents.Name}
                    </a>
                </h2>
            </div>
        </footer>
    );
}

export default Footer;