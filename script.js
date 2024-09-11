function calculateBMI() {
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let category = '';

        if (bmi < 18.5) {
            category = 'Kurus';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Gemuk';
        } else {
            category = 'Obesitas';
        }

        document.getElementById('result').innerHTML = `Jenis Kelamin: ${gender}<br>BMI Anda: ${bmi} (${category})`;
    } else {
        document.getElementById('result').innerHTML = 'Mohon isi semua kolom';
    }
}

function openModal() {
    document.getElementById('authModal').style.display = "block";
}

function closeModal() {
    document.getElementById('authModal').style.display = "none";
}

function signUp() {
    const email = document.getElementById('signUpemail').value;  // Perbaikan id sesuai form
    const password = document.getElementById('signUppassword').value;

    // Proses sign up (contoh: simpan ke database)
    alert(`Sign Up berhasil!\nEmail: ${email}`);
    closeModal();
}

function signIn() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    // Proses sign in (contoh: validasi dengan database)
    alert(`Sign In berhasil!\nEmail: ${email}`);
    closeModal();
}

function slideToSignUp() {
    document.querySelector('.form-slider').style.transform = 'translateX(0)';
}

function slideToSignIn() {
    document.querySelector('.form-slider').style.transform = 'translateX(-50%)';
}