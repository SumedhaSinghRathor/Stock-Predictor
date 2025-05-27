import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from sqlalchemy import create_engine
from datetime import datetime
import os

def train_lstm_model(symbol: str, db_uri: str = os.getenv("DATABASE_URL")):
    os.makedirs("models", exist_ok=True)
    
    engine = create_engine(db_uri)
    df = pd.read_sql(f"SELECT date, close FROM stocks WHERE symbol = '{symbol}' ORDER BY date", engine)
    
    if df.empty:
        raise ValueError(f"No data found for symbol: {symbol}")
    
    df['date'] = pd.to_datetime(df['date'])
    df.set_index('date', inplace=True)
    df.dropna(inplace=True)
    
    scaler = MinMaxScaler()
    scaled_data = scaler.fit_transform(df[['close']])
    
    sequence_length = 60
    x_train, y_train = [], []
    for i in range(sequence_length, len(scaled_data)):
        x_train.append(scaled_data[i-sequence_length:i, 0])
        y_train.append(scaled_data[i, 0])
        
    x_train = np.array(x_train)
    y_train = np.array(y_train)
    x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))
    
    model = Sequential()
    model.add(LSTM(50, return_sequences=True, input_shape=(x_train.shape[1], 1)))
    model.add(Dropout(0.2))
    model.add(LSTM(50))
    model.add(Dropout(0.2))
    model.add(Dense(1))
    
    model.compile(optimizer='adam', loss='mean_squared_error')
    model.fit(x_train, y_train, epochs=20, batch_size=32)
    
    model.save(f"models/{symbol}_lstm_model.h5")
    
    print(f"Model saved as models/{symbol}_lstm_model.h5")