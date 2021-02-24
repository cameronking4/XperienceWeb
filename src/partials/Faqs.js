import React from 'react';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 lg:border-0 lg:pt-0">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2">Frequently asked questions</h2>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:col-gap-16 lg:row-gap-12">
            <li>
              <h4 className="text-xl font-medium mb-2">How does Xperience save me money?</h4>
              <p className="text-lg text-gray-400">Returns depends largely on the type of customer: there's the customer who only buys an item if they are almost 100% certain that it suits their needs and seems to be perfectly in line with their expectations, while on the other end of the spectrum, there's the customer who orders numerous sizes of the same product (or different versions) before returning unwanted items and only keeps one item at the end of the process. <br></br> <br></br> Our solution helps the first persona be more confident in adding more items to their cart, while helping the second persona from ordering items that they know they'll return. This increases your conversions and saves you money on shipping and returns in the long run.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How does the plugin work on my site?</h4>
              <p className="text-lg text-gray-400">First, sign up for a free trial. We will onboard you and meet to get your requirements and understand the scope of your customers. We will provide you the web plugin to add to your site. It will work with our database and backend to create 3D objects of your customer. <br></br><br></br> After your business is registered, we will provide you credentials to use in our Admin Portal. Using the admin panel, you can add your size guide and we will handle the recommendations presented on the front-end.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Can I get a license to use internally?</h4>
              <p className="text-lg text-gray-400">Yes. If you'd like to use our software but store the 3D objects and user data internally, we can provide you a white-label api service and platform/infrastructure to do so without having the Xperience logo associated.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How does Xperience optimize my inventory?</h4>
              <p className="text-lg text-gray-400">As we gain more insights into the customers using the plug-in, we can provide analytics to manufacture and store the right quanitity and sizes of items. This will drive down your inventory cost and have less items held on the shelf.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How does this help offset my environmental impact?</h4>
              <p className="text-lg text-gray-400">Less returns means less waste overall. Imagine less transportation, less paper waste, less shipping, less wages for processing returns and less unused clothing.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How long does the process and setup take?</h4>
              <p className="text-lg text-gray-400">The installation for the plug-in will depend on your development team and will require data entry of your inventory into our admin panel. Alternatively, we can set up the process for you within 5-7 business days.</p>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default Faqs;
