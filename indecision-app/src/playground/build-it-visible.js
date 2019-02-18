let buttonVal = false


const showDetails = () => {
    buttonVal = !buttonVal
    reactRender()
}

const appRoot = document.getElementById('app');

const reactRender = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>{buttonVal ? 'Hide Details' : 'Show Details'}</button>
            {buttonVal === true ? <p>Hey.  These are some details you can now see!</p> : null}
        </div>
    )

    ReactDOM.render(template, appRoot)
}

reactRender()