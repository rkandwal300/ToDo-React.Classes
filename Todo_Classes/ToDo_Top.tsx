import React ,{Component} from 'react'

type TopData ={
    List ? : string [];
    IndexData? : any
}

class ToDoTop extends Component <TopData>{

    constructor (props:TopData){
        super(props);

        this.state={
            ips   : '',
            save : ''
        }

        this.HandleChange =  this.HandleChange.bind(this)


    }




    HandleChange (event: React.ChangeEvent<HTMLInputElement>){

        let b = event.target.id;
    b = b.substring(1, 3);
    let n: number = +b;
    this.props.IndexData(n);
    }
    
    render(): React.ReactNode {


        let list = this.props.List;

        return(
            <div className='mb-[50px] '>



            <div className="  mt-[20px] ">


            {list && list.length > 0 ? (
        list.map((value: string, index: number) => {



            return ( <div  key = {index } className='flex  justify-start items-center'   >
            < input
                id={'a'+index  }
                type='checkbox'
                onChange={this.HandleChange}
                className=' border-2  h-4 w-4 mr-[10px] text-yellow-600 border-gray-300 rounded focus:ring-yellow-500 checked:bg-yelloe-400'  />
            <div> {value}  </div>
            </div>
            )

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

export default ToDoTop ;