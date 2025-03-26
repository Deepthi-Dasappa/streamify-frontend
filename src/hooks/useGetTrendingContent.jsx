import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";

export default function useGetTrendingContent() {
  const [trendingContent, setTrendingContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      const response = await fetch(`/api/v1/${contentType}/trending`);
      const responseData = await response.json();

      console.log("useGetTrendingContent responseData:", responseData);
      setTrendingContent(responseData.content);
    };

    getTrendingContent();
  }, [contentType]);

  return { trendingContent };
}
