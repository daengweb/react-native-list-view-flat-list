/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  ListView,
  FlatList
} from 'react-native';

//const LISTVIEW_PROPS =
//  ['dataSource','enableEmptySections','initialListSize', 'onChangeVisibleRows', 'onEndReached', 'onEndReachedThreshold', 'pageSize', 'removeClippedSubviews', 'renderFooter', 'renderHeader', 'renderRow', 'renderScrollComponent', 'renderSectionHeader', 'renderSeparator', 'scrollRenderAheadDistance', 'stickyHeaderIndices', 'stickySectionHeadersEnabled']

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      flatListProps: [
        {
          title: 'Belajar React Native',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        },
        {
          title: 'Belajar Laravel',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        },
        {
          title: 'Javascript',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        },
        {
          title: 'Daengweb',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        },
        {
          title: 'data',
          description: 'plain array of data'
        },
        {
          title: 'Linux',
          description: 'Sebuah Sistem operasi'
        },
        {
          title: 'Editor',
          description: 'Digunakan untuk menuliskan code program'
        }, 
        {
          title: 'Browser',
          description: ''
        }
      ]
    };
    this.showList = this.showList.bind(this);
  }

  getFlatList() {
    return (

      <FlatList key="flatList"
        style={styles.flatList}
        data={this.state.flatListProps}
        ListHeaderComponent={() => (
            <Text style={styles.header} key="FlatList props">List Data Flat List</Text>
        )}
        keyExtractor={(item, index) => (`${item}--${index}`)}
        renderItem = {({ item, index }) => 
          <View style={styles.flatlistRow}>
            <View style={styles.rowHeader}>
              <Text>{item.title}</Text>
            </View>
            <View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        } />
    );
  }

  //CONSTRUCTOR LIST VIEW
  //constructor(props) {
    //super(props);
    //this.ds = new ListView.DataSource({
      //rowHasChanged: (r1, r2) => r1 !== r2
    //})
    //this.state = {
      //dataSource: this.ds.cloneWithRows([])
    //};
    //this.showList = this.showList.bind(this);
  //}

  //METHOD LIST VIEW
  //getListView() {
  //  return [
  //    <Text key="listView props title">Menampilkan List Data</Text>,
  //    <ListView key="listView"
  //      style={styles.listView}
  //      dataSource={this.state.dataSource}
  //      renderRow={(rowData) => (
  //        <View style={styles.listRow}>
  //          <Text>{rowData}</Text>
  //        </View>
  //      )}
  //    />
  //  ]
  //}

  showList() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        showList: true,
        loading: false
      })
    }, 5000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native: Mengolah List Data</Text>
        { this.state.showList ?
          this.getFlatList() :
          this.state.loading ?
            <ActivityIndicator color="black" size="small" animating />:
            <Button title="show" color="blue" onPress={this.showList} />
        }
      </View>
    );
  }

  //RENDER METHOD FLAT LIST
  //render() {
    //return (
      //<View style={styles.container}>
        //<Text style={styles.welcome}>React Native: Mengolah List Data</Text>
        //{ this.state.showList ?
            //this.getListView() :
            //this.state.loading ?
              //<ActivityIndicator color="black" size="small" animating /> :
              //<Button color="black"
                //onPress={this.showList} title="Show" />
        //}
      //</View>
  //  //);
  }
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    backgroundColor: 'gray',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 30
  },
  listView: {
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    padding: 20
  },
  flatList: {
    flex: 1
  },
  flatlistRow: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10
  },
  rowHeader: {
    marginTop: 10,
    borderBottomWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    padding: 5
  },
  listRow: {
    flex: 1,
    justifyContent: 'center',
    height: 30,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray'
  },
  description: {
    justifyContent: 'center'
  }
});
