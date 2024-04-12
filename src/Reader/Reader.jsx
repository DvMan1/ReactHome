import { Component } from "react";

const LS_KEY = "reader_item_index"

export class Reader extends Component{
    state={
        publicIndex:0,
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.publicIndex !== this.state.publicIndex) {
            localStorage.setItem(LS_KEY,this.state.publicIndex)
        }
    }
    componentDidMount(){
        const storedIndex = localStorage.getItem(LS_KEY);
        const parsedIndex = parseInt(storedIndex, 10); 
        this.setState({ publicIndex: parsedIndex || 0 });
    }
    changeIndex = (value) => {
        const newIndex = (this.state.publicIndex + value + this.props.public.length) % this.props.public.length;
        console.log(newIndex);
        this.setState({ publicIndex: newIndex });
      };
    render(){
        const currentItem = this.props.public[this.state.publicIndex]
        return(
            <div>
                <button type="button" onClick={() =>this.changeIndex(-1)}>Сюда</button>
                <button type="button"onClick={() =>this.changeIndex(1)}>Туда</button>
                <p>{this.state.publicIndex + 1}/{this.props.public.length}</p>
                <article><h2>{currentItem.title}</h2><p>{currentItem.text}</p></article>
            </div>
        )
    }
}