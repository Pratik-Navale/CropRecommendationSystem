from flask import Flask, render_template,request
import joblib
from cropInfo import cropData 
app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html", title="Home")

@app.route("/form")
def form():
    return render_template("form.html", title="Form")

@app.route("/form2")
def form2():
    return render_template("form2.html", title="Form2")
  
  
@app.route("/card")
def card():
    return render_template("card.html", title="Card")


model=joblib.load('Tuned_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.values
    print(data)
    N=float(data['N'])
    P=float(data['P'])
    K=float(data['K'])
    temperature=float(data['temperature'])
    humidity=float(data['humidity'])
    ph=float(data['ph'])
    rainfall=float(data['rainfall'])
    features =  [N,P,K,temperature,humidity,ph,rainfall]
    print(features)
    prediction = model.predict([features,])[0]
    description=cropData[prediction]['description']
    image_url=cropData[prediction]['url']   
    
    return render_template('card.html', pred=prediction,path=image_url,description=description)

        
if __name__ == '__main__':
    app.run(debug=True,host='127.0.0.1',port=5500)
