function setAlarm() {

    const timeInput = document.getElementById('time-input');
    const time = timeInput.value;

    const now = new Date();
    const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time.split(':')[0], time.split(':')[1]);

    const timeUntilAlarm = alarmTime.getTime() - now.getTime();

    chrome.alarms.create('alarm', {
        when: now.getTime() + timeUntilAlarm
    });

    alert('Alarm set for ' + time);
}

const setAlarmButton = document.getElementById('set-alarm-button');
setAlarmButton.addEventListener('click', setAlarm);