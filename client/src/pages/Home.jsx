/**
 * Created by Administrator on 2017/9/6.
 */

import React, {Component} from "react";
import { Button } from 'antd';
// import {connect} from "react-redex";

// import {}

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div className="pages-home">
        <Button type="primary">Primary</Button>
      </div>
    )
  }
}

//
// // 将 store 中的数据作为 props 绑定到 LoginForm 上
// const mapStateToProps = (state, ownProps) => {
//   let { Common, Login } = state;
//   return {
//     loading: Common.loading,
//     loginInfo: Login.loginInfo
//   }
// };
//
// // 将 action 作为 props 绑定到 Product 上。
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   actions: bindActionCreators({ initialState, goLogin }, dispatch)
// });
//
//
//
// export default connect(mapStateToProps,mapDispatchToProps)(Home);

export default Home;

