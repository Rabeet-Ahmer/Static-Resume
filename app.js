document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('button');
    var skill = document.getElementById('skill');
    button.addEventListener('click', function () {
        if (skill.style.display === 'none') {
            skill.style.display = 'block';
            button.textContent = 'Hide Skills';
        }
        else {
            skill.style.display = 'none';
            button.textContent = 'Show Skills';
        }
    });
});
