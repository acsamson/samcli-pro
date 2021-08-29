import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/~/demo">
        <Button>进入中台</Button>
      </Link>
      <h1>首页模板</h1>
    </div>
  );
}

export default Home;
