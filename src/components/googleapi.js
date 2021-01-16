import React, { Component } from 'react';
import PropTypes from 'prop-types';


class GoogleDictionaryApi extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: true,
        result: '',
        trigger: false,
      };
  
      //this.triggetNext = this.triggetNext.bind(this);
    }
  
    componentWillMount() {
      const self = this;
      let steps = this.props;
      const search = steps.previousStep.value;
      const queryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
  
      const xhr = new XMLHttpRequest();
  
      xhr.addEventListener('readystatechange', readyStateChange);
  
      function readyStateChange() {
        if (this.readyState === 4) {
          const data = JSON.parse(this.responseText);
          console.log(data);
          const bindings = data;
          if (bindings && bindings.length > 0) {
            self.setState({ loading: false, result: data[0].meanings[0].definitions[0].definition });
          } else {
            self.setState({ loading: false, result: 'Not found.' });
          }
        }
      }
  
      xhr.open('GET', queryUrl);
      xhr.send();
    }
  
 
  
    render() {
      const { trigger, loading, result } = this.state;
    
      return (
        <div>
          { result }
        </div>
        
      );
    }
  }
  

  GoogleDictionaryApi.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
  };
  
  GoogleDictionaryApi.defaultProps = {
    steps: undefined,
    triggerNextStep: undefined,
  };

export default GoogleDictionaryApi;
