import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2  text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2 text-gradient font-semibold`}>
          Refund Policy
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <p>Thanks for purchasing our products (or subscribing to our services) at Flexi Class.</p>
            <p>We offer a full money-back guarantee for all purchases made on our website. If you are unsatisfied with the product you purchased from us, you can get your money back. You are eligible for a full reimbursement within three calendar days of your purchase.</p>
            <p>After three days, you will no longer be eligible and cannot receive a refund. We encourage our customers to try the product (or service) in the first three days after their purchase to ensure it fits their needs.</p><br />
            <p className={`${styles.subtitle} text-gradient font-semibold`}>How to claim a refund?</p>
            <p>To avail refund, send an email to flexiclass.connect@gmail.com
              Copyright © 2024 Flexi Class | All Rights Reserved
              stating details of the service or product you need a refund for. You can also share why you are unsatisfied with the service or product. This will help us improvise our service in the future.
              We request you uninstall and delete the copy of the software after the refund is approved.</p>
              
          </p>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
