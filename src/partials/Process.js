import React, { useState } from 'react';
import Modal from '../utils/Modal';

function Process() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">How it Works</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200"> Stop wasting Time & Money! Xperience Shopping lets you be confident in what's in your cart.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-teal-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-teal-300" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-teal-100" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">1.</span> No-app Body Scan</h4>
              <p className="text-lg text-gray-400 text-center">Our solution uses advanced computer vision technology to scan your body and give you the measurements that matter the most. Our software has an accuracy within 2-4 cm without ever having to download an app.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="400"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-teal-600" width="64" height="64" rx="32" />
                <g fill="none" fillRule="evenodd">
                  <path className="stroke-current text-teal-300" d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2" strokeWidth="2" strokeLinecap="square" />
                  <path className="stroke-current text-teal-100" strokeWidth="2" strokeLinecap="square" d="M36 32l-4-3-4 3V22h8z" />
                </g>
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">2.</span> Register an Account</h4>
              <p className="text-lg text-gray-400 text-center">Register an account with Xperience to view and edit body dimensions. Your biometric data is secured and can be used on any partner e-commerce store extension. You only have to scan once!</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-teal-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-teal-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-teal-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">3.</span> Get Your TruFit</h4>
              <p className="text-lg text-gray-400 text-center">Using size charts from our partners on each product, we suggest the size that will provide you the perfect fit. Sizes may vary site to site, we've got you covered.</p>
            </div>

          </div>

        </div>
      </div>

        {/* Hero image */}
      <div>
         <br></br><br></br>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-teal-600"  data-aos="fade-up">Xperience Shopping Wins Redbull Startup Challenge!</h2> <br></br>
            <p className=" text-white-400 h4" data-aos="fade-up" data-aos-delay="200">Xperience beat out 3000+ start-up ideas in the U.S. Redbull Basement challenge. Watch the contest-winning video below:</p>
          </div>

            <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="500">
              <img className="mx-auto" src={require('../images/home1.jpg')} width="1080" height="304" alt="Hero" />
              <a className="absolute group" href="#0" onClick={(e) => { e.preventDefault(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path className="fill-current text-teal-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                </svg>
              </a>
            </div>
            
            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/505491512" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>

          </div>
    </section>
  );
}

export default Process;
