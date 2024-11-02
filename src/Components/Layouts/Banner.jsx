import Container from "../Container"
import Flex from "../Flex"
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import Image from "../Image"
import background2 from '../../assets/background2.png'
import img1 from '../../assets/img1.png'
import Group1 from '../../assets/group1.png'
const Banner = () => {
  return (
    <>
    <div className="relative">
    <Image className="absolute z-20 opacity-15 -top-[110px] -ml-[320px]" src={Group1}/>
   
    </div>
    <Image className="absolute w-full h-[617px]" src={background2} />

    <Container>
     <Flex className="relative max-w-full">
     <Image className="absolute max-w-[600px] -right-24 items-end" src={img1} />
     <div className="max-w-full ">
      <Heading text='Hello! ' as='h2' className="absolute text-white font-bold text-[94px]"/>
      <Paragraph text='I’m Zarror Nibors' className='absolute text-white font-bold text-[94px] mt-24' />
      <Heading text="I’am freelance #UI/UX Desogner# based in Indonesia who loves to craft attractive design experiences for the web." as='h5' className="absolute text-gray-500 text-[18px] pr-[520px] mt-64 "/>

    <button className="relative  absulute items-center justify-center  mt-[376px] px-12 py-5 text-lg leading-9 text-white bg-btnbgColor border border-btnbgColor">
    <span className="absolute inset-1  border-2 border-white"></span>
    <span className="relative z-10 font-openSans font-bold">Contact Me</span>
    </button>
    </div>


     </Flex>
     
    </Container>
    </>
  )
}

export default Banner