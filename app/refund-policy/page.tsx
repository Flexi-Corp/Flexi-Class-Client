"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Policy from "./Refund";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Refund Policy - Flexi Class"
        description="Flexi Class is a learning management system for helping programmers and all learners as well."
        keywords="programming,mern,cloud computing"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Policy />
      <Footer />
    </div>
  );
};

export default Page;
