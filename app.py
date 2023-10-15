from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html", title="Home")

@app.route("/form")
def form():
    return render_template("form.html", title="Hello")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000,debug=True)