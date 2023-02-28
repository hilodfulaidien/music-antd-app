
import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { Outlet } from 'react-router-dom'
import './App.scss'
import MusicBar from './components/MusicBar'
import NavBar from './components/NavBar'
import TitleBar from './components/TitleBar'

function App() {

  return (
    <div className="my-app">
      <Layout>
        <Header>
          <TitleBar />
        </Header>
        <Layout>
          <Sider>
            <NavBar />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer>
          <MusicBar />
        </Footer>
      </Layout>
    </div>
  )
}

export default App
