// Your code here
function createEmployeeRecord(first, family, titles, pay) {
    const employeeRecord = {
      firstName: first,
      familyName: family,
      title: titles,
      payPerPeriod: pay,
      timeInEvents: [],
      timeOutEvents: [],
    }
    createEmployeeRecords(employeeRecord);
  
    console.log(employeeRecord);
  }
  
  createEmployeeRecord("Daisy", "Yi", "boss", 1)
  
  function createEmployeeRecords(array) {
    const employeeRecords = {}
  }
  
  function createTimeOutEvent(record, date, hour) {
    record.type = "Timeout",
      record.hour = "HHMM",
      record.date = "YYYY-MM-DD",
      console.log(record);
  }
  
  createTimeOutEvent(employeeRecord, "2014-02-28 1400");