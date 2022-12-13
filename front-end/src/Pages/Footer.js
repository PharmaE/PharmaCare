import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./css/Footer.css"

export default function Footer() {
  return (
    <div className="footer">
          <MDBFooter
      bgColor="light"
      className="text-center text-lg-start "
      style={{ width:"100%"}}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href='"https://www.facebook.com/PharmacyU/"'
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a
            href="https://mobile.twitter.com/pharmacare2022"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="https://pharmacare2022.ca/" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a
            href="https://www.instagram.com/pharmacare/?hl=en"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/pharmacare-laboratories/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-sm-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                PharmaCare
              </h6>
              <p>
                Pharmacy is at the heart of what we do. We pride ourselves on
                providing compassionate care to our patients, becoming their
                trusted health partners along their wellness journey.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <a
                  href="http://localhost:3000/contactus"
                  className="text-reset"
                >
                  Therapiya
                </a>
              </p>
              <p>
                <a
                  href="http://localhost:3000/contactus"
                  className="text-reset"
                >
                  Dentistry
                </a>
              </p>
              <p>
                <a
                  href="http://localhost:3000/contactus"
                  className="text-reset"
                >
                  Cardiology
                </a>
              </p>
              <p>
                <a
                  href="http://localhost:3000/contactus"
                  className="text-reset"
                >
                  Pharmocolgy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="http://localhost:3000/home" className="text-reset" >Home</a>
              </p>
              <p>
                <a href="http://localhost:3000/about" className="text-reset">About Us</a>
              </p>
              <p>
                <a href="http://localhost:3000/contactus" className="text-reset">Contact Us</a>
              </p>
              <p>
                <a href="http://localhost:3000/career" className="text-reset">Career</a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-2">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Etobicoke,ON M9C 4W4, CAN
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="mailto:info@practicehealthcheck.ca" className="text-reset">Email</a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 1 234 567 8888
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 1 234 567 8999
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Ajima & Jaspreet
        </a>
      </div>
    </MDBFooter>

    </div>

  );
}
