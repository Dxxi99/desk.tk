"use client";

import { ReactNode } from "react";

export const EdgeStoreProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export const useEdgeStore = () => ({
  uploadFile: () => Promise.resolve({ url: "" }),
  deleteFile: () => Promise.resolve(),
});
