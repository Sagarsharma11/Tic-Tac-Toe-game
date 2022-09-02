import React from "react";
import '../App.css'

class ActionTake extends React.Component {
    constructor() {
        super();

        this.state = {
            a1: " ",
            a2: " ",
            a3: " ",
            b1: " ",
            b2: " ",
            b3: " ",
            c1: " ",
            c2: " ",
            c3: " ",
            prev: " ",
            winner: ""

        }
        

    }
    myarr=[];

    a1 ="a1"; a2 ="a2";  a3 ="a3";
        
    b1 ="b1"; b2 ="b2"; b3 ="b3";

    c1 ="c1"; c2 ="c2"; c3 ="c3";


    first = (x) => {
        
        


        

        // console.log(x)
        if (this.state.prev === " ") {

            this.cal("X",x)
            this.setState({
                [x]: "X",
                prev: "X"
            })

        } else if (this.state.prev === "X" && this.state[x] === " ") {
            this.cal("O",x)
            this.setState({
                [x]: "O",
                prev: "O"
            })
        }
        else if (this.state.prev === "O" && this.state[x] === " ") {
            this.cal("X",x)
            this.setState({
                [x]: "X",
                prev: "X"
            })
        }
       
    }

    

    cal = (e,y) =>{
        
   


        if(this.a1===y){
            this.a1=e
        }
        if(this.a2===y){
            this.a2=e
        }
        if(this.a3===y){
            this.a3=e
        }
        if(this.b1===y){
            this.b1=e
        }
        if(this.b2===y){
            this.b2=e
        }
        if(this.b3===y){
            this.b3=e
        }
        if(this.c1===y){
            this.c1=e
        }
        if(this.c2===y){
            this.c2=e
        }
        if(this.c3===y){
            this.c3=e
        }


  
        
        


        

        if((this.a1==="X" && this.b2==="X" && this.c3==="X") || 
           (this.a1==="X" && this.a2==="X" && this.a3==="X") ||
           (this.a1==="X" && this.b1==="X" && this.c1==="X") ||
           (this.a2==="X" && this.b2==="X" && this.c2==="X") ||
           (this.a3==="X" && this.b3==="X" && this.c3==="X") ||
           (this.b1==="X" && this.b2==="X" && this.b3==="X") ||
           (this.c1==="X" && this.b2==="X" && this.a3==="X") ||
           (this.c1==="X" && this.c2==="X" && this.c3==="X") ){
            this.setState({
                winner: "X IS Winner.."
             })
        }

      if((this.a1==="O" && this.b1==="O" && this.c1==="O") ||
        (this.a2==="O" && this.b2==="O" && this.c2==="O") ||
        (this.a3==="O" && this.b3==="O" && this.c3==="O") ||  
        (this.a1==="O" && this.b2==="O" && this.c3==="O") || 
        (this.a1==="O" && this.a2==="O" && this.a3==="O") ||
        (this.b1==="O" && this.b2==="O" && this.b3==="O") ||
        (this.c1==="O" && this.b2==="O" && this.a3==="O") ||
        (this.c1==="O" && this.c2==="O" && this.c3==="O") ){
             this.setState({
                winner: "O IS Winner.."
             })
     }

     console.log(this.state.winner)


    }

  


    render() {
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 mx-auto mt-5">
                        <div className="row" >
                            <div className="a1 col-sm-3" onClick={()=>this.first('a1') }>
                                <p className="text-center val"> {this.state.a1}</p>
                            </div>
                            <div className="a2 col-sm-3" onClick={()=>this.first('a2')}>
                                <p className="text-center val"> {this.state.a2}</p>
                            </div>
                            <div className="a3 col-sm-3" onClick={()=>this.first('a3')}>
                                <p className="text-center val"> {this.state.a3}</p>                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mx-auto " >
                        <div className="row">
                            <div className="b1 col-sm-3" onClick={()=>this.first('b1')}>
                                <p className="text-center val"> {this.state.b1}</p>                            </div>
                            <div className="b2 col-sm-3" onClick={()=>this.first('b2')}>
                                <p className="text-center val"> {this.state.b2}</p>                            </div>
                            <div className="b3 col-sm-3" onClick={()=>this.first('b3')}>
                                <p className="text-center val"> {this.state.b3}</p>                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mx-auto">
                        <div className="row">
                            <div className="c1 col-sm-3 " onClick={()=>this.first('c1')}>
                                <p className="text-center val"> {this.state.c1}</p>                            </div>
                            <div className="c2 col-sm-3" onClick={()=>this.first('c2')}>
                                <p className="text-center val"> {this.state.c2}</p>                            </div>
                            <div className="c3 col-sm-3" onClick={()=>this.first('c3')}>
                                <p className="text-center val"> {this.state.c3}</p>                            </div>
                        </div>
                       <br/>
                        <h1 className="text-light rounded bg-primary col-6 ps-3"> {this.state.winner} </h1>
                    </div>
                </div>
            </div>

        );
    }

}

export default ActionTake;
