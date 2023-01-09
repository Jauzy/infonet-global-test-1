const benefit = [{
    id: 1,
    name: "Gaji Pokok",
    amount: 3000000,
    unit: 12
  },
  {
    id: 2,
    name: "Tunjangan Hari Raya (THR)",
    amount: 0,
    unit: 1
  },
  {
    id: 3,
    name: "Uang makan",
    amount: 100000,
    unit: 12
  },
  {
    id: 4,
    name: "Tunjangan shift",
    amount: 0,
    unit: 0.2
  },
]

const kriteria = [{
  'Gaji Pokok': ['Tunjangan Hari Raya (THR)', 'Tunjangan shift']
}];

function copyVal(kriteria, master) {
  let answer = master
  // loop over the target objective
  kriteria.map(item => {
    // look for keys to be the copy target
    Object.keys(item).map(key => {
      // get keys to be the paste target 
      let val = item[key]
      // find index of the copy target
      let mIDx = benefit.findIndex(i => i.name == key)
      let amount_to_copy = null
      // if found, copy the amount
      if (mIDx != -1) {
        amount_to_copy = answer[mIDx].amount
      }
      if (amount_to_copy != null)
        // loop over the paste target
        val.map(v => {
          // find index of the paste target
          mIDx = benefit.findIndex(i => i.name == v)
          // if found, paste the amount
          if (mIDx != -1) {
            answer[mIDx].amount = amount_to_copy
          }
        })
    })
  })
  return answer
}

let answer = copyVal(kriteria, benefit)
// output to html
document.getElementById('demo').innerHTML = JSON.stringify(answer)