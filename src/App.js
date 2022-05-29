import 'bootstrap/dist/css/bootstrap.min.css'
// import Particles from 'react-particles-js';
import particleConfig from './components/particlesConfig';
import './App.css'
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import Particles from "react-tsparticles";
import {loadFull} from 'tsparticles';
import { About } from './components/about/About';
import {Portfolio} from './components/portfolio/Portfolio'
import { Blog } from './components/blog/Blog';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
function App(argument) {
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

export default App;

