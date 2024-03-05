import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWarpper: { flexDirection: 'row', alignItems: 'center' },
  rightWarpper: { alignItems: 'flex-end' },
  titleWarpper: { marginLeft: 10 },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#A9ABB1',
  },
  image: {
    height: 48,
    width: 48,
  },
  /* ... */
});
interface ListItemProps {
  name: string;
  symbol: string;
  currentPrice: number;
  priceChangePercentage7d: number;
  logoUrl: string;
  onPress: () => void;
}

export const ListItem = ({
  name,
  symbol,
  currentPrice,
  logoUrl,
  onPress,
  priceChangePercentage7d,
}: ListItemProps) => {
  const priceChangeColor: string =
    priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        {/* left view */}
        <View style={styles.leftWarpper}>
          <Image source={{ uri: logoUrl }} style={styles.image} />
          <View style={styles.titleWarpper}>
            <Text style={styles.title}>{name}</Text>
            {/* <Text style={styles.subtitle}> {symbol.toUpperCase()}</Text> */}
            <Text style={styles.subtitle}> {symbol}</Text>
          </View>
        </View>
        {/* right view */}
        <View style={styles.rightWarpper}>
          <Text style={styles.title}>
            ${currentPrice.toLocaleString('en-US', { currency: 'USD' })}
          </Text>
          <Text style={[styles.subtitle, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
