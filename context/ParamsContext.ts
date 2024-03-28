"use client";
import React, { Dispatch, SetStateAction, createContext } from "react";

interface Data {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
  setValue?: Dispatch<SetStateAction<Data>>;
}

export const defaultContextData: Data = {
  manufacturer: "",
  year: 2022,
  fuel: "",
  limit: 10,
  model: "",
};

export const ParamsContext = createContext(defaultContextData);
