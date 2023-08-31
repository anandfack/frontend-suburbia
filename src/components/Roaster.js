import React, { useEffect, useState } from "react";

// import axios
import axios from "../configs/axios";

const Roaster = () => {
  const [roaster, setRoaster] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = process.env.REACT_APP_BASEURL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/landing-page");
        const roasterData = response.data[0].payload.data.roaster;

        setRoaster(roasterData);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="lg:mx-[128px] lg:mb-[150px]">
      <div className="lg:mb-[56.5px]">
        <h1 className="text-secondary lg:text-[22px] lg:font-normal lg:leading-[33px] text-center lg:mb-4">
          Roaster
        </h1>
        <h1 className="text-white font-secondary text-center lg:font-semibold lg:text-[44px] lg:leading-[50.908px]">
          Roaster of Suburbia
        </h1>
      </div>

      <div className="flex gap-7 flex-wrap lg:w-[1300px] w-auto">
        {loading ? (
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
          roaster.map((roaster, index) => {
            return (
              <div
                className="lg:w-[378px] bg-card lg:rounded-[20px] lg:h-[127px]"
                key={index}
              >
                <div className="flex">
                  <img
                    className=" ml-[20px] my-[13.5px] w-[100px] h-[100px] rounded-[7px]"
                    src={`${baseUrl}/${roaster.imageUrl}`}
                    alt=""
                  />
                  <div className="ml-[15px] mt-[17.5px]">
                    <h1 className="font-secondary text-white text-[22px] leading-[25.45px] font-semibold mb-0">
                      {roaster.nameBand}
                    </h1>
                    <h1 className="text-[12px]">
                      {roaster.genre}, {roaster.city}
                    </h1>
                    <div className="flex flex-row gap-[10px] py-[10px]">
                      <button className="bg-secondary border-black text-primary px-[15px] py-[7px] rounded-[7px]">
                        Stream
                      </button>
                      <button className="text-white px-[15px] py-[7px] rounded-[7px] border border-white">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Roaster;
