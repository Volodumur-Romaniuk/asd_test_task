
var initialpicker = document.getElementsByClassName('grid-dates')[0].innerHTML;

document.querySelector('button').onclick = () => {
    let res1 = document.getElementsByClassName('popup')[0].style.display;
    let btn_popup_close = document.getElementById('open-popup');
    if (res1 === 'none') {
        document.getElementsByClassName('popup')[0].style.display = 'block'  
        btn_popup_close.textContent="Close";
    } else {
        document.getElementsByClassName('popup')[0].style.display = 'none'
        btn_popup_close.textContent="Open";
    }
}  

var count_change_themes =0;
function changethemes() {
    var element_backround = document.getElementsByClassName('popup')[0];
    element_backround.classList.toggle("light-mode");
    var element_text_color = document.getElementsByClassName('grid-dates')[0];


    element_text_color.classList.toggle('text-color-light');
    var element_dark_btn = document.getElementById('change');
    element_dark_btn.classList.toggle("dark-button");

    var element_sun = document.getElementsByClassName('light')[0];
    element_sun.classList.toggle("light-res");
    var element_moon = document.getElementsByClassName('dark')[0];
    element_moon.classList.toggle("dark-res");

    var btn_apply = document.getElementById('apply');
    btn_apply.classList.toggle("buttons-light");

    var btn_clear = document.getElementById('clear');
    btn_clear.classList.toggle("buttons-light");

    var element_calendar_light = document.getElementsByClassName("element-calendar")[0];
    element_calendar_light.classList.toggle("element-calendar-light");

    var element_select = document.getElementById('months-select');
    element_select.classList.toggle("light-select");
    var element_input = document.getElementById('year');
    element_input.classList.toggle("light-select");


    let element_outputs = document.getElementsByClassName('output')[0];
    element_outputs.classList.toggle('text-color-light');

    count_change_themes++;

    
    if(countsel === 1){
        if ((count_change_themes % 2) === 0) {
            changebackground.children[+e.textContent + index_day_last_month - 1].style.background = '#2b4250'
        } else {
            changebackground.children[+e.textContent + index_day_last_month - 1].style.background = '#11AAA6FF'
        }

    } else if(countsel === 2){
        if (+arr[0] > +arr[1]) {

            let a = +arr[0];
            arr[0] = +arr[1];
            arr[1] = a;
            coloredRange(+arr[0] + index_day_last_month - 1, +arr[1] + index_day_last_month - 1);
        } else{
            coloredRange(+arr[0] + index_day_last_month - 1, +arr[1] + index_day_last_month - 1);
        }

    }else if(countsel >2){
        

    }
    }
document.getElementById('months-select').addEventListener('change', () => {
    renderGrid();
})

document.getElementById('year').addEventListener('change', () => {
    renderGrid();
    
})

const getMonthDays = (month, year) => {
    const months30 = [4, 6, 9, 11];
    const leapYear = is_leap_year(year);
    return month === 2
        ? leapYear
            ? 29
            : 28
        : months30.includes(month)
            ? 30
            : 31;
};
document.getElementById('change').onclick = () => {
    changethemes();
}

const get_weekday = (year, month, day) => {
    let weekdays = [0, 1, 2, 3, 5, 6,
        0, 1, 3, 4, 5, 6,
        1, 2, 3, 4, 6,
        0, 1, 2, 4, 5, 6,
        0, 2, 3, 4, 5];

    let shift_not_leap = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    let shift_leap = [0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];

    let is_leap = is_leap_year(year);

    year -= 1;
    year %= 400;

    let century = parseInt(year / 100);

    year %= 100;
    let index = (year + (4 * century)) % 28;

    let weekday = weekdays[parseInt(index)];
    weekday += is_leap ? shift_leap[month - 1]
        : shift_not_leap[month - 1];
    weekday += (day - 1);
    weekday %= 7;

    return weekday;
}


const is_leap_year = (year) => {
    if ((year % 400) == 0) return true;

    if ((year % 100) == 0) return false;

    if ((year % 4) == 0) return true;

    return false;
}

var inputdate;
var selectdate;
var changebackground = document.getElementsByClassName('grid-dates')[0];
var countsel = 0;
var arr = []

var res_value_e ;

const coloredRange = (firstindex, lastindex) =>{
    if ((count_change_themes % 2) === 0) {
        for (let i = firstindex; i <= lastindex; i++) {

            changebackground.children[i].style.background = '#2b4250'
        }
    } else {
        for (let i = firstindex; i <= lastindex; i++) {

            changebackground.children[i].style.background = '#11AAA6FF'
        }
    }
}


