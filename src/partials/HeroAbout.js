import React from 'react';

function HeroAbout() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1533588530325-cce4fceae897?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" width="1440" height="394" alt="About" />
        <div className="absolute inset-0 bg-gray-900 opacity-75" aria-hidden="true"></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4" data-aos="fade-up">About Us</h1>
            <br></br>
            <ul>
            <li> 
              <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">We are building a future where shoppers will be able to use technology to assist their specific fashion needs, while ensuring that their favorite brands are operating and are sourced sustainably. </p> 
            </li>
            {/* <li> 
              <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">The world is quickly changing, and how we shop for clothes is no exception. As more consumers access fashion brands digitally vs traditional brick-and-mortar, a particular problem surrounding fit arises: You have to order the clothes before knowing if/how they fit!</p>
             </li> */}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroAbout;