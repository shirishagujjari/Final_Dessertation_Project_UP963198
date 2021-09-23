import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiNodeDotJs,
  SiGit,
  SiGithub,
  SiReact,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
  SiPython,
  SiVisualstudiocode,
  SiNextDotJs,
  SiGraphql,
  SiAtom,
  SiFirebase,
  SiMaterialUi,
  SiSass,
  SiTypescript,
  SiApollographql,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobexd,
} from 'react-icons/si'
import {AiOutlineAntDesign} from 'react-icons/ai'


const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='section__title'>
        <h1>Skills</h1>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12}>
            <div className='programming'>
              <h2>Programming</h2>
              <div className='icon_container'>
                <div className='icon_wrapper'>
                  <SiJavascript className='icon' />
                  <span className='tooltiptext'>Javascript</span>
                </div>
                <div className='icon_wrapper'>
                  <SiPython className='icon' />
                  <span className='tooltiptext'>Python</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12}>
            <div className='web'>
              <h2>Web Technologies</h2>
              <div className='icon_container'>
                <div className='icon_wrapper'>
                  <SiReact className='icon' />
                  <span className='tooltiptext'>React</span>
                </div>
                <div className='icon_wrapper'>
                  <SiNextDotJs className='icon' />
                  <span className='tooltiptext'>Next js</span>
                </div>
                <div className='icon_wrapper'>
                  <SiNodeDotJs className='icon' />
                  <span className='tooltiptext'>Node.js</span>
                </div>
                <div className='icon_wrapper'>
                  <SiGraphql className='icon' />
                  <span className='tooltiptext'>Graph Ql</span>
                </div>
                <div className='icon_wrapper'>
                  <SiApollographql className='icon' />
                  <span className='tooltiptext'>Apollo Client</span>
                </div>
                <div className='icon_wrapper'>
                  <SiTailwindcss className='icon' />
                  <span className='tooltiptext'>TailwindCSS</span>
                </div>
                <div className='icon_wrapper'>
                  <SiTypescript className='icon' />
                  <span className='tooltiptext'>TypeScript</span>
                </div>

                <div className='icon_wrapper'>
                  <SiRedux className='icon' />
                  <span className='tooltiptext'>Redux</span>
                </div>
                <div className='icon_wrapper'>
                  <SiBootstrap className='icon' />
                  <span className='tooltiptext'>Bootstrap</span>
                </div>
                <div className='icon_wrapper'>
                  <SiSass className='icon' />
                  <span className='tooltiptext'>SASS/SCSS</span>
                </div>
                <div className='icon_wrapper'>
                  <SiMaterialUi className='icon' />
                  <span className='tooltiptext'>Material-ui</span>
                </div>
                <div className='icon_wrapper'>
                  <AiOutlineAntDesign className='icon' />
                  <span className='tooltiptext'>Ant Design</span>
                </div>
                <div className='icon_wrapper'>
                  <SiHtml5 className='icon' />
                  <span className='tooltiptext'>HTML</span>
                </div>
                <div className='icon_wrapper'>
                  <SiCss3 className='icon' />
                  <span className='tooltiptext'>CSS</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12}>
            <div className='database'>
              <h2>Databases</h2>
              <div className='icon_container'>
                <div className='icon_wrapper'>
                  <SiMongodb className='icon' />
                  <span className='tooltiptext'>MongoDB</span>
                </div>
                <div className='icon_wrapper'>
                  <SiMysql className='icon' />
                  <span className='tooltiptext'>MySQL</span>
                </div>
                <div className='icon_wrapper'>
                  <SiFirebase className='icon' />
                  <span className='tooltiptext'>Firebase</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12}>
            <div className='tools'>
              <h2>Tools & IDE's </h2>
              <div className='icon_container'>
                <div className='icon_wrapper'>
                  <SiGit className='icon' />
                  <span className='tooltiptext'>Git</span>
                </div>
                <div className='icon_wrapper'>
                  <SiGithub className='icon' />
                  <span className='tooltiptext'>GitHub & CLI</span>
                </div>
                <div className='icon_wrapper'>
                  <SiVisualstudiocode className='icon' />
                  <span className='tooltiptext'>Visual Studio Code</span>
                </div>
                <div className='icon_wrapper'>
                  <SiAtom className='icon' />
                  <span className='tooltiptext'>Atom</span>
                </div>
                <div className='icon_wrapper'>
                  <SiPostman className='icon' />
                  <span className='tooltiptext'>Postman</span>
                </div>
                <div className='icon_wrapper'>
                  <SiAdobexd className='icon' />
                  <span className='tooltiptext'>Photoshop</span>
                </div>
                <div className='icon_wrapper'>
                  <SiAdobephotoshop className='icon' />
                  <span className='tooltiptext'>Photoshop</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skills
