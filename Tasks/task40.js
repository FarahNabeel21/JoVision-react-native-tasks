import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { SET_TEXT, TOGGLE_COMPONENT } from './actions';

export const setText = (text) => ({
  type: SET_TEXT,
  payload: text,
});

export const toggleComponent = () => ({
  type: TOGGLE_COMPONENT,
});

const initialState = {
  text: '',
  isComponentVisible: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, text: action.payload };
    case TOGGLE_COMPONENT:
      return { ...state, isComponentVisible: !state.isComponentVisible };
    default:
      return state;
  }
};

const store = createStore(reducer);

class ComponentOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleTextChange = (text) => {
    this.setState({ text });
    this.props.setText(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={this.handleTextChange}
          placeholder="Enter text"
        />
      </View>
    );
  }
}

class MainComponent extends React.Component {
  render() {
    const { isComponentVisible, toggleComponent } = this.props;

    return (
      <View style={styles.container}>
        <Button
          title={isComponentVisible ? 'Hide Component One' : 'Show Component One'}
          onPress={toggleComponent}
        />
        {isComponentVisible && <ConnectedComponentOne />}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isComponentVisible: state.isComponentVisible,
});

const mapDispatchToProps = { toggleComponent, setText };

const ConnectedMainComponent = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
const ConnectedComponentOne = connect(null, { setText })(ComponentOne);

const App = () => (
  <Provider store={store}>
    <ConnectedMainComponent />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    paddingHorizontal: 10,
  },
});

export default App;
