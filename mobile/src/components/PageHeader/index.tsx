import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProps {
  title: string,
  headerRigh?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRigh, children }) => {
  const { navigate } = useNavigation()
  
  function hangleGoBack(){
    navigate('Landing')
  }

  return(
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={hangleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRigh}
      </View>

      {children}
    </View>
  )
}

export default PageHeader
