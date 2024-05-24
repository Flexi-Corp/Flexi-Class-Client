import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2  text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2 text-gradient font-bold`}>
          Contact US
        </h1><br />
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <p className={`${styles.subtitle}`}><span className="font-bold" >Email-Us: </span>flexiclass.connect@gmail.com</p><br />
            <p className={`${styles.subtitle}`}> <span className="font-bold">Call-Us: </span>952-371-3456 | 831-732-5870</p><br />
            <p className={`${styles.subtitle}`}><span className="font-bold">Address:</span> Level 1, Explorer Building International Tech Park, Whitefield Main Rd, Bengaluru, Karnataka 560066</p><br/>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.78119422164!2d77.73297997507666!3d12.985842087330836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11fb44001d6d%3A0x600e3e9698db2d17!2sInternational%20Tech%20Park%20Bangalore%20(ITPB)!5e0!3m2!1sen!2sin!4v1715938150098!5m2!1sen!2sin" width="400" height="300" style={{border:0}}  loading="lazy" ></iframe>
          </p>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
