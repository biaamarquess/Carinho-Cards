from flask import Flask, render_template, redirect, request 

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/comojogar')
def comojogar():
    return render_template ('como_jogar.html')

@app.route('/cartas')
def cartas():
    return render_template ('cartas.html')

@app.route('/antes')
def antes():
    return render_template ('antes_de_jogar.html')

@app.route('/jogar')
def jogar():
    return render_template ('jogo.html')

@app.route('/como_jogar')
def como_jogar():
    return render_template ('como_jogar.html')

app.run(host='10.144.227.175', port=80, debug=True)