from sklearn.linear_model import LinearRegression
from database import get_history_for_user

def predict_cpu(username):

    history = get_history_for_user(username)

    cpu_history = [row["cpu"] for row in history]

    # Need at least 6 readings
    if len(cpu_history) < 6:
        return None

    window = 5

    X = []
    y = []

    for i in range(len(cpu_history) - window):
        X.append(cpu_history[i:i+window])
        y.append(cpu_history[i+window])

    model = LinearRegression()

    model.fit(X, y)

    prediction = model.predict([cpu_history[-window:]])

    return float(prediction[0])
