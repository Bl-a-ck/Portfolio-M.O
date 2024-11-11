function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.querySelector('.contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
}


//==========================aside======================================

let currentProjectIndex = 0;  
const projects = document.querySelectorAll('.project'); 


function showProject(index) {
    
    if (index < 0) {
        currentProjectIndex = projects.length - 1;  // العودة للمشروع الأخير
    } else if (index >= projects.length) {
        currentProjectIndex = 0;  // الانتقال للمشروع الأول
    } else {
        currentProjectIndex = index;  
    }
    
    // إخفاء جميع المشاريع وعرض المشروع الحالي فقط
    projects.forEach((project, i) => {
        project.style.display = i === currentProjectIndex ? 'block' : 'none';
    });
}

//  للتنقل بين المشاريع بناءً على الاتجاه (التالي أو السابق)
function navigateProjects(direction) {
    // تحديث الفهرس بناءً على الاتجاه
    showProject(currentProjectIndex + direction);
}

// إظهار المشروع الأول عند تحميل الصفحة
showProject(currentProjectIndex);

// ================================================================

function toggleReadMore() {
    let content = document.getElementById("moreContent");
    let button = document.getElementById("readMoreBtn");
    if (content.style.display === "none") {
        content.style.display = "block";
        button.innerText = "Show less";
    } else {
        content.style.display = "none";
        button.innerText = "Show More";
    }
}



    