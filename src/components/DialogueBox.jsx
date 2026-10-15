import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
// import { styles } from './../screens/contact/style';

const DialogueBox = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.showButton} onPress={()=> setShowModal(true)}>
        <Text style={styles.buttonText}>Show Modal</Text>
      </TouchableOpacity>


      <Modal 
        visible={showModal}
        transparent={true}
        animationType= 'fade'
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverley}>
            <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Modal Title</Text>
                <Text style={styles.modalMessage}>Modal Text message</Text>
                <TouchableOpacity style={styles.closeButton} onPress={()=> setShowModal(false)}>
                    <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    showButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'green'
    },
    closeButton: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        // elevation: 5,
        backgroundColor: 'red'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    modalOverley: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalView: {
        width: '80%',  
        height: '20%',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    modalTitle: {
        color: 'green',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default DialogueBox