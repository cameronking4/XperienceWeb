import React from 'react';

function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">News & Articles</h2>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">

              {/* 1st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <a target="_blank" target="_blank" className="block mb-6" href="https://www.redbull.com/us-en/red-bull-basement-xperience-shopping">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://img.redbull.com/images/c_fill,g_auto,w_2060,h_1373/q_auto,f_auto/redbullcom/2020/11/25/mb7nqywudtcp6mwrsr9q/red-bull-basement" width="352" height="198" alt="News 01" />
                    </figure>
                  </a>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-600 hover:bg-teal-700 transition duration-150 ease-in-out" href="#0">Product</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Startup</a>
                      </li>
                      <li className="m-1">
                        <a  className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">CEO</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2">
                    <a target="_blank" className="hover:text-gray-100 transition duration-150 ease-in-out" 
                    href="https://www.redbull.com/us-en/red-bull-basement-xperience-shopping">Red Bull Basement US finalist: Royal Doolittle's Xperience Shopping</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">Representing the US, Royal Doolittle will receive resources and mentorship for developing his visionary idea to make an impact on campus and beyond.</p>
                <footer className="flex items-center mt-4">
                  <a target="_blank" href="https://www.redbull.com/us-en/red-bull-basement-xperience-shopping">
                    <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/news-author-01.jpg')} width="40" height="40" alt="Author 01" />
                  </a>
                  <div className="font-medium">
                    <a target="_blank" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" 
                    href="https://www.redbull.com/us-en/red-bull-basement-xperience-shopping">Redbull (Vivian Tang)</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Dec 01, 2020</span>
                  </div>
                </footer>
              </article>

              {/* 2nd article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a target="_blank" className="block mb-6" href="https://www.bbcearth.com/blog/%3Farticle%3Dyour-brand-new-returns-end-up-in-landfill/">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src= 'https://i.pinimg.com/originals/ed/ef/ca/edefcad7ff5beb1df7ec872844c6cfa7.gif' width="352" height="198" alt="News 02" />
                    </figure>
                  </a>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-150 ease-in-out" href="#0">Landfills</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-600 hover:bg-teal-700 transition duration-150 ease-in-out" href="#0">Returns</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">E-commerce</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2">
                    <a target="_blank" className="hover:text-gray-100 transition duration-150 ease-in-out" href="https://www.bbcearth.com/blog/%3Farticle%3Dyour-brand-new-returns-end-up-in-landfill/"> Your brand new returns end up in landfill</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">So what happens to our apparel when we order online and then return the items? The reality is that much of it simply ends up in landfill. That is, once its been shipped all over the country, or even the globe, a few times.</p>
                <footer className="flex items-center mt-4">
                  <a target="_blank" href="https://www.bbcearth.com/blog/%3Farticle%3Dyour-brand-new-returns-end-up-in-landfill/">
                    <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/news-author-02.jpg')} width="40" height="40" alt="Author 02" />
                  </a>
                  <div className="font-medium">
                    <a target="_blank" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="https://www.bbcearth.com/blog/%3Farticle%3Dyour-brand-new-returns-end-up-in-landfill/"> BBC (Harriet Constable)</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Dec 12, 2017</span>
                  </div>
                </footer>
              </article>

              {/* 3rd article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
                <header>
                  <a target="_blank" className="block mb-6" href="https://brightly.eco/returning-clothes-you-might-as-well-be-getting-paid-to-throw-them-in-a-landfill/">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src='https://cdn.shopify.com/s/files/1/1083/3590/files/landfill.jpg?v=1486256621' width="352" height="198" alt="News 03" />
                    </figure>
                  </a>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-600 hover:bg-teal-700 transition duration-150 ease-in-out" href="#0">Returns</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-500 hover:bg-teal-600 transition duration-150 ease-in-out" href="#0">Landfills</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2">
                    <a target="_blank" className="hover:text-gray-100 transition duration-150 ease-in-out" href="https://brightly.eco/returning-clothes-you-might-as-well-be-getting-paid-to-throw-them-in-a-landfill/"> Returning clothes? You might as well be getting paid to throw them in a landfill</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">Returns have increased in volume by 95% over 5 years. The unfortunate truth is that many returns, clothing or otherwise, are not put back on the market and are incinerated or trashed instead. </p>
                <footer className="flex items-center mt-4">
                  <a target="_blank" href="https://brightly.eco/returning-clothes-you-might-as-well-be-getting-paid-to-throw-them-in-a-landfill/">
                    <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/news-author-03.jpg')} width="40" height="40" alt="Author 03" />
                  </a>
                  <div className="font-medium">
                    <a target="_blank" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="https://brightly.eco/returning-clothes-you-might-as-well-be-getting-paid-to-throw-them-in-a-landfill/"> Brightly.eco (Mirah Alix)</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default News;
