import React from 'react';
import './personal-details.css'
class PersnolDetails extends React.Component{
    render()
    {
        return(
           <div className="parent" style={{ }}>

                  <div className="cont-left" style={{ }}>
                      <img src="https://image.flaticon.com/icons/png/512/1077/1077114.png" className="img" style={{}}></img>
                  </div>
                  <div className="cont-right" style={{}}>
  <div className="details" style={{}} ><h1>Name</h1></div>
  <div className="details" style={{}} ><h1>92039402934</h1></div>
  <div className="details" style={{}} ><h1>Pune</h1></div>
  <div className="details" style={{}} ><h1>name.surname@gmail.com</h1></div>
  <div className="details" style={{}} ><h1>Student</h1></div>
  <div className="details" style={{}} ><h1>B.Grp</h1></div>
  <div className="details" style={{}} >
      <h1>Points</h1></div>
                  </div>    


               </div>
           
        );
    }
}
export default PersnolDetails;