import React from 'react';

function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Consumption & Returns</h1>
            <p className="text-xl text-gray-400"> <strong>48% of U.S. shoppers 'bracket' their online purchases</strong>, meaning they buy multiple versions of an item to try on at home and return back items. This number has increased even more since the start of the pandemic.</p>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-teal-600 mb-2" data-aos="fade-up">89%</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Of shoppers are likely to stay loyal to brand if the first item they ordered fits well</div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-teal-600 mb-2" data-aos="fade-up">72%</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Of shoppers said they use fit predictors and size charts when ordering clothes online</div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-teal-600 mb-2" data-aos="fade-up">45%</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200"> Of shoppers said they won't return to a brand if the clothing they ordered didn’t fit or received the wrong size</div>
            </div>
          </div>
           <br></br>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p className="text-xl text-gray-400">*Sample size of 1200 shoppers. <strong>Source</strong>: <a href="https://www.statista.com/statistics/278890/us-apparel-and-accessories-retail-e-commerce-revenue/">Statistica Datasets</a></p>
          </div>

           <br></br>

           {/* Section header */}
           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Fashion & Retail Economics</h1>
            <p className="text-xl text-gray-400"> <strong>Average return rates vary by category</strong>, but clothing & apparel (including shoes) bought online typically have the highest rates, with 30 to 40% of orders returned.</p>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-teal-600 mb-2" data-aos="fade-down">90 Billion $$</div>
              <div className="text-lg text-gray-400" data-aos="fade-down" data-aos-delay="200">Worth of apparel inventory is returned back to retailers. This loss excludes the cost of free shipping and labels.</div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-teal-600 mb-2" data-aos="fade-down">25%</div>
              <div className="text-lg text-gray-400" data-aos="fade-down" data-aos-delay="200">Of returned items are thrown away by retailers because it is the cheapest available solution.</div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-teal-600 mb-2" data-aos="fade-down">30%</div>
              <div className="text-lg text-gray-400" data-aos="fade-down" data-aos-delay="200"> Of returned items are actually resold, often because retailers have to wait until the next fashion cycle.</div>
            </div>
          </div>
                <br></br>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p className="text-xl text-gray-400"> <strong>Source</strong>: <a href="https://www.cnbc.com/2019/01/10/growing-online-sales-means-more-returns-and-trash-for-landfills.html">CNBC (2019)</a></p>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Stats;