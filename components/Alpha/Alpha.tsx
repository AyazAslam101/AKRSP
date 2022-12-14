import React from "react";
import Image from "next/image";
import { Target } from "../Icons/svg";

const data = {
  main: [
    {
      total_num: "11",
      name: "Districts",
      IsDone: true,
      icon: () => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 26 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6047 33.236C18.0781 28.9617 26 18.602 26 12.7831C26 5.72575 20.1771 0 13 0C5.82292 0 0 5.72575 0 12.7831C0 18.602 7.92188 28.9617 11.3953 33.236C12.2281 34.2547 13.7719 34.2547 14.6047 33.236ZM13 17.0441C10.6099 17.0441 8.66667 15.1333 8.66667 12.7831C8.66667 10.4329 10.6099 8.52205 13 8.52205C15.3901 8.52205 17.3333 10.4329 17.3333 12.7831C17.3333 15.1333 15.3901 17.0441 13 17.0441Z"
            fill="#0C9A4A"
          />
        </svg>
      ),
    },
    {
      total_num: "198409",
      name: "Organised Households",
      IsDone: false,

      icon: () => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 32.0001V11.0225L32.5097 11.8717L33.4903 10.1285L17 0.852783L0.509733 10.1285L1.49027 11.8717L3 11.0225V32.0001H0V34.0001H7V20.0001H17V34.0001H34V32.0001H31ZM13.5 10.5001C13.5 8.57018 15.0701 7.00012 17 7.00012C21.6369 7.17605 21.6356 13.8249 16.9999 14.0001C15.0701 14.0001 13.5 12.4301 13.5 10.5001ZM27 25.0001H19V17.0001H27V25.0001Z"
            fill="#0C9A4A"
          />
        </svg>
      ),
    },
    {
      total_num: "2928",
      name: "Village Organization",
      IsDone: false,
      icon: () => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 34 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.33153 4.77649C9.33153 2.36953 11.2828 0.418213 13.6901 0.418213C16.0971 0.418213 18.0486 2.36953 18.0486 4.77649C18.0486 7.18346 16.0971 9.13471 13.6901 9.13471C11.2828 9.13478 9.33153 7.18346 9.33153 4.77649ZM15.7847 12.104C15.8284 11.155 16.1551 10.2766 16.6807 9.55046C16.3118 9.47321 15.9305 9.43217 15.5393 9.43217H11.8414C11.4514 9.43217 11.0706 9.47289 10.7037 9.54919C11.263 10.325 11.5976 11.2725 11.603 12.2982C12.2829 11.9243 13.063 11.7113 13.8917 11.7113C14.5639 11.7113 15.2038 11.8514 15.7847 12.104ZM16.5224 12.4952C17.7884 13.2891 18.6761 14.6318 18.8385 16.1912C19.3543 16.4323 19.9275 16.5714 20.5348 16.5714C22.7527 16.5714 24.5503 14.7735 24.5503 12.5558C24.5503 10.3377 22.7527 8.5403 20.5348 8.5403C18.3373 8.54036 16.5558 10.3059 16.5224 12.4952ZM13.8916 20.7173C16.1091 20.7173 17.9068 18.919 17.9068 16.7018C17.9068 14.4844 16.1091 12.6864 13.8916 12.6864C11.674 12.6864 9.87545 14.4843 9.87545 16.7018C9.87552 18.919 11.674 20.7173 13.8916 20.7173ZM15.595 20.9906H12.188C9.35309 20.9906 7.04621 23.2973 7.04621 26.1326V30.2997L7.05706 30.365L7.34386 30.4542C10.0494 31.2992 12.3999 31.5818 14.3348 31.5818C18.113 31.5818 20.3039 30.5044 20.4389 30.4355L20.7072 30.2997H20.7357V26.1325C20.7358 23.2973 18.4302 20.9906 15.595 20.9906ZM22.2391 16.8454H18.8576C18.8209 18.1984 18.2435 19.4168 17.3303 20.2926C19.8503 21.0419 21.694 23.3786 21.694 26.1389V27.4229C25.032 27.3 26.9559 26.3545 27.0827 26.2907L27.3511 26.1542H27.3796V21.9863C27.3799 19.1518 25.0732 16.8454 22.2391 16.8454ZM23.1429 8.45467C24.4089 9.24869 25.2966 10.5915 25.4586 12.1509C25.9745 12.3919 26.5477 12.5308 27.155 12.5308C29.3732 12.5308 31.1708 10.7332 31.1708 8.51575C31.1708 6.29767 29.3732 4.50028 27.155 4.50028C24.9577 4.50003 23.1763 6.26596 23.1429 8.45467ZM28.8588 12.8049H25.4781C25.4414 14.1579 24.864 15.3763 23.9508 16.252C26.4707 17.0011 28.3145 19.3381 28.3145 22.0984V23.3824C31.6521 23.2597 33.5764 22.3143 33.7032 22.2502L33.9712 22.1141H34.0001V17.9457C34.0004 15.1114 31.6938 12.8049 28.8588 12.8049ZM6.84585 16.5714C7.63143 16.5714 8.36189 16.342 8.98136 15.9513C9.17836 14.6676 9.86664 13.5455 10.8495 12.7817C10.8536 12.7063 10.8605 12.6319 10.8605 12.5558C10.8605 10.3378 9.06235 8.54036 6.84585 8.54036C4.62745 8.54036 2.83007 10.3378 2.83007 12.5558C2.83007 14.774 4.62739 16.5714 6.84585 16.5714ZM10.452 20.2926C9.54311 19.421 8.96766 18.2092 8.92529 16.8641C8.80028 16.8548 8.67616 16.8454 8.54836 16.8454H5.14176C2.3065 16.8454 0 19.1518 0 21.9867V26.1542L0.0105285 26.2191L0.297715 26.3087C2.46772 26.9873 4.40515 27.2991 6.08787 27.3966V26.1385C6.08819 23.3786 7.93149 21.0415 10.452 20.2926Z"
            fill="#0C9A4A"
          />
        </svg>
      ),
    },
    {
      total_num: "2117",
      name: "Women Organization",
      IsDone: false,
      icon: () => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9197 21.2255V19.0796H22.0271C22.0271 21.8563 19.7762 24.1073 16.9994 24.1073C14.2226 24.1073 11.9716 21.8564 11.9716 19.0796H2.0791V21.2255L6.37479 21.6804C6.64274 22.7788 7.07657 23.8122 7.64826 24.7525L4.93172 28.1124L7.96655 31.1473L11.3265 28.4307C12.2668 29.0024 13.3002 29.4362 14.3986 29.7042L14.8535 33.9999H19.1453L19.6002 29.7042C20.6986 29.4362 21.732 29.0024 22.6723 28.4307L26.0322 31.1473L29.0671 28.1124L26.3505 24.7525C26.9222 23.8122 27.356 22.7788 27.624 21.6804L31.9197 21.2255Z"
            fill="#0C9A4A"
          />
          <path
            d="M17.0002 0C14.8753 0 13.1465 1.72882 13.1465 3.85375C13.1465 5.97869 14.8753 7.70744 17.0002 7.70744C19.1252 7.70744 20.854 5.97869 20.854 3.85375C20.854 1.72882 19.1252 0 17.0002 0Z"
            fill="#0C9A4A"
          />
          <path
            d="M21.103 8.77295H12.8969C11.0077 8.77302 9.4707 10.3099 9.4707 12.1991V17.0875H24.5291V12.1991C24.5291 10.3099 22.9921 8.77295 21.103 8.77295Z"
            fill="#0C9A4A"
          />
          <path
            d="M8.82433 1.78027C6.92073 1.78027 5.37207 3.329 5.37207 5.23254C5.37207 7.1208 6.89616 8.65897 8.77871 8.6836C9.55832 7.77171 10.634 7.12086 11.8562 6.88213C12.1241 6.39172 12.2766 5.82966 12.2766 5.23254C12.2766 3.32893 10.7279 1.78027 8.82433 1.78027Z"
            fill="#0C9A4A"
          />
          <path
            d="M5.14833 9.63916C3.45597 9.63916 2.0791 11.016 2.0791 12.7084V17.0876H7.478V12.1991C7.478 11.2737 7.71161 10.402 8.12234 9.63916H5.14833Z"
            fill="#0C9A4A"
          />
          <path
            d="M25.1749 1.78027C23.2713 1.78027 21.7227 3.329 21.7227 5.23254C21.7227 5.82959 21.8751 6.39172 22.143 6.88213C23.3652 7.12086 24.4409 7.77171 25.2205 8.6836C27.1031 8.65903 28.6272 7.1208 28.6272 5.23254C28.6272 3.32893 27.0785 1.78027 25.1749 1.78027Z"
            fill="#0C9A4A"
          />
          <path
            d="M28.851 9.63916H25.877C26.2877 10.402 26.5213 11.2737 26.5213 12.1991V17.0875H31.9202V12.7083C31.9202 11.016 30.5433 9.63916 28.851 9.63916Z"
            fill="#0C9A4A"
          />
        </svg>
      ),
    },
    {
      total_num: "75",
      name: "Local Support Organization",
      IsDone: false,
      icon: () => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00462336 7.08095C-0.0235059 6.82362 0.0591983 6.56648 0.232064 6.37381C0.40493 6.18113 0.651623 6.07112 0.910481 6.07127H4.85691C5.19223 6.07127 5.46405 5.79944 5.46405 5.46413C5.46405 5.12881 5.19223 4.85698 4.85691 4.85698H2.12477C1.86594 4.8576 1.61909 4.74806 1.44588 4.55573C1.27267 4.36341 1.18948 4.10647 1.21709 3.84913C1.29478 3.36525 1.72191 3.01583 2.21159 3.03555H6.0712C6.40651 3.03555 6.67834 2.76373 6.67834 2.42841C6.67834 2.0931 6.40651 1.82127 6.0712 1.82127H3.33905C3.08023 1.82188 2.83337 1.71234 2.66017 1.52002C2.48696 1.32769 2.40377 1.07076 2.43137 0.813412C2.50882 0.329392 2.93611 -0.0201626 3.42587 -0.000159833H12.4171C12.5277 0.000679997 12.6361 0.031752 12.7303 0.0896973L15.1856 1.5602C15.4682 1.72962 15.7912 1.8198 16.1206 1.82127H21.8569V7.21816L20.8053 6.35723C20.0162 5.75494 18.9063 5.81596 18.1879 6.50113C17.6546 7.01839 17.4692 7.79783 17.7126 8.49984H15.6768C15.199 8.50185 14.7411 8.69156 14.4018 9.02806L8.68798 14.6951L8.67584 14.7073L8.42327 14.9574C8.12711 15.247 7.65293 15.2437 7.36077 14.9501C7.0941 14.6824 7.06809 14.2582 7.30005 13.9599L8.9697 11.9199C9.11816 11.7383 9.14877 11.4875 9.04831 11.2755C8.94786 11.0636 8.73431 10.9284 8.49977 10.9284H1.60444C1.11556 10.9475 0.689405 10.5985 0.611766 10.1154C0.584008 9.85832 0.66688 9.60151 0.839703 9.40912C1.01253 9.21672 1.259 9.10687 1.51762 9.10698H4.85691C5.19223 9.10698 5.46405 8.83516 5.46405 8.49984C5.46405 8.16453 5.19223 7.8927 4.85691 7.8927H0.997302C0.508902 7.9116 0.0830612 7.56338 0.00462336 7.08095ZM10.1099 33.3878C9.85428 33.4154 9.59906 33.3323 9.40866 33.1596C9.21737 32.9861 9.10786 32.7402 9.10691 32.482V32.4729V29.1427C9.10691 28.8074 8.83508 28.5356 8.49977 28.5356C8.16445 28.5356 7.89263 28.8074 7.89263 29.1427V32.482V32.4905V33.0035C7.9093 33.4941 7.55734 33.9201 7.07237 33.9962C6.81728 34.024 6.56254 33.9408 6.37295 33.7679C6.18122 33.5943 6.07165 33.3478 6.0712 33.0891V31.8748V31.8627V29.1427C6.0712 28.8074 5.79937 28.5356 5.46405 28.5356C5.12874 28.5356 4.85691 28.8074 4.85691 29.1427V31.8748V31.8821C4.85529 32.1396 4.74478 32.3843 4.55273 32.5558C4.36068 32.7272 4.10503 32.8094 3.84905 32.7819C3.36527 32.7045 3.01579 32.2776 3.03548 31.788V30.6606V30.6514V27.9284C3.03548 27.5931 2.76365 27.3213 2.42834 27.3213C2.09302 27.3213 1.8212 27.5931 1.8212 27.9284V30.6606V30.666C1.82007 30.9237 1.70987 31.1688 1.51789 31.3406C1.32592 31.5125 1.07014 31.5949 0.813945 31.5676C0.330305 31.4903 -0.0192884 31.0638 -0.000233791 30.5743V21.5832C0.000701822 21.4738 0.0293172 21.3664 0.0829448 21.2711L1.56012 18.8146C1.72919 18.5321 1.81935 18.2094 1.8212 17.8802V12.1427H7.21748L6.35595 13.1949C5.80051 13.8705 5.76101 14.8326 6.25919 15.5515C6.75738 16.2703 7.67218 16.5712 8.49977 16.2883V18.3234C8.50178 18.8012 8.69148 19.2592 9.02798 19.5984L14.6902 25.3056C14.6969 25.3128 14.7036 25.3195 14.7108 25.3262L14.9579 25.5751C15.1707 25.7917 15.2326 26.1148 15.1149 26.3946C14.9972 26.6744 14.723 26.8562 14.4194 26.8556C14.2542 26.8563 14.0936 26.8009 13.9641 26.6983L11.9247 25.0293C11.7431 24.8777 11.4901 24.8453 11.2762 24.9463C11.0623 25.0473 10.9266 25.2633 10.9283 25.4998V32.3952C10.9451 32.8852 10.5941 33.3109 10.1099 33.3878ZM33.9949 26.9187C34.023 27.1761 33.9403 27.4332 33.7675 27.6259C33.5946 27.8186 33.3479 27.9286 33.0891 27.9284H29.1426C28.8073 27.9284 28.5355 28.2002 28.5355 28.5356C28.5355 28.8709 28.8073 29.1427 29.1426 29.1427H31.8748C32.1336 29.1421 32.3805 29.2516 32.5537 29.4439C32.7269 29.6363 32.8101 29.8932 32.7825 30.1506C32.7048 30.6344 32.2776 30.9839 31.788 30.9641H27.9283C27.593 30.9641 27.3212 31.236 27.3212 31.5713C27.3212 31.9066 27.593 32.1784 27.9283 32.1784H30.6605C30.9193 32.1778 31.1662 32.2873 31.3394 32.4797C31.5126 32.672 31.5958 32.9289 31.5682 33.1863C31.4907 33.6703 31.0634 34.0198 30.5737 33.9998H21.5825C21.4718 33.999 21.3635 33.9679 21.2692 33.91L18.8139 32.4395C18.5313 32.2701 18.2084 32.1799 17.8789 32.1784H12.1426V26.7803L13.1942 27.6412C13.9826 28.2459 15.0942 28.1848 15.8116 27.4973C16.3451 26.9807 16.5312 26.2018 16.2888 25.4998H18.3227C18.8006 25.4978 19.2585 25.3081 19.5977 24.9716L25.3097 19.307L25.331 19.2863L25.5781 19.0435C25.8743 18.7539 26.3484 18.7572 26.6406 19.0508C26.9073 19.3185 26.9333 19.7427 26.7013 20.041L25.0317 22.081C24.8842 22.2624 24.8539 22.5123 24.9538 22.7236C25.0537 22.9349 25.266 23.0702 25.4998 23.0713H32.3951C32.884 23.0522 33.3101 23.4012 33.3878 23.8842C33.4155 24.1414 33.3327 24.3982 33.1598 24.5906C32.987 24.783 32.7405 24.8928 32.4819 24.8927H29.1426C28.8073 24.8927 28.5355 25.1645 28.5355 25.4998C28.5355 25.8352 28.8073 26.107 29.1426 26.107H33.0041C33.4918 26.089 33.9166 26.437 33.9949 26.9187ZM33.9998 12.4165C33.9988 12.5271 33.968 12.6353 33.9105 12.7298L32.4394 15.1851C32.2701 15.4675 32.1799 15.7902 32.1783 16.1195V21.857H26.7802L27.6418 20.8048C28.2671 20.0232 28.2046 18.8963 27.4967 18.1886C26.9663 17.6797 26.1994 17.503 25.4998 17.7284V15.6763C25.4978 15.1984 25.3081 14.7405 24.9716 14.4013L19.3069 8.68563L19.2954 8.67409L19.0446 8.42152C18.9024 8.281 18.8229 8.08898 18.8243 7.88904C18.8257 7.68909 18.9077 7.49818 19.0519 7.35963C19.3233 7.10071 19.7418 7.07506 20.0428 7.29891L22.0822 8.96795C22.2635 9.1147 22.5129 9.14455 22.7238 9.04474C22.9347 8.94494 23.0697 8.73313 23.0712 8.49984V1.60452C23.0524 1.11553 23.4016 0.689457 23.8848 0.61184C24.1418 0.584266 24.3984 0.667222 24.5907 0.840024C24.783 1.01283 24.8927 1.25919 24.8926 1.5177V4.85698C24.8926 5.1923 25.1645 5.46413 25.4998 5.46413C25.8351 5.46413 26.1069 5.1923 26.1069 4.85698V0.997376C26.0879 0.50829 26.4372 0.0820616 26.9205 0.00469732C27.1775 -0.0228765 27.4342 0.0600792 27.6264 0.232882C27.8187 0.405684 27.9284 0.65205 27.9283 0.910554V4.85698C27.9283 5.1923 28.2002 5.46413 28.5355 5.46413C28.8708 5.46413 29.1426 5.1923 29.1426 4.85698V2.12484C29.1422 1.86612 29.2518 1.61943 29.4441 1.44636C29.6364 1.27329 29.8932 1.19017 30.1505 1.21777C30.6343 1.29518 30.9837 1.72212 30.9641 2.21166V6.07127C30.9641 6.40658 31.2359 6.67841 31.5712 6.67841C31.9065 6.67841 32.1783 6.40658 32.1783 6.07127V3.33913C32.1779 3.08041 32.2875 2.83372 32.4798 2.66064C32.6721 2.48757 32.929 2.40446 33.1862 2.43205C33.6696 2.5097 34.0189 2.93612 33.9998 3.42534V12.4165Z"
            fill="#0C9A4A"
          />
        </svg>
      ),
    },
  ],
};

