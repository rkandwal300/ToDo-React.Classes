import React , {Component } from 'react'

type Item ={
    ListItem ?:  String ,
    setData  ?:  any    ,
    setShow  ?:  any    ,
    show     ?:  boolean,
}

type state ={
    ips  : string ,
    save : string ,
    class: string ,
}

type Func= (a:string)=>{}

class ToDoIP extends Component <Item , state> {

    constructor (props:Item){
        super(props);

        this.state={
            ips   : '' ,
            save  : '' ,
            class : ' ',

        }

        this.HandleChange =  this.HandleChange.bind(this)

        this.handleClick =  this.handleClick.bind(this)
        this.handleClick2 =  this.handleClick2.bind(this)

    }




    HandleChange  (event: React.ChangeEvent<HTMLInputElement>){
        this.setState({ips: event.target.value })
    }



    handleClick (event: React.MouseEvent<HTMLElement>){
    let data =this.state.ips ;
    this.props.setData(data);
    this.setState({ips: ''})
    this.props.setShow( true); // hide input 
    }

    
    handleClick2 (event: React.MouseEvent<HTMLElement>){

        
        this.props.setShow( true);

    }

    
    render(): React.ReactNode {

        if(this.props.show){
            
        
        

        return(
            <div className=" rounded-xl shadow-lg w-[95%] pl-[50px]  py-[30px]     ">
            <p className=" text-xl  text-black tracking-wider ">Create a todo</p>

            <input
            type="text"
            value={this.state.ips}
            placeholder="Write an article about XState"
            className=" my-[25px]  pl-[20px] w-[350px] py-[8px] rounded-lg shadow-lg  ml-[20px]  border-2 border-slate-400  text-left  "  onChange={this.HandleChange} />

            <div className="ml-[20px] flex    ">
            <span className="bg-yellow-500  px-[20px] mx-[20px] flex justify-center items-center h-[45px]  rounded-lg  shadow-md shadow-slate-500 cursor-pointer text-white hover:scale-105 selection:bg-yellow-400 "
            onClick={this.handleClick}
            >
                save
            </span>

            <span className="bg-white px-[20px]  flex justify-center items-center h-[45px]  rounded-lg  shadow-md shadow-slate-500 cursor-pointer  text-black  hover:scale-105 selection:bg-yellow-400 " 
            onClick={this.handleClick2}
            >
                Cancel
            </span>
            </div>
        </div>
        )
    }
    }
}

export default ToDoIP;