import React from 'react';
import {SiGithub, SiYoutube} from 'react-icons/si';
import {VscGlobe} from 'react-icons/vsc';
import {HiOutlineDownload} from 'react-icons/hi';

const ProjectLinks = (props) => {
  const {links} = props;
  return (
    <div className='project_links'>
      {links.github ? (
        <div>
          <a
            href={links.github}
            rel='noopener noreferrer'
            className='project_github'
          >
            <SiGithub className='icon' />
          </a>
        </div>
      ) : null}
      {links.download ? (
        <a href={links.download} rel='noopener noreferrer'>
          <HiOutlineDownload className='icon' />
        </a>
      ) : null}
      {links.previewURL ? (
        <a href={links.previewURL} rel='noopener noreferrer'>
          <VscGlobe className='icon' />
        </a>
      ) : null}
      {links.youtube ? (
        <a href={links.youtube} rel='noopener noreferrer'>
          <SiYoutube className='icon' />
        </a>
      ) : null}
    </div>
  );
};

export default ProjectLinks;
