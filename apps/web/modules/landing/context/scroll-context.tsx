"use client";

import { createContext, useContext, RefObject } from "react";

interface ScrollContextType {
  scrollRef: RefObject<any>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
}

export const ScrollProvider = ScrollContext.Provider;
