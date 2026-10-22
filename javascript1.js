// Referencias
const chatButton = document.getElementById('chat-button');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send');
const messageInput = document.getElementById('message');
const chatMessages = document.getElementById('chat-messages');

// Respuestas
const responses = {
    "hola": "¡Holaa! 😻 Bienvenido/a a Ana y sus Gatos & Gatas 💕 ¿En qué puedo ayudarte hoy?",
    "quien eres": "Soy el asistente gatuno 🐾 de Ana y sus Gatos & Gatas 😺",
    "que venden": "Vendemos hermosos collares para gatos y gatas 😻✨ personalizados y llenos de estilo 💖",
    "collares": "Tenemos collares de muchos colores, tamaños y diseños 🌈🐱",
    "personalizados": "¡Sí! 😺 Puedes elegir color, tamaño y algunos dijes para hacer el collar único 💕",
    "precios": "Nuestros precios varían según el diseño 😸💰 Puedes mirar el catálogo en la sección productos 🛍️",
    "catalogo": "Puedes ver todos los productos en nuestro catálogo 🐾✨",
    "envios": "¡Sí hacemos envíos! 📦🐱 Dependiendo de tu ciudad puede variar el tiempo de entrega 💕",
    "medios de pago": "Aceptamos pagos por Daviplata 💳✨",
    "daviplata": "Puedes realizar tus pagos fácilmente por Daviplata 😺💸",
    "instagram": "Síguenos en Instagram 😻📸 @anaysusgatosygatas",
    "tiktok": "También estamos en TikTok 🐾🎥 @anaysusgatos",
    "contacto": "Puedes escribirnos al correo 💌 anaysusgatosygatas.2025@gmail.com",
    "telefono": "Puedes comunicarte al 📞 3186421072 😸",
    "horarios": "Respondemos mensajes con mucho amor 💕🐱 durante el día 😺",
    "material": "Nuestros collares están hechos con materiales cómodos y lindos para los michis 🐾💖",
    "tallas": "Tenemos diferentes tallas para gatitos pequeños y grandes 😻",
    "ayuda": "Claro 💕 Estoy aquí para ayudarte con tus dudas sobre collares y pedidos 😺",
    "gracias": "Awww gracias a ti 😻🐾 ¡Esperamos verte pronto nuevamente!",
    "adios": "¡Hasta pronto! 😺💕 Dale muchos abrazos a tu michi 🐾",
    "default": "Miau 😿 No entendí muy bien tu mensaje, ¿puedes intentarlo de otra forma? 💕"
};

// Abrir chat
if (chatButton && chatBox) {
    chatButton.addEventListener("click", () => {
        chatBox.style.display = "flex";
    });
}

// Cerrar chat
if (closeChat && chatBox) {
    closeChat.addEventListener("click", () => {
        chatBox.style.display = "none";
    });
}

// Enviar mensaje
function sendMessage() {

    const text = messageInput.value.trim().toLowerCase();

    if (text !== "") {

        chatMessages.insertAdjacentHTML(
            "beforeend",
            `<p><strong>Tú:</strong> ${messageInput.value}</p>`
        );

        const reply = responses[text] || responses["default"];

        setTimeout(() => {

            chatMessages.insertAdjacentHTML(
                "beforeend",
                `<p><strong>Bot:</strong> ${reply}</p>`
            );

            chatMessages.scrollTop = chatMessages.scrollHeight;

        }, 600);

        messageInput.value = "";
    }
}

// Eventos
sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
