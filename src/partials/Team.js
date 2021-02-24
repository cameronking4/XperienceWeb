import React from 'react';

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our team</h2>
            <p className="text-xl text-gray-400">We're young & motivated! <br></br> Working together to bring Xperience Shopping to life.</p>
          </div>

          {/* Team members */}
          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src="https://media-exp1.licdn.com/dms/image/C4E03AQGnZUD1jlJ9hQ/profile-displayphoto-shrink_400_400/0/1593364294928?e=1619049600&v=beta&t=pgcxZUitTIsI1uw3SNdY19TdSpGg6wi45Qq88txSUvw" width="120" height="120" alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Royal Dollittle</h4>
                <div className="text-gray-500 mb-1">CEO & Founder</div>
                <a className="block text-teal-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/royaldoolittle/">@royaldoolittle</a>
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src="https://media-exp1.licdn.com/dms/image/C4D03AQHmGrZPCmBbkw/profile-displayphoto-shrink_400_400/0/1578889436131?e=1619049600&v=beta&t=1EdGubsLdfdYLBMXlwUOCW-jxcf2KgjW9VdAq9BdDSA" width="120" height="120" alt="Team member 02" />
                <h4 className="text-xl font-medium mb-1">Cole Gleichenhaus</h4>
                <div className="text-gray-500 mb-1">Business Development</div>
                <a className="block text-teal-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/cole-gleichenhaus-a56a2b185/">@cole_glein</a>
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src="https://media-exp1.licdn.com/dms/image/C4D03AQGASHJyy88FVA/profile-displayphoto-shrink_400_400/0/1559596785210?e=1619049600&v=beta&t=I_Ep5331IyFVBws8TX-2FWuesvbZ1ler2EkIbjFPbZc" width="120" height="120" alt="Team member 03" />
                <h4 className="text-xl font-medium mb-1">Adam Caplan</h4>
                <div className="text-gray-500 mb-1">Finance & Co-Founder</div>
                <a className="block text-teal-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/adam-caplan-b367ab12b/">@adamjcap</a>
              </div>
            </div>

            {/* 4th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src="https://media-exp1.licdn.com/dms/image/C5603AQE8lsbNGzBmgg/profile-displayphoto-shrink_100_100/0/1600913239201?e=1619049600&v=beta&t=1GiGO00vDOh1oysKHKcmL2YNyeyl4HEyaU_dkRvJTG0" width="120" height="120" alt="Team member 04" />
                <h4 className="text-xl font-medium mb-1">Cameron King</h4>
                <div className="text-gray-500 mb-1">Product & Co-Founder</div>
                <a className="block text-teal-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/cameronyking/">@cameronyking</a>
              </div>
            </div>

            {/* 5th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-05.jpg')} width="120" height="120" alt="Team member 05" />
                <h4 className="text-xl font-medium mb-1">Dominik Prasad</h4>
                <div className="text-gray-500 mb-1">Backend Lead</div>
                <a className="block text-teal-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@dominikprasad</a>
              </div>
            </div> */}

            {/* 6th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-06.jpg')} width="120" height="120" alt="Team member 06" />
                <h4 className="text-xl font-medium mb-1">Darya Semenova</h4>
                <div className="text-gray-500 mb-1">Backend Developer</div>
                <a className="block text-teal-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@daryamagic</a>
              </div>
            </div> */}

            {/* 7th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-07.jpg')} width="120" height="120" alt="Team member 07" />
                <h4 className="text-xl font-medium mb-1">Quentin Renvoye</h4>
                <div className="text-gray-500 mb-1">Product Designer</div>
                <a className="block text-teal-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@quentinrenvoye</a>
              </div>
            </div> */}

            {/* 8th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-08.jpg')} width="120" height="120" alt="Team member 08" />
                <h4 className="text-xl font-medium mb-1">Alyssa Chuzeville</h4>
                <div className="text-gray-500 mb-1">Community Lead</div>
                <a className="block text-teal-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@hello_chuzeville</a>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;