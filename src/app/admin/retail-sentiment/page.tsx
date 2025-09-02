import CurrencyPanelContent from '@/components/currency-fundamental/CurrencyPanelContent';
import styles from './RetailSentiment.module.scss';
import RetailSentimentCurrencyPairsTable from '@/components/retail-sentiment/tables/RetailSentimentCurrencyPairsTable';

export default function RetailSentimentPage() {
    return (
        <>
            <div>
                <RetailSentimentCurrencyPairsTable />
                <CurrencyPanelContent light>
                    <h1>Retail Sentiment</h1>
                    <p>Retail sentiment refers to the collective emotions, opinions, and behaviors of consumers toward a brand, product, or market trend. It plays a crucial role in shaping purchasing decisions, influencing demand, and predicting market shifts. With the rise of social media and online reviews, businesses now have access to vast amounts of customer feedback that can be analyzed using AI and sentiment analysis tools. Understanding retail sentiment helps companies optimize marketing strategies, improve customer experience, and stay ahead of competitors. Positive sentiment can boost sales and brand loyalty, while negative sentiment highlights areas for improvement.</p>
                </CurrencyPanelContent>
            </div>
        </>
    );
}