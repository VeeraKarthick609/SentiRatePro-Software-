document.getElementById('extract-reviews').addEventListener('click', function() {
    // Send a message to the content script to collect reviews
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'collectReviews' }, function(response) {
            // Check for errors in response
            if (chrome.runtime.lastError || !response || !response.reviews) {
                console.error(chrome.runtime.lastError);
                alert('Error collecting reviews. Check console for details.');
                return;
            }

            // Send reviews to Flask server for sentiment analysis
            fetch('http://localhost:5000/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reviews: response.reviews })
            })
            .then(res => res.json())
            .then(sentiment => displayResults(sentiment))
            .catch(err => {
                console.error(err);
                alert('Error analyzing sentiment. Check console for details.');
            });
        });
    });
});

// Function to display results in the popup
function displayResults(sentiment) {
    const positiveCount = sentiment.positive_count || 0;
    const negativeCount = sentiment.negative_count || 0;
    const positivePercentage = sentiment.positive_percentage || 0;

    document.getElementById('positive-count').innerText = positiveCount;
    document.getElementById('negative-count').innerText = negativeCount;
    document.getElementById('positive-percentage').innerText = positivePercentage.toFixed(2);

    document.getElementById('results').style.display = 'block';
}
