import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";
import Ratings from "@/app/utils/Ratings";

type Props = {};

export const reviews = [
  {
    name: "Aklank Jain",
    star:<Ratings rating={4.5}/>,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "AWS DEVOPS | DevOps Engineer",
    comment:
      "The depth of knowledge and expertise in AWS, DevOps, and Azure provided by FlexiClass is impressive. The platform excels in explaining complex AWS concepts in a clear and understandable manner, which is truly commendable. FlexiClass emphasizes hands-on lab exercises over theoretical learning, ensuring practical, real-world experience. Additionally, the platform supports students with interview preparations, real-time scenario project work, and job support. FlexiClass also offers guidance for career transitions into AWS-DevOps roles. It stands out as one of the best training platforms, providing mentorship, career coaching, and personalized support. FlexiClass is a remarkable resource in the e-learning space, and I highly recommend it.",

  },
  {
    name: "Biplab Raut",
    star:<Ratings rating={4}/>,
    avatar: "https://i.postimg.cc/9fqB77wP/u1.jpg",
    profession: "AWS Solution Architect | Cloud Engineering",
    comment:
    "The way FlexiClass presents the material is very engaging. The platform involves you in real-world examples, making it easier to analyze and understand the course content. The use of practical examples enhances comprehension and makes learning more effective. FlexiClass is extremely helpful in making complex topics more accessible.",
  },
  {
    name: "Sumer",
    star:<Ratings rating={5}/>,
    avatar: "https://i.postimg.cc/SRQ8D2Rv/u2.jpg",
    profession: "AWS Solution Architect | DevOps Engineering",
    comment:
    "I really want to thank FlexiClass for the training it provided. I can confidently say that it's been the most innovative, practical, and effective course I have attended. All thanks to FlexiClass for sharing knowledge and improving my perception towards technology."
  },
  {
    name: "Shweta Patel",
    star:<Ratings rating={4.5}/>,
    avatar: "https://i.postimg.cc/4NFG4YCb/u5.jpg",
    profession: "Amazon Web Services | DevOps Engineer",
    comment:
     
"I had a great time learning new concepts from scratch on FlexiClass. The practical exercises were very helpful, and the study guide covered all the topics, which is beneficial for exam preparation. I would recommend anyone to join FlexiClass if you are new to this technology, as the way they explain concepts with examples is extremely good.",
  },
  {
    name: "Andrew Onyango",
    star:<Ratings rating={4}/>,
    avatar: "https://i.postimg.cc/NF09R3Ph/u3.jpg",
    profession: "Microsoft Azure | Azure Cloud Engineer",
    comment:
    "I had a fantastic training session with Vish through FlexiClass. His deep understanding of MS Azure made the lecture incredibly valuable, significantly advancing my journey toward Azure certification. Highly recommend FlexiClass for anyone looking to enhance their skills and achieve their certification goals!",
  },
  {
    name: "Masoom Mujawar",
    star:<Ratings rating={5}/>,
    avatar: "https://i.postimg.cc/CMtLvnRn/u4.jpg",
    profession: "AWS Plus Devops Training | DevOps Engineer",
    comment:
    "FlexiClass offers an exceptional learning experience. The instructors have extensive expertise in their respective fields, including AWS, DevOps, networking, and Azure. The teaching approach is thorough and engaging, providing clear and detailed explanations of each topic and concept. The instructors go above and beyond, offering additional classes to ensure that every student understands and practices the material fully. The learning environment is friendly and conducive to gaining knowledge. Overall, FlexiClass stands out as the best platform with real-time experienced trainers, making it a top choice for professional development.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src="https://i.postimg.cc/50BhvmPL/below-hero-section.png"
            // src={require("../../../public/assests/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${ styles.title } 800px: !text - [40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            {/* add any lines if u want */}
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(4)]:!mt-[-40px] md:[&>*:nth-child(6)]:!mt-[0px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
