from flask import Flask, render_template, request

app = Flask(__name__)

# サンプルのアドバイザーデータベース
advisors = [
    {"name": "John Doe", "specialization": "Study Abroad in Europe", "email": "john@example.com"},
    {"name": "Jane Smith", "specialization": "Sports Scholarships in USA", "email": "jane@example.com"},
    {"name": "Mike Johnson", "specialization": "Language Immersion Programs", "email": "mike@example.com"}
]

@app.route('/')
def home():
    return render_template('HomePage.html')

@app.route('/LaunchScreen', methods=['GET', 'POST'])
def launch_screen():
    if request.method == 'POST':
        # フォームからの入力を取得
        name = request.form['name']
        email = request.form['email']
        country = request.form['country']
        duration = request.form['duration']
        study_type = request.form['study_type']
        
        # ここでアドバイザーをマッチングするロジックを実装する
        
        # マッチングされたアドバイザーをフィルタリングする例 (ここでは単純に国に基づいてフィルタリング)
        matched_advisors = [advisor for advisor in advisors if advisor['specialization'].lower().find(country.lower()) != -1]
        
        return render_template('MatchingPage.html', advisors=matched_advisors)
    return render_template('LaunchScreen.html')

if __name__ == '__main__':
    app.run(debug=True)
