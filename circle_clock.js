let sec=document.getElementById('second');
let min=document.getElementById('minute');
let hour=document.getElementById('hour');
let date=new Date();
hour.style.transform=`rotate(${30*date.getHours()}deg)`;
min.style.transform=`rotate(${6*date.getMinutes()}deg)`;
sec.style.transform=`rotate(${6*date.getSeconds()}deg)`;
let rotate=[
    { transform:`rotate(${6*date.getSeconds()}deg)`},
    { transform:`rotate(${360+6*date.getSeconds()}deg)`}
];
let time={
    duration:60000,
    iterations:Infinity
};
sec.animate(rotate,time);
rotate=[
    { transform:`rotate(${6*date.getMinutes()}deg)`},
    { transform:`rotate(${360+6*date.getMinutes()}deg)`}
];
time={
    duration:3600000,
    iterations:Infinity
};
min.animate(rotate,time);
rotate=[
    { transform:`rotate(${30*date.getHours()}deg)`},
    { transform:`rotate(${360+30*date.getHours()}deg)`}
];
time={
    duration: 43200000,
    iterations:Infinity
};
hour.animate(rotate,time);