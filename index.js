var validations = {
    required: function(value){
      return value !== '';
    },
    email: function(value){
      return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
}


const firstForm = document.getElementById('firstForm');
const inputs = document.querySelectorAll('input.input');
const errorMessage = document.querySelectorAll('.input-message');
const secForm = document.getElementById('secForm');

function validate(form, input, errorMessage) {
    form.addEventListener('submit', (e) => {
        if (!validations.required(input.value) || !validations.email(input.value)) {
            input.className = "input input-error";
          errorMessage.className = "input-message input-show text-red";
        } else {
            input.className = "input";
          errorMessage.className = "input-message";
        }
  
        e.preventDefault();
      }, false)
  
      input.addEventListener('change', (e) => {
        if (input.value === '') {
            input.className = "input";
          errorMessage.className = "input-message";
        }

        e.preventDefault();
    })
}

validate(firstForm, inputs.item(0), errorMessage.item(0));
validate(secForm, inputs.item(1), errorMessage.item(1));