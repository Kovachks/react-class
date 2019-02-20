class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption =  this.handleAddOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            options: props.options
        }
    }

    handleDeleteOptions() {
         this.setState(() => ({ options: [] }))
    }

    handleDelete(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }))
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item '
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
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
                <Header subtitle='Put your life in the hands of a computer'/>
                <Action 
                    hasOptions={this.state.options.length > 0 ? true: false}
                    handlePickOption={this.handlePickOption}    
                />
                <Options 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    options={this.state.options}
                    handleDelete={this.handleDelete}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
        return (
            <div>
                <button 
                    disabled={props.hasOptions ? false: true}
                    onClick={props.handlePickOption}
                >
                    What should I do?
                </button>
            </div>
        )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.map((option) => (
                <Option 
                    optionText={option} 
                    key={option} 
                    handleDelete={props.handleDelete}
                />
                ))
            }
        </div>
    )
}

const Option = (props) => {
        return (
            <div>
                {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleDelete(props.optionText)
                    }}
                >
                    X
                </button>
            </div>
        )
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

        this.setState(() => ({ error: error}))

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