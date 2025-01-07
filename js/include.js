document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("[data-include]");

    elements.forEach((element) => {
        const file = element.getAttribute("data-include");
        console.log(`Attempting to load: ${file}`); // Debugging statement
        if (file) {
            fetch(file)
                .then((response) => {
                    if (!response.ok) {
                        console.error(`Failed to fetch ${file}: ${response.status}`);
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then((html) => {
                    element.innerHTML = html;
                    element.removeAttribute("data-include");
                })
                .catch((error) => console.error(`Error loading component: ${error.message}`));
        }
    });document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll("[data-include]");
    
        elements.forEach((element) => {
            const file = element.getAttribute("data-include");
            console.log(`Fetching from URL: ${file}`); // Debug URL
            if (file) {
                fetch(file)
                    .then((response) => {
                        if (!response.ok) {
                            console.error(`Failed to fetch ${file}: ${response.status}`);
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.text();
                    })
                    .then((html) => {
                        element.innerHTML = html;
                        element.removeAttribute("data-include");
                    })
                    .catch((error) => console.error(`Error loading component: ${error.message}`));
            }
        });
    });
    
});
