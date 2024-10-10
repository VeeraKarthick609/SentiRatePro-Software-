// Function to collect reviews from the Amazon product page
function collectReviews() {
    try {
        const reviewElements = document.querySelectorAll('.review-text-content span');
        
        if (reviewElements.length === 0) {
            console.warn("No reviews found on this page.");
            return [];
        }

        const reviews = Array.from(reviewElements).map(review => review.textContent.trim());
        console.log(`Collected ${reviews.length} reviews.`);
        return reviews;
    } catch (error) {
        console.error("Error collecting reviews:", error);
        return [];
    }
}

// Listen for a message to collect reviews
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'collectReviews') {
        console.log("Received message to collect reviews.");
        const reviews = collectReviews();
        sendResponse({ reviews: reviews });
    } else {
        sendResponse({ error: "Unknown action" });
    }
});
