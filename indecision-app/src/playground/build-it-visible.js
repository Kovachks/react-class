class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleVisibility() {
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility === true ? <p>These are some details</p> : null}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))