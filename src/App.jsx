
import {Contact} from "./components/Contact.jsx"
import Cat from './images/cat.jpg'
import image22 from "./images/image22.png"
import image23 from "./images/image23.png"
import image24 from "./images/image24.png"
import image25 from "./images/image25.png"
import image26 from "./images/image26.png"
import image27 from "./images/image27.png"
import image28 from "./images/image28.png"
import image29 from "./images/image29.png"
import image30 from "./images/image30.png"



  export function App(){

    return (
        <div className="contacts">
     <Contact 
                img={Cat} 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={image30}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={image29}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={image28}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
             <Contact 
                img={image27} 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={image26}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={image25}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={image24}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
              <Contact 
                img={image23}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={image22}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
        </div>
    )
}