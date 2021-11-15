import logo from "./logo.svg";
import "./App.css";

import { HotTable } from "@handsontable/react";
import { useEffect, useState } from "react";

const hotData = [
  ["", "Tesla", "Volvo", "Toyota", "Honda"],
  ["2020", 10, 11, 12, 13],
  ["2021", 20, 11, 14, 13],
  ["2022", 30, 15, 12, 13],
];

function App() {
  
  const listObject = [
    {
      "ListName": "Achievements",
      "Period": "Lifetime",
      "A_PLAY_FIRST_HAND": {
        "difficulty": "Beginner",
        "requirementType": "Play_Hands",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_FIRST_HAND": {
        "difficulty": "Beginner",
        "requirementType": "Win_Hands",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_PLAY_FIRST_SNG": {
        "difficulty": "Beginner",
        "requirementType": "Play_Tournament",
        "gameMode": "SNG",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_FIRST_SNG": {
        "requirementType": "Win_Tournament",
        "gameMode": "SNG",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_PLAY_FIRST_SPNGO": {
        "difficulty": "Beginner",
        "requirementType": "Play_Tournament",
        "gameMode": "SPNGO",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_FIRST_SPNGO": {
        "difficulty": "Beginner",
        "requirementType": "Win_Tournament",
        "gameMode": "SPNGO",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_FIRST_ROYAL_FLUSH": {
        "difficulty": "Pro",
        "requirementType": "Win_Hands",
        "requirementVariable_3": "Royal_Flush",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_FIRST_CONSECUTIVE_WIN": {
        "difficulty": "Expert",
        "requirementType": "Win_Hands",
        "requirementVariable_3": "Consecutive_Win",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_FIRST_STRAIGHT_FLUSH": {
        "difficulty": "Pro",
        "requirementType": "Win_Hands",
        "requirementVariable_3": "Straight_Flush",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_FIRST_PLAYER_BUST": {
        "difficulty": "Intermediate",
        "requirementType": "Bust_Players",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_PLAY_HUNDRED_HANDS": {
        "difficulty": "Intermediate",
        "requirementType": "Play_Hands",
        "completionRequirement": 100,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_HUNDRED_HANDS": {
        "difficulty": "Intermediate",
        "requirementType": "Win_Hands",
        "completionRequirement": 100,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_THOUSAND_CHIPS": {
        "difficulty": "Intermediate",
        "requirementType": "Win_Chips",
        "completionRequirement": 1000,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_TEN_SNG": {
        "difficulty": "Expert",
        "requirementType": "Win_Tournament",
        "gameMode": "SNG",
        "completionRequirement": 10,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_TEN_SPNGO": {
        "difficulty": "Expert",
        "requirementType": "Win_Tournament",
        "gameMode": "SPNGO",
        "completionRequirement": 10,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_PLAY_THOUSAND_HANDS": {
        "difficulty": "Expert",
        "requirementType": "Play_Hands",
        "completionRequirement": 1000,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_THOUSAND_HANDS": {
        "difficulty": "Expert",
        "requirementType": "Win_Hands",
        "completionRequirement": 1000,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_SPIN_WHEEL": {
        "difficulty": "Expert",
        "requirementType": "Custom",
        "completionRequirement": 100,
        "requirementVariable_2": "Spin_Wheel",
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_PLAY_HANDS": {
        "difficulty": "Pro",
        "requirementType": "Play_Hands",
        "completionRequirement": 100000,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_HANDS": {
        "difficulty": "Pro",
        "requirementType": "Win_Hands",
        "completionRequirement": 100000,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_RAISE_CHIPS": {
        "difficulty": "Pro",
        "requirementType": "Raise_Chips",
        "completionRequirement": 1000000,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_BET_CHIPS": {
        "difficulty": "Pro",
        "requirementType": "Bet_Chips",
        "completionRequirement": 1000000,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_BUST_PLAYERS": {
        "difficulty": "Pro",
        "requirementType": "Bust_Players",
        "completionRequirement": 100,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_TOURNAMENT": {
        "difficulty": "Pro",
        "requirementType": "Win_Tournament",
        "completionRequirement": 200,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "A_WIN_CHIPS": {
        "difficulty": "Pro",
        "requirementType": "Win_Chips",
        "completionRequirement": 1000000,
        "rewardType": "Star_Creds",
        "rewardProperty": 0
      },
      "id": "5ffc54c3066bea1079c5d9ee"
    }
  ]
  const sourceDataObject = [
    {
      category: "Best Rock Performance",
      artist: null,
      title: null,
      label: null,
      __children: [
        {
          title: "Don't Wanna Fight",
          artist: "Alabama Shakes",
          label: "ATO Records",
        },
        {
          title: "What Kind Of Man",
          artist: "Florence & The Machine",
          label: "Republic",
        },
        {
          title: "Something From Nothing",
          artist: "Foo Fighters",
          label: "RCA Records",
        },
        {
          title: "Ex's & Oh's",
          artist: "Elle King",
          label: "RCA Records",
        },
        {
          title: "Moaning Lisa Smile",
          artist: "Wolf Alice",
          label: "RCA Records/Dirty Hit",
          __children: [
            {
              title: "Don't Wanna Fight",
              artist: "Alabama Shakes",
              label: "ATO Records",
            },
            {
              title: "What Kind Of Man",
              artist: "Florence & The Machine",
              label: "Republic",
            },
            {
              title: "Something From Nothing",
              artist: "Foo Fighters",
              label: "RCA Records",
              __children: [
                {
                  title: "Don't Wanna Fight",
                  artist: "Alabama Shakes",
                  label: "ATO Records",
                },
                {
                  title: "What Kind Of Man",
                  artist: "Florence & The Machine",
                  label: "Republic",
                },
                {
                  title: "Something From Nothing",
                  artist: "Foo Fighters",
                  label: "RCA Records",
                },
                {
                  title: "Ex's & Oh's",
                  artist: "Elle King",
                  label: "RCA Records",
                },
                {
                  title: "Moaning Lisa Smile",
                  artist: "Wolf Alice",
                  label: "RCA Records/Dirty Hit",
                },
              ],
            },
            {
              title: "Ex's & Oh's",
              artist: "Elle King",
              label: "RCA Records",
            },
            {
              title: "Moaning Lisa Smile",
              artist: "Wolf Alice",
              label: "RCA Records/Dirty Hit",
            },
          ],
        },
      ],
    },
    {
      category: "Best Metal Performance",
      __children: [
        {
          title: "Cirice",
          artist: "Ghost",
          label: "Loma Vista Recordings",
        },
        {
          title: "Identity",
          artist: "August Burns Red",
          label: "Fearless Records",
        },
        {
          title: "512",
          artist: "Lamb Of God",
          label: "Epic Records",
        },
        {
          title: "Thank You",
          artist: "Sevendust",
          label: "7Bros Records",
        },
        {
          title: "Custer",
          artist: "Slipknot",
          label: "Roadrunner Records",
        },
      ],
    },
    {
      category: "Best Rock Song",
      __children: [
        {
          title: "Don't Wanna Fight",
          artist: "Alabama Shakes",
          label: "ATO Records",
        },
        {
          title: "Ex's & Oh's",
          artist: "Elle King",
          label: "RCA Records",
        },
        {
          title: "Hold Back The River",
          artist: "James Bay",
          label: "Republic",
        },
        {
          title: "Lydia",
          artist: "Highly Suspect",
          label: "300 Entertainment",
        },
        {
          title: "What Kind Of Man",
          artist: "Florence & The Machine",
          label: "Republic",
        },
      ],
    },
    {
      category: "Best Rock Album",
      __children: [
        {
          title: "Drones",
          artist: "Muse",
          label: "Warner Bros. Records",
        },
        {
          title: "Chaos And The Calm",
          artist: "James Bay",
          label: "Republic",
        },
        {
          title: "Kintsugi",
          artist: "Death Cab For Cutie",
          label: "Atlantic",
        },
        {
          title: "Mister Asylum",
          artist: "Highly Suspect",
          label: "300 Entertainment",
        },
        {
          title: ".5: The Gray Chapter",
          artist: "Slipknot",
          label: "Roadrunner Records",
        },
      ],
    },
  ];

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
  const values = Object.values(listObject[0]);
  const childs = [];
  for (var i = 2; i < values.length -1; i++) {
    childs.push(values[i]);
} 
  // arrayData.push(finalData);
  // console.log(arrayData);
  // console.log(sourceDataObject);
  setItems(childs);
    fetch("http://18.217.55.36:8081/api/metadatas")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          const newResults = result.map(e => {
            console.log(typeof e);
            return { listName: e.listName}
          });
          // setItems(newResults);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
        }
      )
  }, [])
  return (
    <div className="App">
      <HotTable
        // data={sourceDataObject}
        data={items}
        licenseKey={"non-commercial-and-evaluation"}
        rowHeaders={true}
        colHeaders={[ "difficulty", "requirementType"]}
        // nestedRows={true}
        contextMenu={true}
        rowHeaderWidth={120}
      />
    </div>
  );
}

export default App;
