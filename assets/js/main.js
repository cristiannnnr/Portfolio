
        document.addEventListener('DOMContentLoaded', function() {
            // Crear fondo animado premium
            const bgAnimation = document.getElementById('bgAnimation');
            
            // Crear partículas grandes
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Tamaño aleatorio entre 150px y 500px
                const size = Math.floor(Math.random() * 350) + 150;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Posición aleatoria
                particle.style.top = `${Math.floor(Math.random() * 100)}%`;
                particle.style.left = `${Math.floor(Math.random() * 100)}%`;
                
                // Color aleatorio
                const colors = ['#6C63FF', '#FF6584', '#4A44B5'];
                particle.style.background = `radial-gradient(${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
                
                // Animación personalizada
                const duration = Math.floor(Math.random() * 30) + 20;
                particle.style.animation = `float ${duration}s infinite ease-in-out`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                bgAnimation.appendChild(particle);
            }
            
            // Crear formas geométricas
            for (let i = 0; i < 15; i++) {
                const shape = document.createElement('div');
                shape.className = 'shape';
                
                // Tamaño aleatorio entre 60px y 200px
                const size = Math.floor(Math.random() * 140) + 60;
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                
                // Posición aleatoria
                shape.style.top = `${Math.floor(Math.random() * 100)}%`;
                shape.style.left = `${Math.floor(Math.random() * 100)}%`;
                
                // Tipo de forma aleatoria
                const shapeTypes = [
                    'border-radius: 50%;',
                    'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);',
                    'clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);',
                    'border-radius: 20%;',
                    'clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);'
                ];
                shape.style.cssText += shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
                
                // Animación personalizada
                const duration = Math.floor(Math.random() * 40) + 20;
                shape.style.animation = `rotate ${duration}s infinite linear`;
                
                bgAnimation.appendChild(shape);
            }
            
            // Efecto de máquina de escribir
            const typewriterElement = document.getElementById('typewriter');
            const text = typewriterElement.textContent;
            typewriterElement.textContent = '';
            typewriterElement.style.display = 'inline-block';
            
            let charIndex = 0;
            function typeWriter() {
                if (charIndex < text.length) {
                    typewriterElement.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, 120);
                }
            }
            
            // Iniciar animación después de un breve retraso
            setTimeout(typeWriter, 800);
            
            // Navegación suave
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Resaltar elemento en el nav
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.style.color = 'var(--light)';
                        link.style.textShadow = 'none';
                    });
                    this.style.color = 'var(--primary)';
                    this.style.textShadow = '0 0 10px var(--primary)';
                });
            });
            
            // Botón volver arriba
            const backToTopBtn = document.getElementById('backToTop');
            
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.background = 'rgba(13, 12, 29, 0.95)';
                    header.style.padding = '1.2rem 5%';
                    header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.4)';
                } else {
                    header.style.background = 'rgba(13, 12, 29, 0.85)';
                    header.style.padding = '1.5rem 5%';
                    header.style.boxShadow = '0 5px 40px rgba(0, 0, 0, 0.4)';
                }
                
                // Mostrar/Ocultar botón "Volver arriba"
                if (window.scrollY > 500) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            
            // Animación al hacer scroll
            const animateOnScroll = () => {
                // Animar títulos de sección
                const sectionTitles = document.querySelectorAll('.section-title');
                sectionTitles.forEach(title => {
                    const titlePosition = title.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(titlePosition < screenPosition) {
                        title.classList.add('animate');
                    }
                });
                
                // Animar tarjetas de proyectos
                const projectCards = document.querySelectorAll('.project-card');
                projectCards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(cardPosition < screenPosition) {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, 300 * index);
                    }
                });
                
                // Animar tarjetas "Sobre Mí"
                const aboutCards = document.querySelectorAll('.about-card');
                aboutCards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(cardPosition < screenPosition) {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, 400 * index);
                    }
                });
                
                // Animar tarjetas de habilidades
                const skillCards = document.querySelectorAll('.skill-card');
                skillCards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(cardPosition < screenPosition) {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, 300 * index);
                    }
                });
                
                // Animar sección de contacto
                const contactInfo = document.querySelector('.contact-info');
                const contactForm = document.querySelector('.contact-form');
                
                if (contactInfo) {
                    const contactInfoPosition = contactInfo.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(contactInfoPosition < screenPosition) {
                        contactInfo.classList.add('animate');
                    }
                }
                
                if (contactForm) {
                    const contactFormPosition = contactForm.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(contactFormPosition < screenPosition) {
                        contactForm.classList.add('animate');
                    }
                }
            };
            
            // Inicializar animaciones
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll();
            
            // Interacción con iconos tecnológicos
            const techIcons = document.querySelectorAll('.tech-icon');
            techIcons.forEach(icon => {
                icon.addEventListener('click', () => {
                    icon.style.animation = 'none';
                    icon.style.transform = 'scale(1.8) rotate(20deg) translateZ(50px)';
                    icon.style.color = 'var(--accent)';
                    icon.style.boxShadow = '0 0 50px var(--primary)';
                    
                    setTimeout(() => {
                        icon.style.animation = 'floatIcon 8s ease-in-out infinite';
                        icon.style.transform = '';
                        icon.style.color = '';
                        icon.style.boxShadow = '';
                    }, 1500);
                });
            });
            
            // Manejar envío del formulario
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Simular envío exitoso
                    alert('¡Mensaje enviado con éxito! Te responderé lo antes posible.');
                    contactForm.reset();
                });
            }
        });
    
