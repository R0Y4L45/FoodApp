import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Svg, { Ellipse, Circle, Path } from 'react-native-svg';
import MainPhoto from '../../assets/mainPhoto.png'

const Btn = () => {
  return (
    <TouchableOpacity className='absolute'>
      <Svg className='left-4 top-12' width="30" height="30" viewBox="0 0 24 24" fill="none">
        <Path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </Svg>
    </TouchableOpacity>
  );
}

const Detail1 = () => {
  return (
    <View className='bg-zinc-100 h-screen w-screen'>
      <View className='relative'>
        <Svg width="430" height="285" viewBox="0 0 430 285" fill="none" >
          <Ellipse cx="216.5" cy="27.5" rx="255.5" ry="257.5" fill="#66B600" />
        </Svg>
        <View className='absolute'>
          <Btn onclick />
          <Text className='absolute justify-center items-center text-bold left-[160px] top-12 text-xl text-white'>Sezar Salad</Text>
        </View>
        <View className='absolute bottom-[172]'>
          <Svg className='left-[66] bottom-[80]' width="61" height="61" viewBox="0 0 61 61" fill="none">
            <Circle cx="30.2223" cy="30.2224" r="30" transform="rotate(-106.323 30.2223 30.2224)" fill="#FFC425" />
          </Svg>
          <Svg className='left-[42] bottom-[90]' width="30" height="30" viewBox="0 0 61 61" fill="none">
            <Circle cx="30.2223" cy="30.2224" r="30" transform="rotate(-106.323 30.2223 30.2224)" fill="#FFC425" />
          </Svg>
          <Svg className='left-[85] bottom-[99]' width="12" height="12" viewBox="0 0 61 61" fill="none">
            <Circle cx="30.2223" cy="30.2224" r="30" transform="rotate(-106.323 30.2223 30.2224)" fill="#FFC425" />
          </Svg>
        </View>
        <Image className='left-[110] bottom-28' source={MainPhoto} />
        <View className='absolute right-[70] top-[350]'>
          <Svg className='left-[100] bottom-[60]' width="12" height="12" viewBox="0 0 61 61" fill="none">
            <Circle cx="30.2223" cy="30.2224" r="30" transform="rotate(-106.323 30.2223 30.2224)" fill="#FFC425" />
          </Svg>
          <Svg className='left-[42] bottom-[90]' width="30" height="30" viewBox="0 0 61 61" fill="none">
            <Circle cx="30.2223" cy="30.2224" r="30" transform="rotate(-106.323 30.2223 30.2224)" fill="#FFC425" />
          </Svg>
          <Svg className='left-[50] bottom-[85]' width="61" height="61" viewBox="0 0 61 61" fill="none">
            <Circle cx="30.2223" cy="30.2224" r="30" transform="rotate(-106.323 30.2223 30.2224)" fill="#FFC425" />
          </Svg>
        </View>
      </View>
      <View className='px-[24] bottom-[100]'>
        <View className='flex flex-row '>
          <Text className={`font-[poppins] text-lg font-bold text-emerald-950`}>Sezar Salad</Text>
          <View className='w-[186]'></View>
          <View className='flex flex-row'>
            <TouchableOpacity className='mx-[8] w-[33] h-[24] items-center justify-center bg-custom-yellow rounded-lg'>
              <Text className='text-white text-xs'>New</Text>
            </TouchableOpacity>
            <TouchableOpacity className='w-[33] h-[24] items-center justify-center bg-custom-red rounded-lg'>
              <Text className='text-white text-xs'>Top</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-full h-[84] mt-[12] pl-2 pt-3 bg-zinc-200 rounded-lg rounded-xl shadow-lg'>
          <View className='flex flex-row'>
            <View className='w-[60] justify-center items-center h-[28] mr-2 bg-white rounded-lg rounded-xl shadow-xl'>
              <Text className='text-custom-green'>5300g</Text>
            </View>
            <View className='w-[60] justify-center items-center h-[28] bg-white rounded-lg rounded-xl shadow-xl'>
              <Text>830 kkal</Text>
            </View>
            <View className='w-[169]'></View>
            <Text className='mt-[5] text-custom-blue font-bold uppercase'>12 azn</Text>
          </View>
          <View className='flex flex-row pt-3'>
            <Text className='uppercase text-custom-grey'>
              z 18.4 | y 7.5 | k 7.8
            </Text>
            <View className='w-[150]'></View>
            <Text className='text-custom-grey font-bold text-custom-orange'>
              4 items left
            </Text>
          </View>
        </View>
        <View className='mt-[20]'>
          <Text className='text-lg font-bold text-emerald-950'>Ingredents</Text>
          <View className='w-full py-[16] px-[10] mt-[12] bg-zinc-200 rounded-lg rounded-xl shadow-lg'>
            <FlatList
              data={[
                { key: 'Lorem ipsum dolor sit amet, consectetur' },
                { key: 'adipisci Lorem ipsum dolor sit amet, ' },
                { key: 'consectetur adipisci Lorem ipsum dolor sit ' },
                { key: 'amet, consectetur adipisci Lorem ipsum' },
                { key: 'dolor sit amet, consectetur adipisci' },
              ]}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Text>{`\u2022 ${item.key}`}</Text>
                  </View>
                );
              }} />
          </View>
        </View>
        <TouchableOpacity className='mt-[90] justify-center items-center bg-custom-green w-full h-[42] rounded-3xl'>
          <Text className='text-white text-xl'>Add to basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customText: {
    fontFamily: 'Poppins-Regular', // Use the actual font family name
    fontSize: 16, // Adjust the font size as needed
  },
});

export default Detail1;