import {
  newRowReducer
} from 'redux/reducers/newRowReducer'
import {
  removeRowReducer
} from 'redux/reducers/removeRowReducer'

export const store = {
  _state: {
    dataList: [{
        "name": "Sigmund Jähn",
        "date": 272926800,
        "days": 7,
        "mission": "Sojus 31 Sojus 29",
        "isMultiple": false
      },
      {
        "name": "Ulf Merbold",
        "date": 438814800,
        "days": 10,
        "mission": "STS-9",
        "isMultiple": true
      },
      {
        "name": "Reinhard Furrer",
        "date": 499467600,
        "days": 7,
        "mission": "STS-61-A(D1)",
        "isMultiple": false
      },
      {
        "name": "Ernst Messerschmid",
        "date": 499467600,
        "days": 7,
        "mission": "STS - 61 - A(D1) ",
        "isMultiple": false
      },
      {
        "name": "Klaus - Dietrich Flade",
        "date": 700779600,
        "days": 7,
        "mission": "Sojus TM - 14 / Sojus TM - 13",
        "isMultiple": false
      },
      {
        "name": "Hans Schlegel",
        "date": 735768000,
        "days": 9,
        "mission": "STS - 55(D2)",
        "isMultiple": true
      },
      {
        "name": "Ulrich Walter",
        "date": 735768000,
        "days": 9,
        "mission": "STS - 55(D2)",
        "isMultiple": false
      },
      {
        "name": "Thomas Reiter",
        "date": 810072000,
        "days": 179,
        "mission": "Sojus TM - 22 / Euromir 95 ",
        "isMultiple": true
      },
      {
        "name": "Reinhold Ewald",
        "date": 855522000,
        "days": 19,
        "mission": "Sojus TM - 25 / Sojus TM - 24",
        "isMultiple": false
      },
      {
        "name": "Gerhard Thiele ",
        "date": 950216400,
        "days": 11,
        "mission": "STS - 99 ",
        "isMultiple": false
      },
      {
        "name": "Alexander Gerst",
        "date": 1401224400,
        "days": 165,
        "mission": "Sojus TMA - 13 M / ISS - Expedition 40 / ISS - Expedition 41 ",
        "isMultiple": false
      }
    ],
    newItem: {
      "name": "",
      "date": 0,
      "days": 0,
      "mission": "",
      "isMultiple": null
    }
  },


  _callSubscriber() {

  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    newRowReducer(this._state, action)
    removeRowReducer(this._state, action)
    this._callSubscriber(this._state)
  }

}