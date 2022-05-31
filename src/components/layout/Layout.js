import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import particleConfig from '../particlesConfig';
import { Header } from '../header/Header';
import { Navbar } from '../navbar/Navbar';
import Particles from "react-tsparticles";
import {loadFull} from 'tsparticles';
import { About } from '../about/About';
import {Portfolio} from '../portfolio/Portfolio'
import { Blog } from '../blog/Blog';
import { Contact } from '../contact/Contact';
import { Footer } from '../footer/Footer';

function Layout(argument) {
	const particlesInit = async (main) => {
		await loadFull(main);
	  };
	
	  const particlesLoaded = (container) => {
	  };
	return(
		<>
			<Particles
			className='particles'
			id='tsparticles'
			init={particlesInit} loaded={particlesLoaded}
			params={particleConfig}/>
			<Navbar />
            <Header />
            <About />
            <Portfolio />
            <Blog />
            <Contact />
			<Footer />
		</>
	);
}

export default Layout;

