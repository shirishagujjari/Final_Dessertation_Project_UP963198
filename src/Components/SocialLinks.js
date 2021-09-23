import React from 'react'
import data from '../Data/data'
import {
  FaFacebookF,
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCodepen,
  FaYoutube,
} from 'react-icons/fa'

function SocialLinks() {
  const {
    facebook,
    github,
    twitter,
    instagram,
    codePen,
    youtube,
    hackerRank,
    linkedIn,
  } = data.socialLinks
  return (
    <div className='social_links'>
      {github !== '' && (
        <a
          href={github}
          className='github ff'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='icon__ff' />
        </a>
      )}

      {linkedIn !== '' && (
        <a
          href={linkedIn}
          className='linkedin ff'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedinIn className='icon__ff' />
        </a>
      )}
      {youtube !== '' && (
        <a
          href={youtube}
          className='youtube_link ff'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaYoutube className='icon__ff' />
        </a>
      )}
      {codePen !== '' && (
        <a
          href={codePen}
          className='codepen ff'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaCodepen className='icon__ff' />
        </a>
      )}
      {instagram !== '' && (
        <a
          href={instagram}
          className='instagram ff'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram className='icon__ff' />
        </a>
      )}
      {facebook !== '' && (
        <a
          href={facebook}
          className='facebook ff'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebookF className='icon__ff' />
        </a>
      )}

      {hackerRank !== '' && (
        <a
          href={hackerRank}
          className='hackerrank ff'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaHackerrank className='icon__ff' />
        </a>
      )}

      {twitter !== '' && (
        <a
          href={twitter}
          className='twitter ff'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter className='icon__ff' />
        </a>
      )}
    </div>
  )
}

export default SocialLinks
