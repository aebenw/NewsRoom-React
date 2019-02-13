export const fetchSourcesAction = (sources) => ({type: 'FETCH_SOURCES', sources});
export const showSourceAction = (source) => ({type: "SHOW_SOURCE", source})

export const fetchArticlesAction = (articles) => ({type: 'FETCH_HEADLINES', articles});
export const showArticleAction = (article) => ({type: "SHOW_ARTICLE", article})

export const foundSources = (sources) => ({type: "FOUND_SOURCES", sources })
