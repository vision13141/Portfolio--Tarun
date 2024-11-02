import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import Logo2 from '../../assets/Logo2.png'
import List from '../List'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="py-7 bg-bannerBg relative z-40 border">
        <Container>
            <Flex className="justify-between items-center">
            <div className="max-w-[220px]">
            <Image src={Logo2} alt="" className='cursor-pointer'/> 
          </div>
          <div className="max-w-[686px] ml-[40px] ">
            <ul>
              <Flex className="justify-between gap-x-4">
                <Flex>
                <List to="#" text="Home"  className="text-navColor hover:text-btnbgColor text-lg font-openSans font-semibold "/>
                
                </Flex>
                <Flex>
                <List to="#" text="Pages" className="text-navColor hover:text-btnbgColor text-lg font-openSans font-semibold "/>
                
                </Flex>
                <Flex>
                <List to="#" text="Service" className="text-navColor hover:text-btnbgColor text-lg font-openSans font-semibold "/>
                </Flex>
                <Flex>
                <List to="#" text="Blog" className="text-navColor hover:text-btnbgColor text-lg font-openSans font-semibold "/>
                
                </Flex>
                <Flex>
                <List to="#" text="Contact" className="text-navColor hover:text-btnbgColor text-lg font-openSans font-semibold "/>
                
                </Flex>
              </Flex>
            </ul>
          </div>
          <div className="max-w-[230px] text-right">
          <Link className="relative  items-center justify-center px-12 py-3.5 text-lg leading-9 text-white bg-btnbgColor border border-btnbgColor">
                  <span className="absolute inset-1  border-2 border-white"></span>
                  <span className="relative z-10">Download CV</span>
                  </Link>
          </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar