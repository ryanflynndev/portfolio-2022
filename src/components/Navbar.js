import { ReactComponent as Logo } from '../logo.svg';
import { ReactComponent as ProjectsLogo} from '../projectsLogo.svg';
import { ReactComponent as BlogLogo} from '../blogLogo.svg';
import { ReactComponent as GitHubLogo} from '../githubLogo.svg';
import { ReactComponent as LinkedinLogo} from '../linkedinLogo.svg';

export default function Navbar() {
    return (
        <nav name="nav">
            <div className="max-w-7xl mx-auto  text-white font-bold text-2xl py-4 font-inter">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <a href="/"className='flex items-center py-2 px-3'>
                                <Logo className="h-14 w-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"/>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a href="/" className="flex items-center space-x-1">
                            <ProjectsLogo className="h-12 w-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
                            <text className='hover:text-red-300 duration-300'>Projects</text>
                        </a>
                        <a href="https://github.com/ryanflynndev" className="flex items-center space-x-1">
                            <GitHubLogo className="h-12 w-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
                            <text className='hover:text-green-300 duration-300'>GitHub</text>
                        </a>
                        <a href="https://ryanflynndev.medium.com/" className="flex items-center space-x-1">
                            <BlogLogo className="h-12 w-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
                            <text className='hover:text-yellow-300 duration-300'>Blog</text>
                        </a>
                        <a href="https://www.linkedin.com/in/ryanflynnofficial/" className="flex items-center space-x-1">
                            <LinkedinLogo className="h-12 w-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
                            <text className='hover:text-blue-300 duration-300'>Linkedin</text>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}