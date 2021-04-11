import {React} from "react"

class Loader extends Component {

    constructor(props){
        super(props);
        this.state={
          loading:true,
          ... // data
          ... // data
        };
      }
      
      async loadData(){
        const data = //asynchronous call to the API ;
        setState({
          loading:false,
          ... //data
          ... //data
        });
      componentDidMount(){
        this.loadData();
      }
      render(){
        if(this.state.loading){
          return ( <Loader /> );
        }
        else {
          return ( <Data /> );
        }
      }
    }}