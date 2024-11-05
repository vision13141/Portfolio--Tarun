import { Link } from "react-router-dom";
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Img2 from '../../assets/img2.png';
import { useState } from 'react';
import Bulet2 from '../../assets/bulet2.png';

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject:'',
    massage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      massage:'',
    });
  };
    
  return (
    <section className='mt-32'>
      <div className="relative">
        {/* Hide bullet image on mobile */}
        <Image src={Bulet2} className="absolute top-[70px] left-[1280px] hidden md:block" />
      </div>
      <Container>
        <Flex className="flex-col md:flex-row justify-center items-center">
          {/* Image section */}
          <div className='w-full md:w-[470px]'>
            <Image src={Img2} className='w-[320px] md:w-[480px] mx-auto' />
          </div>

          {/* Form section */}
          <div className='w-full md:w-[670px]'>
            <Flex className="mt-10 items-center justify-center md:justify-start ml-0 md:ml-20">
              <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor" />
              <Heading text="Get In Touch" as="h6" className="font-openSans text-[18px] text-btnbgColor font-medium leading-normal ml-2" />
            </Flex>
            
            <div>
              <Paragraph className="text-fontColor font-openSans text-center md:text-left text-[30px] md:text-[50px] font-medium leading-2 mt-4 ml-0 md:ml-20" text="Feel Free to Contact" />

              <div className="w-full md:w-[580px] mx-auto p-4 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email */}
                  <div className='flex flex-col md:flex-row gap-4'>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border-b border-gray-300"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border-b border-gray-300"
                    />
                  </div>

                  {/* Phone and Subject */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border-b border-gray-300"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border-b border-gray-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="massage"
                      placeholder="Message"
                      value={formData.massage}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border-b border-gray-300"
                      rows="3"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 text-center md:text-left">
                    <button type="submit" className="relative flex items-center justify-center px-12 py-3.5 text-lg leading-9 text-white bg-btnbgColor border border-btnbgColor">
                      <span className="absolute inset-1 border-2 border-white"></span>
                      <span className="relative z-10">Contact us</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default ContactCard
