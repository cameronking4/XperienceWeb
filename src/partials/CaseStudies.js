import React from 'react';

function CaseStudies() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">How big of a problem is returning clothes?</h2>
             <p className="text-xl text-gray-400">Our hypothesis is that consumers will be more content with items they will know will fit and will only return when there's a real issue with the order.</p>
              <li><p className="text-xl text-gray-400">This will result in a wardrobe that not only makes people feel confident but also saves them money. </p></li>
              <li><p className="text-xl text-gray-400">The reduction of return orders will obviously save money & time on jobs, logistics and supplies for ecommerce companies, increase their revenue, and most importantly, produce less waste.</p></li>
          </div>

          {/* Articles */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">

            {/* 1st article */}
            <article className="flex flex-col h-full" data-aos="fade-up">
              <a target="_blank" className="block" href="https://www.shipbob.com/blog/ecommerce-returns/">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://i.guim.co.uk/img/media/836d965bd40186e8a8ad3bb5ea804613e40571b7/0_33_1248_749/master/1248.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=403a343bbe53672be66345fe91b64a69" width="352" height="198" alt="News 10" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none" href="#0">The Facts</figcaption>
                </figure>
              </a>
              <div className="flex-grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a  target="_blank" className="hover:text-gray-100 transition duration-150 ease-in-out" href="https://www.shipbob.com/blog/ecommerce-returns/">Guide to Ecommerce Return Policies in 2020</a>
                </h3>
                <br></br>
                <p className="text-lg text-gray-400 flex-grow">"A customer’s doorstep isn’t always your product’s final destination. With over $369 billion in sales lost to returns last year, online merchants can’t afford not to build a best-in-class ecommerce return policy.</p>
                <div>
                  <a target="_blank" className="btn-sm text-white bg-teal-600 hover:bg-teal-700 mt-6" href="http://www.shipbob.com/wp-content/uploads/2020/01/ShipBob_Returns_Infographic.pdf">
                    <span className="text-sm">Learn more</span>
                    <svg className="w-3 h-3 fill-current text-teal-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 2nd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <a target="_blank" className="block" href="https://www.forbes.com/sites/eshachhabra/2019/02/28/america-has-a-love-for-returns-and-its-becoming-an-environmental-hazard/?sh=6f84760433f9">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://i1.wp.com/occasionalplanet.org/wp-content/uploads/2013/05/landfill3.gif?fit=480%2C233" width="352" height="198" alt="News 11" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none" href="#0">The Facts</figcaption>
                </figure>
              </a>
              <div className="flex-grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a target="_blank" className="hover:text-gray-100 transition duration-150 ease-in-out" href="https://www.forbes.com/sites/eshachhabra/2019/02/28/america-has-a-love-for-returns-and-its-becoming-an-environmental-hazard/?sh=6f84760433f9">America Has A Love For Returns And It's Becoming An Environmental Hazard</a>
                </h3>
                <p className="text-lg text-gray-400 flex-grow">“Complexity begins, particularly if that item was originally purchased online. It may end up on a random shelf in the store, it may never make it back on the floor, or it could simply be tossed.”</p>
                <div>
                  <a target="_blank" className="btn-sm text-white bg-teal-600 hover:bg-teal-700 mt-6" href="https://www.forbes.com/sites/eshachhabra/2019/02/28/america-has-a-love-for-returns-and-its-becoming-an-environmental-hazard/?sh=6f84760433f9">
                    <span className="text-sm">Learn more</span>
                    <svg className="w-3 h-3 fill-current text-teal-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 3rd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <a target="_blank" className="block" href="https://www.thebalancesmb.com/the-high-cost-of-retail-returns-2890350">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://images.unsplash.com/photo-1566037930079-5557545b02a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" width="352" height="198" alt="News 12" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none" href="#0">The Facts</figcaption>
                </figure>
              </a>
              <div className="flex-grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a target="_blank" className="hover:text-gray-100 transition duration-150 ease-in-out" href="https://www.thebalancesmb.com/the-high-cost-of-retail-returns-2890350">The High Cost of Retail Returns</a>
                </h3>
                <br></br>
                <p className="text-lg text-gray-400 flex-grow">"Returns cost us billions not only in lost revenue but also the cost of payroll to handle the return and then the cost of employees to clean up, restock, etc.—costs we often forget to calculate in the equation."</p>
                <div>
                  <a target="_blank" className="btn-sm text-white bg-teal-600 hover:bg-teal-700 mt-6" href="https://www.thebalancesmb.com/the-high-cost-of-retail-returns-2890350">
                    <span className="text-sm">Learn more</span>
                    <svg className="w-3 h-3 fill-current text-teal-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
