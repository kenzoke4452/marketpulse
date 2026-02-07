class SentimentAnalyzer {
    private keywords = {
        bullish: ['profit', 'rise', 'growth', 'bull', 'gain'],
        bearish: ['loss', 'fall', 'decline', 'bear', 'drop']
    };

    analyze(text: string): { sentiment: string; confidence: number } {
        let bullishScore = 0;
        let bearishScore = 0;

        const words = text.toLowerCase().split(/\W+/);
        words.forEach(word => {
            if (this.keywords.bullish.includes(word)) {
                bullishScore++;
            } else if (this.keywords.bearish.includes(word)) {
                bearishScore++;
            }
        });

        const totalScore = bullishScore - bearishScore;
        let sentiment = 'neutral';
        let confidence = 0;

        if (totalScore > 0) {
            sentiment = 'bullish';
            confidence = Math.min(1, totalScore / words.length);
        } else if (totalScore < 0) {
            sentiment = 'bearish';
            confidence = Math.min(1, -totalScore / words.length);
        }

        return { sentiment, confidence };
    }
}

export default SentimentAnalyzer;