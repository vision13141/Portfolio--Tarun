import Slider from "react-slick";
import FeedBackCard from '../PageCards/FeedBackCard';

const FeedBack = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Keeping 1 slide to show for both mobile and desktop
        slidesToScroll: 1,
        arrows: false, // Disable arrows for simplicity
        responsive: [
            {
                breakpoint: 768, // Target mobile devices
                settings: {
                    dots: true,
                    arrows: false,
                    play: "auto",
                }
            }
        ]
    };

  return (
    <>
      <section className='mt-32 bg-bgColor px-4 md:px-0'> {/* Add padding for mobile */}
        <Slider {...settings}>
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
        </Slider>
      </section>
    </>
  );
}

export default FeedBack
