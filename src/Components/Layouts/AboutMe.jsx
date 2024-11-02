import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"

import Img2 from "../../assets/img2.png"
import Img3 from "../../assets/img3.png"
import Img4 from "../../assets/img4.png"

import Heading from "../Heading"
import Paragraph from "../Paragraph"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Line1 from '../../assets/line1.png';
const Whowe = () => {
  return (
    <>
        <div className="relative">
      <Image src={Line1} className='z-20 absolute ml-[1380px]'/>
      </div>
    <section className="pt-[50px]">

        <Container>
            <Flex className="justify-start">
                <div className="w-[870px]">
                  <Flex className='gap-x-5'>
                    <div>
                    <Image className="w-[370px]" src={Img2} />
                    </div>
                    <div className="">
                      <Image src={Img3} className='mb-8'/>
                      <Image src={Img4}/>
                    </div>
                  </Flex>
                </div>

                <div className="w-[910px] ml-10 ">
                <Flex>
                <HiOutlineArrowLongRight className="text-[40px] mt-2 text-btnbgColor "/>
                <div className="mt-3 px-2">
                  <Paragraph text="About Me" className='text-btnbgColor font-medium text-[18px]'/>
                </div>
                </Flex>
                  <div>
                  <Heading as='h3' text="I Enjoy Solving Problems With Scalable Solutions" className="text-[50px] font-medium text-green-900 "/>
                <Paragraph text="Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur aeci velit, sed quia non numquam eius modi tempora incidunt lao magnam aliquam quaerat voluptatem reprehenderit. " className="text-green-800 text-sm font-openSans font-regular leading-[30px] pt-[5px]"/>
                <Paragraph text="Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem reprehenderit non numquam eius. " className="text-green-800 text-sm font-openSans font-regular pt-[10px] pr-[30px] leading-[30px]"/>



                  </div>
                  <button className="relative  items-center justify-center mt-[20px] px-12 py-3.5 text-lg leading-9 text-white bg-btnbgColor border border-btnbgColor">
                  <span className="absolute inset-1  border-2 border-white"></span>
                  <span className="relative z-10">Download CV</span>
                  </button>

                             
                </div>
                
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Whowe