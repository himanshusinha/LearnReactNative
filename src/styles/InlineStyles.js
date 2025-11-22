import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const InlineStyles = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 40 }}>InlineStyles Demo</Text>
    </SafeAreaView>
  );
};

export default InlineStyles;