const getvalue = (e) =>{
    res_value_e = e.textContent;
    inputdate = document.getElementById('year').value;
    selectdate = document.getElementById('months-select').value;
    arr.push(e.textContent);
    countsel = arr.length;
    if(countsel === 1){
        if ((count_change_themes % 2) === 0) {
            changebackground.children[+e.textContent + index_day_last_month - 1].style.background = '#2b4250'
        } else {
            changebackground.children[+e.textContent + index_day_last_month - 1].style.background = '#11AAA6FF'
        }
        console.log("work");
    } else if(countsel === 2){
        if (+arr[0] > +arr[1]) {

            let a = arr[0];
            arr[0] = arr[1];
            arr[1] = a;
            coloredRange(+arr[0] + index_day_last_month - 1, +arr[1] + index_day_last_month - 1);
            console.log("work");
        } else{
            coloredRange(+arr[0] + index_day_last_month - 1, +arr[1] + index_day_last_month - 1);
        }

    }else if(countsel >2){
        for (let i = +arr[0] + index_day_last_month - 1; i <= +arr[1] + index_day_last_month - 1; i++) {

            changebackground.children[i].style.background = 'transparent'
        }
        countsel = 0;
        arr = [];
        arr.push(e.textContent);

        if ((count_change_themes % 2) === 0) {
            changebackground.children[+e.textContent + index_day_last_month - 1].style.background = '#2b4250'
        } else {
            changebackground.children[+e.textContent + index_day_last_month - 1].style.background = '#11AAA6FF'
        }


    }
}

const changeThemesforOutput = (e) =>{
    if ((count_change_themes % 2) === 0) {
        e && e.classList.remove('text-color-light'); 
        
    } else {
        e && e.classList.add('text-color-light');
      }

}
document.getElementById('apply').onclick = () => {
    if (arr.length === 1) {
        outputone(inputdate, selectdate)
        let element_outputs = document.getElementsByClassName('output')[0];
        changebackground.children[+arr[0] + index_day_last_month - 1].style.background = 'transparent'
        changeThemesforOutput(element_outputs);
    } else if (arr.length === 2){
        outputtwo(inputdate,selectdate)
        let element_outputs = document.getElementsByClassName('output')[0];
        changeThemesforOutput(element_outputs);
        for (let i = +arr[0] + index_day_last_month - 1; i <= +arr[1] + index_day_last_month - 1; i++) {

            changebackground.children[i].style.background = 'transparent'
        }


    }
    countsel = 0;
    arr = [];

}
var count_delete = 1;
const outputone = (inputdate, selectdate) => {
    let addrecord = document.getElementsByClassName('output')[0];

    if (arr[0].length === 1 && selectdate.length === 1) {
        addrecord.innerHTML += `
        
             <span class="output-el" >${inputdate}-0${selectdate}-0${arr[0]}  
                <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                  <i class="fas fa-times"></i>
                </button> 
             </span> 
        `
    } else if (arr[0].length === 1) {
        addrecord.innerHTML += `
            
                <span class="output-el" >${inputdate}-${selectdate}-0${arr[0]}
                    <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                        <i class="fas fa-times"></i>         
                    </button>  
                </span> 
            `
    } else if (selectdate.length === 1) {
        addrecord.innerHTML += `
           
                <span class="output-el" >${inputdate}-0${selectdate}-${arr[0]} 
                    <button class="button-del"  id="button-del${count_delete}" onclick="remove_output(this.id)">
                       <i class="fas fa-times"></i>
                    </button> 
                </span> 
           `

    } else {
        addrecord.innerHTML += `
            
                <span class="output-el" >${inputdate}-${selectdate}-${arr[0]} 
                    <button class="button-del"  id="button-del${count_delete}" onclick="remove_output(this.id)">
                        <i class="fas fa-times"></i>
                    </button> 
                </span  
            `

    }
    count_delete++;

}
 


