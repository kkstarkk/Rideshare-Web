import React from "react";
import Image from "next/image";

import Step from "./Step";
import steps from "@/data/landing-page/steps.json";
import mobileImage from "../../../public/images/landing-page/mobile-image.png";

const HowItWorks = () => {
  return (
    <div>
      <h1 className="text-5xl mb-10 font-semibold">
        How Ride<span className="text-primary">Share</span> Works
      </h1>

      <p className="px-3 text-xl mb-10 text-center">
        Download and install the Ride Share app. Enter the required fields and
        create your user account. when approved you may start using or providing
        a service.
      </p>

      <div className="grid auto-rows-max sm:grid-cols-3 justify-items-center sm:justify-items-center">
        <div className="order-2 sm:order-1" data-testid="step_1">
          {steps.map((step) => {
            const isEven = step.step_number <= 2;

            const item = isEven ? (
              <Step
                step_number={step.step_number}
                title={step.title}
                description={step.description}
                key={step.step_number}
              />
            ) : (
              <div></div>
            );
            return item;
          })}
        </div>
        <div
          className="order-1 sm:order-2 mb-10 sm:mb-4"
          data-testid="mobile_image"
        >
          <Image
            src={mobileImage}
            alt="a mobile app UI for rideshare application"
            className="aspect-auto"
            width={300}
            height={430}
          />
        </div>
        <div className="order-3 " data-testid="step_2">
          {steps.map((step) => {
            const isEven = step.step_number > 2;
            const item = isEven ? (
              <Step
                step_number={step.step_number}
                title={step.title}
                description={step.description}
                key={step.step_number}
              />
            ) : (
              <div></div>
            );
            return item;
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
