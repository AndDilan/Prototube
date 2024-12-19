from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Dossier où seront stockées les vidéos
UPLOAD_FOLDER = './videos'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/')
def home():
    return jsonify({'message': 'Backend API Prototube fonctionne !'})

@app.route('/videos', methods=['GET'])
def list_videos():
    videos = os.listdir(UPLOAD_FOLDER)
    return jsonify({'videos': videos})

@app.route('/videos/<filename>', methods=['GET'])
def serve_video(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

