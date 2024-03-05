// import {
//   ChartDot,
//   ChartPath,
//   ChartPathProvider,
//   ChartYLabel,
// } from '@rainbow-me/animated-charts';
// import { useEffect, useState } from 'react';
// import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
// import { useSharedValue } from 'react-native-reanimated';

// import type { SparklineItem } from '@/services/cryptoService';

// const { width: SIZE } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   chartWrapper: {
//     marginVertical: 16,
//   },
//   titlesWrapper: {
//     marginHorizontal: 16,
//   },
//   upperTitles: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   upperLeftTitle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 24,
//     height: 24,
//     marginRight: 4,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#A9ABB1',
//   },
//   lowerTitles: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   boldTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 18,
//   },
//   chartLineWrapper: {
//     marginTop: 40,
//   },
// });

// interface ChartProps {
//   currentPrice: number;
//   logoUrl: string;
//   name: string;
//   symbol: string;
//   priceChangePercentage7d: number;
//   sparkline: SparklineItem[];
// }

// const Chart = ({
//   currentPrice,
//   logoUrl,
//   name,
//   symbol,
//   priceChangePercentage7d,
//   sparkline,
// }: ChartProps) => {
//   const latestCurrentPrice = useSharedValue(currentPrice);
//   const [chartReady, setChartReady] = useState(false);

//   const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

//   useEffect(() => {
//     latestCurrentPrice.value = currentPrice;

//     setTimeout(() => {
//       setChartReady(true);
//     }, 0);
//   }, [currentPrice, latestCurrentPrice]);

//   const formatUSD = (value: any) => {
//     'worklet';

//     if (value === '') {
//       const formattedValue = `$${latestCurrentPrice.value.toLocaleString(
//         'en-US',
//         { currency: 'USD' },
//       )}`;
//       return formattedValue;
//     }

//     const formattedValue = `$${parseFloat(value)
//       .toFixed(2)
//       .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
//     return formattedValue;
//   };

//   if (sparkline.length === 0) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <ChartPathProvider
//       data={{ points: sparkline, smoothingStrategy: 'bezier' }}
//     >
//       <View style={styles.chartWrapper}>
//         {/* Titles */}
//         <View style={styles.titlesWrapper}>
//           <View style={styles.upperTitles}>
//             <View style={styles.upperLeftTitle}>
//               <Image source={{ uri: logoUrl }} style={styles.image} />
//               <Text style={styles.subtitle}>
//                 {name} ({symbol.toUpperCase()})
//               </Text>
//             </View>
//             <Text style={styles.subtitle}>7d</Text>
//           </View>
//           <View style={styles.lowerTitles}>
//             <ChartYLabel format={formatUSD} style={styles.boldTitle} />
//             <Text style={[styles.title, { color: priceChangeColor }]}>
//               {priceChangePercentage7d.toFixed(2)}%
//             </Text>
//           </View>
//         </View>

//         {chartReady ? (
//           <View style={styles.chartLineWrapper}>
//             <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
//             <ChartDot style={{ backgroundColor: 'black' }} />
//           </View>
//         ) : null}
//       </View>
//     </ChartPathProvider>
//   );
// };

// export default Chart;
