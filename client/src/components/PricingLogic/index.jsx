import React, { useState } from "react";
import BundleBoxes from "./BundleBoxes";
import BundleInput from "./BundleInput";
import BUNDLE_CONSTANTS from "../../bundleConstants";


export const PricingContainer = () => {
  const [bundleInputValue, setBundleInputValue] = useState(
    BUNDLE_CONSTANTS[0].BundleDiscription
  );
  const getValue = (value) => {
    setBundleInputValue(JSON.parse(value));
  };
  return (
    <div>   
        <BundleInput getValue={getValue} BUNDLE_CONSTANTS={BUNDLE_CONSTANTS} />
        <BundleBoxes bundleInputValue={bundleInputValue} />
    </div>
  );
};
export default PricingContainer;
