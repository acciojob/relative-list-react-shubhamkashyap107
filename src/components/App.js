import React from 'react'

const data = [{id : 1, name : "abc"}, {id : 2, name : "abc"}, {id : 3, name : "abc"}, {id : 4, name : "abc"},]


const App = () => {



  return (
    <div id="main">
              <ol key={"relativeList"}>
                {data.map((item) => {
                  return <li key={`relativeListItem1${item.id}`}>{item.name}</li>
                })}
              </ol>
    </div>
  )
}

export default App
