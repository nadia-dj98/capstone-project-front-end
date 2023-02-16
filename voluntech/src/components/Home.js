import * as Scroll from 'react-scroll';

import Hero from "./Hero";
import Partners from "./Partners";
import About from "./About";

const Home = () => {

    const Element = Scroll.Element;

    return ( 
        <>
         <Element name="home"><Hero/></Element>
         <Element name="about"><About/></Element>
         <Element name="partners"><Partners /></Element>
        </>
     );
}

export default Home;