
const notification_state_btn    = document.querySelector('.notifications__header__status-btn');
const notification_items        = document.querySelectorAll('.notifications__item');
const notifications_counter     = document.querySelector('.notifications__header__counter');

if (localStorage.getItem("notification_status") == "all-read") {
    remove_unread_class_from_notification();
    notifications_counter.innerHTML = '0';
}

notification_state_btn.addEventListener('click', function() {
    if(!this.classList.contains('notifications__header__status-btn--all-read')) {
        this.classList.add('notifications__header__status-btn--all-read');
        remove_unread_class_from_notification();
        notifications_counter.innerHTML = '0'; 
        localStorage.setItem("notification_status", "all-read")
    }
});


function remove_unread_class_from_notification() {
    notification_items.forEach(function(notification) {
        if(notification.classList.contains('notifications__item--unread')) {
            notification.classList.remove('notifications__item--unread');
        }
    });
}