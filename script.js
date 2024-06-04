const pantalla = document.querySelector(".pantalla"); 
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => { // Cada vez que presionen algun boton se pueda ver 

        if (boton.id === "limpiar"){
            pantalla.textContent = "0"; // Cada vez que presione c que significa limpiar va aparecer 0 
            return 
        }

        if(boton.id === "borrar") {// Se utiliza el condicional id para que cada vez que presione la flecha sepa que es borrar 
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!"){  
                pantalla.textContent = "0"; 
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); 
            }
            return; 
        }

        if (boton.id === "igual") {
            try { // Dentro del try se hace un if donde se evalua si al momento de solo poner el simbolo de division aparece error ocurre la operacio o no 
                if (pantalla.textContent.endsWith("/")) { //endsWith se utiliza para verificar si se termina en un caracter especifico o no. Aquí verifica si la última operación es una división
                    pantalla.textContent = "¡Error!"; // Muestra error si es una división sin números antes
                } else {
                    pantalla.textContent = eval(pantalla.textContent); // Evalúa la expresión
                }
            } catch {
                pantalla.textContent = "¡Error!";
            }
            return; 
        }

        const botonOn = boton.textContent; // Esto es para que en la pantalla vayan apareciendo todos los clicks 
        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }

    });
});
