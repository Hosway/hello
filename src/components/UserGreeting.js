import React, { Component } from 'react'

 class UserGreeting extends Component {
  render() {
    return (
      <div>
        hello joshua
      </div>
    )
  }
}

export default UserGreeting









// import React, { Component } from 'react'

// class UserGreeting extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        isLoggedIn: true
//     }
//   }
  

//   render() {

//     return this.state.isLoggedIn && <div>welcome joshua</div>

    // return (
    //   this.state.isLoggedIn ? 
    //   <div>welcome joshua</div> :
    //   <div>welcome guest</div>
    // )

    // let message
    // if(this.state.isLoggedIn) {
    //   message = <div>welcome joshua</div>
    // } else {
    //   message = <div>welcome guest</div>
    // }

    // return <div>{message}</div>

    //   if (this.state.isLoggedIn) {
    //     return(
    //       <div> welcome joshua </div>
    //     )
    //   } else {
    //     return (
    //       <div> welcome guest </div>
    //     )
    //   }
    // return (
    //   <div>
    //     <div> welcome joshua </div>
    //     <div>welcome guest</div>
    //   </div>
    // )
//   }
// }

// export default UserGreeting
