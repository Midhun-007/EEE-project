from flask import Flask, render_template, request,jsonify

app = Flask(__name__)

@app.route('/')
def home():
    print("Rendering index.html")  # Debugging output
    return render_template('index.html')

@app.route("/get-data", methods=['GET'])
def post_data():
    print("Received POST request at /get-data")  # Debugging output
    return jsonify({"message":"hi"})
@app.route("/post-data",methods=['POST'])
def get_data():
    try:
        if request.is_json:
            data=request.get_json()
            print(data)
            return jsonify({"status":"success"})
        
    except print(0):
        pass
    

if __name__ == '__main__':
    app.run(debug=True)
