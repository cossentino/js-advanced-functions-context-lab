/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employee) {
    const record = {}
    record.firstName = employee[0]
    record.familyName = employee[1]
    record.title = employee[2]
    record.payPerHour = employee[3]
    record.timeInEvents = []
    record.timeOutEvents = []
    return record
}

function createEmployeeRecords(recordsArray) {
    return recordsArray.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(date) {
    const event = {}
    event.type = "TimeIn"
    event.hour = parseInt(date.slice(-4))
    event.date = date.slice(0, -5)
    this.timeInEvents.push(event)
    return this
}
  
function createTimeOutEvent(date) {
    const event = {}
    event.type = "TimeOut"
    event.hour = parseInt(date.slice(-4))
    event.date = date.slice(0, -5)
    this.timeOutEvents.push(event)
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date)
    const timeOut = this.timeOutEvents.find(e => e.date === date)
    return (timeOut.hour - timeIn.hour)/100
}
  
  
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked * this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function payrollExpense(recordsArray) {
    const wagesOwed = recordsArray.map(r => allWagesFor.call(r))
    const reducer = (accum, curr) => accum + curr
    return wagesOwed.reduce(reducer)
}


function calculatePayroll(recordsArray) {
    const wagesOwed = recordsArray.map(r => allWagesFor.call(r))
    const reducer = (accum, curr) => accum + curr
    return wagesOwed.reduce(reducer)
}


function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(e => e.firstName === firstNameString)
}