import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PharmacyModal = ({setModalVisible, savePharmacy, editedPharmacy}) => {
  const [pharmacyName, setPharmacyName] = useState('');
  const [medicineData, setMedicineData] = useState([
    {type: '', medicines: ['']},
  ]);

  useEffect(() => {
    if (editedPharmacy) {
      setPharmacyName(editedPharmacy.name);
      setMedicineData(
        editedPharmacy.Medicine_Type.map(data => ({
          type: data.Med_type,
          medicines: data.med.map(med => med.name),
        })),
      );
    }
  }, [editedPharmacy]);

  const addMedicineType = () => {
    setMedicineData([...medicineData, {type: '', medicines: ['']}]);
  };

  const addMedicine = typeIndex => {
    const updatedMedicineData = [...medicineData];
    updatedMedicineData[typeIndex].medicines.push('');
    setMedicineData(updatedMedicineData);
  };

  const saveData = () => {
    if (!pharmacyName.trim()) {
      Alert.alert('Please Write a Pharmacy Nane');
      return;
    }

    for (const data of medicineData) {
      if (!data.type.trim()) {
        Alert.alert('Please Write the medicineData');
        return;
      }

      for (const medicine of data.medicines) {
        if (!medicine.trim()) {
          Alert.alert('please Write Medicine Name');
          return;
        }
      }
    }

    const newPharmaData = {
      name: pharmacyName,
      Medicine_Type: medicineData.map(data => ({
        Med_type: data.type,
        med: data.medicines.map(medicine => ({name: medicine})),
      })),
    };

    savePharmacy(newPharmaData);

    setModalVisible(false);
    setPharmacyName('');
    setMedicineData([{type: '', medicines: ['']}]);
  };

  return (
    <ScrollView style={{flex: 1, padding: 10}}>
      <View>
        <Text style={styles.ModalUserPharmacyText}>Pharmacy Details</Text>
      </View>

      <View style={{}}>
        <Text style={styles.ModalEnterUserText}>Enter Pharmacy Name:</Text>
        <TextInput
          style={styles.ModalTextInputName}
          placeholder="Enter pharmacy name"
          value={pharmacyName}
          onChangeText={text => setPharmacyName(text)}
        />

        <Text style={styles.ModalEnterUserHobbiesText}>
          Enter Medicine Types:
        </Text>
        <View style={styles.IconPulsUserHobbies}>
          {medicineData.map((data, typeIndex) => (
            <View key={typeIndex} style={styles.MainMedicintype}>
              <View style={styles.TypeInputContainer}>
                <TextInput
                  style={styles.ModalTextInputHobbies}
                  placeholder={`Medicine Type ${typeIndex + 1}`}
                  value={data.type}
                  onChangeText={text => {
                    const updatedMedicineData = [...medicineData];
                    updatedMedicineData[typeIndex].type = text;
                    setMedicineData(updatedMedicineData);
                  }}
                />
                {typeIndex === medicineData.length - 1 && (
                  <TouchableOpacity
                    style={styles.AddTypeMain}
                    onPress={addMedicineType}>
                    <Text style={styles.AddType}>Add-Type</Text>
                  </TouchableOpacity>
                )}
              </View>
              {data.medicines.map((medicine, medIndex) => (
                <View key={medIndex} style={styles.medicine_mainContainer}>
                  <TextInput
                    style={styles.ModalTextInputHobbies}
                    placeholder={`Medicine ${typeIndex + 1}-${medIndex + 1}`}
                    value={medicine}
                    onChangeText={text => {
                      const updatedMedicineData = [...medicineData];
                      updatedMedicineData[typeIndex].medicines[medIndex] = text;
                      setMedicineData(updatedMedicineData);
                    }}
                  />
                  {medIndex === data.medicines.length - 1 && (
                    <TouchableOpacity
                      style={styles.AddCircleSharpIcon}
                      onPress={() => addMedicine(typeIndex)}>
                      <Ionicons
                        name="add-circle-sharp"
                        size={45}
                        color="blue"
                      />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.ModalAddButton} onPress={saveData}>
        <Text style={styles.ModalAddButtonText}>
          {editedPharmacy ? 'Update Pharmacy' : 'Add Pharmacy'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ModalUserPharmacyText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#2f5241',
    fontWeight: '700',
  },
  ModalEnterUserText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'PlaypenSans-Medium',
  },
  ModalTextInputName: {
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 2,
    paddingLeft: 10,
    backgroundColor: '#d3d3d3',
  },
  ModalEnterUserHobbiesText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'PlaypenSans-Medium',
  },
  ModalTextInputHobbies: {
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 2,
    // paddingLeft: 5,
    backgroundColor: '#d3d3d3',
    width: '70%',
    height: 40,
    // marginBottom: 10,
  },
  AddCircleSharpIcon: {
    alignSelf: 'flex-end',
    marginBottom: 30,
    // backgroundColor: 'red',
  },
  ModalAddButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
  },
  ModalAddButtonText: {
    fontSize: 18,
    color: 'black',
    backgroundColor: 'lightblue',
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center',
    borderRadius: 30,
  },
  IconPulsUserHobbies: {
    flexDirection: 'column',
  },
  AddType: {
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'lightblue',
    color: 'black',
  },
  AddTypeMain: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  MainMedicintype: {
    flexDirection: 'colum',
    justifyContent: 'space-between',
  },
  medicine_mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  TypeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default PharmacyModal;
