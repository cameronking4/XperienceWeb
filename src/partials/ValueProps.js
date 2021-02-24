import React from 'react';

function ValueProps() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="fade-up">Made For E-commerce Sites</h1>
            <p className="h4 text-teal-600" data-aos="fade-up" data-aos-delay="200">Add our TruFit plugin to your e-commerce platform</p>
          </div>
<br></br>
        <div>
        <div className="pb-12 md:pb-20">
        <img className="mx-auto" src={require('../images/FigmaScreens/Results.png')} width="980" height="auto" alt="Hero" data-aos="fade-up" data-aos-delay="600" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
{/* Section header */}
<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
  <h1 className="h2 mb-4">Increasing conversions and reducing your return costs.</h1>
  <br></br>
  <p className="text-xl text-gray-400">The frustration of <strong>relying on reviews and inaccurate, impersonal size guides </strong> should be a thing of the past.<strong> 48% of U.S. shoppers 'bracket' their online purchases</strong>, meaning they buy multiple versions of an item to try on at home and return back items. This number has increased even more since the start of the pandemic.</p>
</div>

<div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
  {/* 1st item */}
  <div className="py-6 md:py-0 md:px-8">
    <div className="text-4xl font-bold leading-tight tracking-tighter text-teal-600 mb-2" data-aos="fade-up">Save Time</div>
    <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">On transporting and processing returns. Less jobs spent on all stops of the returned item's journey.</div>
  </div>
  {/* 2nd item */}
  <div className="py-6 md:py-0 md:px-8">
    <div className="text-4xl font-bold leading-tight tracking-tighter text-teal-600 mb-2" data-aos="fade-up">Save Money</div>
    <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">On cost of processing returns, paying wages and shipping. Our data will also allow you to optimize your inventory.</div>
  </div>
  {/* 3rd item */}
  <div className="py-6 md:py-0 md:px-8">
    <div className="text-4xl font-bold leading-tight tracking-tighter text-teal-600 mb-2" data-aos="fade-up">Save Waste </div>
    <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Less carbon emissions, packaging, and contributions to climate change.</div>
  </div>
</div>
 {/* <br></br>
<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
  <p className="text-xl text-gray-400">*Sample size of 1200 shoppers. <strong>Source</strong>: <a href="https://www.statista.com/statistics/278890/us-apparel-and-accessories-retail-e-commerce-revenue/">Statistica Datasets</a></p>
</div> */}

</div>
</div>

        </div>
        
        <br></br>
        </div>
    </section>
  );
}

export default ValueProps;