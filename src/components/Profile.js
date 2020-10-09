import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Gitf')}>
                            <Image style={styles.back} source={require('../icon/back.png')}></Image>
                        </TouchableOpacity>
                        <Text style={styles.titleLeft}>Cá nhân</Text>
                    </View>



                    <Image style={styles.imgHeaderRight} source={require('../icon/edit.png')}></Image>

                </View>

                <View style={styles.view1}>
                    <Image source={require('../icon/avt1.png')} style={styles.imga}></Image>
                    <View style={styles.view2}>
                        <Text style={styles.text1}>Đặng Công Trãi</Text>
                        <Text style={styles.text2}>0918 729 589</Text>
                    </View>

                </View>

                <View style={styles.view3}>
                    <View style={styles.view4}>
                        <Text style={styles.texta1}>689.000</Text>
                        <Text style={styles.textd}>Số điểm</Text>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.texta2}>16</Text>
                        <Text style={styles.textd}>Đã Rinh</Text>
                    </View>
                </View>
                <View style={styles.view1}>
                    <Image source={require('../icon/gift.png')} style={styles.ab}></Image>
                    <View style={styles.viewb}>
                        <Text style={styles.texta}>Quà đã đổi</Text>

                    </View>

                </View>
                <View style={styles.view1}>
                    <Image source={require('../icon/history.png')} style={styles.ab}></Image>
                    <View style={styles.viewb}>
                        <Text style={styles.texta}>Lịch sử Tiri</Text>

                    </View>

                </View>
                <View style={styles.view1}>
                    <Image source={require('../icon/diamond.png')} style={styles.ab}></Image>
                    <View style={styles.viewb}>
                        <Text style={styles.texta}>Thử Thách cùng Tiri</Text>

                    </View>

                </View>
                <View style={styles.view1}>
                    <Image source={require('../icon/setting.png')} style={styles.ab}></Image>
                    <View style={styles.viewb}>
                        <Text style={styles.texta}>Cài đặt</Text>

                    </View>

                </View>
                <View style={styles.view1}>
                    <Image source={require('../icon/hotro.png')} style={styles.ab}></Image>
                    <View style={styles.viewb}>
                        <Text style={styles.texta}>Hỗ trợ</Text>

                    </View>

                </View>
                <View style={{
                    borderColor: '#C0C0C0',
                    borderBottomWidth: 1
                }}>
                    <View style={styles.view1}>
                        <Image source={require('../icon/home.png')}
                            style={styles.ab}></Image>
                        <View style={styles.viewb}>
                            <Text style={styles.texta}>Về Tiri</Text>

                        </View>

                    </View>
                </View>
                <View style={styles.view1}>
                    <Image source={require('../icon/logout.png')} style={styles.ab}></Image>
                    <View style={styles.viewb}>
                        <Text style={styles.texta}>Đăng xuất</Text>

                    </View>

                </View>
                <View style={styles.view1}>

                    <View style={styles.viewb}>
                        <Text style={styles.textc}>Phiên bản 1.2.3</Text>

                    </View>

                </View>


            </View>

        );
    }
}




export default Profile;
const styles = StyleSheet.create({
    texta2: { marginLeft: 60, marginTop: 10, color: '#00CC00', fontWeight: 'bold' },
    texta1: { marginLeft: 50, marginTop: 10, color: '#FF6600', fontWeight: 'bold' },
    ab: { width: 25, height: 25, margin: 15 },
    textd: { marginLeft: 52, marginTop: 5, color: '#C0C0C0', fontSize: 12 },
    viewb: { fontSize: 16, },
    view4: { borderColor: '#C0C0C0', borderTopWidth: 1, borderBottomWidth: 1, borderRightWidth: 1, width: 150, height: 60, backgroundColor: 'white' },
    view5: { borderColor: '#C0C0C0', borderTopWidth: 1, borderBottomWidth: 1, width: 150, height: 60, backgroundColor: 'white' },
    view3: { flex: 1, flexDirection: 'row', },
    view2: { flexDirection: 'column', flex: 1, marginTop: 20, marginLeft: 10 },
    view1: { flex: 1, flexDirection: 'row', backgroundColor: 'white', height: 50 },
    container: {
        backgroundColor: 'white',
        alignSelf: 'center', maxWidth: '100%', borderColor: '#C0C0C0', borderWidth: 1, marginTop: 50
    },
    textc: { marginTop: 16, marginLeft: 100, color: '#C0C0C0' },
    texta: { fontSize: 13, marginTop: 18, fontWeight: 'bold', marginLeft: 12 },
    text1: {
        fontSize: 16, fontWeight: 'bold', marginTop: 15
    },
    text2: { color: '#C0C0C0', marginTop: 5 },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10
    },
    headerLeft: {

        flexDirection: 'row'
    },
    back: {
        marginTop: 10,
        width: 20,
        height: 20,
        marginLeft: 20
    },
    imga: {
        width: 70, height: 70, margin: 20, borderRadius: 50
    },
    titleLeft: {
        color: 'black', marginLeft: 90, marginTop: 10, fontWeight: 'bold'
    },
    headerRight: {
        marginLeft: 'auto',
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    textHeaderRight: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10
    },
    imgHeaderRight: {
        marginTop: 10,
        width: 15,
        height: 15,
        marginLeft: 70, marginRight: 24

    },

});
