import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import './css/Doc.css'

export default function App() {
  return (
    <div className='doc'>
      <MDBCard className='h-25 w-25' >
      <MDBCardImage src='https://w9r9i7y2.stackpathcdn.com/wp-content/uploads/2020/04/Doctor-2.jpg' position='top' alt='...'/>
      <MDBCardBody>
        <MDBCardTitle>Omari</MDBCardTitle>
        <MDBCardText>
        Obestrics & Gynaecology
        </MDBCardText>
        <MDBBtn href='#'>Chat</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='h-25 w-25' >
      <MDBCardImage src='https://thumbs.dreamstime.com/b/portrait-confident-young-doctor-white-background-smiling-31417037.jpg' position='top' alt='...'/>
      <MDBCardBody >
        <MDBCardTitle>Andrew Wilson</MDBCardTitle>
        <MDBCardText>
          Dermatologists
        </MDBCardText>
        <MDBBtn href='#'>Chat</MDBBtn>
      </MDBCardBody>
  </MDBCard>
  <MDBCard className='h-25 w-25' >
      <MDBCardImage src='https://static.vecteezy.com/system/resources/previews/005/345/386/non_2x/young-female-doctor-with-stethoscope-over-white-background-free-photo.jpg' position='top' alt='...'/>
      <MDBCardBody >
        <MDBCardTitle>Eli Chu</MDBCardTitle>
        <MDBCardText>
        Geriatric Medicine Speciaists
            
        </MDBCardText>
        <MDBBtn href='#'>Chat</MDBBtn>
      </MDBCardBody>
  </MDBCard>    <MDBCard className='h-25 w-25' >
      <MDBCardImage src='https://us.123rf.com/450wm/snowwhiteimages/snowwhiteimages1404/snowwhiteimages140400875/27630826-cheerful-young-indian-female-doctor-against-white-background.jpg?ver=6' position='top' alt='...'/>
      <MDBCardBody >
        <MDBCardTitle>Shrishti</MDBCardTitle>
        <MDBCardText>
        Hematology
        </MDBCardText>
        <MDBBtn href='#'>Chat</MDBBtn>
      </MDBCardBody>
  </MDBCard>    <MDBCard className='h-25 w-25' >
      <MDBCardImage src='https://i.pinimg.com/originals/2a/0e/8c/2a0e8cb609405d9ca87bc81154b9c443.jpg' position='top' alt='...'/>
      <MDBCardBody >
        <MDBCardTitle>Maria</MDBCardTitle>
        <MDBCardText>
          Neurosurgery
        </MDBCardText>
        <MDBBtn href='#'>Chat</MDBBtn>
      </MDBCardBody>
  </MDBCard>    <MDBCard className='h-25 w-25' >
      <MDBCardImage src='https://s3.amazonaws.com/freestock-prod/450/freestock_121149610.jpg' position='top' alt='...'/>
      <MDBCardBody >
        <MDBCardTitle>Emily Gilbert</MDBCardTitle>
        <MDBCardText>
          Pdychiatry
        </MDBCardText>
        <MDBBtn href='#'>Chat</MDBBtn>
      </MDBCardBody>
  </MDBCard>    <MDBCard className='h-25 w-25' >
      <MDBCardImage src='https://st.depositphotos.com/1005586/1284/i/600/depositphotos_12841879-stock-photo-doctor.jpg' position='top' alt='...'/>
      <MDBCardBody >
        <MDBCardTitle>Kathryn Cooper</MDBCardTitle>
        <MDBCardText>
          Ophthalmologists
        </MDBCardText>
        <MDBBtn href='#'>Chat</MDBBtn>
      </MDBCardBody>
  </MDBCard>    <MDBCard className='h-25 w-25' >
      <MDBCardImage src='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-cute-baby-and-doctor-isolated-on-white-background_BC8HOq9WW_SB_PM.jpg' position='top' alt='...'/>
      <MDBCardBody >
        <MDBCardTitle>Bobby Stanley</MDBCardTitle>
        <MDBCardText>
          Pediatricinas
        </MDBCardText>
        <MDBBtn href='#'>Chat</MDBBtn>
      </MDBCardBody>
  </MDBCard>    <MDBCard className='h-25 w-25' >
      <MDBCardImage src='https://www.fsmb.org/siteassets/homepage/female-nurse.jpg' position='top' alt='...'/>
      <MDBCardBody >
        <MDBCardTitle>Mathew Reyes</MDBCardTitle>
        <MDBCardText>
          Geriatric Medicine
        </MDBCardText>
        <MDBBtn href='#'>Chat</MDBBtn>
      </MDBCardBody>
  </MDBCard>
    </div>

  );
}