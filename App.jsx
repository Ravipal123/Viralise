import { useState } from 'react'
import './App.css'

import SearchTeamTournaments from './components/SearchTeamTournaments'
function App() {
  return (
    <>
      <div className="container mx-auto">
      <SearchTeamTournaments />
        {/* <Fetchapi /> */}
      </div>
    </>
  )
}

export default App
