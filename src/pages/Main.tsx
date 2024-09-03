
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";

const Main: React.FC = () => {

    return (
        
        <div className={"lg:mx-32 md:mx-4 bg-gray-900 min-h-screen" } >
            <Intro />
            <About />
            <Projects />
        </div>
    )
}

export default Main;