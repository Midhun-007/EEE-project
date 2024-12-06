from flask import Flask, render_template, request,jsonify

app = Flask(__name__)
@app.route('/')
def home():
    print("Rendering index.html")  # Debugging output
    return render_template('eee.html')
@app.route('/Street')
def home1():
    print("Rendering index.html")  # Debugging output
    return render_template('eee.html')



@app.route('/teams')
def teams():
    return render_template('teams.html')

@app.route('/greenify')
def greenify():
    return render_template('greenify.html')

@app.route('/bioplastic')
def bioplastic():
    return render_template('bioplastic.html')
@app.route("/get-data", methods=['GET'])
def post_data():
    print("Received POST request at /get-data") 
    f=open("f1.txt","r")
    a=f.read()
    print(a[1:])
    return jsonify(a)
if __name__ == '__main__':
    app.run(debug=True)