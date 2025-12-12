// edgestore 완전히 비활성화 (에러 없애기용)
"use client";

export const EdgeStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const useEdgeStore = () => ({
  uploadFile: () => Promise.resolve({ url: "" }),
  deleteFile: () => Promise.resolve(),
});
