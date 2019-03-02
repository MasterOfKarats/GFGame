from flask import Flask, render_template
import FrontEnd
app = Flask(__name__, template_folder='D:\ScalaProjects\GoFishClone\FrontEnd')


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/cards.js")
def cards():
    return render_template('Cards.js')


if __name__ == "__main__":
    app.run(debug=True)


#app = flask(_name_)
#host='0.0.0.0', port=8080,

