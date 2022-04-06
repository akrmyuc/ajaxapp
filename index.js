// ユースケース: Ajax通信

/* 1.エントリーポイント
console.log("index.js: loaded");

// CSSセレクタを使ってDOMツリー中のh2要素を取得する
const heading = document.querySelector("h2");
// h2要素に含まれるテキストコンテンツを取得する
const headingText = heading.textContent;

// button要素を作成する
const button = document.createElement("button");
button.textContent = "Push Me";
// body要素の子要素としてbuttonを挿入する
document.body.appendChild(button);

alert(headingText);
*/


// const userId = "akrmyuc";
// fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`);
// encodeURIComponent関数：/や%などURLとして特殊な意味を持つ文字列をただの文字列として扱えるようにエスケープする関数

function fetchUserInfo(userId) {
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response => {
            console.log(response.status);
            // エラーレスポンスが返されたことを検知する
            if (!response.ok) {
                console.error("エラーレスポンス", response);
            } else {
                return response.json().then(userInfo => {
                    console.log(userInfo);
                });
            }
        }).catch(error => {
            console.error(error);
        });
}

