import flask

app = flask(_name_)

@app.route('/')
    def index():
        return 'index page'