let date = 2050;
let status = 'student'
let count = 0;

if (date) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	 let month = 'April'
	console.log(month, 'Family Day')
	console.log(month, 'Freedom Day')
	 count += 4

	if (status == "student") {
	  console.log('June', 'Youth Day')
	 count += count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	let date = 'December'
	console.log(date, 'Day of Reconciliation')
       count += count + 3

	if (status == "parent") {
	  console.log(date, 'Christmas Day')
	     count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	 count += count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)