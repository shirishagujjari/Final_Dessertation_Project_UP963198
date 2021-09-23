import React from 'react'
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiNodeDotJs,
  SiReact,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiPython,
  SiFirebase,
  SiSass,
  SiMaterialUi,
  SiPhp,
  SiAngular,
  SiExpo
} from 'react-icons/si'

const ProjectLanguages = (props) => {
  const {languages} = props
  return (
    <div className='tech_stack'>
      {languages.html ? <SiHtml5 className='icon' /> : null}
      {languages.css ? <SiCss3 className='icon' /> : null}
      {languages.sass ? <SiSass className='icon' /> : null}
      {languages.bootstrap ? <SiBootstrap className='icon' /> : null}
      {languages.materialui ? <SiMaterialUi className='icon' /> : null}
      {languages.javascript ? <SiJavascript className='icon' /> : null}
      {languages.react ? <SiReact className='icon' /> : null}
      {languages.redux ? <SiRedux className='icon' /> : null}
      {languages.angular ? <SiAngular className='icon' /> : null}
      {languages.nodejs ? <SiNodeDotJs className='icon' /> : null}
      {languages.expressjs ? (
        <img
          alt=''
          src='https://res.cloudinary.com/kirankumargonti/image/upload/v1600929124/Kirankumargonti/assets/expressjs_a0log3.png'
          className='icon'
        />
      ) : null}
      {languages.mysql ? <SiMysql className='icon' /> : null}
      {languages.mongodb ? <SiMongodb className='icon' /> : null}
      {languages.firebase ? <SiFirebase className='icon' /> : null}
      {languages.python ? <SiPython className='icon' /> : null}
      {languages.php ? <SiPhp className='icon' /> : null}
      {languages.reactnative ? <SiReact className='icon' /> : null}
      {languages.expo ? <SiExpo className='icon' /> : null}
    </div>
  )
}

export default ProjectLanguages
