import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props){
        super(props)
        this.state =  {
            PLAYER_ONE_SYMBOL: 'X',
            PLAYER_TWO_SYMBOL: 'O',
            currentTurn:'X',
            totalClicks:0,
            board:[
                "","","","","","","","","",
            ]
      }
}

componentWillMount(){
  this.setState({
        message : "click me :  "
    })
  return
}



handleClick(index){
  if(this.state.board[index]===""){ // this will fix the override BUG .
  this.state.board[index] = this.state.currentTurn
  this.state.totalClicks++
  this.setState({
      board:this.state.board,
      currentTurn:this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL?this.state.PLAYER_TWO_SYMBOL:this.state.PLAYER_ONE_SYMBOL,
    })

  if(this.checkForWinner()){
    this.state.winner = this.state.currentTurn
    console.log(this.state.currentTurn);
    this.winnerDeclaration()
    this.setState({
      board:[
          "","","","","","","","","",
      ],
      currentTurn:this.state.currentTurn
    })
    return
  }
  if(this.state.totalClicks === 9){
    console.log("::: Draw :::");
    this.setState({
      board:[
          "","","","","","","","","",
      ],
      currentTurn:this.state.currentTurn
    })
    return
  }
  }
}

winnerDeclaration(){
  if(this.state.winner === this.state.PLAYER_TWO_SYMBOL || this.state.winner === this.state.PLAYER_ONE_SYMBOL){
    alert(":::   "+this.state.currentTurn+"   ::: WON")
    this.state.totalClicks=0
  }
}

checkForWinner() {
    var squares = this.state.board
    console.log(squares[0])
    // Wining combinations of tic-tac-toe
    var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
   return winningCombos.find(function (combo){if(squares[combo[0]]===squares[combo[1]]&&squares[combo[1]]===squares[combo[2]])
        {
            return squares[combo[0]]
        }else{
            return false
        }

})
}


  render() {
  //  this.winnerDeclaration()
    return (
      <div className="board">
        {this.state.board.map((cell , index) => {
          return <div onClick={ () => this.handleClick(index)} className="square">{cell}</div>;

        })}
      </div>
    );
  }
}

export default App;
