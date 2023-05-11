//REACT JSX
//1. Định nghĩa:
    
//2. Without JSX
    const myElement = React.createElement('h1', {}, 'I do not use JSX!');

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
//3. With JSX:
    const myElement = <h1>I Love JSX!</h1>;

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
