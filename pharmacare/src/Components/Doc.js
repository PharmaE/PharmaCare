import React from 'react';
import {Row,Col, Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import './Doc.css';


function Doc(){
    return(
        <div>
        <Row gutter={16}>
        <Col className='gutter-row'>
            <Card hoverable style={{width:240,}}
            cover={<img src='https://w9r9i7y2.stackpathcdn.com/wp-content/uploads/2020/04/Doctor-2.jpg' alt='Doc' height={300}/>}>
                <Meta title="Omari" description="Obestrics & Gynaecology"/>
            </Card>
        </Col>
        <Col className='gutter-row'>
            <Card hoverable style={{width:240,}}
            cover={<img alt='Doc' src='https://thumbs.dreamstime.com/b/portrait-confident-young-doctor-white-background-smiling-31417037.jpg' height={300}/>}>
            <Meta title="Andrew Willson" description="Dermatologists"/>
            </Card>
        </Col>
        <Col className='gutter-row' >
            <Card hoverable style={{width:240,}}
            cover={<img alt='Doc' src='https://static.vecteezy.com/system/resources/previews/005/345/386/non_2x/young-female-doctor-with-stethoscope-over-white-background-free-photo.jpg' height={300}/>}>
                <Meta title="Eli Chu" description="Geriatric Medicine Speciaists"/>
            </Card>
        </Col>
        <Col className='gutter-row' >
            <Card hoverable style={{width:240,}}
            cover={<img alt='Doc' src='https://us.123rf.com/450wm/snowwhiteimages/snowwhiteimages1404/snowwhiteimages140400875/27630826-cheerful-young-indian-female-doctor-against-white-background.jpg?ver=6'height={300}/>}>
                <Meta title="Shrishti" description="Hematology"/>
            </Card>
        </Col>
        <Col className='gutter-row' >
            <Card hoverable style={{width:240,}}
            cover={<img alt='Doc' src='https://i.pinimg.com/originals/2a/0e/8c/2a0e8cb609405d9ca87bc81154b9c443.jpg' height={300}/>}>
                <Meta title="Maria" description="Neurosurgery"/>
            </Card>
        </Col>
        <Col className='gutter-row' >
            <Card hoverable style={{width:240,}}
            cover={<img alt='Doc' src='https://s3.amazonaws.com/freestock-prod/450/freestock_121149610.jpg'height={300}/>}>
                <Meta title="Emily Gilbert" description="Pdychiatry"/>
            </Card>
        </Col>
        <Col className='gutter-row'>
            <Card hoverable style={{width:240,}}
            cover={<img alt='Doc' src='https://st.depositphotos.com/1005586/1284/i/600/depositphotos_12841879-stock-photo-doctor.jpg' height={300}/>}>
                <Meta title="Kathryn Cooper" description="Ophthalmologists"/>
            </Card>
        </Col>
        <Col className='gutter-row' >
            <Card hoverable style={{width:240,}}
            cover={<img alt='Doc' src='https://www.fsmb.org/siteassets/homepage/female-nurse.jpg' height={300}/>}>
                <Meta title="Mathew Reyes" description="Geriatric medicine"/>
            </Card>
        </Col>
        <Col className='gutter-row'>
            <Card hoverable style={{width:240,}}
            cover={<img alt='Doc' src='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-cute-baby-and-doctor-isolated-on-white-background_BC8HOq9WW_SB_PM.jpg' height={300}/>}>
                <Meta title="Bobby Stanley" description="Pediatricians"/>
            </Card>
        </Col>


      </Row>

        </div>

    );
}

export default Doc;