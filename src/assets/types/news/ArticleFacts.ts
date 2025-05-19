/**
 * Data-interface for each box with ArticleFacts
 */
export interface ArticleFacts {
    articleCount: number;
    businessCategoryCount: number;
    crimeCategoryCount: number;
    cultureCategoryCount: number;
    politicsCategoryCount: number;
    scienceCategoryCount: number;
    sportsCategoryCount: number;
    cityWithMostCoverage: string;
    mostFrequentNewsSource: string;
}