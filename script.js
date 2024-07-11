$(document).ready(function() {
    $("#inputName").focus();

    if(localStorage.getItem("colorMode") === null){
        localStorage.setItem("colorMode", "light");
    }
    
    // Obtiene el modo de color almacenado
    const modoColor = localStorage.getItem("colorMode");

    // Aplica el modo de color al cargar la página
    cambiarModoColor(modoColor);

    $(".btnEnviar").on("click", function(event) {
        event.preventDefault();
        const colorcito = localStorage.getItem("colorMode");

        if (validarFormulario()) {
            localStorage.setItem("colorMode", colorcito);
            window.location.reload();
        }
    });

    function validarFormulario() {
        let esValido = true;

        // Validar el campo Nombre
        const nombre = $("#inputName").val().trim();

        const regexNombreApellido = /^[A-Za-z]+(\s[A-Za-z]+)?$/;
        
        if (nombre === "" || !regexNombreApellido.test(nombre)) {
            $("#nameWrong").removeClass("visually-hidden");
            esValido = false;
        } else {
            $("#nameWrong").addClass("visually-hidden");
        }

        // Validar el campo Apellido
        const apellido = $("#inputApellido").val().trim();


        if (apellido === "" || !regexNombreApellido.test(apellido)) {
            $("#surnameWrong").removeClass("visually-hidden");
            esValido = false;
        }else{
            $("#surnameWrong").addClass("visually-hidden");
        }

        // Validar el campo Email
        let email = $("#inputEmail1").val().trim();

        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (email === "" || !regexEmail.test(email)) {
            $("#emailWrong").removeClass("visually-hidden");
            esValido = false;
        }else{
            $("#emailWrong").addClass("visually-hidden");
        }

        const fechaNacimiento = $("#fechaNacimiento").val();
        console.log(fechaNacimiento);

        if (fechaNacimiento === "" || !fechaNacimiento) {
            $("#dateWrong").removeClass("visually-hidden");
            esValido = false;
        }else{
            $("#dateWrong").addClass("visually-hidden");
        }
        
        // Validar País de Residencia
        const pais = $("#inputPais").val();
        if (!pais) {
            $("#countryWrong").removeClass("visually-hidden");
            esValido = false;
        }else{
            $("#countryWrong").addClass("visually-hidden");
        }

        return esValido;
    }
});


$("#modoColor").on("click", function() {
    let modoColor = localStorage.getItem("colorMode");

    if(modoColor === "light"){
        localStorage.setItem("colorMode", "dark")
        modoColor = "dark";
    }
    else{
        localStorage.setItem("colorMode", "light")
        modoColor = "light"
    }
    console.log(modoColor)
    cambiarModoColor(modoColor);
});

function cambiarModoColor(modo){
    if(modo === "dark"){
        $("body").addClass("bg-dark");
        $("form").attr("data-bs-theme", "dark").removeClass("bg-white").addClass("bg-dark border border-secondary");
        $(".titulo").removeClass("text-black").addClass("text-white");
        $("label").removeClass("text-black").addClass("text-white");
        $(".btn").removeClass("btn-primary").addClass("btn-secondary");
        // localStorage.setItem("colorMode", "dark");
    }else{
        $("body").removeClass("bg-dark").addClass("bg-light");
        $("form").attr("data-bs-theme", "light").removeClass("bg-dark border border-secondary").addClass("bg-white");
        $("label").removeClass("text-white");
        $(".titulo").removeClass("text-white").addClass("text-black");
        $(".btn").removeClass("btn-secondary").addClass("btn-primary");
        // localStorage.setItem("colorMode", "light");
    }
}

let estilosActivos = true; 

$('#cambiarEstilo').on('click', function() {

    if (estilosActivos) {
        $('link[rel="stylesheet"]').attr('href', 'none.css');
    } else {
        $('link[rel="stylesheet"]').attr('href', 'styles.css');
    }

    estilosActivos = !estilosActivos;
});


