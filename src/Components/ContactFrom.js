import React, {useState} from 'react'
import {useForm, ValidationError} from '@formspree/react'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdPaperPlane} from 'react-icons/io'
import {ImSpinner7} from 'react-icons/im'
import swal from '@sweetalert/with-react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('contactForm')
  const [name, setName] = useState('')

  if (state.succeeded) {
    swal({
      button: false,
      timer: 6000,
      content: (
        <div className='success__message'>
          <div className='ic'>
            <AiOutlineCheck className='ii' />
          </div>
          <h1>Dear {name}</h1>
          <p>
            Thank you for getting in touch! will get back in touch with you
            soon!
          </p>
          <h5>Have a great day !</h5>
        </div>
      ),
    })
    document.getElementById('c_form').reset()
  }
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off' id='c_form'>
        <div className='form_control'>
          <label htmlFor='fullName'>
            Full Name <span className='warning'>*</span>
          </label>
          <input
            type='text'
            name='fullName'
            id='fullName'
            placeholder='John Doe'
            spellCheck='false'
            onChange={(e) => setName(e.target.value)}
          />
          <ValidationError
            prefix='Full Name'
            field='fullName'
            errors={state.errors}
            className='error'
          />
        </div>
        <div className='form_control'>
          <label htmlFor='email'>
            Email <span className='warning'>*</span>
          </label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='hire@gmail.com'
            spellCheck='false'
          />
          <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
            className='error'
          />
        </div>
        <div className='form_control'>
          <label htmlFor='phoneNumber'>
            Phone Number <span className='warning'>*</span>
          </label>
          <input
            id='phoneNumber'
            type='tel'
            name='phoneNumber'
            placeholder='123456789'
            spellCheck='false'
          />
          <ValidationError
            prefix='Phone Number'
            field='phoneNumber'
            errors={state.errors}
            className='error'
          />
        </div>
        <div className='form_control'>
          <label htmlFor='message'>
            Message <span className='warning'>*</span>
          </label>
          <textarea
            id='message'
            name='message'
            placeholder='Congratulations 👏'
            spellCheck='true'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
            className='error'
          />
        </div>
        <button
          type='submit'
          className={state.submitting ? 'hire_btn_disabled' : 'hire_btn'}
          disabled={state.submitting}
        >
          {state.submitting ? (
            <ImSpinner7 className='spinner' />
          ) : (
            <span>
              Hire Me <IoMdPaperPlane className='hire_btn_icon' />
            </span>
          )}
        </button>
      </form>
      {/* <ToastContainer /> */}
    </>
  )
}

export default ContactForm
