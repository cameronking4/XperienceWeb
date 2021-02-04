import React from 'react';
import Particles from 'react-particles-js';

function PageIllustration() {
  return (

    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 28
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />

    //SNOW PARTICLES
  //   <Particles
  //   params={{
	//     "particles": {
	//         "number": {
	//             "value": 160,
	//             "density": {
	//                 "enable": true
	//             }
	//         },
	//         "size": {
	//             "value": 3,
	//             "random": true,
	//             "anim": {
	//                 "speed": 1,
	//                 "size_min": 0.3
	//             }
	//         },
	//         "line_linked": {
	//             "enable": false
	//         },
	//         "move": {
	//             "random": true,
	//             "speed": 1,
	//             "direction": "bottom",
	//             "out_mode": "out"
	//         }
	//     },
	//     "interactivity": {
	//         "events": {
	//             "onhover": {
	//                 "enable": true,
	//                 "mode": "repulse"
	//             },
	//             "onclick": {
	//                 "enable": true,
	//                 "mode": "repulse"
	//             }
	//         },
	//         "modes": {
	//             "bubble": {
	//                 "distance": 450,
	//                 "duration": 5,
	//                 "size": 0,
	//                 "opacity": 0
	//             },
	//             "repulse": {
	//                 "distance": 400,
	//                 "duration": 7
	//             }
	//         }
	//     }
	// }} />
    
    
  );
}

export default PageIllustration;
