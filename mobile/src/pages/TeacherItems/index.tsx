import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItems() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image        
          style={styles.avatar}
          source={{ uri: 'https://github.com/eliasjuk.png' }} 
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Elias Juk</Text>
          <Text style={styles.subject}>Quimica</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Aprenda algoritimos, seja um ninja ao criar suas aplicações.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora: {'    '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutlineIcon} />*/}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItems