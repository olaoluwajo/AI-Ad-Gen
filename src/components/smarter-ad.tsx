import Image from "next/image";
import { Tick } from "./icons/icon";

export const SmarterAd = () => {
  return (
    <div>
      <div className="bg-white flex justify-center items-center px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/2">
            <Image
              src="/smarter-ad.svg"
              alt="image"
              className="w-full h-auto object-contain"
              quality={100}
              width={100}
              height={100}
            />
          </div>

          <div className="w-full md:w-1/2 max-w-[600px] flex flex-col gap-5">
            <h3 className="px-6 py-2 rounded-lg bg-[#E8F1FB] w-auto sm:w-fit text-center">
              <p className="text-blue-500">SMARTER ADS, HIGHER ENGAGEMENTS</p>
            </h3>

            <h1 className="font-medium text-[#0F172A] font-manrope text-2xl md:text-4xl  text-center sm:text-start">
              Create, Customize and Publish{" "}
              <span className="text-[#B800B8]">AI-Generated Ads</span> in
              Minutes
            </h1>

            {[
              "Create compelling ads without hiring a team",
              "Generate region-specific ads effortlessly",
              "Launch professional ads at affordable prices",
              "Optimize your Ads for sales and engagements",
            ].map((text, index) => (
              <h5 key={index} className="flex items-center gap-4">
                <span className="bg-[#0F973D] rounded-full size-5  text-center flex items-center justify-center">
                  <Tick />
                </span>
                <p className="text-[#5F5F5F] font-manrope">{text}</p>
              </h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
