from flask import Flask, render_template,request, jsonify
import pickle
import requests
import time
import joblib
app = Flask(__name__)

access_key ="2MMsC-wCX6LksXMWHDh3tRmgsHNLyL-NmBguNVun9Cs"

# query_parameters = {
#     'client_id': access_key,
#     'orientation': 'landscape', 
#     'page':1,
#     'per_page':2,
#     'order_by':'relevant',
#     'query': 'mothbeans', 
# }
# global image_url

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
# with open('Tuned_model.pkl', 'rb') as model_file:
#     model = pickle.load(model_file)
model=joblib.load('Tuned_model.pkl')
# @app.route('/predict', methods=['POST'])
# def predict():
#     # data = request.get_json()
#     data = request.values
#     features =[int(data[i]) for i in data]
#     prediction = model.predict([features],)
#     # return jsonify({'prediction' : prediction[0]})
#     # print(prediction.tolist())
#     url = f'https://api.unsplash.com/search/photos?client_id=lklkjlkjljkl&count=1&page=1&per_page=2&order_by=relevant&query={prediction[0]}&orientation=portrait'
#     try:
#         response = requests.get(url)
#         response.raise_for_status()  # Check for any request errors
#         data = response.json()
#         # time.sleep(3)
        
#         # print(data)
#         photo=data['results'][1]
#         image_url = ''

#         # Try to get the image URL while it's not available
#         while image_url is None:
#             if 'urls' in photo and 'raw' in photo['urls']:
#                 image_url = photo['urls']['raw']
#             else:
#                 print("Image URL not available for this photo. Retrying...")
#         image_url = data['results'][1]['urls']['raw']
#         photographer_name =data['results'][1]['user']['name']
#         print(f"Photographer: {photographer_name}")
#         print(f"Image URL: {image_url}")

#     except requests.exceptions.RequestException as e:
#         print(f"Request error: {e}")

#     except KeyError as e:
#         print("Unexpected API response format")

#     except Exception as e:
#         print(f"An error occurred: {e}")
        
    # return render_template('form.html',pred=prediction[0],path=image_url)

@app.route('/predict', methods=['POST'])
def predict():
    # data = request.get_json()
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
    # print(features,prediction)
    # Replace 'YOUR_ACCESS_KEY' with your Unsplash API access key
    access_key = '2MMsC-wCX6LksXMWHDh3tRmgsHNLyL-NmBguNVun9Cs'

    # Construct the Unsplash API URL for image search
    url = f'https://api.unsplash.com/search/photos'
    cropURL=f'http://localhost:3000/api/data?name={prediction}'
    cropResponse=requests.get(cropURL)
    cropData=cropResponse.json()
    description=cropData['description']
    image_url=cropData['url']
    # query = prediction  # Use the prediction as the query keyword

    # Define query parameters including the 'query' parameter for the search keyword
    query_parameters = {
        'client_id': access_key,
        'query': prediction,
        'page':1,
        'per_page': 2,  # Limit the number of results to 2
        'orientation': 'landscape',
        'order_by': 'relevant',  # Sort by relevance
    }
    # image_url=''
    try:
        # image_url=''
        response = requests.get(url, params=query_parameters)
        
        response.raise_for_status()  # Check for any request errors
        data = response.json()
        # res=cropResponse
        # print(res)
        if 'results' in data and len(data['results']) > 0:
            photo = data['results'][1]
            # image_url = photo['urls']['raw']
            photographer_name = photo['user']['name']
            print(f"Photographer: {photographer_name}")
            print(f"Image URL: {image_url}")
        else:
            print("No photos found for the query.")

    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")

    except KeyError as e:
        print("Unexpected API response format")

    except Exception as e:
        print(f"An error occurred: {e}")
    
    return render_template('card.html', pred=prediction,path=image_url,description=description)

        
if __name__ == '__main__':
    app.run(debug=True,host='127.0.0.1',port=5500)