const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        console.log(app.options)
        e.target.elements.option.value = '';
        reactRender()
    }
}

const removeOptions = () => {

    app.options = [];

    reactRender();

};

const onMakeDecision = () => {

    const randomNum = Math.floor(Math.random() * app.options.length)

    const option = app.options[randomNum]

    console.log(option)

};

const appRoot = document.getElementById('app');

const reactRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length) > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What shou ld I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form  onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>

            </form>
        </div>
    );
    
ReactDOM.render(template, appRoot)
}

reactRender()