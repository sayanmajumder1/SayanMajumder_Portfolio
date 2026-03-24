 // script.js
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize Particles.js
            particlesJS('particles-container', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#3B82F6" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#8B5CF6",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" }
                    }
                }
            });

            // Dark Mode Toggle
            const themeToggle = document.getElementById('theme-toggle');
            const themeToggleMobile = document.getElementById('theme-toggle-mobile');
            
            function toggleDarkMode() {
                document.documentElement.classList.toggle('dark');
                localStorage.setItem('dark-mode', document.documentElement.classList.contains('dark'));
            }
            
            themeToggle.addEventListener('click', toggleDarkMode);
            themeToggleMobile.addEventListener('click', toggleDarkMode);
            
            // Check for saved theme preference
            if (localStorage.getItem('dark-mode') === 'true') {
                document.documentElement.classList.add('dark');
            }

            // Mobile Menu Script
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileBackdrop = document.getElementById('mobile-menu-backdrop');
            const closeMenuButton = document.getElementById('close-menu');

            // Open Mobile Menu
            function openMenu() {
                mobileMenu.classList.add('active');
                mobileBackdrop.classList.add('active');
                document.body.classList.add('menu-open');
            }

            // Close Mobile Menu
            function closeMenu() {
                mobileMenu.classList.remove('active');
                mobileBackdrop.classList.remove('active');
                document.body.classList.remove('menu-open');
            }

            // Event Listeners for mobile menu
            if (mobileMenuButton) {
                mobileMenuButton.addEventListener('click', openMenu);
            }

            if (closeMenuButton) {
                closeMenuButton.addEventListener('click', closeMenu);
            }

            if (mobileBackdrop) {
                mobileBackdrop.addEventListener('click', closeMenu);
            }

            // Close menu when clicking a link
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    closeMenu();
                });
            });

            // Close on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    closeMenu();
                }
            });

            // Close menu on window resize to desktop
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
                    closeMenu();
                }
            });

          
            // Back to Top Button
            const backToTopButton = document.getElementById('back-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    backToTopButton.classList.remove('opacity-0');
                    backToTopButton.classList.add('opacity-100');
                } else {
                    backToTopButton.classList.remove('opacity-100');
                    backToTopButton.classList.add('opacity-0');
                }
            });

            backToTopButton.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Skills Data
            const skills = [
                { name: 'Java', icon: 'fab fa-java', color: 'text-red-400' },
                { name: 'C', icon: 'fab fa-c', color: 'text-blue-500' },
                { name: 'C++', icon: 'devicon-cplusplus-plain', color: 'text-red-500' },
                { name: 'Python', icon: 'fab fa-python', color: 'text-blue-500' },
                { name: 'SQL', icon: 'fas fa-database', color: 'text-blue-300' },
                { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
                { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-400' },
                { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-600' },
                { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
                { name: 'PHP', icon: 'fab fa-php', color: 'text-purple-500' },
                { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' }, 
                { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
                { name: 'Android', icon: 'fab fa-android', color: 'text-green-400' },
                { name: 'Flutter', icon: 'fas fa-mobile-alt', color: 'text-blue-400' },
                { name: 'Firebase', icon: 'fas fa-fire', color: 'text-yellow-500' },
                { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-400' },
                { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
                { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-400' },
                { name: 'Linux', icon: 'fab fa-linux', color: 'text-gray-400' },
                { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-400' },
                
              
               
              
            ];

            // Load Skills with animation
            function loadSkills() {
                const skillsGrid = document.getElementById('skills-grid');
                skills.forEach((skill, index) => {
                    const skillElement = document.createElement('div');
                    skillElement.className = 'bg-white/5 rounded-xl p-6 text-center backdrop-blur-sm hover-lift transition-all duration-300';
                    skillElement.style.animationDelay = `${index * 0.1}s`;
                    
                    skillElement.innerHTML = `
                        <div class="flex justify-center mb-4">
                            <div class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center ${skill.color}">
                                <i class="${skill.icon} text-3xl"></i>
                            </div>
                        </div>
                        <h4 class="font-semibold">${skill.name}</h4>
                    `;
                    
                    skillsGrid.appendChild(skillElement);
                });
            }

      // Projects Data
const projects = [
    {
        title: 'Service Hub',
        description: 'Local Service Hub is a comprehensive web-based platform designed to connect users with verified local service providers. The platform allows users to discover, compare, and book various services in their vicinity while ensuring quality through a robust verification system.(Final Year College Project )',
        tech: ['Php', 'Tailwind', 'Ajax'],
        type: 'web', // Added project type
        liveLink: '#', // Live project link
        repoLink: 'https://drive.google.com/drive/folders/1W1J5f724vtMwRTox8M162Ezuo5lk66AU?usp=sharing', // Add your repo link if available
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Portfolio Website',
        description: 'Modern portfolio website with animations',
        tech: ['React', 'Tailwind', 'GSAP'],
        type: 'web',
        liveLink: '#',
        repoLink: 'https://github.com/sayanmajumder1/portfolio',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Face Recognition Software',
        description: 'Python-based face recognition system',
        tech: ['Python', 'OpenCV', 'AI/ML'],
        type: 'desktop', // or 'web' if it's web-based
        repoLink: 'https://github.com/sayanmajumder1/Face-Recognize-Kaira-.git',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80'
    },
    {
        title: 'College Directory',
        description: 'University college information portal',
        tech: ['HTML', 'CSS', 'JavaScript'],
        type: 'web',
        liveLink: ' https://sayanmajumder1.github.io/CollegeInformation/',
        repoLink: 'https://github.com/sayanmajumder1/CollegeInformation.git',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Digital Library App',
        description: 'Android college library application',
        tech: ['Android', 'Java', 'Firebase'],
        type: 'android',
        downloadLink: './File/app-debug.apk', // APK download link
        repoLink: 'https://github.com/sayanmajumder1/College_Library_And_Question_Paper_Application.git', // Add repo if available
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Calculator App',
        description: 'Modern calculator application',
        tech: ['JavaScript', 'CSS', 'HTML'],
        type: 'web',
        liveLink: 'https://sayanmajumder1.github.io/Bluebird-Calculator/',
        repoLink: 'https://github.com/sayanmajumder1/Bluebird-Calculator.git',
        image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'UI/UX Designs',
        description: 'Collection of modern UI designs',
        tech: ['Figma', 'Adobe XD', 'Prototyping'],
        type: 'design',
        behanceLink: 'https://drive.google.com/drive/folders/1R7brFxU13sxyTyHwl0gciS-DCsBVVWcl?usp=sharing', // or dribbble link
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

// Load Projects with animation
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = ''; // Clear existing content
    
    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl card-hover';
        projectElement.style.animationDelay = `${index * 0.2}s`;
        
        // Generate buttons based on project type
        let actionButtons = '';
        
        if (project.type === 'android') {
            actionButtons = `
                <div class="flex space-x-2">
                    <a href="${project.downloadLink || '#'}" 
                       target="_blank"
                       class="flex-1 bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2">
                        <i class="fas fa-download"></i> Download APK
                    </a>
                    ${project.repoLink ? `
                        <a href="${project.repoLink}" 
                           target="_blank"
                           class="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2">
                            <i class="fab fa-github"></i> Code
                        </a>
                    ` : ''}
                </div>
            `;
        } else if (project.type === 'web') {
            actionButtons = `
                <div class="flex space-x-2">
                    ${project.liveLink ? `
                        <a href="${project.liveLink}" 
                           target="_blank"
                           class="flex-1 bg-primary text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                    ${project.repoLink ? `
                        <a href="${project.repoLink}" 
                           target="_blank"
                           class="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2">
                            <i class="fab fa-github"></i> Code
                        </a>
                    ` : project.liveLink ? '' : `
                        <a href="#" 
                           class="flex-1 bg-gray-400 text-white text-center py-2 rounded-lg font-semibold cursor-not-allowed opacity-50 flex items-center justify-center gap-2" onclick="return false;">
                            <i class="fas fa-times-circle"></i> No Link
                        </a>
                    `}
                </div>
            `;
        } else if (project.type === 'design') {
            actionButtons = `
                <div class="flex space-x-2">
                    <a href="${project.behanceLink || '#'}" 
                       target="_blank"
                       class="flex-1 bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2">
                        <i class="fab fa-behance"></i> View Designs
                    </a>
                </div>
            `;
        } else {
            // Default for desktop apps or others
            actionButtons = `
                <div class="flex space-x-2">
                    ${project.repoLink ? `
                        <a href="${project.repoLink}" 
                           target="_blank"
                           class="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    ` : `
                        <button class="flex-1 bg-gray-400 text-white text-center py-2 rounded-lg font-semibold cursor-not-allowed opacity-50 flex items-center justify-center gap-2" disabled>
                            <i class="fas fa-times-circle"></i> No Link
                        </button>
                    `}
                </div>
            `;
        }
        
        // Add favorite button at the end of action buttons
        const fullButtons = `
            <div class="flex items-center gap-2 mt-4">
                <div class="flex-1">
                    ${actionButtons}
                </div>
                <button class="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 favorite-btn" title="Add to favorites">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        `;
        
        // Project type badge
        const typeBadge = {
            'android': '<span class="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">Android App</span>',
            'web': '<span class="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full z-10">Web App</span>',
            'design': '<span class="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full z-10">UI/UX Design</span>',
            'desktop': '<span class="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full z-10">Desktop App</span>'
        }[project.type] || '';
        
        projectElement.innerHTML = `
            <div class="relative overflow-hidden h-48">
                <img src="${project.image}" 
                     alt="${project.title}" 
                     class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                     loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                ${typeBadge}
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 dark:text-white">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tech.map(tech => 
                        `<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs">${tech}</span>`
                    ).join('')}
                </div>
                ${fullButtons}
            </div>
        `;
        
        projectsGrid.appendChild(projectElement);
    });
    
    // Add favorite button functionality
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
            icon.classList.toggle('text-red-500');
        });
    });
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', loadProjects);

            // Animate skill bars on scroll
            function animateSkillBars() {
                const skillBars = document.querySelectorAll('.skill-bar');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const bar = entry.target;
                            const width = bar.getAttribute('data-width');
                            setTimeout(() => {
                                bar.style.width = width;
                            }, 300);
                        }
                    });
                }, { threshold: 0.5 });
                
                skillBars.forEach(bar => observer.observe(bar));
            }

            // Contact Form Submission
            const contactForm = document.getElementById('contact-form');
            
            if (contactForm) {
                contactForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    // Show loading state
                    const submitButton = this.querySelector('button[type="submit"]');
                    const originalText = submitButton.innerHTML;
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                    submitButton.disabled = true;
                    
                    // Simulate API call
                    try {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        
                        // Show success message
                        alert('Thank you! Your message has been sent successfully.');
                        contactForm.reset();
                        
                    } catch (error) {
                        alert('Sorry, there was an error sending your message. Please try again.');
                    } finally {
                        // Reset button state
                        submitButton.innerHTML = originalText;
                        submitButton.disabled = false;
                    }
                });
            }

            // Initialize ScrollReveal animations
            ScrollReveal().reveal('.animate-fade-in', {
                duration: 1000,
                distance: '50px',
                origin: 'bottom',
                opacity: 0,
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                interval: 200
            });

            ScrollReveal().reveal('.card-hover', {
                duration: 800,
                scale: 0.9,
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                interval: 200
            });

            ScrollReveal().reveal('.hover-lift', {
                duration: 600,
                distance: '30px',
                origin: 'bottom',
                opacity: 0,
                easing: 'ease-out',
                interval: 100
            });

            ScrollReveal().reveal('.timeline-card', {
                duration: 1000,
                distance: '50px',
                origin: 'bottom',
                opacity: 0,
                interval: 200
            });

            // Initialize everything
            loadSkills();
            loadProjects();
            animateSkillBars();
            
            // Typing animation for hero section
            const phrases = [
                'Full Stack Developer',
                'Android App Developer',
                'UI/UX Designer',
                'Software Engineer'
            ];
            
            let currentPhrase = 0;
            const typingElement = document.querySelector('.typewriter');
            
            function typeNextPhrase() {
                if (typingElement) {
                    const phrase = phrases[currentPhrase];
                    typingElement.textContent = '';
                    typingElement.style.animation = 'none';
                    
                    let i = 0;
                    const typeInterval = setInterval(() => {
                        if (i < phrase.length) {
                            typingElement.textContent += phrase.charAt(i);
                            i++;
                        } else {
                            clearInterval(typeInterval);
                            setTimeout(() => {
                                deletePhrase();
                            }, 2000);
                        }
                    }, 100);
                    
                    currentPhrase = (currentPhrase + 1) % phrases.length;
                }
            }
            
            function deletePhrase() {
                if (!typingElement) return;
                let text = typingElement.textContent;
                const deleteInterval = setInterval(() => {
                    if (text.length > 0) {
                        text = text.slice(0, -1);
                        typingElement.textContent = text;
                    } else {
                        clearInterval(deleteInterval);
                        setTimeout(typeNextPhrase, 500);
                    }
                }, 50);
            }
            
            // Start typing animation after initial animation completes
            setTimeout(typeNextPhrase, 4000);
        });




const hobbiesData = [
    // PHOTOGRAPHY - Photos
    {
        id: 1,
        type: 'photography',
        category: 'photography',
        mediaType: 'image',
        src: 'assets/roots/P01.jpg',
        thumbnail: 'assets/hobbies/thumb1.jpg',
        title: 'Framing Emotions',
        description: 'Simple drawings and visual elements come together to express imagination and emotions, where each sketch frames a unique thought or moment. 🎨✨',
        location: 'West Bengal , India',
        date: 'January 2022 To 2025',
        camera: 'Samsung A33 5g',
        settings: 'f/4.5 1/200s ISO 100',
        featured: true,
        tags: ['cityscape', 'night', 'travel'],
        // Add multiple images for slideshow
        gallery: [
            'assets/roots/P01.jpg',
            'assets/roots/P02.jpg',
            'assets/roots/P03.jpg',
            'assets/roots/P04.jpg'
        ]
    },
    {
        id: 2,
        type: 'photography',
        category: 'photography',
        mediaType: 'image',
        src: 'assets/roots/P13.jpg',
        thumbnail: 'assets/hobbies/thumb2.jpg',
        title: 'Micro World Chronicles',
        description: 'Exploring the intricate lives of nature’s smallest architects and wanderers, where every detail tells a story of survival, transformation, and balance.',
        location: 'West Bengal, India',
        date: 'January 2021 To December 2025',
        camera: 'Samsung A33 5g /Samsung M11',
        settings: 'f/8 1/125s ISO 200',
        featured: true,
        tags: ['landscape', 'mountains', 'nature'],
        gallery: [
            'assets/roots/P13.jpg',
            'assets/roots/P14.jpg',
            'assets/roots/P15.jpg',
            'assets/roots/P11.jpg',
            'assets/roots/P12.jpg',
            'assets/roots/P16.jpg',
            'assets/roots/P17.jpg',
            'assets/roots/P18.jpg',
            'assets/roots/P19.jpg',
            'assets/roots/P20.jpg',
            'assets/roots/P24.jpg',
            'assets/roots/P26.jpg',
            'assets/roots/P27.jpg',
            'assets/roots/P28.jpg',
            'assets/roots/P29.jpg',
            'assets/roots/P30.jpg',
            'assets/roots/P31.jpg',

        ]
    },
    {
        id: 3,
        type: 'photography',
        category: 'photography',
        mediaType: 'image',
        src: 'assets/roots/P21.jpg',
        thumbnail: 'assets/hobbies/thumb3.jpg',
        title: 'Silence of the Night',
        description: 'A peaceful moment where the world slows down and darkness feels calm.',
        location: 'West Bengal ,Kolkata, India',
        date: 'January 2022 to 2025',
        camera: 'Vivo Y16/ Samsung A33',
        settings: 'f/2.8 1/250s ISO 400',
        featured: false,
        tags: ['street', 'documentary', 'people'],
        gallery: [
            'assets/roots/P22.jpg',
            'assets/roots/P23.jpg',
            'assets/roots/P21.jpg'
        ]
    },
 /*   {
        id: 4,
        type: 'photography',
        category: 'photography',
        mediaType: 'image',
        src: 'assets/roots/image4.jpg',
        thumbnail: 'assets/hobbies/thumb4.jpg',
        title: 'Traditional Potter',
        description: 'An elderly artisan working on traditional clay idols.',
        location: 'Kumartuli, Kolkata',
        date: 'September 2023',
        camera: 'Fujifilm X-T4',
        settings: 'f/2.8 1/80s ISO 400',
        featured: true,
        tags: ['portrait', 'culture', 'artisan'],
        gallery: [
            'assets/roots/image4.jpg',
            'assets/roots/image4-2.jpg',
            'assets/roots/image4-3.jpg'
        ]
    },*/    
    // VIDEOGRAPHY - Videos
   /* {
        id: 5,
        type: 'videography',
        category: 'videography',
        mediaType: 'video',
        src: 'assets/roots/video1.mp4',
        thumbnail: 'assets/hobbies/video-thumb1.jpg',
        title: 'Sunset at the Ganges',
        description: 'Time-lapse of the evening aarti at Varanasi ghats.',
        location: 'Varanasi, India',
        date: 'February 2024',
        duration: '2:30',
        camera: 'Sony A7III',
        featured: true,
        tags: ['timelapse', 'spiritual', 'river'],
        // For videos that might have multiple angles or related videos
        gallery: [
            { type: 'video', src: 'assets/roots/video1.mp4', title: 'Main Angle' },
            { type: 'video', src: 'assets/roots/video1-2.mp4', title: 'Wide Shot' },
            { type: 'video', src: 'assets/roots/video1-3.mp4', title: 'Close-up' }
        ]
    },*/
    {
        id: 4,
        type: 'videography',
        category: 'videography',
        mediaType: 'video',
        src: 'assets/roots/VN20251231_205159.mp4',
        thumbnail: 'assets/roots/VN20251231_205159.mp4',
        title: '365 Days in One Video 2025',
        description: 'Every smile, challenge, and achievement captured in one beautiful rewind of the year.',
        location: 'West Bengal ,Bardhaman, India',
        date: 'January 2026',
        duration: '1:45',
        camera: 'Samsung A33 5g',
        featured: false,
        tags: ['nature', 'rain', 'ambient'],
        gallery: [
            { type: 'video', src: 'assets/roots/VN20251231_205159.mp4', title: 'New Year Clebration ' }
          
        ]
    },
    {
        id: 5,
        type: 'videography',
        category: 'videography',
        mediaType: 'video',
        src: 'assets/roots/V.mp4',
        thumbnail: 'assets/roots/V.mp4',
        title: 'Durga Puja Celebration',
        description: 'The energy and devotion during Dhak playing.',
        location: 'West Bengal,Purba Bardhaman ,India',
        date: 'October 2025',
        duration: '0.29',
        camera: 'Samsung A33 5g',
        featured: true,
        tags: ['festival', 'culture', 'celebration'],
        gallery: [
            { type: 'video', src: 'assets/roots/V.mp4', title: 'Main Celebration' }
            
        ]
    },
    
    // TRAVEL - Mix of Photos and Videos
 /*   {
        id: 8,
        type: 'travel',
        category: 'travel',
        mediaType: 'image',
        src: 'assets/hobbies/travel1.jpg',
        thumbnail: 'assets/hobbies/travel-thumb1.jpg',
        title: 'Tea Gardens of Munnar',
        description: 'Endless rows of tea plantations stretching to the horizon.',
        location: 'Munnar, Kerala',
        date: 'November 2023',
        camera: 'Sony A7III',
        settings: 'f/5.6 1/250s ISO 100',
        featured: true,
        tags: ['landscape', 'nature', 'travel'],
        gallery: [
            'assets/hobbies/travel1.jpg',
            'assets/hobbies/travel1-2.jpg',
            'assets/hobbies/travel1-3.jpg'
        ]
    },*/
    {
        id: 6,
        type: 'travel',
        category: 'travel',
        mediaType: 'video',
        src: 'assets/roots/VN20260320_084322.mp4',
        thumbnail: 'assets/roots/VN20260320_084322.mp4',
        title: 'Wander. Explore. Repeat',
        description: 'A collection of moments from different places, capturing the beauty of travel, freedom, and unforgettable memories.',
        location: 'West Bengal, Purba Bardhaman',
        date: 'May 2025 - To March 2026',
        duration: '2:10',
        camera: 'Samsung A33 5g',
        featured: false,
        tags: ['water', 'nature', 'relaxing'],
        gallery: [
            { type: 'video', src: 'assets/roots/VN20260320_084322.mp4' }
          //  { type: 'video', src: 'assets/hobbies/travel2-2.mp4', title: 'Sunset View' }
        ]
    },
 /*   {
        id: 10,
        type: 'travel',
        category: 'travel',
        mediaType: 'image',
        src: 'assets/hobbies/travel3.jpg',
        thumbnail: 'assets/hobbies/travel-thumb3.jpg',
        title: 'Sunrise at Taj Mahal',
        description: 'The iconic monument glowing in the morning light.',
        location: 'Agra, India',
        date: 'April 2023',
        camera: 'Sony A7III',
        settings: 'f/6.3 1/200s ISO 100',
        featured: true,
        tags: ['architecture', 'heritage', 'travel'],
        gallery: [
            'assets/hobbies/travel3.jpg',
            'assets/hobbies/travel3-2.jpg',
            'assets/hobbies/travel3-3.jpg',
            'assets/hobbies/travel3-4.jpg'
        ]
    }*/
];

// State
let currentFilter = 'all';
let visibleItems = 8;
let currentSlideshowIndex = 0;
let slideshowInterval = null;
let currentGalleryItems = [];
let currentMediaType = 'image';
let currentItem = 'null';

// Filter photos by category
function filterHobby(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });
    
    // Reset visible items
    visibleItems = 8;
    
    // Reload grid
    loadHobbiesGrid();
}

// Load hobbies grid
function loadHobbiesGrid() {
    const grid = document.getElementById('hobbiesGrid');
    if (!grid) return;
    
    // Filter data
    let filteredData = hobbiesData;
    if (currentFilter !== 'all') {
        filteredData = hobbiesData.filter(item => item.category === currentFilter);
    }
    
    // Slice for pagination
    const displayData = filteredData.slice(0, visibleItems);
    
    // Generate HTML
    grid.innerHTML = '';
    displayData.forEach((item, index) => {
        const card = createHobbyCard(item, index);
        grid.appendChild(card);
    });
    
    // Hide load more button if no more items
    const loadMoreBtn = document.querySelector('[onclick="loadMoreHobbies()"]');
    if (loadMoreBtn) {
        if (visibleItems >= filteredData.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// Create hobby card
function createHobbyCard(item, index) {
    const card = document.createElement('div');
    card.className = `hobby-item hobby-card ${item.category}`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    if (item.mediaType === 'video') {
        // Video Card
        card.innerHTML = `
            <div class="media-container">
                <video src="${item.src}" poster="${item.thumbnail}" muted loop></video>
                <div class="media-badge">
                    <i class="fas fa-video"></i>
                    <span>${item.duration || '0:00'}</span>
                </div>
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
                <div class="media-overlay">
                    <h3 class="text-lg font-bold text-white mb-1">${item.title}</h3>
                    <p class="text-sm text-gray-300 line-clamp-2">${item.description}</p>
                    <div class="flex items-center gap-3 mt-2 text-xs text-gray-400">
                        <span><i class="fas fa-map-marker-alt mr-1"></i>${item.location}</span>
                        <span><i class="far fa-calendar mr-1"></i>${item.date}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Video hover play/pause
        const video = card.querySelector('video');
        card.addEventListener('mouseenter', () => video.play());
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
        
        // Video click handler
        card.onclick = () => openMediaSlideshow(item);
        
    } else {
        // Photo Card
        card.innerHTML = `
            <div class="media-container">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="media-badge">
                    <i class="fas fa-camera"></i>
                    <span>Photo</span>
                </div>
                <div class="media-overlay">
                    <h3 class="text-lg font-bold text-white mb-1">${item.title}</h3>
                    <p class="text-sm text-gray-300 line-clamp-2">${item.description}</p>
                    <div class="flex items-center gap-3 mt-2 text-xs text-gray-400">
                        <span><i class="fas fa-map-marker-alt mr-1"></i>${item.location}</span>
                        <span><i class="far fa-calendar mr-1"></i>${item.date}</span>
                    </div>
                </div>
            </div>
            ${item.featured ? '<div class="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white text-xs font-semibold z-10">Featured</div>' : ''}
        `;
        
        // Photo click handler
        card.onclick = () => openMediaSlideshow(item);
    }
    
    return card;
}

// Open slideshow for media (photos or videos)
function openMediaSlideshow(item) {
    stopSlideshow();
    currentItem = item;
    if (item.mediaType === 'video' && item.gallery && item.gallery.length > 0) {
        // Handle video gallery
        currentMediaType = 'video';
        currentGalleryItems = item.gallery;
        openVideoSlideshow(item, 0);
    } else if (item.gallery && item.gallery.length > 0) {
        // Handle photo gallery
        currentMediaType = 'image';
        currentGalleryItems = item.gallery;
        openPhotoSlideshow(item, 0);
    } else {
        // Single item - use existing modals
        if (item.mediaType === 'video') {
            openVideoModal(item);
        } else {
            openPhotoModal(item);
        }
    }
}

// Open photo slideshow
function openPhotoSlideshow(item, startIndex = 0) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalPhoto');
    const modalTitle = document.getElementById('modalPhotoTitle');
    const modalDesc = document.getElementById('modalPhotoDesc');
    const modalCamera = document.getElementById('modalPhotoCamera');
    const modalLocation = document.getElementById('modalPhotoLocation');
    const modalDate = document.getElementById('modalPhotoDate');
    
    // Add slideshow controls if not present
    addSlideshowControls(modal, 'photo');
    
    currentSlideshowIndex = startIndex;
    
    // Update modal with current item
    updatePhotoSlide(item, currentSlideshowIndex);
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Start automatic slideshow
    startSlideshow(item, 'photo');
}

// Update photo slide
function updatePhotoSlide(item, index) {
    const modalImg = document.getElementById('modalPhoto');
    const modalTitle = document.getElementById('modalPhotoTitle');
    const modalDesc = document.getElementById('modalPhotoDesc');
    const modalCamera = document.getElementById('modalPhotoCamera');
    const modalLocation = document.getElementById('modalPhotoLocation');
    const modalDate = document.getElementById('modalPhotoDate');
    const counter = document.getElementById('slideshowCounter');
    
    if (item.gallery && item.gallery.length > 0) {
        const imageSrc = item.gallery[index];
        modalImg.src = imageSrc;
        modalTitle.innerText = `${item.title} - ${index + 1}/${item.gallery.length}`;
        
        if (counter) {
            counter.innerText = `${index + 1} / ${item.gallery.length}`;
        }
    } else {
        modalImg.src = item.src;
        modalTitle.innerText = item.title;
    }
    
    modalDesc.innerText = item.description;
    modalCamera.innerText = item.camera || 'Unknown';
    modalLocation.innerText = item.location;
    modalDate.innerText = item.date;
}

// Open video slideshow
function openVideoSlideshow(item, startIndex = 0) {
    const modal = document.getElementById('videoModal');
    const videoEl = document.getElementById('modalVideo');
    const modalTitle = document.getElementById('modalVideoTitle');
    const modalDesc = document.getElementById('modalVideoDesc');
    
    // Add slideshow controls if not present
    addSlideshowControls(modal, 'video');
    
    currentSlideshowIndex = startIndex;
    
    // Update modal with current item
    updateVideoSlide(item, currentSlideshowIndex);
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    videoEl.play();
    
    // For video slideshow, we don't auto-advance, but we show controls
}

// Update video slide
function updateVideoSlide(item, index) {
    const videoEl = document.getElementById('modalVideo');
    const modalTitle = document.getElementById('modalVideoTitle');
    const modalDesc = document.getElementById('modalVideoDesc');
    const counter = document.getElementById('slideshowCounter');
    
    if (item.gallery && item.gallery.length > 0) {
        const videoItem = item.gallery[index];
        videoEl.src = videoItem.src;
        modalTitle.innerText = `${item.title} - ${videoItem.title || `Part ${index + 1}`}`;
        
        if (counter) {
            counter.innerText = `${index + 1} / ${item.gallery.length}`;
        }
    } else {
        videoEl.src = item.src;
        modalTitle.innerText = item.title;
    }
    
    modalDesc.innerText = item.description;
    videoEl.load();
    videoEl.play();
}

// Add slideshow controls to modal
function addSlideshowControls(modal, type) {
    // Check if controls already exist
    if (document.getElementById('slideshowControls')) {
        return;
    }
    
    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'slideshowControls';
    controlsContainer.className = 'absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 z-20';
    
    controlsContainer.innerHTML = `
        <button onclick="previousSlide()" class="text-white hover:text-purple-400 transition-colors p-2">
            <i class="fas fa-chevron-left text-xl"></i>
        </button>
        <span id="slideshowCounter" class="text-white font-medium min-w-[80px] text-center">1 / 1</span>
        <button onclick="nextSlide()" class="text-white hover:text-purple-400 transition-colors p-2">
            <i class="fas fa-chevron-right text-xl"></i>
        </button>
        <button onclick="toggleAutoPlay()" id="autoPlayBtn" class="text-white hover:text-purple-400 transition-colors p-2 ml-2">
            <i class="fas fa-pause"></i>
        </button>
    `;
    
    modal.querySelector('.relative').appendChild(controlsContainer);
}

// Navigate to previous slide
function previousSlide() {
    if (currentGalleryItems.length === 0) return;
    
    currentSlideshowIndex = (currentSlideshowIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    
    const currentItem = getCurrentItem();
    if (currentMediaType === 'image') {
        updatePhotoSlide(currentItem, currentSlideshowIndex);
    } else {
        updateVideoSlide(currentItem, currentSlideshowIndex);
    }
}

// Navigate to next slide
function nextSlide() {
    if (currentGalleryItems.length === 0) return;
    
    currentSlideshowIndex = (currentSlideshowIndex + 1) % currentGalleryItems.length;
    
    const currentItem = getCurrentItem();
    if (currentMediaType === 'image') {
        updatePhotoSlide(currentItem, currentSlideshowIndex);
    } else {
        updateVideoSlide(currentItem, currentSlideshowIndex);
    }
}

// Get current item from hobbiesData
function getCurrentItem() {
   return currentItem;
}

// Start automatic slideshow
function startSlideshow(item, type) {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
    
    if (type === 'photo' && item.gallery && item.gallery.length > 1) {
        slideshowInterval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds
    }
}

// Stop slideshow
function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
}

// Toggle auto-play
function toggleAutoPlay() {
    const btn = document.getElementById('autoPlayBtn');
    const icon = btn.querySelector('i');
    
    if (slideshowInterval) {
        stopSlideshow();
        icon.className = 'fas fa-play';
    } else {
        const currentItem = getCurrentItem();
        startSlideshow(currentItem, currentMediaType);
        icon.className = 'fas fa-pause';
    }
}

// Open photo modal (single photo)
function openPhotoModal(photo) {
    stopSlideshow();
    
    const modal = document.getElementById('photoModal');
    
    // Remove existing slideshow controls
    const existingControls = document.getElementById('slideshowControls');
    if (existingControls) {
        existingControls.remove();
    }
    
    document.getElementById('modalPhoto').src = photo.src;
    document.getElementById('modalPhotoTitle').innerText = photo.title;
    document.getElementById('modalPhotoDesc').innerText = photo.description;
    document.getElementById('modalPhotoCamera').innerText = photo.camera || 'Unknown';
    document.getElementById('modalPhotoLocation').innerText = photo.location;
    document.getElementById('modalPhotoDate').innerText = photo.date;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Close photo modal
function closePhotoModal() {
    stopSlideshow();
    
    // Remove slideshow controls
    const controls = document.getElementById('slideshowControls');
    if (controls) {
        controls.remove();
    }
    
    document.getElementById('photoModal').classList.add('hidden');
    document.getElementById('photoModal').classList.remove('flex');
    document.body.style.overflow = '';
}

// Open video modal (single video)
function openVideoModal(video) {
    stopSlideshow();
    
    const modal = document.getElementById('videoModal');
    const videoEl = document.getElementById('modalVideo');
    
    // Remove existing slideshow controls
    const existingControls = document.getElementById('slideshowControls');
    if (existingControls) {
        existingControls.remove();
    }
    
    videoEl.src = video.src;
    document.getElementById('modalVideoTitle').innerText = video.title;
    document.getElementById('modalVideoDesc').innerText = video.description;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    videoEl.play();
}

// Close video modal
function closeVideoModal() {
    stopSlideshow();
    
    // Remove slideshow controls
    const controls = document.getElementById('slideshowControls');
    if (controls) {
        controls.remove();
    }
    
    const modal = document.getElementById('videoModal');
    const videoEl = document.getElementById('modalVideo');
    
    videoEl.pause();
    videoEl.currentTime = 0;
    
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// Load more items
function loadMoreHobbies() {
    visibleItems += 4;
    loadHobbiesGrid();
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePhotoModal();
        closeVideoModal();
    }
    
    // Left/right arrow navigation for slideshow
    if (e.key === 'ArrowLeft') {
        previousSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});
// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    loadHobbiesGrid();
    
    // Set initial active filter
    document.querySelector('[data-filter="all"]')?.classList.add('active');
});

function sendMail(){

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

var subject = "Portfolio Contact from " + name;

var body = "Name: " + name + "%0D%0A"
+ "Email: " + email + "%0D%0A%0D%0A"
+ "Message: " + message;

window.location.href = "mailto:sayanmajumder1117@gmail.com?subject="
+ subject + "&body=" + body;

}
















