from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def homepage():
    return app.send_static_file('index.html')


@app.route("/cards.js")
def cards():
    return render_template('Cards.js')


if __name__ == "__main__":
    app.run(debug=True)


#app = flask(_name_)
#host='0.0.0.0', port=8080,
#, template_folder=' '