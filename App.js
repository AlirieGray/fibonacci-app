import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


class A extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      prev: 1
    }
  }

  static navigationOptions = { title: "Fibonnaci" };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.number}> 1 </Text>
        <Button
          onPress={() => {
            navigate('b', { prev: this.state.prev, current: this.state.current});
          }}
          title="Next Number"
        />
      </View>

    );
  }
}

class B extends React.Component {


  fibonacci(prev, cur) {
    var oldPrev = prev;
    var newPrev = cur;
    cur = oldPrev + cur;
    return [newPrev, cur];
  }

  static navigationOptions = { title: "Fibonnaci" };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text style={styles.number}> {params.current} </Text>
        <Button
          onPress={() => {
            var newFibs = this.fibonacci(params.prev, params.current)
            navigate('b', {prev: newFibs[0], current: newFibs[1]});
          }}
          title="Next Number"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 55,
    marginBottom: 20
  }
});

export default App = StackNavigator({
  a: { screen: A },
  b: { screen: B}
});
