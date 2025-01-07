import React , {useState} from 'react'

function About(props) {
    // ye code about mai alag se dark mode button ke liye tha 
//  const [myStyle , setMyStyle] = useState({     
//         color: 'black',
//         backgroundColor: 'white'
//  })
//  const [btnText , setbtnText] = useState("Enable Dark Mode");
//    const changestyle = () => {
//     if(myStyle.color === 'black'){
//         setMyStyle({
//             color : 'white',
//             backgroundColor: 'black'
//         })
//         // setbtnText("Enable Light Mode");
//     }
//     else{
//         setMyStyle({
//             color : 'black',
//             backgroundColor: 'white'
//         })
//         // setbtnText("Enable Dark Mode");
//     }
//    }

let myStyle = {
    color : props.mode === "dark"?'white':'black',
    backgroundColor : props.mode === "dark"?'rgb(16, 17, 31)':'white',
    border : '2px solid' ,
    borderColor: 'balck'
}
  return (
    <div className='container'style={myStyle} >
        <h2 className='my-4' >About Us</h2>
                    <div className="accordion"  id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body " style={myStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                </div>
                {/* <div className="darkmode">
                   <button onClick={changestyle} className='btn btn-primary my-1'>{btnText}</button>  
                </div> */}
               
    </div>
  )
}

export default About
