import React,{Component} from 'react'
import ToDoBottom from './ToDoBottom';
import ToDoIP from './ToDoIP';
import ToDoTop from './ToDo_Top';

type data={
    name : string ;
}


type state= {
    Array ?:string [],
    NewData ?: string ,
    ArrayBottom ?:string [],
    show : boolean,
    HideClass :string
}

let ArrStr :string [] = [ "clean my computer",
"Buy new keyboard",
'Mohan'] ;


// let savedArray  ?:string[]  = JSON.parse(localStorage.getItem("TopArray_Todo"));

let NewStr :string [] = ["Write an article about @xstate/test" ] ;




class ToDo11 extends Component <data, state> { 
    
    constructor (props:data){
        super(props);

        this.state ={
            Array   : ArrStr,
            NewData : '' ,
            ArrayBottom : NewStr ,
            show : false,
            HideClass : ''
        }
        this.inputFunc = this.inputFunc.bind(this);
        this.  TopFunc = this.  TopFunc.bind(this);
        this.  BottomFunc = this.  BottomFunc.bind(this);
        this.  HandleHide = this.  HandleHide.bind(this);
        this.  PermanentDelete = this.PermanentDelete.bind(this);
    }


    
    
    inputFunc(str ?: string ){  
        if(str){

            let  TempData = this.state.Array;
            TempData?.push(str);
        this.setState({Array : TempData})
        
    }
    
}


HandleHide ( b ?:boolean){
    if(this.state.show){
        this.setState({  show : false })

        
        this.setState({  HideClass : ' ' })
    }
    else{

        this.setState({  show : true })

        
        this.setState({  HideClass : 'hidden' })
    }


}

TopFunc( n  : number){

        let data = this.state.Array;
        let  ArrayB = this.state.ArrayBottom;
        if (data && ArrayB ){
        let set =  data.splice(n, 1);
        let data2= ArrayB.concat(set);
        this.setState({Array : data});
        this.setState({ArrayBottom: data2})
    }}
    
    
BottomFunc( n  : number){

   

    let data = this.state.Array;
    let  ArrayB = this.state.ArrayBottom;
    if (data && ArrayB ){
    let set =  ArrayB.splice(n, 1);
    let data2 = data.concat(set);
    this.setState({Array : data2});
    this.setState({ArrayBottom: ArrayB});
}
} 

PermanentDelete (id: number ){
    let  ArrayB = this.state.ArrayBottom;
    if ( ArrayB ){
    ArrayB.splice(id, 1);
    this.setState({ArrayBottom: ArrayB});
    }
}



    render(): React.ReactNode {

        // localStorage.setItem("TopArray_Todo", JSON.stringify(this.state.Array));



        return(
            <div>
            <p className=" h-[60px] w-full border-b-2  border-slate-300  text-2xl   text-slate-600 flex justify-start  items-center pl-[30px]    ">
            XTODO!
            </p>

            <div className=" ml-[30px] mt-[40px]  mr-[50px]  flex flex-nowrap justify-between  items-center  ">
            <p className=" text-3xl font-bold  selection:bg-slate-300    ">
                {" "}
                Things to get done
            </p>


            <span
                className="bg-yellow-400  px-[40px] py-[15px] rounded-lg  shadow-lg shadow-slate-500 cursor-pointer font-bold text-white hover:scale-105 selection:bg-yellow-400 " >
                {" "}
                Refresh
            </span>
            </div>

            <div className="  ml-[40px]  mt-[50px] ">

            <ToDoTop List={this.state.Array}  IndexData = {this.TopFunc} />

            <span 
                className={"bg-yellow-400  px-[30px] py-[15px] rounded-xl  shadow-lg shadow-slate-500 cursor-pointer  text-white hover:scale-105 selection:bg-yellow-400   " + " " +  this.state.  HideClass }
                onClick={ ()=>{ this.HandleHide(false) }}
                >
                + Add a todo
            </span>

            <ToDoIP ListItem = {'hello'}  setData ={this.inputFunc} setShow={this.HandleHide } show={this.state.show} />

            <div className=" mt-[30px] ">
                {" "}

                <ToDoBottom  CheckedItem  = {this.state.ArrayBottom}   setDeleted ={this.PermanentDelete}   setData ={this.BottomFunc}    />

            </div>
            </div>
        </div>
        )
    }
}

export default ToDo11;