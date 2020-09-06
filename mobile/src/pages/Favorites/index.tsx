import React from 'react'
import { View, ScrollView } from 'react-native'

import PageHeader from '../../components/PageHeader'
import TeacherItems from '../TeacherItems'

import styles from './styles'

function Favorites() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <PageHeader title="Meus proffys favoritos" />

        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          <TeacherItems />
          <TeacherItems />
          <TeacherItems />
          <TeacherItems />
          <TeacherItems />
          <TeacherItems />
        </ScrollView>
      </View>
    </View>
  )
}

export default Favorites
