
import { Layout } from 'antd'
import { Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { Outlet } from 'react-router-dom'
import './App.scss'
import Content from './components/Content'
import MusicBar from './components/MusicBar'
import TitleBar from './components/TitleBar'

function App() {

  return (
    <div className="my-app">
      <div className='my-layout-content'>
        <Content />
      </div>
      <div className='my-layout-footer'>
        <MusicBar />
      </div>
    </div>
  )
}

export default App
