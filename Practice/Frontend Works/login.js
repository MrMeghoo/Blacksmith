document.addEventListener('DOMContentLoaded', function() {
    const users = [
        { email: 'user1@example.com', password: 'password1' },
        { email: 'user2@example.com', password: 'password2' }
    ];

    const signupBtn = document.querySelector('.signup');
    const slider = document.querySelector('.slider');
    const formSection = document.querySelector('.form-section');
    const signupSubmitBtn = document.querySelector('.signup-box .clkbtn');

    signupBtn.addEventListener('click', () => {
        slider.classList.add('moveslider');
        formSection.classList.add('form-section-move');
    });

    signupSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.querySelector('.signup-box .email').value;
        // const password = document.querySelector('.signup-box .password').value;
        // // const confirmPassword = document.querySelector('.signup-box .password:nth-of-type(2)').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const userExists = users.find(user => user.email === email);
        if (userExists) {
            alert('User already exists');
        } else {
            users.push({ email, password });
            alert('Signup successful! Please log in.');
            slider.classList.remove('moveslider');
            formSection.classList.remove('form-section-move');
        }
    });
});

