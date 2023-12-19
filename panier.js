// Fonction pour mettre à jour la quantité d'un article
function updateQuantity(button, delta) {
    var input = button.parentNode.querySelector('.quantity-input');
    var newValue = parseInt(input.value) + delta;
    input.value = newValue < 1 ? 1 : newValue;
    return updateTotal(); // Mise à jour du prix total
}

// Fonction pour supprimer un article du panier
function removeItem(button) {
    button.closest('.cart-item').remove();
    return updateTotal(); // Mise à jour du prix total
}

// Fonction pour aimer ou ne plus aimer un article
function toggleLike(heartIcon) {
    heartIcon.classList.toggle('icon-heart'); // Article aimé
    heartIcon.classList.toggle('icon-heart-empty'); // Article non-aimé
}

// Fonction pour calculer et afficher le prix total
function updateTotal() {
    var total = 0;
    var items = document.querySelectorAll('.cart-item');
    items.forEach(function(item) {
    var price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
    var quantity = parseInt(item.querySelector('.quantity-input').value);
    total += price * quantity;
    });
    return document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
}

function reussite() {
    prompt('Votre commande a bien été validée.');
        if (confirm) {
        location.reload();
        } 
        else {
        txt = "You pressed Cancel!";
        }
}

