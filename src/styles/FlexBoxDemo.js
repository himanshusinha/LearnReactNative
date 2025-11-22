import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
 
const FlexBoxDemo = () => {
    const data = [
        "small text",
        "medium text length",
        'short',
        'very very long text',
        'demo text',
        'demo flex wrap text list'
    ]
  return (
     <SafeAreaView style={{flex:1,}}>
    <View style={{flexWrap:'wrap',flexDirection:'row'}}>
        {data.map((item,index)=>(
            <View key={index} style={{ margin:10,padding:10,backgroundColor:'orange'}}>
                <Text>{item}</Text>
            </View>
        ))}
    </View>
      
      </SafeAreaView>
  )
}

export default FlexBoxDemo

// flexDirection
// justifyContent -- align child components column(top to bottom) same direction
// alignItems -- align child components opposite direction 
// alignSelf  -- align self opposite direction 
// flexWrap -- child align 
