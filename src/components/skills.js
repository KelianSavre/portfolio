import '../stylesheets/skills/skills.css'
import HTML from '../images/html.webp'
import CSS from '../images/css.webp'
import JS from '../images/js.webp'
import REACT from '../images/react.webp'
import SASS from '../images/Sass.webp'
import FIGMA from '../images/figma.webp'
import GITHUB from '../images/github.webp'
import PYTHON from '../images/python.webp'
import NODEJS from '../images/nodejs.webp'



export default function Skills(){
    return(
        <section className="skills" id="anchor-skills">

            <div className="skills-content">
                <div className="skills-tech">
                    <h2>Technologies que j'utilise</h2>
                    <div className='skills-icons'>
                        <img src={HTML} title='HTML' alt='HTML'/>
                        <img src={CSS} title='CSS' alt='CSS'/>
                        <img src={JS} title='Javascript' alt='Javascript'/>
                        <img src={REACT} title='React' alt='React'/>
                        <img src={SASS} title='Sass' alt='Sass'/>
                    </div>
                </div>
                <div className="skills-tech">
                    <h2>Outils que j'utilise</h2>
                    <div className='skills-icons'>
                        <img src={FIGMA} title='Figma' alt='Figma'/>
                        <img src={GITHUB} title='Github' alt='Github'/>

                    </div>
                </div>
                <div className="skills-tech">
                    <h2>Technologies qui m'intéressent</h2>
                    <div className='skills-icons'>
                        <img src={NODEJS} title='NodeJS' alt='NodeJS'/>
                        <img src={PYTHON} title='Python' alt='Python'/>
                    </div>
                </div>
            </div>

        </section>

    )
    
}