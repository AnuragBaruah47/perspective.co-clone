import React, { useRef } from "react";
import { background, marqueeImages } from "../assets/assets";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

const Herosec = () => {
  const marqueeRef = useRef(null);
  const newImages = [...marqueeImages, ...marqueeImages];
  const videoRef = useRef(null);
  const rotateRef = useRef(null);

  useGSAP(() => {
    const width = window.getComputedStyle(marqueeRef.current).width;
    const halfOfWidth = -1 * (parseInt(width) / 2);

    gsap.to(rotateRef.current, {
      rotationZ: 360,
      duration: 5,
      repeat: -1,
    });

    gsap.to(videoRef.current, {
      rotateX: 0,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "-300px 200px",
        end: "+=400px",
        scrub: -1,
      },
    });

    gsap.to(marqueeRef.current, {
      x: halfOfWidth,
      repeat: -1,
      duration: 15,
      ease: "linear",
    });
  });

  const array = [0, 1, 2, 3, 4];
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex justify-center">
        <h1 className="text-center text-7xl tracking-wide leading-22 w-5xl font-bold">
          Double Your Business with Perspective Funnels™
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <p className="text-[20px] tracking-wide font-normal w-[850px] text-center text-(--para)">
          Easily create mobile-first, interactive, and personalized lead gen and
          sales funnels with market-leading conversion rates in just 30 minutes.
          No design or coding skills required.
        </p>
      </div>

      <div className="flex w-full mt-3 rounded-3xl gap-4 justify-center">
        <Button
          className={
            "text-white font-semibold hover:bg-(--second-button-hover) text-[20px] px-10 py-4 bg-(--second-button-normal-state)"
          }
          children="Create free funnel in 30min"
        />
        <Button
          className={
            "flex px-10 py-4 text-(--second-button-normal-state) hover:bg-[rgba(0,0,0,0.1)] hover:text-black gap-2 font-semibold text-[18px] "
          }
          children="Watch Demo"
          svg={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.5547 5.16795C7.24784 4.96338 6.8533 4.94431 6.52814 5.11833C6.20298 5.29235 6 5.63121 6 6V10C6 10.3688 6.20298 10.7077 6.52814 10.8817C6.8533 11.0557 7.24784 11.0366 7.5547 10.8321L10.5547 8.83205C10.8329 8.64659 11 8.33435 11 8C11 7.66565 10.8329 7.35342 10.5547 7.16795L7.5547 5.16795Z"
                fill="currentColor"
              ></path>
            </svg>
          }
        />
      </div>

      <div className="w-full flex justify-center gap-10 mt-6.5">
        <div className="flex cursor-pointer text-[14px] gap-2.5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M16.0929 16.2488C16.8493 17.5254 17.5972 18.7876 18.3446 20.0484C15.0352 22.5128 9.88635 22.8106 6.07479 19.9726C1.6885 16.7042 0.967579 11.1272 3.31593 7.11262C6.01686 2.49504 11.0712 1.47383 14.3255 2.22264C14.2375 2.40861 12.2884 6.34166 12.2884 6.34166C12.2884 6.34166 12.1343 6.3515 12.0472 6.35314C11.0853 6.3928 10.3688 6.6105 9.60096 6.99666C8.75849 7.42426 8.03652 8.04606 7.49814 8.80772C6.95977 9.56937 6.62139 10.4477 6.51257 11.3659C6.39903 12.2971 6.53141 13.2411 6.89721 14.1087C7.2065 14.8422 7.64401 15.4937 8.23053 16.0437C9.13028 16.8882 10.201 17.4111 11.4421 17.5842C12.6174 17.7483 13.7477 17.5859 14.8069 17.0682C15.2042 16.8743 15.5421 16.6601 15.9372 16.3664C15.9875 16.3347 16.0322 16.2945 16.0929 16.2488Z"
              fill="#6B7280"
            ></path>
            <path
              d="M16.0986 5.0536C15.9065 4.86981 15.7286 4.70025 15.5514 4.52959C15.4457 4.42786 15.3439 4.32202 15.2357 4.22274C15.1969 4.18691 15.1513 4.13796 15.1513 4.13796C15.1513 4.13796 15.1881 4.06193 15.2039 4.03075C15.4111 3.62626 15.7359 3.33062 16.1211 3.09542C16.547 2.83336 17.0433 2.70002 17.5472 2.71226C18.1919 2.72457 18.7914 2.88073 19.2972 3.30136C19.6706 3.61176 19.8621 4.00559 19.8958 4.47572C19.952 5.26883 19.6146 5.87625 18.9446 6.30016C18.551 6.54958 18.1264 6.74239 17.7007 6.97076C17.4659 7.09683 17.2652 7.2076 17.0357 7.43569C16.8338 7.6646 16.824 7.88038 16.824 7.88038L19.8739 7.87655V9.19778H15.1662C15.1662 9.19778 15.1662 9.10752 15.1662 9.07006C15.1482 8.42079 15.2261 7.80982 15.5317 7.22018C15.8129 6.67922 16.2498 6.2832 16.7748 5.97826C17.1791 5.74334 17.6048 5.54342 18.01 5.30958C18.2599 5.16546 18.4365 4.95405 18.4351 4.64747C18.4351 4.38437 18.2383 4.15054 17.9571 4.07752C17.2941 3.90358 16.6193 4.18117 16.2684 4.77136C16.2172 4.85751 16.1649 4.94311 16.0986 5.0536Z"
              fill="#6B7280"
            ></path>
            <path
              d="M21.9996 14.8441L19.4294 10.5268H14.3433L11.7565 14.8887H16.88L19.4083 19.1855L21.9996 14.8441Z"
              fill="#6B7280"
            ></path>
          </svg>
          <div className="flex">
            {array.map((src, idx) => {
              return (
                <svg
                  key={src}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fiule="evenodd"
                    clule="evenodd"
                    d="M8.98994 2.67567C9.36357 1.77738 10.6361 1.77738 11.0097 2.67567L12.7447 6.8471L17.2481 7.20812C18.2179 7.28587 18.6111 8.49612 17.8723 9.12905L14.4411 12.0682L15.4894 16.4627C15.7151 17.409 14.6856 18.157 13.8554 17.6499L9.99982 15.2949L6.14429 17.6499C5.31402 18.157 4.28452 17.409 4.51027 16.4627L5.55852 12.0682L2.1274 9.12905C1.38854 8.49612 1.78176 7.28587 2.75154 7.20812L7.25494 6.8471L8.98994 2.67567Z"
                    fill="#6B7280"
                  ></path>
                </svg>
              );
            })}
          </div>
          4.9 rating
        </div>

        <div className="flex gap-3 cursor-pointer text-[14px] ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 6.375C4.5 4.09683 6.34683 2.25 8.625 2.25C10.9032 2.25 12.75 4.09683 12.75 6.375C12.75 8.65317 10.9032 10.5 8.625 10.5C6.34683 10.5 4.5 8.65317 4.5 6.375Z"
              fill="#6B7280"
            ></path>
            <path
              d="M14.25 8.625C14.25 6.76104 15.761 5.25 17.625 5.25C19.489 5.25 21 6.76104 21 8.625C21 10.489 19.489 12 17.625 12C15.761 12 14.25 10.489 14.25 8.625Z"
              fill="#6B7280"
            ></path>
            <path
              d="M1.5 19.125C1.5 15.19 4.68997 12 8.625 12C12.56 12 15.75 15.19 15.75 19.125V19.1276C15.75 19.1674 15.7496 19.2074 15.749 19.2469C15.7446 19.5054 15.6074 19.7435 15.3859 19.8768C13.4107 21.0661 11.0966 21.75 8.625 21.75C6.15343 21.75 3.8393 21.0661 1.86406 19.8768C1.64256 19.7435 1.50537 19.5054 1.50103 19.2469C1.50034 19.2064 1.5 19.1657 1.5 19.125Z"
              fill="#6B7280"
            ></path>
            <path
              d="M17.2498 19.1281C17.2498 19.1762 17.2494 19.2244 17.2486 19.2722C17.2429 19.6108 17.1612 19.9378 17.0157 20.232C17.2172 20.2439 17.4203 20.25 17.6248 20.25C19.2205 20.25 20.732 19.8803 22.0764 19.2213C22.3234 19.1002 22.4843 18.8536 22.4957 18.5787C22.4984 18.5111 22.4998 18.4432 22.4998 18.375C22.4998 15.6826 20.3172 13.5 17.6248 13.5C16.8784 13.5 16.1711 13.6678 15.5387 13.9676C16.6135 15.4061 17.2498 17.1912 17.2498 19.125V19.1281Z"
              fill="#6B7280"
            ></path>
          </svg>
          1k+ growth community
        </div>

        <div>
          <div className="flex cursor-pointer text-[14px]  gap-2.5">
            <svg
              className="mt-1"
              width="28"
              height="17"
              viewBox="0 0 28 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.9972 1.35514V11.0715L28 11.0688C28 12.4239 26.6161 12.4239 26.6161 12.4239H25.5338L22.1431 16.8038V12.4267H1.38395C0 12.4267 0 11.0715 0 11.0715V1.35514C0 0 1.38395 0 1.38395 0H26.6133C27.9972 0 27.9972 1.35514 27.9972 1.35514ZM8.08609 6.98265C8.19942 6.71687 8.25565 6.43108 8.25126 6.14308H8.2568C8.26031 5.85562 8.20368 5.57049 8.09038 5.30526C7.97709 5.04004 7.80953 4.80034 7.59804 4.60093C7.39205 4.39648 7.14662 4.23413 6.87602 4.12333C6.60542 4.01252 6.31503 3.95546 6.02172 3.95546C5.72842 3.95546 5.43803 4.01252 5.16743 4.12333C4.89683 4.23413 4.6514 4.39648 4.44541 4.60093C4.23518 4.801 4.06883 5.04094 3.95651 5.3061C3.8442 5.57125 3.78828 5.85605 3.79219 6.14308C3.79219 6.72198 4.02685 7.2772 4.44463 7.68679C4.86241 8.09639 5.42914 8.32685 6.02034 8.32757C6.31299 8.33087 6.60326 8.27586 6.87353 8.16591C7.1438 8.05595 7.38841 7.89334 7.5925 7.68795C7.80474 7.48852 7.97275 7.24844 8.08609 6.98265ZM9.47124 7.53233C9.28077 7.97527 8.99929 8.37512 8.6443 8.70701C8.30529 9.05305 7.89771 9.32767 7.44652 9.51409C6.99533 9.7005 6.51003 9.79477 6.02034 9.79113C5.52925 9.79588 5.04237 9.70215 4.58967 9.51571C4.13698 9.32926 3.72805 9.05405 3.38808 8.70701C3.03979 8.37622 2.76378 7.97958 2.57679 7.54117C2.3898 7.10276 2.29573 6.63172 2.30029 6.15664C2.29405 5.67785 2.38753 5.20285 2.57503 4.76062C2.76253 4.3184 3.04012 3.91824 3.39084 3.58458C3.72979 3.23697 4.13814 2.96135 4.5905 2.77485C5.04285 2.58835 5.52955 2.49495 6.02034 2.50046C6.50838 2.49271 6.99288 2.58271 7.4441 2.76494C7.89533 2.94717 8.30375 3.21779 8.6443 3.56018C8.99882 3.89186 9.28001 4.29129 9.47045 4.73372C9.6609 5.17614 9.75654 5.65215 9.75146 6.13224C9.75709 6.61282 9.6617 7.08939 9.47124 7.53233ZM18.2793 9.71524H16.7376L16.7459 6.70953L14.5316 9.60141L12.3173 6.70953V9.72337H10.7756V2.5628L14.5288 7.08084L18.2793 2.5628V9.71524ZM25.5035 2.5628L22.2513 6.05364L25.5617 9.72608H23.4359L20.1144 6.05635L22.1738 3.99925H19.1706V2.5628H25.5035Z"
                fill="#6B7280"
              ></path>
            </svg>
            <div className="flex">
              {array.map((src, idx) => {
                return (
                  <svg
                    key={src}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.98994 2.67567C9.36357 1.77738 10.6361 1.77738 11.0097 2.67567L12.7447 6.8471L17.2481 7.20812C18.2179 7.28587 18.6111 8.49612 17.8723 9.12905L14.4411 12.0682L15.4894 16.4627C15.7151 17.409 14.6856 18.157 13.8554 17.6499L9.99982 15.2949L6.14429 17.6499C5.31402 18.157 4.28452 17.409 4.51027 16.4627L5.55852 12.0682L2.1274 9.12905C1.38854 8.49612 1.78176 7.28587 2.75154 7.20812L7.25494 6.8471L8.98994 2.67567Z"
                      fill="#6B7280"
                    ></path>
                  </svg>
                );
              })}
            </div>
            4.8 rating
          </div>
        </div>
      </div>

      <div className="flex justify-center perspective-distant transform-3d">
        <div
          ref={videoRef}
          className="relative w-[57%] rotate-x-30 rounded-2xl overflow-hidden  p-1"
        >
          {/* 2. GRADIENT SPINNER: The layer we animate with GSAP */}
          <div
            ref={rotateRef}
            className="absolute rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
            style={{
              // We use a Conic Gradient for the best 'circular' moving effect
              background: `conic-gradient(from 0deg, #8BDAF2, #C7CDF7, #F6CB99, #8BDAF2, #C7CDF7, #F6CB99, #F6D09A, #F6BF97, #DA8BDB, #8BDAF2)`,
            }}
          />

          {/* 3. VIDEO: Sits on top (z-10) to mask the center */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="relative z-10 w-full h-full rounded-[14px] bg-black object-cover"
            src="https://player.vimeo.com/progressive_redirect/playback/1064689144/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9769e12e649f9faf25294a7405057fbe410fb0ab4ab24a6575ad652b3b11ff57&user_id=101816034"
          ></video>
        </div>
      </div>

      <div className="w-full flex flex-col mt-30 gap-8">
        <div className="flex justify-center font-semibold text-2xl">
          Used daily by more than 6,000 small and large businesses.
        </div>
        <div className="flex  w-full justify-center">
          <div className="flex w-7xl mask-x-from-70% mask-x-to-90% overflow-clip">
            <div ref={marqueeRef} className="flex shrink-0">
              {newImages.map((src, idx) => {
                return <img className="w-40" src={src} key={idx} alt="home" />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex mt-28  justify-center">
        <div className="w-5xl flex border border-gray-300 gap-40 rad py-14 px-14 rounded-4xl justify-center">
          <div className="flex rounded-3xl">
            <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="text-3xl font-bold leading-10  w-70 text-center">
                Perspective Review 2025 Is Live ✨
              </h1>
              <p className="w-90 text-center">
                Learn about 29 new features that boost your conversion rates.
              </p>
              <Button
                svg={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 7.29289L8.70711 4.29289C8.31658 3.90237 7.68342 3.90237 7.29289 4.29289C6.90237 4.68342 6.90237 5.31658 7.29289 5.70711L8.58579 7L5 7C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H8.58579L7.29289 10.2929C6.90237 10.6834 6.90237 11.3166 7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                }
                children="Watch Perspective Review"
                className="bg-[#F9F9F9] hover:bg-[#F1F1F1] font-semibold text-[18px] cursor-pointer py-3.5 px-7 shadow-none text-(--second-button-normal-state) flex gap-4"
              />
            </div>
          </div>

          <div className="">
            <img
              className="w-94 hover:scale-[102%] hover:cursor-pointer transition-all ease-in-out duration-700"
              src="https://cdn.prod.website-files.com/61ba09162b87002e87715b91/691dc5e64d5c7deb10fd55e5_734a7c4435b5c3c78d4883a19e165ff3_promo.avif"
              alt=""
            />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Herosec;
