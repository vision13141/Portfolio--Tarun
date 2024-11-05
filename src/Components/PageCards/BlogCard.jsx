import Image from "../Image";
import Paragraph from "../Paragraph";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, text, btext, ctext }) => {
  return (
    <>
      <div className="w-full sm:w-[370px] shadow-2xl pb-4">
        {/* Blog image */}
        <Image className="w-full pb-[28px]" src={img} />

        {/* Blog metadata (btext and ctext) */}
        <div className="flex justify-between px-5">
          <p className="text-btnbgColor font-openSans">{btext}</p>
          <p className="font-openSans text-fontColor">{ctext}</p>
        </div>

        {/* Blog title */}
        <h2 className="text-fontColor text-[24px] sm:text-[30px] font-opensans font-semibold leading-9 pb-[20px] pl-5 mt-4 pr-8">
          {title}
        </h2>

        {/* Blog text/description */}
        <Paragraph
          text={text}
          className="text-servicepColor text-[14px] sm:text-[16px] text-fontColor font-regular leading-[24px] sm:leading-[30px] pl-5 pr-8"
        />

        {/* Read more link */}
        <Link to="" className="cursor-pointer">
          <div className="flex ml-5">
            <h3 className="mt-[10px] sm:mt-[15px] font-bold font-openSans hover:text-btnbgColor">
              Read More
            </h3>
            <HiOutlineArrowLongRight className="text-[22px] sm:text-[26px] text-fontColor hover:text-btnbgColor mt-[10px] sm:mt-4" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
