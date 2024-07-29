import React from "react";

export default function Testimonials() {
  const data = [
    {
      Name: "MENTORHEAL",
      image:
        "https://media.licdn.com/dms/image/D560BAQFhjiJSAL_-UA/company-logo_200_200/0/1702317855706?e=1730332800&v=beta&t=-iQqH3IRjeM08YYTWTfW_cCtftVhRcVKo_av0xveAKg",
      Para: "we are thoroughly impressed with their development services. The level of professionalism and attention to detail they demonstrated throughout the project was outstanding. Team communicated effectively, met deadlines, and provided valuable insights that significantly enhanced the final outcome",
    },
    {
      Name: "TANJUJA",
      image:
        "https://media.licdn.com/dms/image/D5603AQEUmGZEg9Od5g/profile-displayphoto-shrink_400_400/0/1718220559971?e=1727913600&v=beta&t=oDOOUCSZhJtZWlTclMzywR_uMyynqzit4bCtR4oEzOQ",
      Para: " As a client, I was thoroughly impressed with the website he created for my project.The Team demonstrated exceptional technical skills, creativity, and attention to detail. He communicated clearly and was very responsive throughout the process, making sure all our requirements were met. The final product exceeded our expectations, both in functionality and design",
    },
    {
      Name: "GANESH ANKATH",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFubZeoaaLYVg/profile-displayphoto-shrink_400_400/0/1718223027417?e=1727913600&v=beta&t=XwN6ZmMuSkNptMRu_qNBvmoaxtzGc6-0AqwjDt2vhaU",
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
          <div className="flex flex-col items-center justify-center px-2 gap-14 md:px-3 md:w-2/3 mt-5">
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
                        className="w-14 h-14 rounded-full"
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
