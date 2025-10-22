import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "../utils/axios.js";

const useGetTrendingContent = () => {
	const [trendingContent, setTrendingContent] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const { contentType } = useContentStore();

	useEffect(() => {
		const getTrendingContent = async () => {
			try {
				setIsLoading(true);
				setError(null);
				const res = await axios.get(`/api/v1/${contentType}/trending`);
				setTrendingContent(res.data.content);
			} catch (error) {
				console.error("Error fetching trending content:", error);
				setError(error.message);
				setTrendingContent(null);
			} finally {
				setIsLoading(false);
			}
		};

		getTrendingContent();
	}, [contentType]);

	return { trendingContent, isLoading, error };
};
export default useGetTrendingContent;