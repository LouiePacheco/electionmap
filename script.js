//factory function
var createPolitician = function (name, partyColor){
  //creating an object and parameters
    var politician ={};
           
      politician.name = name;
      politician.electionResults=null ;
      politician.totalVotes = 0
      politician.partyColor = partyColor;
    
        
    //creating a function called tallyUpTotalVotes
      politician.tallyUpTotalVotes = function() {
      //setting count to start at 0
        this.totalVotes = 0;
    //loop set to flow through electionResults array & count
        for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
      }
    // it will return a value
      return politician;
  }
  //creating the politician objects & passing in a name property 
  //& also passing in a party color property
  var joe = createPolitician("Joseph Biden ", [0, 0, 255]);
  var don = createPolitician("Donald Trump ", [255, 8, 3]);
  
  //establishing arrays
      don.electionResults = [9,3,0, 6, 0,0,0,0,0,29,0,0,4,0,11,6,6,8,8,1,0,0,0,0,6,10,3,4,0,0,0,0,0,15,3,18,7,0,0,0,9,3,11,38,6,0,0,0,5,0,3];
  
      joe.electionResults = [0,0,11,0,55,9,7,3,3,0,16,4,0,20,0,0,0,0,0,3,10,11,16,10,0,0,0,1,6,4,14,5,29,0,0,0,0,7,20,4,0,0,0,0,0,3,13,12,0,10,0];
  
  //function to assign the winner of each STATE 
  var setStateResults = function (state) {
    theStates[state].winner = null;
      if (joe.electionResults[state] > don.electionResults[state]){
      theStates[state].winner = joe;
    } else if (joe.electionResults[state] < don.electionResults[state]) {
      theStates[state].winner = don;
    } 
    var stateWinner = theStates[state].winner;
    if (stateWinner !== null){ 
      theStates[state].rgbColor = stateWinner.partyColor;
   }else {
       theStates[state].rgbColor = [11,32,57];
   }
  
    
    //country table at top of election map
  var countryInfoTable = document.getElementById('countryResults');
    
    var row = countryInfoTable.children[0].children[0];
  
  row.children[0].innerText = joe.name;
  row.children[1].innerText = joe.totalVotes;
  row.children[2].innerText = don.name;
  row.children[3].innerText = don.totalVotes;
  row.children[5].innerText = winner;
    
    //state table at bottom-right of election map
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = joe.name;
  candidate2Name.innerText = don.name;
   
  candidate1Results.innerText = joe.electionResults[state];
  candidate2Results.innerText = don.electionResults[state];
   
  if (theStates[state].winner === null){
      winnersName.innerText = "DRAW";
  } else {
      winnersName.innerText = theStates[state].winner.name;
  }
  }
  
  //instantiating the function called tallyUpTotalVotes
  joe.tallyUpTotalVotes();
  don.tallyUpTotalVotes();
  //determining a new variable called winner & if/else method
  var winner = "";
    if (joe.totalVotes > don.totalVotes) {
      winner = joe.name; 
    } else if (joe.totalVotes < don.totalVotes) { 
      winner = don.name;
    } else 
        winner = "Draw."
    
  
    //print the winner of electionResults
  console.log("And the Winner Is..." + winner);
    
  //print electionResult array
  console.log(don.electionResults);
  console.log(joe.electionResults);
  
  
  