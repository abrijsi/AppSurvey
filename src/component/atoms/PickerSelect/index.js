import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utility';

const PickerSelect = ({
  label,
  isJenisKelamin,
  isStatus,
  isJenisAgunan,
  isBatasTanah,
  isPeruntukanTanah,
  isKependudukan,
  isFasum,
  isJenisBangunan,
  isKontruksiBangunan,
  isTataRuangBangunan,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  if (isJenisKelamin) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Pilih Jenis Kelamin" />
            <Picker.Item label="Laki-laki" value="Laki-laki" />
            <Picker.Item label="Perempuan" value="Perempuan" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isStatus) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Status" />
            <Picker.Item label="Lajang" value="Lajang" />
            <Picker.Item label="Menikah" value="Menikah" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isJenisAgunan) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Jenis Agunan" />
            <Picker.Item label="SHM" value="SHM" />
            <Picker.Item label="HGB" value="HGB" />
            <Picker.Item label="BPKP" value="BPKP" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isBatasTanah) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Batas Tanah" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isPeruntukanTanah) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Peruntukan Tanah" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isKependudukan) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Kependudukan" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isFasum) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Fasum" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isJenisBangunan) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Jenis Bangunan" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isKontruksiBangunan) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Kontruksi Bangunan" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isTataRuangBangunan) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item color="white" label="Tata Ruang Bangunan" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
      </View>
    );
  }
}

export default PickerSelect;

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
