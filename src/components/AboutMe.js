import { ReactComponent as AboutMeLogo } from '../svgs/aboutMeLogo.svg';

function AboutMe() {
    return (
        <>
            <p className="font-extrabold leading-loose text-[2.25em] text-white font-inter text-center pt-16 px-10">Hey there my name is Ryan Flynn and I'm a software engineer who loves to learn, create, and improve. I'm interested in a multitude of growing web technologies such as Rust, WebAssembly, TypeScript, React, Node.js and many others. I tend to spend most of my free time creating side projects that bring me out of my comfort zone and challenge me. You can find most of these on my GitHub and a few of them on this site. Thanks for stopping by! </p>
            <div className="grid items-center place-items-center py-10">
                <AboutMeLogo/>
            </div>
        </>
    );
}

export default AboutMe;