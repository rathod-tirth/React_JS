import { Component } from "react"

function withLogger(WrappedComponent) {
   return class withLogger extends Component {
      componentDidMount() {
         console.log(`Component ${WrappedComponent.name} is mounted`);
      }
      render() {
         return <WrappedComponent {...this.props} />
      }
   }
}
export default withLogger