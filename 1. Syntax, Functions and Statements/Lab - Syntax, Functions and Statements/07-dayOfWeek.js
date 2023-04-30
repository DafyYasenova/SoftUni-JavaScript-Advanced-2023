function dayOfWeek(day) {

    let dayOfWeek = 0;
    switch (day) {
        case 'Monday': dayOfWeek = 1; break;
        case 'Tuesday': dayOfWeek = 2; break;
        case 'Wednesday': dayOfWeek = 3; break;
        case 'Thursday': dayOfWeek = 4; break;
        case 'Friday': dayOfWeek = 5; break;
        case 'Saturday': dayOfWeek = 6; break;
        case 'Sunday': dayOfWeek = 7; break;
        default : dayOfWeek = 'error'; break;
    }
    console.log(dayOfWeek);
}
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');
