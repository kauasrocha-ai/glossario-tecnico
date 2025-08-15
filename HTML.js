                const accordionHeaders = document.querySelectorAll('.item');

                accordionHeaders.forEach(header => {
                    header.addEventListener('click', () => {
                        const accordionContent = header.nextElementSibling;
                        accordionContent.classList.toggle('active');
                    });
                });
            