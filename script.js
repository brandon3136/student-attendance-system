// Array to store attendance records
let attendanceRecords = [];

// Get DOM elements
const studentNameInput = document.getElementById('studentName');
const markAttendanceButton = document.getElementById('markAttendance');
const attendanceRecordsList = document.getElementById('attendanceRecords');

// Function to mark attendance
function markAttendance() {
  const studentName = studentNameInput.value.trim();

  if (studentName === '') {
    alert('Please enter a student name.');
    return;
  }

  // Add attendance record
  const record = {
    name: studentName,
    date: new Date().toLocaleString()
  };
  attendanceRecords.push(record);

  // Clear input field
  studentNameInput.value = '';

  // Update attendance list
  displayAttendanceRecords();
}

// Function to display attendance records
function displayAttendanceRecords() {
  attendanceRecordsList.innerHTML = ''; // Clear the list

  attendanceRecords.forEach((record, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${record.name} - ${record.date}`;
    attendanceRecordsList.appendChild(listItem);
  });
}

// Event listener for the button
markAttendanceButton.addEventListener('click', markAttendance);