import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
         selectedOption: undefined
    }

    handleDeleteOptions = () => {
         this.setState(() => ({ options: [] }))
    };

    handleDelete = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item '
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    };

    handlePickOption = () => {
        let pickedOption = this.state.options[Math.floor(Math.random() * this.state.options.length)]

        this.setState(() => {
            return {
                selectedOption: pickedOption
            }
        })
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    componentDidMount() {
        try {
            const storage = JSON.parse(localStorage.getItem('options'))
            if (storage) {
                this.setState(() => ({options: storage}))
            };
        } catch(e) {
            alert(e)
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        };

     };

    render() {
        return (
            <div>
                <Header subtitle='Put your life in the hands of a computer'/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0 ? true: false}
                        handlePickOption={this.handlePickOption}    
                    />
                    <div className="widget">
                        <Options 
                            handleDeleteOptions={this.handleDeleteOptions} 
                            options={this.state.options}
                            handleDelete={this.handleDelete}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption} 
                        />
                    </div>
                </div>
                <OptionModal 
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
            </div>
        )
    };
};

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp