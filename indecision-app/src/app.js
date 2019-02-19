class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['Thing one', 'Thing two', 'Thing four']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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

    handlePick() {
        alert('handlePick')
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {

        console.log(this.props.options)

        // alert('some message')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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

    handleAddOption(e) {
        e.preventDefault()
        let optionAdd = e.target.option.value.trim();
        optionAdd ? alert(optionAdd) : null;
        e.target.option.value = ''
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const jsx = (
    <div>
        <IndecisionApp />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))