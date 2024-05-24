import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2  text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2 text-gradient font-semibold`} >
          Platform Terms and Condition
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h2 className={`${styles.subtitle} font-semibold`}>Last updated: May 17, 2024</h2>
            <p>&#8226; This Privacy Policy includes important information about your personal data and we encourage you to read it carefully.</p>
            <p>&#8226; We collect information about you during the checkout process in our store.</p><br />
            <p className={`${styles.title} !text-start pt-2 text-gradient font-semibold`}>What we collect and store</p>
            <p>While you visit our site, we’ll track the following:</p>
            <p>&#8226; Products you’ve viewed: we’ll use this to, for example, show you products you’ve recently viewed</p>
            <p>&#8226; Location, IP address, and browser type: we’ll use this for purposes like estimating taxes and shipping</p>
            <br />
            <p>We’ll also use cookies to keep track of cart contents while you’re browsing our site. When you purchase from us, we’ll ask you to provide information, including your name, billing address, email address, payment details. We’ll use this information for purposes such as:</p><br />

            <p>&#8226; Send you information about your account and order</p>
            <p>&#8226; Respond to your requests, including refunds and complaints</p>
            <p>&#8226; Process payments and prevent fraud</p>
            <p>&#8226; Comply with any legal obligations we have, such as calculating taxes</p>
            <p>&#8226; If you create an account, we will store your name, address, and email, where your purchased products and license keys will be linked.</p>
            <p>&#8226; Feature customer company logo on branding pages.</p>
            <br />

            <p>We generally store information about you for as long as we need the information for the purposes we collect and use it, and we are not legally required to continue to keep it. For example, we will store order information for three years for tax and accounting purposes. This includes your name, email address, and company name.</p>
            <p>We will also store comments or reviews if you choose to leave them.</p><br />
            <p className={`${styles.title} !text-start pt-2 text-gradient font-semibold`}>Who on our team has access</p>
            <p>Members of our team have access to the information you provide us. For example, both Administrators and Shop Managers can access the following:</p>
            <p>&#8226; Order information like what was purchased, when it was purchased and where it should be sent, and</p>
            <p>&#8226; Customer information like your name, email address, and company name.</p>

            <br />
            <p className={`${styles.title} !text-start pt-2 text-gradient font-semibold`}>Payments</p>
            <p className="font-semibold">Stripe</p>
            <p>We accept Credit card payments through Stripe only in EU region. The payment interface is managed by Stripe and we do not store credit card data on our website.</p>
            <p>Please see the <a className={`${styles.input} font-semibold`} target="_blank" href="https://www.paypal.com/us/legalhub/privacy-full">Stripe Privacy Policy</a> for more details.</p>

          </p>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
          </p>
          </ul>
      </div>
    </div>
  );
};

export default Policy;
