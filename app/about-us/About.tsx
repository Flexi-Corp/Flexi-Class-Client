import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Flexi Class ?</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          At FlexiClass, we re revolutionizing the way people learn online. Our
          innovative Learning Management System (LMS) embraces cutting-edge
          technology to offer a seamless and enriching educational experience.
          <br />
          <br />
          <h4 className="text-xl text-gradient font-bold">
            Why Choose FlexiClass
          </h4>
          <p>
            Innovative Technology: We leverage the latest technologies to
            deliver a seamless learning experience. Customizable Solutions:
            FlexiClass is designed to adapt to the unique needs of each
            educational environment. Security and Reliability: Your data and
            transactions are secured with industry-leading practices. Continuous
            Improvement: We re constantly evolving and enhancing FlexiClass to
            stay ahead of the curve. Join Us on the Learning Journey
          </p>
          <br />
          <p>
            Whether you re a learner eager to explore new horizons or an
            institution seeking to transform your training programs, FlexiClass
            welcomes you to join us on this exciting learning journey.
          </p>
          <br />
          <h4 className="text-xl text-gradient font-bold">Our Vision</h4>
          We envision a future where learning knows no bounds. FlexiClass is
          driven by the belief that education should be accessible, adaptable,
          and empowering for everyone.
          <br />
          <br />
          <h4 className="text-xl text-gradient font-bold">Who We Are</h4>
          FlexiClass is more than just a platform; we re a team of dedicated
          professionals committed to shaping the future of online education.
          With expertise in software development, user experience design, and
          educational technology, we strive to create a platform that meets the
          diverse needs of learners and educators alike.
          <br />
          <br />
          <h4 className="text-xl text-gradient font-bold">What We Do </h4>
          FlexiClass provides a robust and scalable platform for training
          institutes, instructors, and learners. Our feature-rich system
          includes user-friendly interfaces, powerful analytics tools, secure
          payment gateways, and real-time communication capabilities.
          <br />
          <br />
          <h4 className="text-xl text-gradient font-bold">Get Started Today</h4>
          <p>
            Discover the power of FlexiClass and unlock a world of possibilities
            in online education. Sign up now and experience the future of
            learning firsthand.
          </p>
        </p>
        <br />
        <span className="text-[22px]">
          ---------------------------------------------------------------------------------------------------------------------------------------------------
        </span>
        <br />
        <br />
        <h5 className="text-[18px] font-Poppins">

          <span className="font-semibold">Founders: </span>
          <a
            href="https://www.linkedin.com/in/pramodacharya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient font-bold hover:text-blue-500 hover:underline"
          >
            Pramod Acharya
          </a>
          <span className="font-bold text-xl"> & </span>
          <a
            href="https://www.linkedin.com/in/charu-pankaj-sharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient font-bold hover:text-blue-500 hover:underline"
          >
            Charu P. Sharma
          </a>
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
