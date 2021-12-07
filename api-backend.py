# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from sys import path
from os import walk
import os.path
import frontmatter
from werkzeug.utils import secure_filename

# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)
cors = CORS(app)

# Global variabls
contant_dir = '/gatsby/content/'

# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.

@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
	return "Hello in codenanshu system APIS"


@app.route('/create_post', methods=["POST"])
@cross_origin()
def create_post():
	file = request.files['image']
	info = {
		"title": request.form['title'],
		"description": request.form['description'],
		"date": request.form['date'],
		"slug": request.form['slug'],
		"category": request.form['category'],
		"image": file.filename,
		"content": request.form['content']
	}

	notes_path = path[0] + contant_dir + f"{info['category']}/" + info['slug'] + "/"
	os.mkdir(notes_path)
	filename = "index.md"

	if file.filename != "":
		file.save(os.path.join(notes_path, secure_filename(file.filename)))

	with open(os.path.join(notes_path, filename), 'wb') as temp_file:
    		temp_file.write(bytes(info['content'], 'utf-8'))

	return info

# how many post api
@app.route('/total_post')
@cross_origin()
def how_many_file():
	totalFiles = 0

	for root, dirs, files in walk(path[0] + contant_dir):
	    for file in files:
	        if file.endswith('.md'):
	            totalFiles += 1

	return f"{totalFiles}"


# API for all post names 
@app.route('/all_articles')
@cross_origin()
def how_many_posts():
	posts = []
	for root, directories, files in walk(path[0] + contant_dir):
	    for file in files:
	        if file.endswith('.md'):
	            post = frontmatter.load(os.path.join(root, file))
	            posts.append({
	            		"title": post['title'],
	            		"date": post['date'],
	            		"slug": post['slug']
	            	})

	return jsonify(posts)

# API for blog articles
@app.route('/all_articles/<category>')
@cross_origin()
def how_many_blogposts(category):
	posts = []
	for root, directories, files in walk(path[0] + contant_dir):
	    for file in files:
	        if file.endswith('.md'):
	            post = frontmatter.load(os.path.join(root, file))
	            if post['category'] == category:
	            	posts.append({
	            			"title": post['title'],
	            			"date": post['date'],
	            			"slug": post['slug'],
	            			"category": post['category']
	            		})

	return jsonify(posts)

# for edit the post
@app.route('/edit/<category>/<slug>')
@cross_origin()
def edit(category, slug):
	route = path[0] + contant_dir + f"{category}/" + f"{slug}"
	file = "index.md"
	post = frontmatter.load(os.path.join(route, file))

	return jsonify({
			"title": post['title']
		})

# main driver function
if __name__ == '__main__':

	# run() method of Flask class runs the application
	# on the local development server.
	app.run(port=5000, debug=True)
