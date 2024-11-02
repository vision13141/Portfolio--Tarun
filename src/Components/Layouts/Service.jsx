import Container from "../Container"
import Flex from "../Flex"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

import Image from "../Image"

import { HiOutlineArrowLongRight } from "react-icons/hi2";

import Bulet1 from '../../assets/bulet1.png'
import ServiceDatas from "../../datas/ServiceDatas"
import ServiceCard from "../../Components/PageCards/ServiceCard"

const Service = () => {
  const serviceData = ServiceDatas();
  return (
    <>

        <div className="pt-[180px] pb-[100px] ">
          <div className="relative">
        <Image src={Bulet1} className='absolute mt-[120px]'/>
        </div>
        <Container>

          <Flex className="">
          <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor text-center ml-[520px] "/>
          <Heading text="My Services" as="h6" className="font-openSans text-[18px] text-center text-btnbgColor font-medium leading-normal "/>
          </Flex>
       
        <Paragraph className="text-fontColor font-openSans text-[50px] font-bold text-center pl-[260px] pr-[250px] leading-2 " text="Provide Wide Range of Digital Services."/>
        <Flex className='ml-20 gap-x-20 justify-center pt-12'>
        {serviceData?.serData.map((el,index) => (
        <div className='' key={index}>
          <ServiceCard
            img={el.img}
            title={el.title}
            text={el.text}
          />
        </div>

        ))},
        </Flex>





        </Container>
        </div>
    </>

  )
}

export default Service

{/*    */}