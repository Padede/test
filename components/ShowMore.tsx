"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@types";
import { CustomButton } from "@components";
import { ParamsContext } from "@context/ParamsContext";
import { useContext } from "react";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const ctx = useContext(ParamsContext);

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    if (ctx.setValue) {
      ctx.setValue((state) => ({ ...state, limit: newLimit }));
    }
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
