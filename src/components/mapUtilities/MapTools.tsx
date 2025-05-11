import {AddPoint} from "../../features/map/AddPoint.ts";
import {useEffect, useRef, useState} from "react";
import {ArticleData} from "../../assets/types/news/ArticleData.ts";
import {GetArticles} from "../../services/getArticles.tsx";
import {MapToolsProps} from "../../assets/types/map/MapToolsProps.ts";
import {UseFilter} from "../../hooks/FilterContext.tsx";

/**
 * Component for fetching news articles and converting them to markers on the map
 *
 * Uses active filters from FilterContext to decide which articles that are being shown on the map.
 * The filters always starts empty, so all articles are shown when first loading the map.
 * After loading and passing through filtration, the articles are sent to the function {@link AddPoint.ts}
 *
 * The component does not return anything in itself, but are mainly used for handling dataflow andt related tasks.
 */
export default function MapTools({ setMarkers }: MapToolsProps) {
    const hasFetched = useRef(false);
    const [articles, setArticles] = useState<ArticleData[]>([]);
    const { filters } = UseFilter();

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchData = async () => {
            try {
                const data = await GetArticles();
                setArticles(data);
            } catch (error) {
                console.error("Failed to fetch map data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (articles.length === 0) return;

        const filteredArticles = articles.filter((article) => {
            if (!article || !article.continent || !article.category) return;
            if (filters.regions.length > 0 && !filters.regions.includes(article.continent)) {
                return false;
            }
            return !(filters.category.length > 0 && !filters.category.includes(article.category));

        });

        setMarkers([]);
        AddPoint({ setMarkers, articles: filteredArticles });
    }, [articles, filters, setMarkers]);

    return null;
}
