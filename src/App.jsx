import React from 'react'

const App = () => {
  const name = "Joseph";
  const x = 10;
  const y = 20;

  const loggedIn = true
  const names = ['Bard', 'Marry', 'Joe', 'Trump']

  return (
    <div>
      <div className='text-5xl'>
        App
      </div>


      <p>Hello {name}</p>
      <p>
        the sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name) => (
          <li>
            Mr {name}
          </li>
        ))}
      </ul>
      {
        loggedIn ? <h1>Hello Member</h1> : <h1>Hello guest</h1>
      }
      {
        loggedIn && <h1>Hello Member</h1>
      }
    </div>
  )
}

export default App
