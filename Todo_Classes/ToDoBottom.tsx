import React , {Component} from 'react' 

import { AiOutlineDelete } from "react-icons/ai";

type LIitem={
    CheckedItem  ?:string [],
    setData ?:any ,
    setDeleted ?:any 
}

class ToDoBottom extends Component <LIitem> {



    
    constructor (props:LIitem){
        super(props);


        this.HandleChange =  this.HandleChange.bind(this)
        this.HandleDelete =  this.HandleDelete.bind(this)


    }




HandleChange (event: React.ChangeEvent<HTMLInputElement>){

    let b = event.target.id;
    b = b.substring(1, 3);
    let n: number = +b;
    this.props.setData(n);
    }

    HandleDelete(event : React.MouseEvent<HTMLButtonElement>) {
        let b = event.currentTarget.id;
    b = b.substring(1, 3);
    let n: number = +b;
    this.props.setDeleted(n);
    }






    render(): React.ReactNode {
        
        let data = this.props.CheckedItem


        return( 
            <div className=" mt-[20px]  ">
            <p className=" text-xl  text-black tracking-wider "> Things Done</p>

            <div className="  mt-[20px] ">



            {data && data.length>0  ? (
                data.map((value : string , index : number)=>{



                return   <div key = {index} className='flex  justify-start items-center'   >
                            < input id={'a'+index  }
                                type='checkbox'
                                onChange={this.HandleChange}
                                className=' border-2  h-4 w-4 mr-[10px] text-yellow-600 border-gray-300 rounded focus:ring-yellow-500 checked:bg-yelloe-400'
                                /> 
                            <div > {value}  </div> 

                            <span  
                            onClick={this.HandleDelete}
                            id={'a'+index  }     
                            className="ml-[10px] text-xl hover:text-red-700 "
                            
                            > <AiOutlineDelete />  </span>
                        </div>

                })) : ( 

                <p className=" text-lg  text-slate-400  tracking-wider ">

                No todos here!
                </p>
                )
            }
    
            </div>
</div>
        )
    }
}

export default ToDoBottom 