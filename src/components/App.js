import React from 'react'

const data = [{id : 1, name : "abc"}, {id : 2, name : "abc"}, {id : 3, name : "abc"}, {id : 4, name : "abc"},]


const App = () => {



  return (
    <div id="main">
              <ol id='relativeList' key={"relativeList"}>
                {data.map((item) => {
                  return <li id={`relativeListItem${item.id}`} key={`relativeListItem${item.id}`}>{item.name}</li>
                })}
              </ol>
    </div>
  )
}

export default App
