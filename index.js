const Button = props => {
  //  Write your code here.
  const {className, buttonText} = props
  return <button className={`${className}`}>{buttonText} </button>
}

const element = (
  //  Write your code here.
  <div>
    <h1>Social Button </h1>
    <div className='buttonContainer'>
      <Button buttonText='Like' className='yellow' />
      <Button buttonTexte='Comment' className='white' />
      <Button buttonText='Share' className='blue' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
