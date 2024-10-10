from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the sentiment analysis model
sentiment_analyzer = pipeline("sentiment-analysis")

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    reviews = data.get('reviews', [])
    
    # Perform sentiment analysis
    results = sentiment_analyzer(reviews)
    
    positive_count = sum(1 for result in results if result['label'] == 'POSITIVE')
    negative_count = sum(1 for result in results if result['label'] == 'NEGATIVE')
    
    # Calculate the positive percentage
    positive_percentage = (positive_count / len(reviews) * 100) if reviews else 0

    return jsonify({
        'positive_count': positive_count,
        'negative_count': negative_count,
        'positive_percentage': positive_percentage
    })

if __name__ == '__main__':
    app.run(debug=True)
