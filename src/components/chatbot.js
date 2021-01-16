import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
//import Post from './Post';
import GoogleDictionaryApi from "./googleapi";
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
const theme = {
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: '#EF6C00',
	headerFontColor: '#fff',
	headerFontSize: '15px',
	botBubbleColor: '#EF6C00',
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a',
};



class SimpleForm extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         totalReactPackages: [],
    //     };
    //   }
    // async componentDidMount() {
    //     // GET request using axios with async/await
    //     const response = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello');
    //     this.setState({ totalReactPackages: response.data.total })
    //     console.log(this.totalReactPackages);
    // }
	render() {
		return (
            <ThemeProvider theme={theme}>
			<ChatBot 
				steps={[
                    {
                        id: 'start',
                        message: 'What is your name?',
                        trigger: 'name',
                      },
                      {
                        id: 'name',
                        user: true,
                        trigger: '1',
                      },
					{
						id:'1', 
						message:'Hi {previousValue}! Which word you want to know?', 
						trigger:'2',
					},
					{
						id:'2', 
                        user: true,
                        trigger: '3',
                        // validator: (value) => {
                        //     if (isNaN(value)) {
                        //       return 'Enter a valid message';
                        //     } 
                        //     return true;
                        // }
                    },
                    {
						id:'3', 
                        component: <GoogleDictionaryApi />,
                        asMessage: true,
                        trigger: '4',
                    },
                    {
                        id:'4', 
						message:'Next word you want to search?', 
                        trigger: '5',
                    },
                    {
                        id:'5', 
                        user: true,
                        trigger: '3',
                    },
                    

				]}
			/>
		   </ThemeProvider>
				);
			}

		}

		export default SimpleForm;