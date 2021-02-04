import React from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/*  Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1" data-aos="fade-up">News & Articles </h1> 
            <h4 className="h4" data-aos="fade-up">Why do what we're doing?</h4> 
          </div>

          {/*  Featured articles */}
          
          <h4 className="h3 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Featured articles</h4>
          <br></br> <br></br>
          <div className="pb-12 md:pb-20">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <Link to="blog-post" className="relative block group" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://img.redbull.com/images/c_fill,g_auto,w_2060,h_1373/q_auto,f_auto/redbullcom/2020/11/25/mb7nqywudtcp6mwrsr9q/red-bull-basement" width="540" height="303" alt="Blog post 01" />
                </figure>
              </Link>
              <div data-aos="fade-left" data-aos-delay="200">
                <header>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-600 hover:bg-teal-700 transition duration-150 ease-in-out">Pitch Competition</Link>
                      </li>
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">CEO</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h3 text-2xl lg:text-3xl mb-2">
                    <a href="/blog-post" className="hover:text-gray-100 transition duration-150 ease-in-out">Red Bull Basement US finalist: Royal Doolittle's Xperience Shopping</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">Representing the US, Royal Doolittle will receive resources and mentorship for developing his visionary idea to make an impact on campus and beyond.</p>
                <footer className="flex items-center mt-4">
                  <div>
                    <a href="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Redbull Basement</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Dec 2020</span>
                  </div>
                </footer>
              </div>
            </article>
          </div>

          
          <div className="pb-12 md:pb-20">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <div data-aos="fade-left" data-aos-delay="200">
                <header>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out">Returns</Link>
                      </li>
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-600 hover:bg-teal-700 transition duration-150 ease-in-out">Environment</Link>
                      </li>
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">Forbes</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h3 text-2xl lg:text-3xl mb-2">
                    <a href="https://www.forbes.com/sites/eshachhabra/2019/02/28/america-has-a-love-for-returns-and-its-becoming-an-environmental-hazard/?sh=6f84760433f9" className="hover:text-gray-100 transition duration-150 ease-in-out">America Has A Love For Returns And It's Becoming An Environmental Hazard</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">The National Retail Foundation expects total returns for 2018 to be about $390 billion in value. The return rate hovered around 10 percent last year. E-commerce return rates are higher than those from brick-and-mortar stores.</p>
                <footer className="flex items-center mt-4">
                  <div>
                    <a href="https://www.forbes.com/sites/eshachhabra/2019/02/28/america-has-a-love-for-returns-and-its-becoming-an-environmental-hazard/?sh=6f84760433f9" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Forbes</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Feb 2019</span>
                  </div>
                </footer>
              </div>
              <a href="https://www.forbes.com/sites/eshachhabra/2019/02/28/america-has-a-love-for-returns-and-its-becoming-an-environmental-hazard/?sh=6f84760433f9" className="relative block group" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Feshachhabra%2Ffiles%2F2019%2F02%2F15873406_1171098929634357_2143761506790178096_n.jpg" width="540" height="303" alt="Blog post 01" />
                </figure>
              </a>
            </article>
          </div>



          <div className="pb-12 md:pb-20">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <a href="https://www.forbes.com/sites/andrewbusby/2019/11/22/returns-an-epidemic-which-the-fashion-industry-is-choosing-to-ignore/?sh=4a76408f7363" className="relative block group" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://specials-images.forbesimg.com/imageserve/40996709/960x0.jpg?fit=scale" width="540" height="303" alt="Blog post 01" />
                </figure>
              </a>
              <div data-aos="fade-left" data-aos-delay="200">
                <header>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out">Returns</Link>
                      </li>
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-pink-600 hover:bg-pink-700 transition duration-150 ease-in-out">Environment</Link>
                      </li>
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">Forbes</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h3 text-2xl lg:text-3xl mb-2">
                    <a href="https://www.forbes.com/sites/andrewbusby/2019/11/22/returns-an-epidemic-which-the-fashion-industry-is-choosing-to-ignore/?sh=4a76408f7363" className="hover:text-gray-100 transition duration-150 ease-in-out">Returns, An Epidemic Which The Fashion Industry Is Choosing To Ignore</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">It seems that the entire industry is befuddled by returns, caught in a catatonic state, convincing itself that having a great returns policy somehow constitutes great customer service.</p>
                <footer className="flex items-center mt-4">
                  <div>
                    <a href="https://www.forbes.com/sites/andrewbusby/2019/11/22/returns-an-epidemic-which-the-fashion-industry-is-choosing-to-ignore/?sh=4a76408f7363" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Forbes</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Nov 2019</span>
                  </div>
                </footer>
              </div>
            </article>
          </div>


          <div className="pb-12 md:pb-20">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <div data-aos="fade-left" data-aos-delay="200">
                <header>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                    <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out">Returns</Link>
                      </li>
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-600 hover:bg-teal-700 transition duration-150 ease-in-out">Environment</Link>
                      </li>
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">Forbes</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h3 text-2xl lg:text-3xl mb-2">
                    <a href="https://www.forbes.com/sites/lauraheller/2017/12/28/the-dark-side-of-christmas-5b-pounds-of-returned-gifts-get-thrown-away/?sh=74843be410ad" className="hover:text-gray-100 transition duration-150 ease-in-out">The Dark Side Of Christmas: 5B Pounds Of Returned Goods Thrown Away Annually</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">For those who believe online shopping is a more environmentally friendly way to buy stuff may be in for a rude awakening: nearly 5 billion pounds of retail returns will end up in landfills.</p>
                <footer className="flex items-center mt-4">
                  <div>
                    <a href="https://www.forbes.com/sites/lauraheller/2017/12/28/the-dark-side-of-christmas-5b-pounds-of-returned-gifts-get-thrown-away/?sh=74843be410ad" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Forbes</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Dec 2017</span>
                  </div>
                </footer>
              </div>
              <a href="https://www.forbes.com/sites/lauraheller/2017/12/28/the-dark-side-of-christmas-5b-pounds-of-returned-gifts-get-thrown-away/?sh=74843be410ad" className="relative block group" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F3c981baaca544b56973cb33306d94c93%2F960x0.jpg%3Ffit%3Dscale" width="540" height="303" alt="Blog post 01" />
                </figure>
              </a>
            </article>
          </div>

          {/*  Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">

            {/*  Section title */}
            <h4 className="h3 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Latest articles</h4>

            {/*  Articles container */}
            <div className="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">


         {/*  1st article */}
          <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a href="https://www.cnbc.com/2019/01/10/growing-online-sales-means-more-returns-and-trash-for-landfills.html" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://image.cnbcfm.com/api/v1/image/105673556-1547225840709img_2009.jpg?v=1547477714&w=740&h=416" width="352" height="198" alt="News 03" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://www.cnbc.com/2019/01/10/growing-online-sales-means-more-returns-and-trash-for-landfills.html" className="hover:text-gray-100 transition duration-150 ease-in-out">That sweater you don’t like is a trillion-dollar problem for retailers</a>
                  </h3>
                </header>
              </article>


          {/*  2nd article */}
          <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                <header>
                  <a href="https://knowledge.wharton.upenn.edu/article/high-cost-of-returns-should-retailers-rethink-policies/" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://knowledge.wharton.upenn.edu/wp-content/uploads/2020/06/Product-returns.jpg" width="352" height="198" alt="News 02" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://knowledge.wharton.upenn.edu/article/high-cost-of-returns-should-retailers-rethink-policies/" className="hover:text-gray-100 transition duration-150 ease-in-out">Should Retailers Rethink Their Policies?</a>
                  </h3>
                </header>
              </article>

              {/*  3rd article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <a href="https://www.thebalancesmb.com/the-high-cost-of-retail-returns-2890350" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://www.thebalancesmb.com/thmb/c97_zTrrF2RNP84VWpvG57Zerls=/300x200/filters:no_upscale():max_bytes(150000):strip_icc():saturation(0.2):brightness(10):contrast(5):format(webp)/GettyImages-956747378-5c847f2fc9e77c0001422f47.jpg" width="352" height="198" alt="News 01" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://www.thebalancesmb.com/the-high-cost-of-retail-returns-2890350" className="hover:text-gray-100 transition duration-150 ease-in-out">The High Cost of Retail Returns</a>
                  </h3>
                </header>
              </article>



              {/*  4th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a href="https://www.trustedclothes.com/blog/2016/09/05/fast-fashion-landfills/" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://www.trustedclothes.com/blog/wp-content/uploads/2016/09/clothing-landfills.jpg" width="352" height="198" alt="News 06" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://www.trustedclothes.com/blog/2016/09/05/fast-fashion-landfills/" className="hover:text-gray-100 transition duration-150 ease-in-out">Fast fashion is downing the world and sending 26 Billion Pounds of Reusable Textiles to the Landfill Every Year</a>
                  </h3>
                </header>
              </article>
            

              {/*  5th article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <a href="https://www.retaildive.com/news/consumers-common-return-reason-wrong-color-size-or-fit/569328/" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://www.retaildive.com/user_media/cache/f7/5b/f75ba21c7c88d67c59e04af5e803a2c4.jpg" width="352" height="198" alt="News 04" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://www.retaildive.com/news/consumers-common-return-reason-wrong-color-size-or-fit/569328/" className="hover:text-gray-100 transition duration-150 ease-in-out">Consumers' common return reason? Wrong color, size or fit</a>
                  </h3>
                </header>
              </article>

            

              {/*  6th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                <header>
                  <a href="https://wtvox.com/fashion/fashion-waste/" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://wtvox.com/wp-content/uploads/2020/07/fashion-waste-wtvox000.jpg" width="352" height="198" alt="News 05" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://wtvox.com/fashion/fashion-waste/" className="hover:text-gray-100 transition duration-150 ease-in-out">Fashion Waste Is Rubbish – Yes, But This Is Not The Issue</a>
                  </h3>
                </header>
              </article>

           

              {/*  7th article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <a href="https://www.groundsure.com/resources/fast-fashion-and-landfills/" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://www.groundsure.com/wp-content/uploads/2019/01/shutterstock_21143044.jpg" width="352" height="198" alt="News 07" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://www.groundsure.com/resources/fast-fashion-and-landfills/" className="hover:text-gray-100 transition duration-150 ease-in-out">Fast fashion and landfills</a>
                  </h3>
                </header>
              </article>

              {/*  8th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                <header>
                  <a href="https://www.cbc.ca/radio/thecurrent/the-current-for-dec-12-2019-1.5393783/it-s-pretty-staggering-returned-online-purchases-often-sent-to-landfill-journalist-s-research-reveals-1.5393806" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://i.cbc.ca/1.4866130.1539778394!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/winter-coats.jpg" width="352" height="198" alt="News 08" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://www.cbc.ca/radio/thecurrent/the-current-for-dec-12-2019-1.5393783/it-s-pretty-staggering-returned-online-purchases-often-sent-to-landfill-journalist-s-research-reveals-1.5393806" className="hover:text-gray-100 transition duration-150 ease-in-out">Returned online purchases often sent to landfill</a>
                  </h3>
                </header>
              </article>
        
              {/*  9th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a href="https://www.npr.org/2019/12/29/792146756/report-many-returned-products-thrown-out-instead-of-resold" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://media.npr.org/chrome_svg/npr-logo.svg" width="352" height="198" alt="News 09" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://www.npr.org/2019/12/29/792146756/report-many-returned-products-thrown-out-instead-of-resold" className="hover:text-gray-100 transition duration-150 ease-in-out">Report: Many Returned Products Thrown Out Instead Of Resold</a>
                  </h3>
                </header>
              </article>

              {/*  10th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a href="https://brightly.eco/returning-clothes-you-might-as-well-be-getting-paid-to-throw-them-in-a-landfill/" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/images/methode/2018/12/29/bec160dc-09b7-11e9-8e9f-24e0f03e43a7_image_hires_132035.JPG?itok=J-WXbtwl&v=1546060847" width="352" height="198" alt="News 09" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href= "https://brightly.eco/returning-clothes-you-might-as-well-be-getting-paid-to-throw-them-in-a-landfill/" className="hover:text-gray-100 transition duration-150 ease-in-out">Returning clothes? You might as well be getting paid to throw them in a landfill.</a>
                  </h3>
                </header>
              </article>

              {/*  11th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a href="https://www.bizjournals.com/bizwomen/news/latest-news/2018/12/half-of-shoppers-expect-to-return-clothes-bought.html?page=all" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://media.bizj.us/view/img/11155566/gettyimages-879598534*800xx4966-2793-0-387.jpg" width="352" height="198" alt="News 09" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://www.bizjournals.com/bizwomen/news/latest-news/2018/12/half-of-shoppers-expect-to-return-clothes-bought.html?page=all" className="hover:text-gray-100 transition duration-150 ease-in-out">Half of shoppers expect to return clothes bought online</a>
                  </h3>
                </header>
              </article>

              {/*  12th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a href="https://blog.addi.fit/ecommerce-returns-management#:~:text=Companies%20that%20offer%20free%20returns,return%20items%20are%20regular%20customers" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://res.cloudinary.com/ddellecase1/image/upload/v1559077901/Addi.fit/ecommerce-returns-management/blog.addi.fit_110_The-real-impact-of-eCommerce-returns-management_kv3yg9.jpg" width="352" height="198" alt="News 09" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://blog.addi.fit/ecommerce-returns-management#:~:text=Companies%20that%20offer%20free%20returns,return%20items%20are%20regular%20customers" className="hover:text-gray-100 transition duration-150 ease-in-out">The real impact of eCommerce returns management</a>
                  </h3>
                </header>
              </article>

              {/*  13th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a href="https://ecologyst.com/blogs/field-notes/clothing-can-be-recycled-average-victorian-discards-46-lbs-per-year-to-the-landfill" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://cdn.shopify.com/s/files/1/1083/3590/files/landfill.jpg?v=1486256621" width="352" height="198" alt="News 09" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://ecologyst.com/blogs/field-notes/clothing-can-be-recycled-average-victorian-discards-46-lbs-per-year-to-the-landfill" className="hover:text-gray-100 transition duration-150 ease-in-out">Alternatives to the Landfill For Used Clothing</a>
                  </h3>
                </header>
              </article>

              {/*  14th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a href="https://www.theguardian.com/fashion/2017/dec/06/landfill-becomes-the-latest-fashion-victim-in-australias-throwaway-clothes-culture" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://i.guim.co.uk/img/media/b96fba1cf27f712298e3e6c86bd14cd47fd0083a/531_4_3173_1904/master/3173.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=7a86d4f2354ab98688f7d66515a7475e" width="352" height="198" alt="News 09" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://www.theguardian.com/fashion/2017/dec/06/landfill-becomes-the-latest-fashion-victim-in-australias-throwaway-clothes-culture" className="hover:text-gray-100 transition duration-150 ease-in-out">Landfill becomes the latest fashion victim in Australia's throwaway clothes culture</a>
                  </h3>
                </header>
              </article>

              {/*  15th article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a href="https://money.cnn.com/2017/12/26/news/retail-returns-landfill/index.html" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://i.cdn.turner.com/money/.element/cnnm-3.0/img/logo/cnnmoney_blue.svg" width="352" height="198" alt="News 09" />
                    </figure>
                  </a>
                  <h3 className="h5 mb-2">
                    <a href="https://money.cnn.com/2017/12/26/news/retail-returns-landfill/index.html" className="hover:text-gray-100 transition duration-150 ease-in-out">There's a good chance your holiday returns will end up in a landfill</a>
                  </h3>
                </header>
              </article>

            </div>

          </div>

          {/*  Pagination 
          <nav className="flex justify-center pt-16" role="navigation" aria-label="Pagination Navigation">
            <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
              <li className="m-1">
                <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">Prev</span>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-teal-600 transition-colors duration-150 ease-in-out">1</a>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-teal-600 transition-colors duration-150 ease-in-out">2</a>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-teal-600 transition-colors duration-150 ease-in-out">3</a>
              </li>
              <li className="m-1">
                <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">...</span>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-teal-600 transition-colors duration-150 ease-in-out">12</a>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-teal-600 transition-colors duration-150 ease-in-out">Next</a>
              </li>
            </ul>
          </nav> */}

        </div>
      </div>
    </section>
  );
}

export default BlogList;