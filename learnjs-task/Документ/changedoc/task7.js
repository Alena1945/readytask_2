// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

function createTable(year, month){

    let thead = '<tr>';
    
    thead += '<th>Пн</th>';
    thead += '<th>Вт</th>';
    thead += '<th>Ср</th>';
    thead += '<th>Чт</th>';
    thead += '<th>Пт</th>';
    thead += '<th>Сб</th>'; 
    thead += '<th>Вс</th>'; 
    
    thead += '</tr>';
    
    tbody = '';
    
    let days = new Date(year, month + 1, 0).getDate();
    
    let firstWeek = new Date(year, month, 1).getDay();
    let day = 1;
    
    if(firstWeek == 0) firstWeek = 6;
    else firstWeek-=1;
    
    
    for (let i = 0; i < 6; i++) {
        tbody += '<tr>';
        for (let j = 0; j < 7; j++)
        if(i==0 && j >= firstWeek){
            tbody += '<td>' + day + '</td>';
            day++;
        }else if(i != 0 && day <= days) {
            tbody += '<td>' + day + '</td>';
            day++
        }else{
            tbody += '<td> </td>';
        }
        
        tbody += '</tr>';
    }
    
    let tb = document.createElement('TABLE');
    tb.innerHTML = thead + tbody;
    
    document.body.append(tb);
}