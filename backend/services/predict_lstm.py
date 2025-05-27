import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
from sqlalchemy import create_engine
import os

def predict_next_close(symbol: str, db_uri: str = os.getenv("DATABASE_URI")):
    model_path = f"models/{symbol}_lstm_model.h5"
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model for {symbol} not found at {model_path}")
    
    engine = create_engine(db_uri)
    
    df = pd.read_sql(f"SELECT date, close FROM stocks WHERE symbol = '{symbol}' ORDER BY date LIMIT 1000", engine)
    
    if len(df) < 60:
        raise ValueError("Not enough data to make prediction (need at least 60 days).")
    
    df['date'] = pd.to_datetime(df['date'])
    df.set_index('date', inplace=True)
    df.dropna(inplace=True)
    
    scaler = MinMaxScaler()
    scaled_data = scaler.fit_transform(df[['close']])
    
    last_60 = scaled_data[-60:0]
    x_input = np.reshape(last_60, (1, 60, 1))
    
    model = load_model(model_path)
    prediction = model.predict(x_input)
    predicted_price = scaler.inverse_transform(prediction)[0][0]
    
    return round(float(predicted_price), 2)