// Sentiment.ts

export interface SentimentAnalysisResult {
    sentiment: string;
    score: number;
}

export interface SentimentStats {
    positiveCount: number;
    negativeCount: number;
    neutralCount: number;
}