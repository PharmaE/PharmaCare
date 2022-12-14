import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import './css/ContactUs.css'

export default function ContactUs() {
  return (
    <div className='Contactus'>
    <div className='heading'>
        <h1>Contact US</h1>
    </div>
    <form style={{width:300}}>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' className='input'  />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />


      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block color='light'>
        Send Message
      </MDBBtn>
      <MDBBtn floating color="secondary" className='mx-3'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-3'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-3'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-3'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
    </form>
    </div>

    
  );
}