const Alpha = () => {
  return (
    <div className="py-5 container mt-20">
      <div>
        <p className="text-4xl font-semibold mb-4">
          Where <span className="text-primary">AKRSP</span> Work
        </p>
      </div>
      <div className="relative flex">
        <div className="absolute flex justify-center items-center w-px  xl:h-[26rem] lg:h-[32rem]  lg:visible md:invisible sm:invisible invisible lg:mt-12 bg-primary rounded-full"></div>
      </div>
      <div className="lg:flex flex-col md:flex-row sm:flex-row flex-row">
        <div>
          {data?.main?.map((item, key) => (
            <div key={key} className="px-3 py-5 flex items-center ml-8">
              <div className="bg-svgbg border-1 rounded-full p-4 relative align-center">
                <div
                  className={
                    item.IsDone
                      ? "absolute right-24 flex items-center lg:w-3 lg:h-3 lg:visible md:invisible sm:invisible invisible bg-primary mt-2 rounded-full"
                      : "absolute right-24 lg:w-3 lg:w-3 lg:h-3 lg:visible md:invisible sm:invisible invisible  border-primary mt-2 border-2 rounded-full bg-white"
                  }
                ></div>
                <item.icon />
              </div>
              <div className="ml-3">
                <p className="text-3xl text-primary font-semibold tracking-wide">
                  {item?.total_num}
                </p>
                <p className="text-lg"> {item?.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="ml-auto lg:-mt-6 cursor-pointer relative">
          <div className="xl:block lg:blck md:hidden sm:hidden hidden">
            <div className="absolute left-64 bottom-52">
              <Target />
            </div>
            <div className="absolute left-52 ml-2 -mt-2 top-48">
              <Target />
            </div>
            <div className="absolute left-96 top-64 mt-5 -ml-4">
              <Target />
            </div>
            <div className="absolute left-80 ml-6 -mt-4 top-36">
              <Target />
            </div>
            <div className="absolute right-96 top-64 mt-5 -ml-4">
              <Target />
            </div>
            <div className="absolute right-72 top-40 mt-5 -ml-4">
              <Target />
            </div>
            <div className="absolute right-80 top-52 mr-9">
              <Target />
            </div>
            <div className="absolute right-80 bottom-56 mt-5 -ml-4">
              <Target />
            </div>
          </div>
          <Image src="/map.png" alt="alt" width={900} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Alpha;
