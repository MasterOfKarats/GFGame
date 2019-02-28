import flask
import FrontEnd

app = flask(_name_)

@app.route('/')
def index():
    return 'FrontEnd/htmlfile.html'
