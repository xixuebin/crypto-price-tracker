import axios from 'axios';
import moment from 'moment';

export interface SparklineItem {
  x: number;
  y: number;
}

export interface MarketData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_7d_in_currency: number;
  image: string;
  sparkline_in_7d: {
    price: SparklineItem[];
  };
}

const formatSparkline = (numbers: number[]): SparklineItem[] => {
  const sevenDaysAgo = moment().subtract(7, 'days').unix();
  const formattedSparkline = numbers.map((item: number, index: number) => {
    return {
      x: sevenDaysAgo + (index + 1) * 3600,
      y: item,
    };
  });

  return formattedSparkline;
};

const formatMarketData = (data: MarketData[]): MarketData[] => {
  const formattedData: MarketData[] = [];

  data.forEach((item: MarketData) => {
    const prices = item.sparkline_in_7d.price.map(
      (sparklineItem: SparklineItem) => sparklineItem.y,
    );
    const formattedSparkline = formatSparkline(prices);

    const formattedItem: MarketData = {
      ...item,
      sparkline_in_7d: {
        price: formattedSparkline,
      },
    };

    formattedData.push(formattedItem);
  });

  return formattedData;
};

export const getMarketData = async (): Promise<MarketData[]> => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d',
    );
    const { data } = response;
    const formattedResponse = formatMarketData(data);
    return formattedResponse;
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    return [];
  }
};
