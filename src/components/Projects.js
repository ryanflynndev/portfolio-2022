import rubikLogo from '../svgs/rubikLogo.svg'
import { ReactComponent as KumoLogo } from '../svgs/kumoLogo.svg';

function Projects() {
    return (
        <div className="grid items-center grid-cols-2 place-items-center py-16">
                <div className="space-x-1 grid-rows-3">
                    <img src={rubikLogo}></img>
                    <h2 className="font-extrabold leading-loose text-[2.25em] text-white font-inter text-center pt-16 px-10">Rubik</h2>
                    {/* <p className="font-extrabold leading-loose text-[1.25em] text-white font-inter text-center pt-4 px-10">Kumo is a general-purpose high level programming language that is based on the BASIC family of programming languages. It was written by Ryan Flynn using Python3.</p> */}
                </div>
                <div className="space-x-1 grid-rows-3">
                    <KumoLogo/>
                    <h2 className="font-extrabold leading-loose text-[2.25em] text-white font-inter text-center pt-16 px-10">Kumo</h2>
                    {/* <p className="font-extrabold leading-loose text-[1.25em] text-white font-inter text-center pt-4 px-10">Kumo is a general-purpose high level programming language that is based on the BASIC family of programming languages. It was written by Ryan Flynn using Python3.</p> */}
                </div>         
        </div>
    );
}

export default Projects;