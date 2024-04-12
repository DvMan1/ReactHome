import React from "react";
import { Component } from "react";
import shortid from "shortid";
import Profile from "./user";
import user from "./user.json";
import statistics from "./data.json";
import Statistics from "./statistics";
import { LoginForm } from "./LoginForm/LoginForm.jsx";
import DropDown from "./DropDown/DropDown.jsx";
import ColorPicker from "./DropDown/ColorPicker.jsx";
import TodoList from "./ToDoList/ToDoList.jsx";
import Filter from "./LoginForm/Filter.jsx";
import Modal from "./Modal/Modal.jsx";
import { VideoPlayer } from "./VideoPlayer/VideoPlayer.jsx";
import { Reader } from "./Reader/Reader.jsx";
import publicAlisa from "./publicAlisa.json"
import {PokemonForm} from "./PokemonForm/PokemonForm.jsx"
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
export class App extends Component {
  state = {
    todos: [
      { id: "id-2", text: "Бoба", completed: false },
      { id: "id-3", text: "Бyба", completed: false },
      { id: "id-1", text: "БИба", completed: false },
    ],
    filter: "",
    visibleModal: false,
    pokemonName:"",
  };
  handleToggleModal = () => {
    this.setState(({ visibleModal }) => ({ visibleModal: !visibleModal }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state.filter);
  };
  addTodo = (text) => {
    const todo = { id: shortid.generate(), text, completed: false };
    this.setState((prevState) => ({ todos: [todo, ...prevState.todos] }));
    console.log(text);
  };
  deleteTodo = (todoID) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoID),
    }));
  };
  onToggleCompleted = (idTodo) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === idTodo) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };
  componentDidMount() {
    const parsedTodos = JSON.parse(localStorage.getItem("ToDos"));
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("ToDos", JSON.stringify(this.state.todos));
    }
  }
  handlePokemon = pokemon=>{
    this.setState({pokemonName:pokemon})

  }
  render() {
    const { todos } = this.state;
    const normFilter = this.state.filter.toLowerCase();

    const visibleTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(normFilter)
    );
    return (
      <div>
        <button type="button" onClick={this.handleToggleModal}></button>
        
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics statistics={statistics} title="Upload stats" />
        <LoginForm onSubmit={this.addTodo}></LoginForm>
        <DropDown></DropDown>
        <ColorPicker options={colorPickerOptions}></ColorPicker>
        <Filter
          filterText={this.state.filter}
          onChange={this.changeFilter}
        ></Filter>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        ></TodoList>
        {this.state.visibleModal && (
          <Modal onClose ={this.handleToggleModal}>
            {" "}
            <h2>Модальное окно</h2>
            <p>Здесь может быть ваше содержимое.</p>
            <button type="button" onClick={this.handleToggleModal}>Закрыть</button>
          </Modal>
        )}
        <VideoPlayer></VideoPlayer>
        <Reader public={publicAlisa}></Reader>
        <PokemonForm onSubmit={this.handlePokemon}></PokemonForm>
      </div>
    );
  }
}
