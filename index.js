const add_button = document.querySelector('#addButton');
const item_input = document.querySelector('#itemInput');
const item_list = document.querySelector('#item-list');
let id = 0;

add_button.addEventListener(
    'click',function () {
        const input_value = item_input.value;

        if (input_value === '') {
            console.log('input field cannot be empty');
            return; //breakout
        }

    })