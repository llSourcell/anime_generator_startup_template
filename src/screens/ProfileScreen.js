import React from 'react'
import { View, StyleSheet } from 'react-native'
import { logoutUser } from '../api/auth-api'
import Button from '../components/Button'
import TopBar from '../components/TopBar'

import { ChangeEvent, useRef, useState } from 'react';

//   return (
//     <div>
//       <div>Upload a file:</div>

//       {/* 👇 Our custom button to select and upload a file */}
//       <button onClick={handleUploadClick}>
//         {file ? `${file.name}` : 'Click to select'}
//       </button>

//       {/* 👇 Notice the `display: hidden` on the input */}
//       <input
//         type="file"
//         ref={inputRef}
//         onChange={handleFileChange}
//         style={{ display: 'none' }}
//       />
//     </div>
//   );
// }

export default function ProfileScreen() {
  return (
    <>
      <TopBar title="Profile" />
      <View style={styles.container}>
        <Button mode="contained" onPress={logoutUser} style={{ width: 120 }}>
          Logout
        </Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
