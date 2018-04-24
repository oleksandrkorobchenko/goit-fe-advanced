let Taba = 6;
let Sharm = 15;
let Hurgada = 25;
let place;

let places = prompt("Введите колличество мест, необходимых Вам?");

if( isNaN(places)||places<=0){
        alert("Ошибка ввода");
}
else{
    
    if(places<=Taba){
        place = "Taba";
        let choice= confirm(`Согласны ли вы быть в этой групе: ${place}?`);
            if(choice===true){
                alert(`Приятного путешествия в группе: ${place}`);
                Taba= Taba-places;
            } else{
                alert("Нам очень жаль, приходите еще!");
            }
    } else if(places<=Sharm){
        place = "Sharm";
        let choice= confirm(`Согласны ли вы быть в этой групе: ${place}?`);
            if(choice===true){
                alert(`Приятного путешествия в группе: ${place}`);
                Sharm = Sharm - places;
            } else{
                alert("Нам очень жаль, приходите еще!");
            }
    } else if(places<=Hurgada){
        place = "Hurgada";
        let choice= confirm(`Согласны ли вы быть в этой групе: ${place}?`);
            if(choice===true){
                alert(`Приятного путешествия в группе: ${place}`);
                Hurgada = Hurgada-places;
            } else{
                alert("Нам очень жаль, приходите еще!");
            }
    } else {
        alert("Извините, мест нет.")
    }
}