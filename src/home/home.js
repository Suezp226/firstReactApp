// import { Button } from 'antd'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Time from '../game/game'
import HooksComp from '../hooks/hooks'

function Home() {

    // 创建路由钩子
    const navigate = useNavigate()

    return (
        <div className="P-home">
            <h1>Home Page</h1>
            <div className="ipt-con">
                <button onClick={()=>{navigate('/game ')}}>返回登录</button>
            </div>
            <Time  name="suezp" age="25" />
            <HooksComp />
        </div>
    )
}

export default Home
