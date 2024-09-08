//listing elements
document.getElementById('resumeform')?.addEventListener('submit',function(event){
    event.preventDefault();

    const profilepictureInput = document.getElementById("resume-image") as HTMLInputElement;

    //type assertion
    const firstnameElement = document.getElementById('firstname') as HTMLInputElement;
    const lastnameElement = document.getElementById('lastname') as HTMLInputElement;
    const genderElement = document.getElementById('gender') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const profilepictureElement = document.getElementById('resume-image') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

//**
const usernameElement = document.getElementById("username") as HTMLInputElement;








     if(profilepictureElement && firstnameElement && phoneElement && emailElement &&  educationElement && experienceElement && skillsElement && usernameElement){


        const firstname = firstnameElement.value;
        const lastname = lastnameElement.value;
        const gender = genderElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
  //picture elements
        const profilepicturefile = profilepictureElement.files?.[0];
        const profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile):'';
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        

  
        
        //**
        const username = usernameElement.value;
         const uniquePath = `resume/${username.replace(/\s+/g,'_')}`
     
    //create resume output
    const resumeOutput =`
    <h2>Resume</h2>
    ${profilepictureURL} ? '<img src=${profilepictureURL} alt="Profile Picture" class="profilepicture">':""
    <p><strong>First Name:</strong> <span id="edit-name" class="editable">${firstname}</span> </p>
    <p><strong>Last Name:</strong><span id="edit-name" class="editable">${lastname}
    <p><strong>Gender:</strong><span id="edit-name" class="editable">${gender}
    <p><strong>E-mail Address</strong> <span id="edit-name" class="editable">${email} </p>
    <p><strong>Phone Number:</strong><span id="edit-name" class="editable"> ${phone} </p>
    <p><strong>Profile Picture:</strong>
     <h3>Education</h3>
    <p id="edit-education" class="editable">${education} </p>
    <h3>Skills</h3>
    <pid="edit-education" class="editable">${skills} </p>
    <h3>Experience</h3>
    <pid="edit-education" class="editable">${experience} </p>
    `;
//**
const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' +encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = 'Downoad your Resume';


    const resumeOutputElement = document.getElementById('resumeOutput')
     if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput

resumeOutputElement.appendChild(downloadLink);

        resumeOutputElement.style.display = "block";

        makeeditable();
     }else{
        console.error('the resume output elements are missings')
     }
}else{
    console.error('one or more output elements are missings')
}

})
function makeeditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click',function(){
            const currentelement = element as HTMLElement;
            const currentvalue = currentelement.textContent || "";


            //replace content
            if(currentelement.tagName === "p" || currentelement.tagName === 'span'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentvalue
                input.classList.add('editing-input')
                
                input.addEventListener('blur',function(){
                    currentelement.textContent = input.value;
                    currentelement.style.display='inline'
                    input.remove()
                })


                currentelement.style.display = 'none'
                currentelement.parentNode?.insertBefore(input,currentelement)
                input.focus()
            }

        })
    })
}

