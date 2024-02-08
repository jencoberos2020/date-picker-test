function toggleDatePicker(event) {
    event.stopPropagation();
    const datepickerPopup = document.getElementById('datepicker-popup');
    datepickerPopup.classList.toggle('hidden');
}

function populatePublicationTime() {
    const publicationTimeSelect = document.getElementById('publication-time');
    const startTime = 9;
    const endTime = 17; // 5 PM
    const step = 30; // 30 minutes
    for (let hour = startTime; hour <= endTime; hour++) {
        for (let minute = 0; minute < 60; minute += step) {
            const isAM = hour < 12;
            const displayHour = isAM ? hour : hour - 12;
            const timeSuffix = isAM ? 'AM' : 'PM';
            const time = `${displayHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${timeSuffix}`;
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            publicationTimeSelect.appendChild(option);
        }
    }
}

populatePublicationTime();

function selectDateTime() {
    const selectedDate = document.getElementById('publication-date').value;
    const selectedTime = document.getElementById('publication-time').value;
    const selectedTimezone = document.getElementById('publication-timezone').value;

    const publicationDateInput = document.getElementById('publication-date');
    publicationDateInput.value = `${selectedDate} ${selectedTime} ${selectedTimezone}`;

    const datepickerPopup = document.getElementById('datepicker-popup');
    datepickerPopup.classList.add('hidden');
}

$("#custom-datepicker").datepicker({
    dateFormat: "dd/mm/yy",
    minDate: 0,
    maxDate: "+1yr",
    onSelect: function(dateText, inst) {
        document.getElementById('publication-date').value = dateText;
        selectDateTime();
    }
});