const Colors = 
['#FF6633', '#FF33FF', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#FF1A66', '#E6331A',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#6666FF'];

const API = 'https://type.fit/api/quotes';

function random(array) {
    return Math.floor(Math.random() * array.length);
}

const any = 'Proverb'

const load = "Error..."

function quote() {
    $(document).ready(()=>{
        const color = Colors[random(Colors)];
        $.getJSON(API , (data,status) => {
            if (status === 'success') {
                $(document.body).css('background-color', color);
                $('#quote').html(data[random(data)].text);
                $('#quote').css('color', color);
                $('#author').css('color', color);
                console.log(color);
                $('#author').html(`- ${data[random(data)].author === null ? any : data[random(data)].author}`)
                $('#options button').css('background-color', color);
            }
            else{
                $('#quote').html(load);
            }
        })        
    })
}

// const quoteCopy = document.querySelector('#quote')
// function copyme() {
//     $(()=>{
//         navigator.clipboard.writeText(quoteCopy.innerHTML)
//         alert(`Copied to Clipboard`)
//     })
// }

function copyme() {
    $(()=>{
        navigator.clipboard.writeText($('#quote').html());
        alert(`Copied to Clipboard`);
    })
}

quote();