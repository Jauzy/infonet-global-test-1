const employees = [{
		"nik": "1",
		"name": "ABIYYU"
	},
	{
		"nik": "2",
		"name": "ADHIKA"
	},
	{
		"nik": "3",
		"name": "AFRIE"
	},
	{
		"nik": "4",
		"name": "ALAM"
	}
];

const selected_employees = [{
		"nik": "1",
		"name": "ABIYYU"
	},
	{
		"nik": "2",
		"name": "ADHIKA"
	}
];

function unemploy(emp, selected) {
	let temp = []
	// looping through all the employees
	temp = emp.map(e => {
		// check if any record is available in selected
		let found = selected.findIndex(item => item.nik == e.nik)
		if (found == -1) return e
		else return null
		// filter result to remove null value
	}).filter(item => item != null)
	return temp
}

const unselected_employee = unemploy(employees, selected_employees)
// output the result to html
document.getElementById('demo').innerHTML = JSON.stringify(unselected_employee)

// outputnya yang diharapkan
/* [
  { "nik":"3", "name":"AFRIE" },
  { "nik":"4", "name":"ALAM"}
] */