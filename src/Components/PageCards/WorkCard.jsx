import Image from '../Image'

const WorkCard = ({ img, text, Btext }) => {
  return (
    <div className="mt-5 group w-full md:w-[650px]"> {/* Full width for mobile, 650px for larger screens */}
      <div className="relative overflow-hidden inline-block">
        <Image src={img} classname="w-full" />
        <div className="w-full md:w-[570px] bg-navColor py-6 absolute bottom-[-150px] group-hover:bottom-0 duration-500">
          <h2 className='ml-5 font-openSans font-semibold text-[18px] md:text-[24px] text-white'>{text}</h2> {/* Responsive text size */}
          <p className='ml-5 font-openSans text-[14px] md:text-[16px] text-white pt-2'>{Btext}</p> {/* Responsive text size */}
        </div>
      </div>
    </div>
  )
}

export default WorkCard;
