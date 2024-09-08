var _a;
//listing elements
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilepictureInput = document.getElementById("resume-image");
    //type assertion
    var firstnameElement = document.getElementById('firstname');
    var lastnameElement = document.getElementById('lastname');
    var genderElement = document.getElementById('gender');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var profilepictureElement = document.getElementById('resume-image');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //**
    var usernameElement = document.getElementById("username");
    if (profilepictureElement && firstnameElement && phoneElement && emailElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var gender = genderElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        //picture elements
        var profilepicturefile = (_a = profilepictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //**
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'));
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilepictureURL, " ? '<img src=").concat(profilepictureURL, " alt=\"Profile Picture\" class=\"profilepicture\">':\"\"\n    <p><strong>First Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(firstname, "</span> </p>\n    <p><strong>Last Name:</strong><span id=\"edit-name\" class=\"editable\">").concat(lastname, "\n    <p><strong>Gender:</strong><span id=\"edit-name\" class=\"editable\">").concat(gender, "\n    <p><strong>E-mail Address</strong> <span id=\"edit-name\" class=\"editable\">").concat(email, " </p>\n    <p><strong>Phone Number:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(phone, " </p>\n    <p><strong>Profile Picture:</strong>\n     <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, " </p>\n    <h3>Skills</h3>\n    <pid=\"edit-education\" class=\"editable\">").concat(skills, " </p>\n    <h3>Experience</h3>\n    <pid=\"edit-education\" class=\"editable\">").concat(experience, " </p>\n    ");
        //**
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Downoad your Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
            makeeditable();
        }
        else {
            console.error('the resume output elements are missings');
        }
    }
    else {
        console.error('one or more output elements are missings');
    }
});
function makeeditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentelement = element;
            var currentvalue = currentelement.textContent || "";
            //replace content
            if (currentelement.tagName === "p" || currentelement.tagName === 'span') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentelement.textContent = input_1.value;
                    currentelement.style.display = 'inline';
                    input_1.remove();
                });
                currentelement.style.display = 'none';
                (_a = currentelement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentelement);
                input_1.focus();
            }
        });
    });
}
