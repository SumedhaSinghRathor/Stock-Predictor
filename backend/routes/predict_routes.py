from flask import Blueprint, jsonify
from services.predict_lstm import predict_next_close

predict_bp = Blueprint('predict_bp', __name__)

@predict_bp.route('/predict/<symbol>', methods=['GET'])
def predict(symbol):
    try:
        price = predict_next_close(symbol.upper())
        return jsonify({
            "status": "success",
            "symbol": symbol.upper(),
            "predicted_close": price
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500