import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
//import Medication from "./Components/Medication";
import ReactStars from "react-rating-stars-component";
import "./css/med.css";
import {actFetchProductsRequest,AddCart} from "./actions/index";


function MedicationList() {


  const medicationList = [
    {
      name: "Tablet",
      image:
        "https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/shop/8.png",
      price: "84",
      rating: "4",
      countInStock: 29,
    },

    {
      name: "Chair",
      image:
        "https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/shop/2.png",
      price: "51.52",
      rating: "4",
      countInStock: 35,
    },

    {
      name: "Sanitizer",
      image:
        "https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/shop/4.png",
      price: "67",
      rating: "5",
      countInStock: 200,
    },

    {
      name: "Thermometer",

      image:
        "https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/shop/5.png",

      price: "65",

      rating: "3",

      countInStock: 100,
    },

    {
      name: "Masks",

      image:
        "https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/shop/6.png",

      price: "70.2",

      rating: "4",

      countInStock: 500,
    },

    {
      name: "Microscope",

      image:
        "https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/shop/7.png",

      price: "86",

      rating: "4",

      countInStock: 25,
    },

    {
      name: "Cough Syrup",

      image:
        "https://api.accespharma.ca/storage/products_categories/4sd6aoRENdz3JA6JuPc11ctUT8FpotMAHwcRAN9e.jpeg",

      price: "25",

      rating: "5",

      countInStock: 30,
    },

    {
      name: "Acne Gel",

      image:
        "https://www.shape.com/thmb/ou6jFddc_MamrUaBeQBlJJhNGfc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/drugstore-acne-neutrogena-90b5869e026b414896e61be54824da15.jpg",

      price: "95",

      rating: "5",

      countInStock: 25,
    },

    {
      name: "Ayurvedic",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7aEQBsSNKuBk7PwKmWsjT_nW_TX15SAFYxw&usqp=CAU",

      price: "35",

      rating: "5",

      countInStock: 20,
    },

    {
      name: "oil",

      image:
        "https://cdn.shopify.com/s/files/1/2665/7078/products/TOP_Arnica-Massage-Oil.jpg?v=1654031093",

      price: "65",

      rating: "5",

      countInStock: 20,
    },
  ];

  return (
    <>
      <div className="med">
        {medicationList.map((medicationObj) => {
          return (
            <div>
              <MDBRow className="row-cols-1 row-cols-md-2 g-4 ">
                <MDBCol className="h-25 w-25">
                  <MDBCard>
                    <MDBCardImage
                      src={medicationObj.image}
                      position="top"
                      alt="..."
                    />
                    <MDBCardBody>
                      <MDBCardTitle>{medicationObj.name}</MDBCardTitle>
                      <MDBCardText>${medicationObj.price}</MDBCardText>
                      <MDBCardText>
                        <ReactStars
                          count={5}
                          value={medicationObj.rating}
                          size={34}
                          Color="#ffff00"
                        />{" "}
                        IN Stock: {medicationObj.countInStock}
                      </MDBCardText>
                      <MDBBtn floating tag="a" onClick={()=>this.props.AddCart(medicationObj)}>
                        <i class="fas fa-shopping-basket"></i>
                        <MDBIcon fas icon="comment-alt" />
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </div>
          );
        })}
      </div>
      <div></div>
    </>
  );
}

export default MedicationList;
