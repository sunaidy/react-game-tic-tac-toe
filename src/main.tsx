import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './App'
import './styles.css'
import ShoppingList from './components/ListProd'
import Game from './components/Game-My'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Profile />
    <ShoppingList></ShoppingList>

    <Game></Game>
  </React.StrictMode>,
)

