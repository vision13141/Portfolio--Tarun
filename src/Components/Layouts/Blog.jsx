import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import BlogDatas from "../../datas/BlogDatas";
import BlogCard from "../../Components/PageCards/BlogCard";

const Blog = () => {
  const blogData = BlogDatas();

  return (
    <section className="pt-[40px] md:pt-[180px] pb-[100px]">
      <Container>
        {/* Flex center for icon and heading */}
        <Flex className="ml-0 md:ml-[580px]">
          <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor" />
          <Heading text="Letest Blogs" as="h6" className="font-openSans text-[18px] text-btnbgColor font-medium leading-normal text-center"
          />
        </Flex>

        {/* Heading for blogs */}
        <Paragraph
          className="text-fontColor font-openSans text-[40px] md:text-[50px] font-bold md:text-center leading-2 ml-0 md:ml-[150px]"
          text="Blogs & Articles"
        />

        {/* Blog list - Adjust for mobile */}
        <Flex
          className="flex-col sm:flex-row sm:gap-x-20 ml-0 sm:ml-36 justify-center pt-12 gap-y-8"
        >
          {blogData?.blogData.map((el, index) => (
            <div className="w-full sm:w-auto" key={index}>
              <BlogCard
                img={el.img}
                btext={el.btext}
                ctext={el.ctext}
                title={el.title}
                text={el.text}
              />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Blog;
