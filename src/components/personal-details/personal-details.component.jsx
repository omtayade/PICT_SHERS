import React from 'react';
class PersnolDetails extends React.Component{
    render()
    {
        return(
           <div className="parent" style={{ width:"800px",
                                            margin:  "auto",
                                            height: "50%",
                                            backgroundColor: "#868c89",
                                            padding: "50px",
                                            borderRadius: "25px",
                                            flexWrap:"wrap", 
                                            display:"flex"}}>

                  <div className="cont-left" style={{ display: "block",
                                                      border: "#000000",
                                                      margin: "auto",
                                                      width:"320px",
                                                      backgroundColor: "#c1c2bf", 
                                                      marginLeft: "70px",
                                                      borderRadius: "25px"}}>
                      <img src="https://image.flaticon.com/icons/png/512/1077/1077114.png" className="img" style={{ width: "140px", padding: "80px 80px"}}></img>
                  </div>
                  <div className="cont-right" style={{border: "#000000",
  display: "block",
  margin:"auto" ,
  width:"320px",
  backgroundColor: "#c1c2bf",
  padding: "10px",
  borderRadius: "25px"
  }}>
                       <div className="details" style={{backgroundColor: "#e7e7e7",
  marginBottom: "10px",
  padding: "3px",
  width:"250px",
  height:"25px",
  borderRadius: "25px"}} ></div>
  <div className="details" style={{backgroundColor: "#e7e7e7",
  marginBottom: "10px",
  padding: "3px",
  width:"250px",
  height:"25px",
  borderRadius: "25px"}} ></div>
  <div className="details" style={{backgroundColor: "#e7e7e7",
  marginBottom: "10px",
  padding: "3px",
  width:"250px",
  height:"25px",
  borderRadius: "25px"}} ></div>
  <div className="details" style={{backgroundColor: "#e7e7e7",
  marginBottom: "10px",
  padding: "3px",
  width:"250px",
  height:"25px",
  borderRadius: "25px"}} ></div>
  <div className="details" style={{backgroundColor: "#e7e7e7",
  marginBottom: "10px",
  padding: "3px",
  width:"250px",
  height:"25px",
  borderRadius: "25px"}} ></div>
  <div className="details" style={{backgroundColor: "#e7e7e7",
  marginBottom: "10px",
  padding: "3px",
  width:"250px",
  height:"25px",
  borderRadius: "25px"}} ></div>
  <div className="details" style={{backgroundColor: "#e7e7e7",
  marginBottom: "10px",
  padding: "3px",
  width:"250px",
  height:"25px",
  borderRadius: "25px"}} ><h1>om</h1></div>
                  </div>    


               </div>
           
        );
    }
}
export default PersnolDetails;