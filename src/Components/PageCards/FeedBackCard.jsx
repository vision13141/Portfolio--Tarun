import Container from '../Container';
import Flex from '../Flex';
import Paragraph from '../Paragraph';

import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from '../Image';

import Ql1 from '../../assets/quote-left1.png';
import Qr1 from '../../assets/quote-right1.png';
import { IoCaretDownSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Pic1 from "../../assets/pic1.png";
import Pic2 from "../../assets/pic2.png";
import Cote1 from '../../assets/cote1.png';

const FeedBackCard = () => {
  return (
    <>
      <div className="relative hidden md:block"> {/* Hide on mobile */}
        <Image src={Ql1} className="absolute top-[50px] left-[10px] " />
        <Image src={Qr1} className="absolute top-[320px] left-[1200px]" /> 
      </div>
      <Container>
        <div className="pt-5">
          <Flex className="justify-center">
            <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor " />
            <h6 className="font-openSans text-[18px] text-btnbgColor font-medium leading-normal text-center">
              Client Testimonial
            </h6>
          </Flex>
        </div>
        <Paragraph
          className="text-fontColor font-openSans text-center text-[25px] md:text-[50px] font-medium leading-2"
          text="Feedback From Client"
        />

        {/* Testimonial Cards */}
        <div className="relative pb-8">
          <Flex className="justify-center gap-x-8 flex-col md:flex-row">
            <div className="w-full md:w-[573px] mt-5 md:mt-10 shadow-2xl">
              <div className="w-full border-t-8 border-t-btnbgColor p-5 md:p-8 bg-white">
                <Paragraph
                  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  className="font-openSans text-[14px] md:text-[16px] text-fontColor"
                />
              </div>
            </div>

            <div className="w-full md:w-[573px] mt-5 md:mt-10 shadow-2xl hidden md:block">
              <div className="w-full border-t-8 border-t-btnbgColor p-5 md:p-8 bg-white">
                <Paragraph
                  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  className="font-openSans text-[14px] md:text-[16px] text-fontColor"
                />
              </div>
            </div>
          </Flex>

          {/* Hide arrows on mobile */}
          <IoCaretDownSharp className=" absolute top-[100px] md:top-[150px] left-0 md:left-[50px] text-[44px] text-white" />
          <IoCaretDownSharp className="hidden md:block absolute top-[150px] left-[650px] text-[44px] text-white" />
        </div>

        {/* Client Info */}
        <div className="flex flex-col md:flex-row relative top-2 mb-16 gap-8">
          <div className="w-full md:w-[573px] flex gap-4">
            <div className="relative">
              <Image src={Pic1} className="w-[60px] md:w-[80px] h-[65px] md:h-[85px] mx-auto md:ml-[30px] border-4 border-btnbgColor rounded-full p-1" />
              <Image src={Cote1} className="w-[28px] absolute mx-auto ml-[16px] md:ml-[55px] top-12 md:top-16 text-btnbgColor" />
            </div>
            <div className="pt-3 text-center md:text-left">
              <Paragraph text="Michale Doie" className="font-openSans text-[14px] md:text-[16px] text-fontColor" />
              <span className="font-openSans text-[14px] md:text-[16px] text-fontColor">Product Designer</span>
              <div className="flex justify-center md:justify-start mt-1">
                <FaStar className="text-btnbgColor " />
                <FaStar className="text-btnbgColor " />
                <FaStar className="text-btnbgColor " />
                <FaStar className="text-btnbgColor " />
                <FaStarHalfAlt className="text-btnbgColor " />
              </div>
            </div>
          </div>

          <div className="w-full md:w-[573px] flex gap-4 ">
            <div className="relative hidden md:block">
              <Image src={Pic2} className="w-[60px] md:w-[80px] h-[65px] md:h-[80px] mx-auto md:ml-[30px] border-4 border-btnbgColor rounded-full p-1" />
              <Image src={Cote1} className="w-[28px] absolute mx-auto ml-[16px] md:ml-[58px] top-[50px] md:top-[60px] text-btnbgColor" />
            </div>
            <div className="pt-3 text-center md:text-left hidden md:block">
              <Paragraph text="Adam Smith" className="font-openSans text-[14px] md:text-[16px] text-fontColor" />
              <span className="font-openSans text-[14px] md:text-[16px] text-fontColor">Designer</span>
              <div className="flex justify-center md:justify-start mt-1">
                <FaStar className="text-btnbgColor " />
                <FaStar className="text-btnbgColor " />
                <FaStar className="text-btnbgColor " />
                <FaStar className="text-btnbgColor " />
                <FaStarHalfAlt className="text-btnbgColor " />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FeedBackCard
