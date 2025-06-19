import React from "react";

export default function Testimonials() {
  const data = [
    {
      Name: "MENTORHEAL",
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQFhjiJSAL_-UA/company-logo_100_100/company-logo_100_100/0/1702317855706?e=1755734400&v=beta&t=yGBLMX4CeH_tQ_o0hh2nHzJmT__Idm4zJSK_Vzi9_NY",
      Para: "we are thoroughly impressed with their development services. The level of professionalism and attention to detail they demonstrated throughout the project was outstanding. Team communicated effectively, met deadlines, and provided valuable insights that significantly enhanced the final outcome",
    },
        {
      Name: "VARUN SANDESH",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQG4IJ92RrkYcg/profile-displayphoto-shrink_100_100/B56ZQ2RI2EH0AU-/0/1736077252493?e=1755734400&v=beta&t=-bAmE_xVDwCPnScF_wc99u8hdU8wM9jG4e4Ii_4wKw0",
      Para: "The team demonstrated a strong command over programming and showed deep expertise in web development. Their technical skills and attention to detail stood out throughout the project.",
    },
    {
      Name: "TANJUJA",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEUmGZEg9Od5g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718222541684?e=1755734400&v=beta&t=8aeqTU619cBf6jLYf2VJpiskD0yp_mrovP9wCPWAe8Y",
      Para: " As a client, I was thoroughly impressed with the website he created for my project.The Team demonstrated exceptional technical skills, creativity, and attention to detail. He communicated clearly and was very responsive throughout the process, making sure all our requirements were met. The final product exceeded our expectations, both in functionality and design",
    },
    {
      Name: "GANESH ANKATH",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFO3ci1vJmo6g/profile-displayphoto-shrink_200_200/B4DZaFm3F4G0AY-/0/1745998281158?e=1755734400&v=beta&t=U_cApq2yPGBIfKTFokjv9X-Grnhyou9VQhogaQbTXk8",
      Para: "You've done really amazing work! It's very amazing how much imagination and quality you put into every project. Continue your fantastic effort!",
    },
  ];

  return (
    <>
      <div className="relative pt-32">
        <div className="items-start mx-auto md:flex max-w-7xl">
          <div className="px-6 text-white lg:sticky top-24 ">
            <h1 className="text-2xl font-bold md:text-5xl md:max-w-lg">
              Testimonials
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center px-2 mt-5 gap-14 md:px-3 md:w-2/3">
            {data.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    className="bg-[#272727] text-white max-w-xl rounded-xl shadow-lg p-8 sticky "
                    style={{ top: `${i * 5 + 10}%` }}
                  >
                    <div className="space-y-3">
                      <img
                        src={item.image}
                        alt=""
                        className="rounded-full w-14 h-14"
                      />
                      <h1 className="text-lg font-bold">{item.Name}</h1>
                      <p className="leading-7">{item.Para}</p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
