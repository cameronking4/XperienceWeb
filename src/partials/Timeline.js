import React from 'react';

function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Timeline</h2>
            <p className="text-xl text-gray-400">We are building a future where shoppers will be able to use technology to assist their specific fashion needs, while ensuring that their favorite brands are operating and are sourced sustainably. </p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-teal-600 mb-2">The seed</div>
                <div className="flex items-center mb-3">
                  <div className="absolute right-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">March 2020</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-teal-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">The Idea Is Born</h4>
                </div>
                <p className="text-lg text-gray-400">Few things were certain during Spring 2020 as COVID-19 swept the world. Using the lockdown to the fullest extent possible, Royal Doolittle realized that society would push to a more digital world, causing shifts in traditional industries like fashion. While online e-commerce is awesome, Royal found that the return rate for online purchased clothing to be alarmingly high, costing major retailers billions of dollars annually. </p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-teal-600 mb-2">Small Beginnings</div>
                <div className="flex items-center mb-3">
                  <div className="absolute right-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Summer 2020</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-teal-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Welcome to Xperience Shopping!</h4>
                </div>
                <p className="text-lg text-gray-400">Xperience Shopping is created and the first instance of our website is uploaded on the web. Throughout this period, the team meets with consultant experts to gain critical knowledge. Small-scale surveys and user interviews are performed to gain data-driven insights on the product-market fit. </p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-teal-600 mb-2">First Taste of Success</div>
                <div className="flex items-center mb-3">
                  <div className="absolute right-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Fall 2020</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-teal-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Royal wins the USA <br></br> Red Bull Basement Challenge</h4>
                </div>
                <p className="text-lg text-gray-400">Out of 3,000+ entrepreneurial ideas from top universities, Xperience Shopping is crowned champion by a panel of business professionals and the general public.  The company begins to network with successful founders and venture capital managers to further develop skills needed for success. With plenty of Red Bulls on deck, a massive amount of research went into the technical features of the product.</p>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-teal-600 mb-2">All Aboard!</div>
                <div className="flex items-center mb-3">
                  <div className="absolute right-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Winter 2020</div>
                  <div className="absolute left-0 w-2 h-2 bg-teal-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">The Xperience Team expands</h4>
                </div>
                <p className="text-lg text-gray-400">Two new co-founders join Royal on the executive team. Cameron King (PM at Microsoft Azure) is recruited as the Chief Product Officer to bring the product to life, while Adam Caplan (IB at Morgan Stanley) is brought in as Chief Financial Officer to ensure our work is presented like a Fortune 500 company. </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;