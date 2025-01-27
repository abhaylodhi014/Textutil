import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ tittle = "set titles", mode, togglegreenMode, toggleMode }) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">{tittle}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div className="d-flex">
              <input className="form-check-input2 mx-2" onClick={togglegreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault2" style={{ backgroundColor: 'green' }} />
            </div>
            <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkmode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Default props using function parameters
Navbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  togglegreenMode: PropTypes.func.isRequired,
  toggleMode: PropTypes.func.isRequired,
};


// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// export default function Navbar(props) {

  
//   return (
//     <div>
//        {/* ye pura bootstrap ka component hai */}
//      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//   <div className="container-fluid">
//     <Link className="navbar-brand" href="/">{props.tittle}</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button> 
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link active" to="/About">About</Link>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="/">Action</a></li>
//             <li><a className="dropdown-item" href="/">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="/">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//      <div className="d-flex">
//      <input className="form-check-input2 mx-2" onClick={props.togglegreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault2" style={{backgroundColor:'green'}}/>
//      {/* <input className="form-check-input2 mx-1" onClick={props.toggleMode} type="radio" role="switch" id="flexSwitchCheckDefault2"/>
//      <input className="form-check-input2 mx-2" onClick={props.toggleMode} type="radio" role="switch" id="flexSwitchCheckDefault2"/> */}
//      </div>
//       <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  

//         {/* bootstrap mai text-light naam ki property thi */}
//   <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//   <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkmode</label>
 

// </div>
//     </div>
//   </div>
  
// </nav>
//     </div>
//   )
// }
// Navbar.prototypes = {
//     tittle:PropTypes.string.isRequired,   //matlab tittle mai hamesha string he ayega   
//     //isrequered mai undefined na rahe kuch na kuch ho 
// }

// Navbar.defaultProps = {
//     tittle: 'set tittles' //iska matlab agar app.jxs se koi tittle nahi aya tu ye show hoga
// }


// //isme jitni bhi class extra hai wo sab bootstrap ke css ki class hai