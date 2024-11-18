"use strict";
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', (event) => {
    var _a;
    event.preventDefault();
    // Get values from form inputs
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const phoneNumber = document.getElementById('PhoneNumber').value;
    const projects = document.getElementById('Projects').value;
    const skills = document.getElementById('Skills').value;
    const youtubeChannel = document.getElementById('YoutubeChannel').value;
    const instagramChannel = (_a = document.getElementById('InstagramChannel')) === null || _a === void 0 ? void 0 : _a.value;
    const linkedinProfile = document.getElementById('LikedinProfile').value;
    const githubProfile = document.getElementById('GitHubprofile').value;
    // Resume HTML content
    const resumeHTML = `
        <h2><b>EDITABLE RESUME</b></h2>

        <h3><b>Information</b></h3>
        <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
        <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
        <p><b>Phone Number:</b><span contenteditable="true"> ${phoneNumber}</span></p>

        <h3><b>Projects:</b></h3>
        <p contenteditable="true">${projects}</p>

        <h3><b>Skills:</b></h3>
        <p contenteditable="true">${skills}</p>

        <h3><b>YouTube Channel:</b></h3>
        <p contenteditable="true">${youtubeChannel}</p>

        <h3><b>Instagram Channel:</b></h3>
        <p contenteditable="true">${instagramChannel}</p>

        <h3><b>LinkedIn Profile:</b></h3>
        <p contenteditable="true">${linkedinProfile}</p>

        <h3><b>GitHub Profile:</b></h3>
        <p contenteditable="true">${githubProfile}</p>
    `;
    // Update the resume display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Something went wrong');
    }
});
