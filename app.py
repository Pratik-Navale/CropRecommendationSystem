from flask import Flask, render_template

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
