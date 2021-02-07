const rootContainer = document.getElementById('root');

function Component1(props) {
  return <h1>Francisco</h1>
}

const element = <Component1 />

ReactDOM.render(element, rootContainer);