const outputtwo = (inputdate, selectdate) => {
    let addrecord = document.getElementsByClassName('output')[0];

     console.log("array ",arr);
     console.log("length ",arr[0].length,arr[1].length);
     

    if (arr[0].length === 1 && selectdate.length === 1 &&  arr[1].length === 1) {
        let str = '';
       
            str += inputdate + "-" + "0" + selectdate + "-" + "0" + arr[0];

            str += "--";

            str += inputdate + "-" + "0" + selectdate + "-" +  + "0" + arr[1];
    
        addrecord.innerHTML += `
        
             <span class="output-el" >${str} 
                <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                  <i class="fas fa-times"></i>
                </button> 
             </span>`
        
             
        
    } else if (arr[0].length === 1 && arr[1].length === 1) {
                let str = '';
                str += inputdate + "-" + selectdate + "-" + "0" + arr[0];

                str += "--"
    
                str += inputdate + "-" + selectdate + "-" + "0" + arr[1];

                addrecord.innerHTML += `
        
             <span class="output-el" >${str} 
                <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                  <i class="fas fa-times"></i>
                </button> 
             </span> 
        `
              
                  
    } else if (selectdate.length === 1 && arr[0].length === 1) {
        
                
                let str = '';
                str += inputdate + "-" + "0" + selectdate + "-" + "0" + arr[0];

                str += "--"
    
                str += inputdate + "-" + "0" + selectdate + "-"  + arr[1];
        addrecord.innerHTML += `
        
             <span class="output-el" >${str} 
                <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                  <i class="fas fa-times"></i>
                </button> 
             </span> 
        `
            
    } else if (selectdate.length === 1 && arr[1].length === 1) {
        let str = '';
        str += inputdate + "-" + "0" +selectdate + "-"  + arr[0];

        str += "--"

        str += inputdate + "-" + "0" + selectdate + "-" + "0" + arr[1];
        addrecord.innerHTML += `

             <span class="output-el" >${str} 
                <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                    <i class="fas fa-times"></i>
                </button> 
            </span> 
        `
    }
    else if (selectdate.length === 1) {
        let str = '';
        str += inputdate + "-" + "0" +selectdate + "-"  + arr[0];

        str += "--"

        str += inputdate + "-" + "0" + selectdate + "-" + arr[1];
        addrecord.innerHTML += `

             <span class="output-el" >${str} 
                <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                    <i class="fas fa-times"></i>
                </button> 
            </span> 
        `
    }
    else if (arr[0].length === 1) {
        let str = '';
        str += inputdate + "-" + selectdate + "-"  + "0" + arr[0];

        str += "--"

        str += inputdate + "-" + selectdate + "-" + arr[1];
        addrecord.innerHTML += `

             <span class="output-el" >${str} 
                <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                    <i class="fas fa-times"></i>
                </button> 
            </span> 
        `
    }
    else if (arr[1].length === 1) {
        let str = '';
        str += inputdate + "-" + selectdate + "-" + arr[0];

        str += "--"

        str += inputdate + "-" + selectdate + "-" + "0" + arr[1];
        addrecord.innerHTML += `
             <span class="output-el" >${str} 
                <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                    <i class="fas fa-times"></i>
                </button> 
            </span> 
        `
    }
    else {
        let str = '';
        str += inputdate + "-" + selectdate + "-" + arr[0];

        str += "--"

        str += inputdate + "-" + selectdate + "-" + arr[1];
        addrecord.innerHTML += `
        
             <span class="output-el" >${str} 
                <button class="button-del"  id="button-del${count_delete}"  onclick="remove_output(this.id)">
                  <i class="fas fa-times"></i>
                </button> 
             </span> 
        `
    }

}

const remove_output = (e) => {
    var btn_id_rem = document.getElementById(e);

    btn_id_rem.parentNode.remove();
    console.log('here')
}



document.getElementById('clear').onclick = () => {
    if (countsel == 1) {
        changebackground.children[+arr[0] + index_day_last_month - 1].style.background = 'transparent'
    } else {
        for (let i = +arr[0] + index_day_last_month - 1; i <= +arr[1] + index_day_last_month - 1; i++) {

            changebackground.children[i].style.background = 'transparent'
        }
    }

    arr = [];
    countsel = 0;
   
}
var index_day_last_month;
const renderGrid = () =>{
    inputdate = document.getElementById('year').value;
    selectdate = document.getElementById('months-select').value;

    index_day_last_month = get_weekday(+inputdate, +selectdate, 1);
    console.log(index_day_last_month);
    console.log(inputdate, selectdate);

    console.log("index" + index_day_last_month);
    console.log("==========")
    let res = getMonthDays(+selectdate, +inputdate);
    //  console.log(res);
    let addrecord = document.getElementsByClassName('grid-dates')[0];

   
     addrecord.innerHTML = initialpicker;

     for (let i = 1; i <= index_day_last_month; i++) {
        addrecord.innerHTML += `<span  class="prev-month-days">   </span>`
    }
    for (let i = 1; i <= res; i++) {
        addrecord.innerHTML += `<span  onclick="getvalue(this)" class="element-calendar" >${i}</span>`
    }

} 

renderGrid();