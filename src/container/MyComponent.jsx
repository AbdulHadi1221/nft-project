import * as React from "react";
export const Header = () => {
  return (
    <div className="main">
      <nav className="nav-main">
        <div className="left-main">
          <div className="left-inner">
            <div className="logo">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9a19adb028573264ef954d3c895057370a9991a46f25f3e3b73f9bf7c71a54?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
                alt="Logo"
                className="shrink-0 my-auto aspect-[4.76] w-[84px]"
              />
            </div>
            <div className="search">
              <div className="search-icon">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a55f48bd0c4a6466266f03c9909b8b16908cc361b9fc9ec70acd4a7841cce8f4?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
                  alt="Search icon"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>
              <div className="search-bar">
                <input className="search-bar-input" type="text" placeholder="Search items, collections..." />
              </div>
            </div>
          </div>
        </div>
        <div className="Right-main">
          <div className="Right-inner">
            <div className="href">
              <a href="#">Home</a> <a href="#">Explore</a>{" "}
              <a href="#">Profile</a>
              <a href="#">Create</a>
            </div>
            <div className="wallet-main">
              <div className="profile-icon">
              <img
              style={{width:"20px"}}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b4f8a67faec6f778b6a7794aa7fccf185187333b280c1ad53aa3d86f6c377ed?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
              alt="Wallet icon"
              // className="shrink-0 my-auto w-5 aspect-square"
            />
              </div>
              <div className="connect-wallet">
              <button className="">
               My Wallet
             </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    // <div className="flex flex-col items-center pt-6 bg-zinc-900">
    //   <div className="flex gap-5 justify-between w-full text-lg max-w-[1360px] max-md:flex-wrap max-md:max-w-full">
    //     <div className="flex gap-5 text-white leading-[153%] max-md:flex-wrap max-md:max-w-full">
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9a19adb028573264ef954d3c895057370a9991a46f25f3e3b73f9bf7c71a54?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
    //         alt="Logo"
    //         className="shrink-0 my-auto aspect-[4.76] w-[84px]"
    //       />
    //       <div className="flex flex-auto gap-3 px-4 py-2.5 bg-zinc-800 rounded-[30px]">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/a55f48bd0c4a6466266f03c9909b8b16908cc361b9fc9ec70acd4a7841cce8f4?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
    //           alt="Search icon"
    //           className="shrink-0 w-5 aspect-square"
    //         />
    //         <div className="flex-auto my-auto">
    //           Search items, collections...
    //         </div>
    //       </div>
    //     </div>
    //     <nav className="flex gap-5 font-medium max-md:flex-wrap max-md:max-w-full">
    //       <div className="flex flex-auto gap-5 justify-between px-5 my-auto text-white whitespace-nowrap">
    //         <a href="#">Home</a> <a href="#">Explore</a> <a href="#">Profile</a>
    //         <a href="#">Create</a>
    //       </div>
    //       <div className="flex gap-5 justify-between text-cyan-400">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b4f8a67faec6f778b6a7794aa7fccf185187333b280c1ad53aa3d86f6c377ed?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
    //           alt="Wallet icon"
    //           className="shrink-0 my-auto w-5 aspect-square"
    //         />
    //         <button className="justify-center px-4 py-3.5 rounded-xl border-2 border-cyan-800 border-solid">
    //           My Wallet
    //         </button>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
  );
};
export const SummaryStep = ({ active }) => {
  return (
    <div
      className={`self-stretch my-auto ${
        active ? "text-cyan-400" : "text-gray-500"
      }`}
    >
      Summary
    </div>
  );
};
export const ConfirmStep = ({ active }) => {
  return (
    <>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d6efd943508171137bb8f4b33485233f38e39063b722a3a272d1e0eaaf4f4f3?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
        alt=""
        className="shrink-0 self-stretch w-5 aspect-square"
      />
      <div
        className={`self-stretch my-auto ${
          active ? "text-cyan-400" : "text-gray-500"
        }`}
      >
        Confirm
      </div>
    </>
  );
};
export const CompleteStep = ({ active }) => {
  return (
    <>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d6efd943508171137bb8f4b33485233f38e39063b722a3a272d1e0eaaf4f4f3?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
        alt=""
        className="shrink-0 self-stretch w-5 aspect-square"
      />
      <div
        className={`flex-auto self-stretch my-auto ${
          active ? "text-cyan-400" : "text-gray-500"
        }`}
      >
        Complete
      </div>
    </>
  );
};
export const ProductSummary = () => {
  return (
    <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow p-4 mx-auto w-full rounded-2xl border-2 border-cyan-800 border-solid bg-zinc-900 max-md:mt-10">
        <div className="flex overflow-hidden relative flex-col justify-center aspect-[1.22]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46ce4d86af396781c8bdd8676ad7a5ccb78b0cbb0088e1b1fbb1a8286be73c52?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
            alt="Product background"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d25090fd89662ad346ea0c0c810c0f245fd0144ab2ccee54beecf8f5bd1a3456?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
            alt="Product"
            className="w-full aspect-[1.22]"
          />
        </div>
        <div className="mt-4 text-xs text-gray-500">PLR creationz</div>
        <div className="flex gap-5 justify-between mt-4 text-sm font-medium text-white">
          <div className="flex-auto">Drone Views #82983</div>
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e589e992b08acb3257ad34714241ba2c8322aaf5c714db19b3e4d8dc7430fd6?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
              alt="Ethereum icon"
              className="shrink-0 w-3 aspect-[1.09]"
            />
            <div>11.98</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const PriceSummary = () => {
  return (
    <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-5 text-sm font-medium text-white max-md:mt-10">
        <div className="flex gap-5 justify-between text-lg leading-7 whitespace-nowrap">
          <div className="my-auto">Summary</div>
          <div className="justify-center px-3 py-2 bg-zinc-800 rounded-[30px]">
            Fixed
          </div>
        </div>
        <div className="flex gap-5 justify-between px-0.5 mt-8 w-full whitespace-nowrap">
          <div>Subtotal</div>
          <div className="flex flex-1 gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e589e992b08acb3257ad34714241ba2c8322aaf5c714db19b3e4d8dc7430fd6?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
              alt="Ethereum icon"
              className="shrink-0 w-3 aspect-[1.09]"
            />
            <div>59.99</div>
          </div>
        </div>
        <div className="self-end mt-1.5 text-right">$120.00</div>
        <div className="flex gap-5 justify-between px-0.5 mt-4 w-full whitespace-nowrap">
          <div>Fee</div>
          <div className="flex flex-1 gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e589e992b08acb3257ad34714241ba2c8322aaf5c714db19b3e4d8dc7430fd6?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
              alt="Ethereum icon"
              className="shrink-0 w-3 aspect-[1.09]"
            />
            <div>2</div>
          </div>
        </div>
        <div className="self-end mt-1.5 text-right">$4.00</div>
        <div className="shrink-0 mt-6 h-px bg-zinc-800" />
        <div className="flex gap-5 justify-between px-0.5 mt-6 w-full whitespace-nowrap">
          <div>Total</div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e589e992b08acb3257ad34714241ba2c8322aaf5c714db19b3e4d8dc7430fd6?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
              alt="Ethereum icon"
              className="shrink-0 w-3 aspect-[1.09]"
            />
            <div>61.99</div>
          </div>
        </div>
        <div className="self-end mt-1.5 text-right">$124.00</div>
        <button className="justify-center items-center px-16 py-4 mt-6 text-lg bg-cyan-400 rounded-[30px] text-zinc-900 max-md:px-5">
          Proceed to payment
        </button>
      </div>
    </div>
  );
};
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center self-stretch px-16 pt-20 pb-11 mt-28 w-full bg-zinc-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1177px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5938a77e82d58cb668087bebb0292b288b246ad5410e86a0e6b17b4b633aaa31?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
          alt="Logo"
          className="max-w-full aspect-[4.55] w-[120px]"
        />
        <div className="flex gap-5 mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <nav className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base text-gray-500 max-md:mt-10">
                  <h3 className="text-lg text-white">Categories</h3>
                  <a href="#" className="mt-8">
                    All
                  </a>
                  <a href="#" className="mt-4">
                    Trending
                  </a>
                  <a href="#" className="mt-4">
                    Ebooks
                  </a>
                  <a href="#" className="mt-4">
                    Graphics
                  </a>
                  <a href="#" className="mt-4">
                    Video
                  </a>
                  <a href="#" className="mt-4">
                    Audio
                  </a>
                  <a href="#" className="mt-4">
                    Software
                  </a>
                  <a href="#" className="mt-4">
                    Resources
                  </a>
                </div>
              </nav>
              <nav className="flex flex-col ml-5 w-[20%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base text-gray-500 max-md:mt-10">
                  <h3 className="text-lg text-white">Resources</h3>
                  <a href="#" className="mt-8">
                    Blog
                  </a>
                  <a href="#" className="mt-4">
                    User guides
                  </a>
                  <a href="#" className="mt-4">
                    Webinars
                  </a>
                  <a href="#" className="mt-4">
                    Help Center
                  </a>
                  <a href="#" className="mt-4">
                    Platform Status
                  </a>
                  <a href="#" className="mt-4">
                    Partners
                  </a>
                  <a href="#" className="mt-4">
                    Taxes
                  </a>
                </div>
              </nav>
              <nav className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base text-gray-500 max-md:mt-10">
                  <h3 className="text-lg text-white">Company</h3>
                  <a href="#" className="mt-8">
                    About
                  </a>
                  <a href="#" className="mt-4">
                    Join us
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex gap-5 justify-between self-start">
            <a href="#">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e9ea64e975147a4a2c94a94e0eccd9723d8756e26e0f66491925dcf0f928dbb?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
                alt="Facebook"
                className="shrink-0 w-10 aspect-square"
              />
            </a>
            <a href="#">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cbb809145ea50fcbb71361eb527b4ea5858a54cea717032060278e4d38f3c4d?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
                alt="Twitter"
                className="shrink-0 w-10 aspect-square"
              />
            </a>
            <a href="#">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67e841e7a32aa966e4e26ca4c2bc99f40e772be18ce2bf289ef5115a7897146f?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
                alt="Instagram"
                className="shrink-0 w-10 aspect-square"
              />
            </a>
            <a href="#">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81f506ac6fa80a036cf3df947349e0e31bca517fae6dd2d2946206d4ec03d810?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
                alt="LinkedIn"
                className="shrink-0 w-10 aspect-square"
              />
            </a>
            <a href="#">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/605317dca1807b2410f4c4a835b115d994e6c0d977320cc85dd5b08e2c01368e?apiKey=a3bfb0458ea644de9f34ea22d007bdbe&"
                alt="YouTube"
                className="shrink-0 aspect-[0.97] w-[39px]"
              />
            </a>
          </div>
        </div>
        <div className="shrink-0 mt-9 w-full h-px bg-zinc-800 max-md:mr-2.5" />
        <div className="flex gap-5 justify-between mt-11 w-full text-base text-gray-500 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between whitespace-nowrap">
            <a href="#">Privacy</a> <a href="#">Terms</a>
          </div>
          <div>© 2024 PLRT</div>
        </div>
      </div>
    </footer>
  );
};
