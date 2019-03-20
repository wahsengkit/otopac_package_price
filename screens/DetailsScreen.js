import React from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../reducers/general';
import { WebView } from "react-native-webview";

class DetailsScreen extends React.Component{

    componentDidMount(){
        //load data
        this.props.getData();

    }

    static navigationOptions = {
        title: 'OTOPAC輪胎電池服務中心 - 花紋介紹',
        headerStyle: {
            backgroundColor: '#ebc552',
        },
    };

    render(){

        const { navigation, items } = this.props;
        // const itemId = navigation.getParam('itemId', 'NO-ID');
        const brand_code = navigation.getParam('brand_code', 'No brand_code');
        const pattern = navigation.getParam('pattern', 'No pattern');
        const key = navigation.getParam('key', 'No key');
        const gift = navigation.getParam('gift', 'Some default value');
        const worryfree =  navigation.getParam('worryfree', 'Some default value');
        const is_rof = navigation.getParam('is_rof', 'No is_rof');
        const loading = navigation.getParam('loading', 'No loading');
        const speed = navigation.getParam('speed', 'No speed');
        const origin = navigation.getParam('origin', 'No origin');
        const youtube_id = navigation.getParam('youtube_id', 'No youtube_id');
        const pattern_detail = navigation.getParam('pattern_detail', 'No pattern_detail');
        const pattern_image = navigation.getParam('pattern_image', 'No pattern_detail');
        // const loading = navigation.getParam('loading', 'No loading');


        return <View>
                <View style={{ backgroundColor: '#ebc552'}}>
                    <Text style={{ color: 'blue', fontSize: 32, fontWeight: 'bold' }}>搜尋: {brand_code + ' ' + pattern} </Text>
                </View>
                <ScrollView>
                    <View>
                        <View style={styles.PatternScreen}>
                            <View style={styles.tyredetail}>
                                <View style={styles.tyreImage}>
                                    {/*<Image source={require('../img/tyres/goodyear/gya.jpg')} style={{width:300,height:300}} />*/}
                                    <Image source={{uri: (pattern_image)}} style={{width:300,height:300}} />
                                </View>
                                <View style={styles.tyredesc}>
                                    <View>
                                        <Text style={styles.tyredetailText}>
                                            {pattern_detail}
                                        </Text>
                                        {/*<WebView*/}
                                            {/*source={{ html: "<b>Hello World!!!</b>" }}*/}
                                        {/*/>*/}
                                    </View>
                                    {(brand_code === 'GY'  && is_rof === true ) ? <Image source={{uri: 'https://www.goodyear.hk/zh/wp-content/themes/hattframework/images/tyres/run_on_flat_logo.png' }} style={{width: 130, height: 33}} /> : <Text></Text> }
                                </View>
                            </View>
                        </View>
                        <View style={styles.detailSubScreen}>
                            {(gift==1?<View style={styles.detailGiftScreen}>
                                <Image source={{uri: 'https://www.goodyearautocare.com.hk/img/gift/GY150Cup.png', width: 200, height: 200}} style={styles.ItemImage} />
                                <Text style={styles.detailGiftText}>
                                    現凡購買4條Goodyear指定花紋私家車輪胎, 即可獲贈Goodyear 120週年限量紀念水晶杯一套。
                                </Text>
                            </View>:<Text></Text>)}
                            {(worryfree==1?<View style={styles.detailWorryFreeoScreen}>
                                <Image source={{uri: 'https://www.goodyearautocare.com.hk/img/gift/WorryFreeLogo.png', width: 460, height: 200}}/>
                                <Text style={styles.detailWorryFreeoText}>
                                    現凡購買Goodyear指定花紋, 即送90天安心保養。{'\n\n'}Goodyear 90天安心保養由安裝日期起計 90天內, 如因路面災害引致無法修補的損毀, 即可以免費更換一條全新輪胎*。
                                    {'\n\n'}
                                    *有關保養需先購買一條全新輪胎, 舊損毀輪胎將會收回檢查, 檢查後確認將會扣除輪胎的安裝費用, 餘額全數退回。
                                    {'\n'}
                                    #優惠受有關條款及細則約束。
                                    {'\n'}
                                    +華成遠東有限公司 及 Goodyear 擁有最終決定權。
                                </Text>
                            </View>:<Text></Text>)}

                        </View>
                    </View>
                </ScrollView>
               </View>
    }
}


const styles = StyleSheet.create({
    PatternScreen: {
        //flexDirection:'row',
        padding: 20,
    },
    tyredetail: {
        flexDirection:'row',
    },
    tyreImage: {
      width: '30%',
    },
    tyredesc: {
        width: '70%',
    },
    detailSubScreen: {
        flexDirection:'row',
    },
    detailGiftScreen: {
        width: '50%',
        padding: 10,

        alignItems: 'center',
    },
    detailWorryFreeoScreen: {
        width: '50%',
        padding: 10,
    },
    tyredetailText: {
        fontSize: 20,
        color: '#000000',
    },
    detailGiftText: {
        fontSize: 20,
        paddingTop: 15,
        color: '#000000',
    },
    detailWorryFreeoText: {
        fontSize: 20,
        height: 350,
        paddingRight: 10,
        paddingTop: 15,
        color: '#000000',
    }
})

export default connect((state)=>{
    return {core:state.core}
}, {getData})(DetailsScreen)