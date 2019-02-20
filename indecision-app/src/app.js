class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer',
            options: [],
            pickedOption: null
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption =  this.handleAddOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
    }

    handleDeleteOptions() {
         this.setState(() => {
             return {
                 options: []
             } 
         })
    }

    handleAddOption(option) {
        
        if (!option) {
            return 'Enter valid value to add item '
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    handlePickOption() {
        let pickedOption = this.state.options[Math.floor(Math.random() * this.state.options.length)]

        this.setState(() => {
            return {
                pickedOption: pickedOption
            }
        })
        alert(pickedOption)
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0 ? true: false}
                    handlePickOption={this.handlePickOption}    
                />
                <Options 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    options={this.state.options}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    disabled={this.props.hasOptions ? false: true}
                    onClick={this.props.handlePickOption}
                >
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {[p]
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((option) => <Option optionText={option} key={option} />)}
            </div>
        )
    }
}

class Option extends React.Component {

    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        let option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option)
        this.setState(() => {
            return {
                error
            }
        })
        e.target.option.value = ''
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))