document.addEventListener('DOMContentLoaded', function () {
    // Quill configuration options
    const quillOptions = {
        theme: 'snow'
    };

    // Quill editors for the resume sections
    const educationEditor = new Quill('#education-editor', quillOptions);
    const skillsEditor = new Quill('#skills-editor', quillOptions);
    const experienceEditor = new Quill('#experience-editor', quillOptions);

    // Access the form element
    const resumeForm = document.getElementById('resume-form');

    // Check if the form element exists before proceeding
    if (resumeForm) {
        resumeForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get input values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const education = educationEditor.root.innerHTML;
            const skills = skillsEditor.root.innerHTML;
            const experience = experienceEditor.root.innerHTML;

            // Handle profile picture upload
            const pictureInput = document.getElementById('profile-picture');
            const pictureFile = pictureInput.files ? pictureInput.files[0] : null;
            const reader = new FileReader();

            reader.onload = function (e) {
                const displayPicture = document.getElementById('display-picture');
                displayPicture.src = e.target.result;
            };

            if (pictureFile) {
                reader.readAsDataURL(pictureFile);
            }

            // Display resume information
            document.getElementById('display-name').textContent = name;
            const displayEmail = document.getElementById('display-email');
            displayEmail.textContent = email;
            displayEmail.setAttribute('href', `mailto:${email}`);

            const displayPhone = document.getElementById('display-phone');
            displayPhone.textContent = phone;
            displayPhone.setAttribute('href', `tel:${phone}`);

            document.getElementById('display-education').innerHTML = education;
            document.getElementById('display-skills').innerHTML = skills;
            document.getElementById('display-experience').innerHTML = experience;

            // Show the resume container
            document.getElementById('resume-container').style.display = 'flex';
        });
    }
});
