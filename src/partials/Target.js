import React from 'react';

function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">How can I help?</h2>
            <br></br>
            <p className="text-lg text-gray-400"> Machine Learning is a powerful tool, but only if the dataset is trained with inclusive and diverse data. Our sample dataset includes over 200 references and we're looking for more.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                <img className="mx-auto md:max-w-none" src={require('../images/features-02-image.png')} width="540" height="520" alt="Features 02" />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <p className="font-architects-daughter text-xl text-teal-600 mb-2" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">Promoting Body Positivity</p>
                  {/* <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-teal-600">.</span> For developers</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-teal-500">.</span> For designers</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>*/}
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-pink-500"></span>An Inclusive Dataset</h4>
                    <p className="text-lg text-gray-400">You can help us ensure the perfect fit by contributing to our training data; this will allow for us to train a diverse and inclusive range of body sizes to make our algorithms even more accurate. All we need a full body photo. This will help make sure we recommend sizes to you and others similar in shape. In return, we'll provide you with a 3D model of yourself, ready to 3D print or animate.</p>
                  </div> 
                  <br></br>
                  <a className="btn-sm text-white bg-teal-600 hover:bg-purple-700 mt-6" href="https://66k0wb09ifj.typeform.com/to/B8c674Jb">
                      <span className="text-sm">Contribute My Measurements</span>
                      <svg className="w-3 h-3 fill-current text-white-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Target;
