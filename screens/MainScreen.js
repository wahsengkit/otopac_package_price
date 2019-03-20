import React from 'react';
import {  SectionList, StyleSheet,ScrollView, View, Text, TextInput, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../reducers/general';

class MainScreen extends React.Component{
    static navigationOptions = {
        title: 'OTOPAC輪胎電池服務中心',
        headerStyle: {
            backgroundColor: '#ebc552',
        },

    };


    SearchByKeyword(searchs){
        // let Arrays = searchs.split(" ");
        // console.log("SecTest",SecTest)
        // Arrays.forEach(Array => {
        //
        //     return thirdFinded
        //     console.log("2",thirdFinded)
        // })
        this.state.itemss = '';
        const { items } = this.props;
        this.state.itemss = items.filter(x => x.sizeonly.includes(searchs));
        console.log("SearchByKeyword",this.state.itemss)
    }

    constructor(props) {
        super(props);
        this.state = { text: '',
                       itemss: ''};

    }

    componentDidMount(){
        //load data
        this.props.getData();
    }

            render(){

                const { navigation, items } = this.props;
                console.log(this.state)
                const product_json = (this.state.itemss == ''  ? items : this.state.itemss);
                return <View style={{flex: 1}}>
                            <View style={styles.fixSearchBar}>
                                <Text style={styles.fixSearchTitle}>
                                    搜尋:
                                </Text>
                                <TextInput
                                    style={styles.fixSearchInput}
                                    onChangeSearch={this.SearchByKeyword(this.state.text)}
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                />
                            </View>
                            <ScrollView>
                                <View style={styles.container}>
                                <SectionList
                                    sections={product_json}
                                    renderItem={({item}) => (
                                        <TouchableHighlight onPress={() => navigation.navigate('Detail',item.key,'')} underlayColor="white">
                                            <View style={styles.sectionItem} >
                                                <View style={styles.ItemPattern}>
                                                    <Text style={styles.sectionItemPattern}>{item.brand_code} {item.code} {item.loading+item.speed} {item.origin}</Text>
                                                </View>
                                                <View style={styles.ItemWorryFree}>
                                                    {item.worryfree == 1 ? <Image source={{uri: 'https://www.goodyearautocare.com.hk/img/gift/WorryFreeLogo.png', width: 110, height: 50}} style={styles.ItemImage} /> : <Text></Text>}
                                                </View>
                                                <View style={styles.ItemGift}>
                                                    {(item.gift == 1 ) ? <Image source={{uri: 'https://www.goodyearautocare.com.hk/img/gift/GY150Cup.png', width: 64, height: 64}} style={styles.ItemImage} /> : <Text></Text>}
                                                </View>
                                                <View style={styles.ItemUnit}>
                                                    <Text style={styles.sectionItemUnit}>{(item.price*1)+100}</Text>
                                                </View>
                                                <View style={styles.ItemASet}>
                                                    <Text style={styles.sectionItemASet}>{(item.price*4)}</Text>
                                                </View>
                                                <View style={styles.ItemPackage}>
                                                    <Text style={styles.sectionItemPackage}>{(item.price*4)+500} </Text>
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                    )}

                                    renderSectionHeader={({section}) => (
                                        <View>
                                            <View style={styles.sectionHeader}>
                                                <View style={styles.HeaderSize}>
                                                    <Text style={styles.sectionHeaderSize}>{section.size}</Text>
                                                </View>
                                                <View style={styles.HeaderWorryFree}>
                                                    <Text style={styles.sectionHeaderWorryFree}>保養</Text>
                                                </View>
                                                <View style={styles.HeaderGift}>
                                                    <Text style={styles.sectionHeaderGift}>禮品</Text>
                                                </View>
                                                <View style={styles.HeaderUnit}>
                                                    <Text style={styles.sectionHeaderUnit}>單價</Text>
                                                </View>
                                                <View style={styles.HeaderASet}>
                                                    <Text style={styles.sectionHeaderASet}>4條價</Text>
                                                </View>
                                                <View style={styles.HeaderPackage}>
                                                    <Text style={styles.sectionHeaderPackage}>4條價 + {'\n'}日本車四輪定位</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                    keyExtractor={(item, index) => index}
                                />
                                </View>
                            </ScrollView>
                            <View style={styles.footercontainer}>
                                <View>
                                    <Text style={styles.sectionHeaderRemark}>*日本車四輪定位原價HKD 800 , 歐洲車四輪定位原價 HKD 1,000 {'\n'}#歡迎使用信用卡及EPS, 以上價格免收信用卡服務費</Text>
                                </View>
                                <View style={styles.sectionHeaderPayment}>
                                    <Image source={require('../img/payment/visa.png')} style={{width:150,height:50}} />
                                    <Text>  </Text>
                                    <Image source={require('../img/payment/master.png')} style={{width: 80,height:50}} />
                                    <Text>  </Text>
                                    <Image source={require('../img/payment/eps.png')} style={{width:60,height:50}} />

                                    <Text>  </Text>
                                </View>
                            </View>
                        </View>
                    }}

const styles = StyleSheet.create({
    fixSearchBar: {
        backgroundColor: '#ebc552',
        height: 75,
        padding: 20,
        flexDirection:'row',
    },
    fixSearchTitle: {
        fontSize: 20,
        color: '#000000',
    },
    fixSearchInput: {
        fontSize: 20,
        color: '#000000',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
    },
    container: {
        flex: 1,
        //paddingTop: 22
    },
    footercontainer: {
        flex: 1,
        //paddingTop: 20,
        flexDirection:'row',
        backgroundColor: '#ebc552',
        paddingBottom: 80,
        fontSize: 20,
        color: '#000000',
        //height: 50,
    },
    sectionHeader: {
        flexDirection:'row',
        backgroundColor: '#ebc552',
        paddingBottom: 15,
    },
    sectionHeaderRemark: {
        flexDirection:'row',
        backgroundColor: '#ebc552',
        paddingTop: 15,
        fontSize: 20,
        color: '#000000',
    },
    sectionHeaderPayment: {
        flexDirection:'row',
        backgroundColor: '#ebc552',
        paddingLeft: 15,
        fontSize: 20,
        paddingTop: 10,
    },
    sectionHeaderSize: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 48,
        fontWeight: 'bold',
        height: 60,
        color: '#000000',
    },
    sectionHeaderWorryFree: {
        fontSize: 24,
        color: '#000000',
    },
    sectionHeaderGift: {
        fontSize: 24,
        color: '#000000',
    },
    sectionHeaderUnit: {
        fontSize: 24,
        color: '#000000',
    },
    sectionHeaderASet: {
        fontSize: 24,
        color: '#000000',
    },
    sectionHeaderPackage: {
        fontSize: 24,
        color: '#000000',
    },
    sectionItem: {
        flexDirection:'row',
        height: 100,
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    sectionItemPattern: {
        padding: 10,
        fontSize: 20,
        height: 60,
        color: '#000000',
    },
    sectionItemUnit: {
        padding: 10,
        fontSize: 20,
        height: 60,
        color: '#000000',
    },
    sectionItemASet: {
        padding: 10,
        fontSize: 20,
        height: 60,
        color: '#000000',
    },
    sectionItemPackage: {
        padding: 10,
        fontSize: 20,
        height: 60,
        color: '#000000',
    },
    HeaderSize: {
        width: 415,
    },
    HeaderWorryFree: {
        paddingTop: 30,
        width: 130,
    },
    HeaderGift: {
        paddingTop: 30,
        width: 100,
    },
    HeaderUnit: {
        paddingTop: 30,
        width: 100,
    },
    HeaderASet: {
        paddingTop: 30,
        width: 100,
    },
    HeaderPackage: {
        paddingTop: 15,
        width: 180,
    },
    ItemPattern: {
        width: 400,
    },
    ItemGift: {
        width: 100,
    },
    ItemWorryFree: {
        width: 140,
    },
    ItemUnit: {
        width: 100,
    },
    ItemASet: {
        width: 100,
    },
    ItemPackage: {
        width: 180,
    },
    ItemImage: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default connect((state)=>{
    return {items:state.general.items}
}, {getData})(MainScreen)