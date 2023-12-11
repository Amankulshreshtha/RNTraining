import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
import PharmacyModal from '../ModalScreen/PharmacyModal';

const PharmaData = () => {
  const [pharmas, setPharmas] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [editedPharmacy, setEditedPharmacy] = useState(null);

  emptyPharmacyData = () => (
    <View style={styles.EmptyView}>
      <Text style={styles.emptyListText}>Parmacy list is empty</Text>
    </View>
  );

  const renderPharma = ({item}) => (
    <View style={styles.renderUser}>
      <TouchableOpacity onPress={() => editPharmacy(item)}>
        <View style={styles.editAndNameButton}>
          <Text style={styles.renderUserItem}>{item.name}</Text>
          <Icons
            style={styles.editButton}
            name="application-edit"
            size={40}
            color="blue"
          />
        </View>
      </TouchableOpacity>

      <View style={styles.item_Medicine_Type}>
        {item.Medicine_Type.map((medType, index) => (
          <View key={index}>
            <Text style={styles.medTypeTitle}>{medType.Med_type}</Text>
            {medType.med.map((med, j) => (
              <Text key={j} style={styles.medName}>
                {med.name}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );

  const addPharmacy = () => {
    setModalVisible(true);
    setEditedPharmacy(null);
  };

  const editPharmacy = pharmacyData => {
    setModalVisible(true);
    setEditedPharmacy(pharmacyData);
  };

  const savePharmacy = newPharmaData => {
    if (editedPharmacy) {
      const updatedPharmas = pharmas.map(item =>
        item.name === editedPharmacy.name ? newPharmaData : item,
      );
      setPharmas(updatedPharmas);
    } else {
      setPharmas([...pharmas, newPharmaData]);
    }
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.mainReturnOfPage}>
      <View style={styles.header}>
        <Icons name="hospital" size={50} color="red" />
        <Text style={styles.pharmacyText}>Pharmacy Data</Text>
        <Icons name="hospital" size={50} color="red" />
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          data={pharmas}
          renderItem={renderPharma}
          keyExtractor={index => index.toString()}
          ListEmptyComponent={emptyPharmacyData}
        />
      </View>

      <TouchableOpacity style={styles.AddPharmacyButton} onPress={addPharmacy}>
        <Text style={styles.AddPharmacyButtonText}>Add Pharmacy</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <PharmacyModal
          setModalVisible={setModalVisible}
          savePharmacy={savePharmacy}
          editedPharmacy={editedPharmacy}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainReturnOfPage: {
    flex: 1,
    padding: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  renderUser: {
    flex: 1,
    borderRadius: 20,
    elevation: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 6,
    shadowColor: 'black',
    marginBottom: 10,
    backgroundColor: '#98AFC7',
    padding: 5,
  },

  renderUserItem: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    width: '90%',
  },

  editButton: {},

  editAndNameButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },

  pharmacyText: {
    fontSize: 35,
    textAlign: 'center',
    color: '#681313',
    fontWeight: '700',
    flex: 1,
  },

  AddPharmacyButton: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'brown',
    marginTop: 20,
  },

  AddPharmacyButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  medName: {
    marginRight: 10,
    fontSize: 18,
    textAlign: 'auto',
    marginHorizontal: 20,
    width: '100%',
    color: 'black',
  },

  ModalTextInputHobbies: {
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '70%',
  },

  item_Medicine_Type: {
    flexDirection: 'column',
    width: '100%',
    padding: 15,
    backgroundColor: 'lightyellow',
    borderRadius: 20,
  },

  medTypeTitle: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },

  flatListContainer: {
    flex: 1,
  },

  emptyListText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'gray',
    marginTop: 20,
  },
  EmptyView: {
    alignItems: 'center',
  },
});

export default PharmaData;
