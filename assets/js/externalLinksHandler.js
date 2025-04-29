class ExternalLinksHandler {
    constructor() {
        this.addAttributesToExternalLinks();
    }

    addAttributesToExternalLinks() {
        // Select all anchor tags
        const links = document.querySelectorAll('a[href]');

        // Iterate over each link
        links.forEach(link => {
            // Check if the link is external
            if (this.isExternalLink(link)) {
                // Add target and rel attributes
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer");
            }
        });
    }

    isExternalLink(link) {
        // Get the location of the current document
        const currentLocation = window.location.hostname;

        // Extract the domain from the link's href attribute
        const linkDomain = new URL(link.href).hostname;

        // Check if the link's domain is different from the current location's domain
        return currentLocation !== linkDomain;
    }
}

// Initialize the ExternalLinksHandler when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    new ExternalLinksHandler();
});
