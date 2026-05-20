const DataJP = [
    {
        id: 1, word: "ヤバい", reading: "야바이", meaning: "대박 / 헐 / 쩐다",
        example_foreign: "これ、本当にヤバいくない？", example_native: "(이거 완전 대박 아니야?)", tags: ["#日本語新語", "#擬音語"],
        likes: 1204, comments: 45, usage: 95, nuance: 15, demographic: "10〜20代の男女ともに自由に使用"
    },
    {
        id: 2, word: "エモい", reading: "에모이", meaning: "감성적이다 / 뭉클하다",
        example_foreign: "この曲、めっちゃエモいね。", example_native: "(이 노래 엄청 감성적이야.)", tags: ["#トレンド", "#ダンチュ単語"],
        likes: 832, comments: 18, usage: 65, nuance: 10, demographic: "20代女性が特によく使う流行語"
    },
    {
        id: 5, word: "推し", reading: "오시", meaning: "최애 (가장 좋아하는 아이돌/캐릭터 등)",
        example_foreign: "私の推しが尊すぎてしんどい…", example_native: "(내 최애가 너무 소중해서 힘들다…)", tags: ["#オタ活", "#沼落ち"],
        likes: 3105, comments: 201, usage: 88, nuance: 40, demographic: "主にオタ活をする10〜30代の女性層"
    },
    {
        id: 6, word: "映える", reading: "바에루", meaning: "사진이 잘 받다 / 인스타 감성",
        example_foreign: "ここのカフェ、めっちゃインスタ映えする！", example_native: "(여기 카페 완전 인스타 감성 대박이야!)", tags: ["#ホットスポット", "#写真"],
        likes: 1450, comments: 55, usage: 80, nuance: 25, demographic: "SNSを活発に利用する20代女性中心"
    },
    {
        id: 7, word: "草", reading: "쿠사", meaning: "ㅋㅋㅋ (웃김을 표현)",
        example_foreign: "その話ガチで草生えるｗｗｗ", example_native: "(그 얘기 진짜 ㅋㅋㅋㅋ)", tags: ["#ネット用語", "#オタク"],
        likes: 2100, comments: 110, usage: 75, nuance: 60, demographic: "10〜20代男性中心、インターネットコミュニティ"
    },
    {
        id: 8, word: "ガチで", reading: "가치데", meaning: "진심으로 / 진짜로",
        example_foreign: "ガチで美味しいから食べてみて。", example_native: "(진짜 맛있으니까 한 번 먹어봐.)", tags: ["#強調", "#日常"],
        likes: 1899, comments: 90, usage: 95, nuance: 20, demographic: "10代の学生層で日常的に使われる"
    },
    {
        id: 9, word: "ワンチャン", reading: "완챤", meaning: "어쩌면 / 가능성 있음 (원 챈스)",
        example_foreign: "ワンチャン間に合うかもしれない。", example_native: "(어쩌면 제시간에 맞출 수 있을지도 몰라.)", tags: ["#大学生", "#ギャンブル"],
        likes: 980, comments: 34, usage: 85, nuance: 30, demographic: "20代の大学生の会話で非常に頻繁"
    },
    {
        id: 10, word: "ぴえん", reading: "피엔", meaning: "ㅠㅠ (슬픔/아쉬움을 귀엽게 표현)",
        example_foreign: "テストの点数悪かった…ぴえん🥺", example_native: "(시험 점수 낮게 나왔어… ㅠㅠ)", tags: ["#愛嬌", "#感情表現"],
        likes: 2500, comments: 142, usage: 50, nuance: 5, demographic: "10代の女子高生を中心に使われたが最近はミーム化"
    },
    {
        id: 11, word: "チルい", reading: "치루이", meaning: "여유롭다 / 느긋하다 (Chill하다)",
        example_foreign: "海見ながらチルい音楽聴いてる。", example_native: "(바다 보면서 분위기 있는 음악 듣고 있어.)", tags: ["#休憩", "#ヒップホップ"],
        likes: 1102, comments: 45, usage: 60, nuance: 20, demographic: "20〜30代の社会人およびヒップスター層"
    },
    {
        id: 12, word: "ディスる", reading: "디스루", meaning: "무시하다 / 디스하다",
        example_foreign: "あいつ、俺のことディスってない？", example_native: "(저 녀석 내 욕 하고 있는 거 아냐?)", tags: ["#不満", "#陰口"],
        likes: 678, comments: 20, usage: 70, nuance: 50, demographic: "全年齢層、特に若者層で広く使われる"
    }
];

const DataKR = [
    {
        id: 3, word: "존맛탱", reading: "JMT", meaning: "めっちゃ美味しい (진짜 맛있다)",
        question: "「존맛탱」と「꿀맛」の違いは何ですか？", example_native: "이 떡볶이 진심 존맛탱이야.", example_translation: "(このトッポッキ、マジで超美味しいよ。)", tags: ["#質問待機", "#モッパン"],
        likes: 2450, comments: 154, usage: 90, nuance: 20, demographic: "10〜20代を中心にインターネット等で幅広く使用"
    },
    {
        id: 4, word: "대박", reading: "テバク", meaning: "やばい / すごい",
        question: "目上の人に「대박!」って使っても大丈夫ですか？", example_native: "대박! 이거 진짜 예쁘다.", example_translation: "(ヤバい！これ本当に可愛い。)", tags: ["#敬語部屋", "#質問待機"],
        likes: 1890, comments: 120, usage: 98, nuance: 25, demographic: "全年齢層の男女ともに日常会話で使用"
    },
    {
        id: 13, word: "헐", reading: "ホル", meaning: "ええ！/ はぁ？ (놀람/기가 막힘)",
        question: "「헐」はどんなトーンで言えば自然ですか？", example_native: "헐, 벌써 시간이 이렇게 됐다고?", example_translation: "(はぁ？もうこんな時間なの？)", tags: ["#リアクション", "#感嘆詞"],
        likes: 3100, comments: 210, usage: 95, nuance: 20, demographic: "全年齢層で日常的なリアクションとして使用"
    },
    {
        id: 14, word: "꿀잼", reading: "クルジェム", meaning: "超おもしろい (꿀+재미)",
        question: "「꿀+〇〇」の他のバリエーションを知りたい！", example_native: "어제 본 영화 진짜 꿀잼이었어.", example_translation: "(昨日見た映画、超面白かったよ。)", tags: ["#新造語", "#語源質問"],
        likes: 1540, comments: 85, usage: 85, nuance: 35, demographic: "10〜30代の若者層が非常によく使う"
    },
    {
        id: 15, word: "킹받네", reading: "キンバンネ", meaning: "ガチでムカつく / マジで腹立つ",
        question: "ストリーマーがよく使う「킹받네」の語源は？", example_native: "아 또 지각이야, 아침부터 진짜 킹받네.", example_translation: "(あーまた遅刻だ、朝からマジで腹立つわ。)", tags: ["#YouTube", "#怒り"],
        likes: 2901, comments: 195, usage: 88, nuance: 60, demographic: "YouTubeや配信に慣れた10〜20代"
    },
    {
        id: 16, word: "심쿵", reading: "シムクン", meaning: "胸キュン / 心臓がドクンとする",
        question: "K-POPアイドルによく使うシチュエーションは？", example_native: "너 방금 웃을 때 나 심쿵했잖아.", example_translation: "(さっき君が笑った時、私胸キュンしたじゃん。)", tags: ["#胸キュン", "#恋愛"],
        likes: 1980, comments: 60, usage: 70, nuance: 20, demographic: "10〜30代の女性層が主力"
    },
    {
        id: 17, word: "읽씹", reading: "イルシプ", meaning: "既読スルー (읽고 씹기)",
        question: "カカオトークで「읽씹」された時の対処法を知りたいです。", example_native: "너 왜 어제 내 톡 읽씹했어?", example_translation: "(なんで昨日私のカトク既読スルーしたの？)", tags: ["#メッセンジャー", "#人間関係"],
        likes: 2311, comments: 240, usage: 90, nuance: 35, demographic: "全年齢層のKakaoTalkユーザー"
    },
    {
        id: 18, word: "불금", reading: "プルグム", meaning: "花の金曜日 / 華金",
        question: "韓国の「불금」はどんな風に過ごしますか？", example_native: "불금이니까 오늘 곱창에 소주 한잔 어때?", example_translation: "(華金だから今日コプチャンに焼酎一杯どう？)", tags: ["#文化", "#飲み会"],
        likes: 1750, comments: 88, usage: 80, nuance: 20, demographic: "20〜40代の社会人および大学生"
    },
    {
        id: 19, word: "소확행", reading: "ソファケン", meaning: "小さくて確かな幸せ",
        question: "韓国人が思う「소확행」の例を教えてください。", example_native: "퇴근 후 마시는 맥주 한 캔이 나의 소확행이야.", example_translation: "(退勤後に飲むビール一本が私の小さな幸せだよ。)", tags: ["#癒やし", "#トレンド"],
        likes: 1205, comments: 42, usage: 60, nuance: 10, demographic: "20〜30代の若者層のトレンド指標"
    },
    {
        id: 20, word: "TMI", reading: "ティーエムアイ", meaning: "情報過多 / どうでもいい情報",
        question: "「TMI」は目上の人にも使えますか？", example_native: "그건 너무 TMI니까 그만 얘기해.", example_translation: "(それはTMI(どうでもいい情報)すぎるからもう話すのやめて。)", tags: ["#外来語", "#雰囲気"],
        likes: 2590, comments: 133, usage: 85, nuance: 40, demographic: "英語圏から入り10〜30代の若者層に定着"
    }
];

// 각 단어별 실감나는 학습자 질문 2쌍 주입
DataKR[0].extra_questions = ["本当に美味しい食べ物以外に、綺麗な風景を見た時も「존맛탱」と言えますか？", "「꿀맛」と「존맛탱」はどう使い分けますか？"];
DataKR[1].extra_questions = ["会社の部長に「대박!」とリアクションすると失礼に見えますか？", "財布を失くした時のような悪い状況でも「대박」を使いますか？"];
DataKR[2].extra_questions = ["テキストで送る時、「헐...」のように点をつけると自然ですか？", "驚いた時だけでなく、がっかりした時にも使われるのか知りたいです！"];
DataKR[3].extra_questions = ["人に対して「君、本当に꿀잼だね」と表現してもいいですか？", "「노잼」以外に「꿀잼」の反対語はありますか？"];
DataKR[4].extra_questions = ["本当に真剣に怒った時にも使っていいですか？それとも冗談の時にだけ使いますか？", "テキストで「킹받」とだけ略して書いても通じますか？"];
DataKR[5].extra_questions = ["男性に対しても「私、심쿵した」と表現できますか？", "「심쿵」の代わりに使える他の流行語があったら教えてください！"];
DataKR[6].extra_questions = ["カカオトーク以外に、インスタのDMなどで既読無視された時も「읽씹」と言いますか？", "最初から読まずに無視することを表現する単語もありますか？"];
DataKR[7].extra_questions = ["「불토(華土)」や「불목(華木)」という言葉も普段よく使う方ですか？", "週末も働いている方に「불금(華金)を過ごして」と言うと失礼でしょうか？"];
DataKR[8].extra_questions = ["ブランドのバッグを買った時も「소확행」と呼べますか？", "普通、韓国人はどんな行動に「소확행」を感じるのか知りたいです！"];
DataKR[9].extra_questions = ["他人の秘密をうっかり話した時も「TMI」と言えますか？", "「투머치토커(Too much talker)」と「TMI」の違いは何ですか？"];

DataJP.forEach(d => {
    d.extra_questions = [
        "この単語の由来と正確なニュアンスを教えてください！",
        "ビジネスメールや会社で使った場合に問題になりませんか？"
    ];
});

const allData = [...DataJP, ...DataKR];
allData.forEach(d => {
    if (!d.demographics) {
        const u = d.usage;
        d.demographics = {
            male: {
                10: Math.max(10, Math.min(100, Math.floor(Math.random() * 40 + 40))),
                20: Math.max(10, Math.min(100, u - 3 + Math.floor(Math.random() * 6))),
                30: Math.max(10, Math.min(100, u - 15 + Math.floor(Math.random() * 20))),
                40: Math.max(10, Math.min(100, u - 25 + Math.floor(Math.random() * 20))),
                50: Math.max(10, Math.min(100, u - 35 + Math.floor(Math.random() * 20)))
            },
            female: {
                10: Math.max(10, Math.min(100, Math.floor(Math.random() * 40 + 40))),
                20: Math.max(10, Math.min(100, u - 2 + Math.floor(Math.random() * 5))),
                30: Math.max(10, Math.min(100, u - 10 + Math.floor(Math.random() * 20))),
                40: Math.max(10, Math.min(100, u - 20 + Math.floor(Math.random() * 20))),
                50: Math.max(10, Math.min(100, u - 30 + Math.floor(Math.random() * 20)))
            }
        };
    }
});

const feedContainer = document.getElementById('feed-container');
let currentMode = 'kr';
let currentComRole = 'learner';
let currentComTab = 'popular';

// 단어장 전역 상태 추가 (충분한 테스트를 위해 20개를 망각 임박으로 추가)
let MyWordbook = [
    ...DataJP.map(d => ({ ...d, srsLevel: 'urgent' })),
    ...DataKR.map(d => ({ ...d, id: d.id + 200, srsLevel: 'urgent' })) // ID 중복 방지
].slice(0, 20);

// 만약 Data 부족 시 더미 생성
if (MyWordbook.length < 20) {
    for (let i = MyWordbook.length; i < 20; i++) {
        MyWordbook.push({
            id: 500 + i, word: `가상단어 ${i}`, reading: `테스트키워드 ${i}`, meaning: "가상의 뜻",
            example_foreign: "이것은 가상의 예문입니다.", example_native: "This is a dummy test limit.",
            srsLevel: 'urgent', comments: 10, likes: 5
        });
    }
}
let srsFilterMode = false;

// -----------------------------------------------------
// 1. Home (Flashcard Timer Reel)
// -----------------------------------------------------
function createReelItem(data, mode) {
    const item = document.createElement('div');
    item.className = 'reel-item';

    let primaryExample = "";
    let secondaryTranslation = "";

    if (mode === 'kr') {
        // Japanese learning Korean: Show Korean sentence first, Japanese translation later
        primaryExample = data.example_native || "";
        secondaryTranslation = data.example_translation || data.example_native;
    } else {
        // Japanese community feed: Show Japanese sentence first, Korean translation later
        primaryExample = data.example_foreign || data.question || "";
        secondaryTranslation = data.example_native || "";
    }

    item.innerHTML = `
        <!-- 중앙 화면 터치 시 즉시 스킵 -->
        <div class="click-catcher" onclick="skipTimer(this)" style="position:absolute; width:100%; height:100%; z-index:5;"></div>

        <div class="flashcard-center">
            <div class="primary-word">${data.word}</div>
            <div class="primary-example">"${primaryExample}"</div>
            <div class="inline-timer-bar"><div class="timer-fill"></div></div>
            
            <div class="reveal-section">
                <div class="reveal-reading">[${data.reading}]</div>
                <div class="reveal-meaning">${data.meaning}</div>
                <div class="reveal-translation">${secondaryTranslation}</div>
            </div>
        </div>

        <div class="right-actions">
            <button class="action-btn" onclick="toggleLike(this, event)">
                <div class="icon-wrapper"><i class="fa-solid fa-heart"></i></div><span>${data.likes}</span>
            </button>
            <button class="action-btn" onclick="openComment(${data.comments}, event)">
                <div class="icon-wrapper"><i class="fa-solid fa-comment-dots"></i></div><span>${data.comments}</span>
            </button>
            <button class="action-btn" onclick="saveWord(${data.id}, '${mode}', this, event)">
                <div class="icon-wrapper"><i class="${MyWordbook.find(x => x.id === data.id) ? 'fa-solid fa-check' : 'fa-solid fa-plus'}"></i></div><span>${MyWordbook.find(x => x.id === data.id) ? '保存済' : '保存'}</span>
            </button>
            <button class="action-btn" onclick="shareReel(event)">
                <div class="icon-wrapper"><i class="fa-solid fa-share"></i></div><span>共有</span>
            </button>
        </div>

        <div class="bottom-expandable">
            <div class="row-top">
                <button class="expand-btn" onclick="toggleExpand(this, event)">使用頻度 / フォーマル度 ▾</button>
            </div>
            <div class="expand-content">
                <div class="demo-info">👤 <b>統計特性</b><br>${data.demographic}</div>
                <div class="stat-bars-wrapper" style="display:flex; flex-direction:column; gap:20px; width:100%; margin-top:20px; padding-bottom:15px;">
                    <div class="stat-bar-container" style="display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div style="display:flex; align-items:center; gap:6px; font-size:14px; font-weight:800; color:#111; letter-spacing:-0.5px;">
                                🔥 使用頻度
                                <i class="fa-solid fa-circle-info" onclick="openDemographicsModal(${data.id})" style="color:#aaa; cursor:pointer; font-size:14px; transition:color 0.2s;" onmouseover="this.style.color='#ff8c00'" onmouseout="this.style.color='#aaa'"></i>
                            </div>
                            <span style="font-size:16px; font-weight:900; color:#ff8c00;">${data.usage}%</span>
                        </div>
                        <div style="position:relative; width:100%; height:12px; background:#f0f0f0; border-radius:6px; overflow:hidden;">
                            <div class="bar-fill-usage" data-target="${data.usage}" style="position:absolute; top:0; left:0; height:100%; width:0%; background:#ff8c00; border-radius:6px; transition:width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);"></div>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; font-weight:600;">
                            <span>あまり使わない</span>
                            <span>毎日使う</span>
                        </div>
                    </div>
                    <div class="stat-bar-container" style="display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:14px; font-weight:800; color:#111; letter-spacing:-0.5px;">👔 フォーマル度</span>
                            <span style="font-size:16px; font-weight:900; color:#3498db;">${data.nuance}%</span>
                        </div>
                        <div style="position:relative; width:100%; height:12px; background:#f0f0f0; border-radius:6px; overflow:hidden;">
                            <div class="bar-fill-nuance" data-target="${data.nuance}" style="position:absolute; top:0; left:0; height:100%; width:0%; background:#3498db; border-radius:6px; transition:width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);"></div>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; font-weight:600;">
                            <span>カジュアル (親近感)</span>
                            <span>フォーマル (丁寧)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return item;
}

function createEvalItem(data, lang, uniqueIndex) {
    const item = document.createElement('div');
    item.className = 'reel-item eval-reel-item';
    item.dataset.id = data.id;

    const titleText = lang === 'kr' ? "✨ 네이티브 지식 기여하기" : "✨ ネイティブ知識に貢献する";
    const usageText = lang === 'kr' ? "🔥 사용 빈도" : "🔥 使用頻度";
    const usageLowText = lang === 'kr' ? "거의 안 씀" : "あまり使わない";
    const usageHighText = lang === 'kr' ? "매일 씀" : "毎日使う";
    const nuanceText = lang === 'kr' ? "👔 격식 정도" : "👔 フォーマル度";
    const nuanceLowText = lang === 'kr' ? "캐주얼 (친근함)" : "カジュアル (親近感)";
    const nuanceHighText = lang === 'kr' ? "격식 (정중함)" : "フォーマル (丁寧)";
    const btnText = lang === 'kr' ? "<i class='fa-solid fa-check'></i> 평가 완료하고 다음으로" : "<i class='fa-solid fa-check'></i> 評価を完了して次へ";
    const lockText = lang === 'kr' ? "<i class='fa-solid fa-lock'></i> 평가를 완료해야 다음 단어로 넘어갈 수 있습니다." : "<i class='fa-solid fa-lock'></i> 評価を完了しないと次の単語に進めません。";

    const defaultUsageVal = lang === 'kr' ? "가끔 사용함" : "時々使う";
    const defaultNuanceVal = lang === 'kr' ? "약간 비격식" : "少しカジュアル";

    item.innerHTML = `
        <div class="eval-center" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:90%; max-width:400px; box-sizing:border-box; z-index:20; pointer-events:auto;">
            <div style="background:#fff; border-radius:16px; padding:25px; box-shadow:0 10px 30px rgba(0,0,0,0.05); color:#111;">
                <div style="text-align:center; margin-bottom:20px;">
                    <div style="font-size:14px; font-weight:800; color:#ff8c00; margin-bottom:10px;">${titleText}</div>
                    <h2 style="font-size:32px; font-weight:900; margin:0;">${data.word}</h2>
                    <p style="font-size:16px; color:#555; margin-top:8px;">${data.meaning}</p>
                </div>
                
                <div style="margin-bottom:25px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-weight:700; font-size:14px;">
                        <span>${usageText}</span>
                        <span id="eval-reel-usage-val-${uniqueIndex}" style="color:#ff8c00;">${defaultUsageVal}</span>
                    </div>
                    <input type="range" id="eval-reel-usage-${uniqueIndex}" min="0" max="100" value="50" style="width:100%; accent-color:#ff8c00; pointer-events:auto;" oninput="document.getElementById('eval-reel-usage-val-${uniqueIndex}').innerText = getUsageText(this.value, '${lang}')">
                    <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; margin-top:5px; font-weight:600;">
                        <span>${usageLowText}</span><span>${usageHighText}</span>
                    </div>
                </div>
                
                <div style="margin-bottom:30px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-weight:700; font-size:14px;">
                        <span>${nuanceText}</span>
                        <span id="eval-reel-nuance-val-${uniqueIndex}" style="color:#3498db;">${defaultNuanceVal}</span>
                    </div>
                    <input type="range" id="eval-reel-nuance-${uniqueIndex}" min="0" max="100" value="50" style="width:100%; accent-color:#3498db; pointer-events:auto;" oninput="document.getElementById('eval-reel-nuance-val-${uniqueIndex}').innerText = getNuanceText(this.value, '${lang}')">
                    <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; margin-top:5px; font-weight:600;">
                        <span>${nuanceLowText}</span><span>${nuanceHighText}</span>
                    </div>
                </div>
                
                <button class="btn-eval" onclick="submitReelEval(${data.id}, this)" style="width:100%; padding:15px; font-size:16px; background:#ff8c00; color:#fff; border:none; border-radius:12px; font-weight:800; box-shadow:0 4px 10px rgba(255,140,0,0.3); transition:all 0.2s; pointer-events:auto;">${btnText}</button>
            </div>
            <div class="eval-lock-msg" style="text-align:center; margin-top:15px; color:#aaa; font-size:13px; font-weight:600;">
                ${lockText}
            </div>
        </div>
    `;
    return item;
}

window.submitReelEval = function (id, btn) {
    const item = btn.closest('.eval-reel-item');
    item.dataset.evaluated = 'true';
    btn.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    btn.style.background = '#34c759';
    btn.style.boxShadow = '0 4px 10px rgba(52,199,89,0.3)';

    const feedContainer = document.getElementById('feed-container');
    feedContainer.style.overflowY = 'scroll';

    setTimeout(() => {
        feedContainer.scrollBy({ top: feedContainer.clientHeight, behavior: 'smooth' });
    }, 500);
}

function renderFeed() {
    feedContainer.innerHTML = '';
    const combinedFeed = [];

    // For jp_version/app.js (Japanese users learning KR)
    // Create an infinite-like feed for demo: 3 learning items (KR) -> 1 eval item (JP)
    // Run this for 12 cycles (total 48 items), wrapping around the word arrays safely.
    let krIndex = 0;
    let jpIndex = 0;

    for (let cycle = 0; cycle < 12; cycle++) {
        for (let i = 0; i < 3; i++) {
            combinedFeed.push({ type: 'learning', data: DataKR[krIndex % DataKR.length] });
            krIndex++;
        }
        combinedFeed.push({ type: 'eval', data: DataJP[jpIndex % DataJP.length] });
        jpIndex++;
    }

    combinedFeed.forEach((item, index) => {
        let el;
        if (item.type === 'learning') {
            el = createReelItem(item.data, 'kr');
        } else {
            el = createEvalItem(item.data, 'jp', index);
        }
        feedContainer.appendChild(el);
        observer.observe(el);
    });
}

// -----------------------------------------------------
// Timer & Expansion Action
// -----------------------------------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const item = entry.target;

        if (entry.isIntersecting) {
            if (item.classList.contains('eval-reel-item')) {
                if (item.dataset.evaluated !== 'true') {
                    // Block scrolling
                    document.getElementById('feed-container').style.overflowY = 'hidden';
                }
                return;
            }

            const fill = item.querySelector('.timer-fill');
            const reveal = item.querySelector('.reveal-section');
            const timerBar = item.querySelector('.inline-timer-bar');

            if (timerBar) {
                timerBar.style.opacity = '1';
                timerBar.style.height = '10px';
                timerBar.style.marginBottom = '12px';
            }

            if (fill) {
                fill.style.transition = 'none';
                fill.style.width = '100%';
            }
            if (reveal) reveal.classList.remove('revealed');

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (fill) {
                        fill.style.transition = 'width 5s linear';
                        fill.style.width = '0%';
                    }
                });
            });

            item.timerId = setTimeout(() => {
                if (reveal) reveal.classList.add('revealed');
                if (timerBar) {
                    timerBar.style.opacity = '0';
                    timerBar.style.height = '0px';
                    timerBar.style.marginBottom = '0px';
                }
            }, 5000);
        } else {
            // 안 보이면 타이머 취소
            clearTimeout(item.timerId);
        }
    });
}, { threshold: 0.6 });

window.closeAllExpanded = function () {
    document.querySelectorAll('.expand-content.expanded').forEach(el => {
        el.classList.remove('expanded');
        const btn = el.parentElement.querySelector('.expand-btn');
        if (btn) btn.style.display = 'block';

        el.querySelectorAll('.bar-fill-usage').forEach(bar => {
            bar.style.width = `0%`;
        });
        el.querySelectorAll('.bar-fill-nuance').forEach(bar => {
            bar.style.width = `0%`;
        });
    });
};

document.addEventListener('scroll', window.closeAllExpanded, true);

window.skipTimer = function (element) {
    const parent = element.parentElement;
    const timerBar = parent.querySelector('.inline-timer-bar');
    const fill = parent.querySelector('.timer-fill');
    const reveal = parent.querySelector('.reveal-section');

    clearTimeout(parent.timerId);

    // 만약 아직 정답이 안 나왔다면 정답만 공개하고 확장 창은 그대로 둠
    if (!reveal.classList.contains('revealed')) {
        if (timerBar) {
            timerBar.style.opacity = '0';
            timerBar.style.height = '0px';
            timerBar.style.marginBottom = '0px';
        }
        if (fill) {
            fill.style.transition = 'none';
        }
        reveal.classList.add('revealed');
    } else {
        // 이미 정답이 공개된 상태라면(혹은 같이 누르는 상황이라면) 배경 탭 시 확장 창 닫기
        window.closeAllExpanded();
    }
}

window.toggleExpand = function (btn, event) {
    event.stopPropagation(); // 스킵 타이머 터치 방지
    const expandContent = btn.parentElement.nextElementSibling;
    if (expandContent.classList.contains('expanded')) {
        expandContent.classList.remove('expanded');
        btn.style.display = 'block';

        expandContent.querySelectorAll('.bar-fill-usage').forEach(bar => {
            bar.style.width = `0%`;
        });
        expandContent.querySelectorAll('.bar-fill-nuance').forEach(bar => {
            bar.style.width = `0%`;
        });
    } else {
        window.closeAllExpanded();
        expandContent.classList.add('expanded');
        btn.style.display = 'none';

        setTimeout(() => {
            expandContent.querySelectorAll('.bar-fill-usage').forEach(bar => {
                const target = bar.getAttribute('data-target');
                if (target !== null && target !== undefined) {
                    bar.style.width = `${target}%`;
                }
            });
            expandContent.querySelectorAll('.bar-fill-nuance').forEach(bar => {
                const target = bar.getAttribute('data-target');
                if (target !== null && target !== undefined) {
                    bar.style.width = `${target}%`;
                }
            });
        }, 50);
    }
}

// -----------------------------------------------------
// 2. Wordbook & Community Setup
// -----------------------------------------------------

window.deleteWord = function (id, event) {
    event.stopPropagation();
    MyWordbook = MyWordbook.filter(w => w.id !== id);
    showToast("単語が削除されました 🗑️");
    if (document.getElementById('view-wordbook').classList.contains('active')) renderWordbook();
}

window.toggleWordbookView = function (view) {
    document.getElementById('wordbook-dashboard').style.display = 'none';
    document.getElementById('wordbook-list-view').style.display = 'none';
    if (document.getElementById('wordbook-srs-view')) document.getElementById('wordbook-srs-view').style.display = 'none';

    if (view === 'dash') {
        document.getElementById('wordbook-dashboard').style.display = 'flex';
        srsFilterMode = false;
        renderWordbook();
    } else if (view === 'list') {
        document.getElementById('wordbook-list-view').style.display = 'flex';
        srsFilterMode = false;
        renderWordbook();
    } else if (view === 'srs') {
        document.getElementById('wordbook-srs-view').style.display = 'flex';
    }
}

window.startSRS = function () {
    const urgentCount = MyWordbook.filter(x => x.srsLevel === 'urgent').length;
    if (urgentCount === 0) {
        showToast("すべての単語が長期記憶状態です！ 🌱");
        srsFilterMode = false;
        renderWordbook();
        return;
    }

    toggleWordbookView('srs');
    showToast("今日の復習する単語です。 🚨");
    renderSRSReel();
}

window.stopSRS = function () {
    const container = document.getElementById('srs-feed-container');
    if (container) container.innerHTML = '';
}

function renderSRSReel() {
    const container = document.getElementById('srs-feed-container');
    container.innerHTML = '';
    const urgentItems = MyWordbook.filter(x => x.srsLevel === 'urgent');

    urgentItems.forEach(d => {
        container.appendChild(createSRSItem(d));
    });

    const items = container.querySelectorAll('.reel-item');
    items.forEach(el => observer.observe(el));
}

function createSRSItem(data) {
    const item = document.createElement('div');
    item.className = 'reel-item';

    const foreignExample = data.example_foreign || data.question || "";
    const nativeTranslation = data.example_native || "";

    item.innerHTML = `
        <div class="click-catcher" onclick="skipTimer(this)" style="position:absolute; width:100%; height:100%; z-index:5;"></div>

        <div class="flashcard-center">
            <div class="primary-word">${data.word}</div>
            <div class="primary-example">"${foreignExample}"</div>
            <div class="inline-timer-bar"><div class="timer-fill"></div></div>
            
            <div class="reveal-section">
                <div class="reveal-reading">[${data.reading}]</div>
                <div class="reveal-meaning">${data.meaning}</div>
                <div class="reveal-translation">${nativeTranslation}</div>
                
                <div style="display: flex; gap: 10px; margin-top: 25px; z-index: 20; position:relative;">
                    <button onclick="handleSRSAnswer(${data.id}, false, this, event)" style="flex:1; padding:15px; border-radius:12px; border:none; background:#ff3b30; color:white; font-size:16px; font-weight:800; cursor:pointer; box-shadow:0 4px 10px rgba(255,59,48,0.3);"><i class="fa-solid fa-xmark"></i> 分からない</button>
                    <button onclick="handleSRSAnswer(${data.id}, true, this, event)" style="flex:1; padding:15px; border-radius:12px; border:none; background:#34c759; color:white; font-size:16px; font-weight:800; cursor:pointer; box-shadow:0 4px 10px rgba(52,199,89,0.3);"><i class="fa-solid fa-check"></i> 分かる</button>
                </div>
            </div>
        </div>
    `;
    return item;
}

window.handleSRSAnswer = function (id, known, btnElement, e) {
    e.stopPropagation();
    const word = MyWordbook.find(x => x.id === id);
    if (word) {
        if (known) {
            word.srsLevel = 'safe';
            showToast("記憶が延長されました！ 🌱");
        } else {
            word.srsLevel = 'urgent';
            showToast("もう少し後でもう一度復習します。");
        }
    }

    const container = document.getElementById('srs-feed-container');

    if (!known) {
        // 맨 뒤에 한 번 더 추가해 계속 복습하게 함
        container.appendChild(createSRSItem(word));
        const newItems = container.querySelectorAll('.reel-item');
        observer.observe(newItems[newItems.length - 1]);
    }

    container.scrollBy({ top: container.clientHeight, behavior: 'smooth' });

    setTimeout(() => {
        const remaining = MyWordbook.filter(x => x.srsLevel === 'urgent').length;
        if (remaining === 0) {
            showToast("今日の復習をすべて終えました！ 🎉");
            toggleWordbookView('dash');
            stopSRS();
        }
    }, 500);
}

function renderWordbook() {
    const box = document.getElementById('wordbook-list');
    box.innerHTML = '';

    // Update Stats
    const total = MyWordbook.length;
    const urgentCount = MyWordbook.filter(x => x.srsLevel === 'urgent').length;

    // List View Stats
    const totalEl = document.getElementById('stat-total');
    if (totalEl) totalEl.innerText = total;
    const urgentEl = document.getElementById('stat-urgent');
    if (urgentEl) urgentEl.innerText = urgentCount;

    // Dash View Stats
    const totalDashEl = document.getElementById('stat-total-dash');
    if (totalDashEl) totalDashEl.innerText = total;
    const urgentDashEl = document.getElementById('stat-urgent-dash');
    if (urgentDashEl) urgentDashEl.innerText = urgentCount;

    const displayList = srsFilterMode ? MyWordbook.filter(x => x.srsLevel === 'urgent') : MyWordbook;

    if (displayList.length === 0) {
        box.innerHTML = `<div style="text-align:center; padding:30px; color:#aaa; font-weight:700; font-size:14px;">表示する単語がありません。</div>`;
        return;
    }

    displayList.forEach(d => {
        let badge = '';
        if (d.srsLevel === 'urgent') badge = '<div class="srs-badge srs-urgent">🚨 忘却間近 (今日復習！)</div>';
        else if (d.srsLevel === 'warning') badge = '<div class="srs-badge srs-warning">⚠️ 明日復習推奨</div>';
        else badge = '<div class="srs-badge srs-safe">🌱 長期記憶形成</div>';

        box.innerHTML += `
            <div class="list-item" onclick="openDetail(${d.id})">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    ${badge}
                    <button class="del-btn" onclick="deleteWord(${d.id}, event)"><i class="fa-solid fa-trash"></i></button>
                </div>
                <h4>${d.word} <span style="font-size:14px; color:#999; font-weight:500;">[${d.reading}]</span></h4>
                <div class="desc" style="color:#111; margin-top:5px; font-size: 15px;">💡 ${d.meaning}</div>
                <div class="meta" style="margin-top:10px;"><span>${d.tags[0]}</span></div>
            </div>
        `;
    });
}

function renderCommunity() {
    const box = document.getElementById('community-list');
    box.innerHTML = '';

    if (currentComTab === 'action' && currentComRole === 'learner') {
        // "질문하기" Form UI Render
        box.innerHTML = `
            <div class="form-container" style="background:#fff; border-radius:16px; padding:20px; box-shadow:0 4px 10px rgba(0,0,0,0.03); border:1px solid #eee;">
                <h3 style="margin-bottom: 15px; font-size:16px;">新しい質問を残す</h3>
                <input type="text" id="new-q-word" placeholder="質問する韓国語の単語を入力してください (例: 대박)" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ccc; font-size:15px; margin-bottom:15px; background:#fdfdfd; outline:none;" />
                <textarea id="new-q-desc" placeholder="どのような点が気になりますか？具体的なコンテキストを書いていただけると、ネイティブが回答しやすくなります。" style="width:100%; height:120px; padding:12px; border-radius:8px; border:1px solid #ccc; font-size:15px; resize:none; margin-bottom:15px; font-family:inherit; background:#fdfdfd; outline:none;"></textarea>
                <div style="display:flex; justify-content:flex-end;">
                    <button class="btn-eval" onclick="submitQuestion()" style="padding:12px 20px; font-size:15px; width:auto;"><i class="fa-solid fa-paper-plane"></i> 質問を登録する</button>
                </div>
            </div>
        `;
        return;
    }

    let targetData = currentComRole === 'learner' ? [...DataKR] : [...DataJP];
    const actionText = currentComRole === 'learner' ? "気になります 🙋‍♂️" : "回答を待っています 🚨";

    // sorting logic
    if (currentComTab === 'popular') {
        targetData = targetData.sort((a, b) => b.comments - a.comments);
    } else if (currentComTab === 'action' && currentComRole === 'mentor') {
        // 답변하기 탭에서는 답변 수가 적은, 불쌍한 질문들을 위로 올림
        targetData = targetData.sort((a, b) => a.comments - b.comments);
    }

    targetData.forEach(d => {
        let extraQuestions = "";

        // 멘토 모드의 "답변하기" 탭인 경우 동적 질문 스니펫 추가
        if (currentComRole === 'mentor' && currentComTab === 'action' && d.extra_questions) {
            extraQuestions = `
                <div style="margin-top: 15px; border-top: 1px dashed #eee; padding-top: 12px; display:flex; flex-direction:column; gap:8px;">
                    <div style="font-size:12px; font-weight:700; color:#888;">👀 現在待機中のその他の質問</div>
                    ${d.extra_questions.map(q => `
                    <div style="background:#fff4ea; padding:10px; border-radius:8px; font-size:13px; color:#333; line-height: 1.4; cursor:pointer;" onclick="event.stopPropagation(); openDetail(${d.id}, '${q.replace(/'/g, "\\'")}');">
                        <span style="color:#ff8c00; font-weight:700; margin-right:5px;">Q.</span> ${q}
                    </div>
                    `).join('')}
                </div>
            `;
        }

        box.innerHTML += `
            <div class="list-item" onclick="openDetail(${d.id})">
                <div class="tags" style="margin-bottom:8px">${d.tags.map(t => `<span style="padding:3px 8px;font-size:11px">${t}</span>`).join('')}</div>
                <h4>${d.word} <span style="font-size:14px;color:#aaa">[${d.reading}]</span></h4>
                <div class="desc" style="color:#111; line-height: 1.4;">💬 ${d.question || d.example_foreign || "この単語のニュアンスが気になります！"}</div>
                <div class="meta" style="margin-top: 10px;"><span style="color:#ff8c00; font-weight:700;">${actionText}</span><span>コメント ${d.comments}</span></div>
                ${extraQuestions}
            </div>
        `;
    });
}

window.renderComTabs = function () {
    const container = document.getElementById('com-tabs-container');
    container.innerHTML = '';

    let tabs = [];
    if (currentComRole === 'learner') {
        tabs = [{ id: 'popular', label: '🔥 人気単語' }, { id: 'action', label: '📝 質問する' }];
    } else {
        tabs = [{ id: 'popular', label: '🔥 人気単語' }, { id: 'action', label: '🙌 回答する' }];
    }

    tabs.forEach(t => {
        const btn = document.createElement('button');
        if (currentComTab === t.id) btn.classList.add('active');
        btn.innerText = t.label;
        btn.onclick = function () { switchComTab(t.id); };
        container.appendChild(btn);
    });
}

window.toggleComRole = function (forceRole = 'toggle') {
    const switchEl = document.getElementById('header-com-switch');
    const thumb = switchEl ? switchEl.querySelector('.switch-thumb') : null;

    if (forceRole === 'learner' || (forceRole === 'toggle' && currentComRole === 'mentor')) {
        currentComRole = 'learner';
        if (switchEl) switchEl.classList.remove('mentor-mode');
        if (thumb) thumb.innerText = '🇰🇷';
    } else {
        currentComRole = 'mentor';
        if (switchEl) switchEl.classList.add('mentor-mode');
        if (thumb) thumb.innerText = '🇯🇵';
    }
    currentComTab = 'popular';
    renderComTabs();
    renderCommunity();
}

window.switchComTab = function (tabId) {
    currentComTab = tabId;
    renderComTabs();
    renderCommunity();
}

window.submitQuestion = function () {
    const wordInput = document.getElementById('new-q-word').value;
    const descInput = document.getElementById('new-q-desc').value;

    if (!wordInput || !descInput) {
        showToast("単語と質問内容の両方を入力してください！ 🙏");
        return;
    }

    const newId = Date.now();
    const newObj = {
        id: newId,
        word: wordInput,
        reading: "発音未定",
        meaning: "意味待機中",
        example_foreign: descInput,
        question: descInput,
        example_native: "",
        tags: ["#質問待機", "#新規登録"],
        likes: 0,
        comments: 0,
        usage: 0,
        nuance: 50,
        demographic: "統計データ収集前"
    };

    DataKR.unshift(newObj);
    showToast("質問が正常に登録されました！ 🎉");
    switchComTab('popular');
}

// -----------------------------------------------------
// Route & Modal
// -----------------------------------------------------
window.navTo = function (viewId, btn) {
    document.querySelectorAll('.nav-item').forEach(e => e.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.view-container').forEach(e => e.classList.remove('active'));
    document.getElementById('view-' + viewId).classList.add('active');

    if (viewId === 'wordbook') renderWordbook();
    if (viewId === 'community') renderCommunity();
    if (viewId === 'mypage') {
        renderMypage();
    }
}

function renderMypage() {
    // 단어장 배열 길이 연동
    const wordsCount = document.getElementById('stat-mypage-words');
    if (wordsCount) wordsCount.innerText = MyWordbook.length;
}

window.openDetail = function (id, customQuestionStr = null) {
    const all = [...DataJP, ...DataKR];
    const data = all.find(x => x.id === id);
    if (!data) return;

    // 질문/답변 스레드 동적 구성
    let threads = [];
    threads.push({
        q: data.question || data.example_foreign || "この表現はどのように使うと安全ですか？",
        answered: true,
        answersHtml: `
            <div class="comment-item" style="margin-top:10px; border:none; padding:0; background:transparent;">
                <div class="avatar" style="background:#ddebff; color:#3498db;"><i class="fa-solid fa-chalkboard-user"></i></div>
                <div>
                    <strong>ネイティブ会員 A</strong>
                    <p style="font-size:13px; line-height:1.4; color:#333; margin-top: 4px;">日常生活で本当によく使います。ただ目上の方には使わないように！</p>
                </div>
            </div>
            
            <div style="font-size:14px; font-weight:700; margin-bottom:8px; color:#ff8c00; margin-top: 20px;">Q. 友達以外に職場の同僚にも使えますか？</div>
            <div class="comment-item" style="margin-top:10px; border:none; padding:0; background:transparent;">
                <div class="avatar" style="background:#ffd0d0; color:#ff3b30;"><i class="fa-solid fa-chalkboard-user"></i></div>
                <div>
                    <strong>ネイティブ会員 B</strong>
                    <p style="font-size:13px; line-height:1.4; color:#333; margin-top: 4px;">年齢が近い同僚なら、昼休みなど気楽に使えますよ。</p>
                </div>
            </div>
        `
    });

    if (data.extra_questions) {
        data.extra_questions.forEach(q => {
            threads.push({
                q: q,
                answered: false,
                answersHtml: `<div style="text-align:center; padding:15px 0; color:#999; font-size:13px;">まだ回答がありません。</div>`
            });
        });
    }

    // 터치한 특정 질문이 있다면 해당 질문에 자동 포커스 플래그 설정
    if (customQuestionStr) {
        const found = threads.find(t => t.q === customQuestionStr);
        if (found) found.autoFocus = true;
    }

    const commentsNum = data.comments;

    const modalBody = document.getElementById('detail-modal-body');
    modalBody.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div class="tags" style="margin-bottom:10px">${data.tags.map(t => `<span>${t}</span>`).join('')}</div>
            <h2 style="font-size: 28px; font-weight:800">${data.word}</h2>
            <p style="font-size: 18px; color: #ff8c00; font-weight:700">${data.meaning}</p>
        </div>

        ${currentComRole === 'learner' ? `
            <div style="background:#fff4ea; padding:15px; border-radius:12px; margin-bottom:20px; border: 1px solid #ffeada;">
                <h4 style="font-size:14px; margin-bottom:12px; color:#111;">📊 ネイティブの年齢別・職業別使用統計</h4>
                <div style="font-size:13px; color:#555; display:flex; flex-direction:column; gap:8px;">
                    <div style="display:flex; justify-content:space-between"><span>👩‍🎓 10~20代 学生</span> <strong style="color:#ff8c00;">非常によく使う (92%)</strong></div>
                    <div style="display:flex; justify-content:space-between"><span>💼 30代 会社員</span> <strong>たまに使う (45%)</strong></div>
                    <div style="display:flex; justify-content:space-between"><span>👴 40代以上</span> <strong>ほとんど使わない (10%)</strong></div>
                </div>
            </div>
        ` : `
            <div class="action-box">
                <button class="btn-eval" onclick="openEvaluateModal()">
                    <i class="fa-solid fa-check"></i> ネイティブとしてこの単語を直接評価する
                </button>
            </div>
        `}

        <div class="stat-bars-wrapper" style="display:flex; flex-direction:column; gap:20px; width:100%; margin-top:20px; padding-bottom:20px; border-bottom: 1px dashed #ddd; margin-bottom:20px;">
            <div class="stat-bar-container" style="display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:6px; font-size:14px; font-weight:800; color:#111; letter-spacing:-0.5px;">
                        🔥 使用頻度
                        <i class="fa-solid fa-circle-info" onclick="openDemographicsModal(${data.id})" style="color:#aaa; cursor:pointer; font-size:14px; transition:color 0.2s;" onmouseover="this.style.color='#ff8c00'" onmouseout="this.style.color='#aaa'"></i>
                    </div>
                    <span style="font-size:16px; font-weight:900; color:#ff8c00;">${data.usage}%</span>
                </div>
                <div style="position:relative; width:100%; height:12px; background:#f0f0f0; border-radius:6px; overflow:hidden;">
                    <div class="bar-fill-usage" data-target="${data.usage}" style="position:absolute; top:0; left:0; height:100%; width:0%; background:#ff8c00; border-radius:6px; transition:width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);"></div>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; font-weight:600;">
                    <span>あまり使わない</span>
                    <span>毎日使う</span>
                </div>
            </div>
            <div class="stat-bar-container" style="display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:800; color:#111; letter-spacing:-0.5px;">👔 フォーマル度</span>
                    <span style="font-size:16px; font-weight:900; color:#3498db;">${data.nuance}%</span>
                </div>
                <div style="position:relative; width:100%; height:12px; background:#f0f0f0; border-radius:6px; overflow:hidden;">
                    <div class="bar-fill-nuance" data-target="${data.nuance}" style="position:absolute; top:0; left:0; height:100%; width:0%; background:#3498db; border-radius:6px; transition:width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);"></div>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; font-weight:600;">
                    <span>カジュアル (親近感)</span>
                    <span>フォーマル (丁寧)</span>
                </div>
            </div>
        </div>
        <h3 style="margin-top:20px; font-size:16px;">単語の質問とディスカッション (コメント ${commentsNum}個)</h3>
        
        ${currentComRole === 'learner' ? `
        <div style="margin-top:10px; margin-bottom:15px;">
            <input type="text" placeholder="この単語について気になる点を自由に質問してみてください..." style="width:100%; padding:12px; border-radius:8px; border:1px solid #ccc; font-size:13px; margin-bottom:10px; box-sizing:border-box; outline:none;" />
            <button class="btn-eval" onclick="showToast('追加の質問が正常に登録されました！ネイティブの回答をお待ちください。'); closeDetailModal();" style="padding:10px; font-size:13px; background:#fff; color:#ff8c00; border:1px solid #ff8c00; box-shadow:none;"><i class="fa-solid fa-paper-plane"></i> この単語について質問する 🙋‍♂️</button>
        </div>
        ` : ''}

        <div style="background:#f9f9f9; padding:15px; border-radius:12px; border:1px solid #eee; margin-bottom: 30px;">
            ${threads.map((t, index) => `
                <div style="${index > 0 ? 'margin-top: 25px; border-top: 1px dashed #ddd; padding-top: 25px;' : ''}">
                    <div style="font-size:14px; font-weight:700; margin-bottom:8px; color:#ff8c00;">Q. ${t.q}</div>
                    ${t.answersHtml}
                    ${currentComRole === 'mentor' ? `
                        ${t.autoFocus ? `
                        <div id="focus-target-form" style="margin-top:10px; background:#fff; padding:12px; border-radius:8px; border:1px solid #ff8c00;">
                            <input type="text" placeholder="ネイティブメンターとして1〜2行で最も明確な回答をお願いします..." style="width:100%; padding:8px 0; box-sizing:border-box; border:none; border-bottom:1px solid #ffeada; outline:none; font-size:13px; margin-bottom:8px; background:transparent;" />
                            <div style="display:flex; justify-content:flex-end;">
                                <button class="btn-eval" onclick="showToast('質問への回答が正常に登録されました！ (+100 ポイント)'); closeDetailModal();" style="padding:6px 12px; font-size:12px; width:auto; border-radius:6px;"><i class="fa-solid fa-check"></i> 回答を残す</button>
                            </div>
                        </div>
                        ` : `
                        <div style="margin-top:10px;">
                            <button class="btn-eval" onclick="showToast('入力フォームが開きます (クリック動作の模倣)'); closeDetailModal();" style="padding:8px 12px; font-size:12px; background:#fff; color:#ff8c00; border:1px solid #ff8c00; box-shadow:none;"><i class="fa-solid fa-reply"></i> ${t.answered ? '私も意見を加える (ポイント +10)' : '最初の回答を書く (ポイント +100 ✨)'}</button>
                        </div>
                        `}
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('detail-modal').classList.add('active');
    setTimeout(() => {
        const bU = document.querySelector('#detail-modal .bar-fill-usage');
        const bN = document.querySelector('#detail-modal .bar-fill-nuance');
        if (bU) bU.style.width = `${data.usage}%`;
        if (bN) bN.style.width = `${data.nuance}%`;
        document.querySelector('.modal-content').scrollTop = 0;
    }, 100);
}

window.closeDetailModal = function () { document.getElementById('detail-modal').classList.remove('active'); }

window.openEvaluateModal = function () {
    // 디테일 모달의 z-index보다 높히 띄웁니다.
    document.getElementById('evaluate-modal').classList.add('active');
    document.getElementById('evaluate-modal').style.zIndex = "60";
    const usageSlider = document.getElementById('eval-usage');
    const nuanceSlider = document.getElementById('eval-nuance');
    if (usageSlider) {
        usageSlider.value = 50;
        updateEvalValue('usage', 50);
    }
    if (nuanceSlider) {
        nuanceSlider.value = 50;
        updateEvalValue('nuance', 50);
    }
}

window.openDemographicsModal = function (id) {
    const all = [...DataJP, ...DataKR];
    const data = all.find(x => x.id === id);
    if (!data || !data.demographics) return;

    const body = document.getElementById('demographics-body');
    const m = data.demographics.male;
    const f = data.demographics.female;

    body.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid #eee; padding-bottom:15px;">
            <div style="flex:1; text-align:center; font-weight:800; font-size:18px; color:#3498db;"><i class="fa-solid fa-mars"></i> 男性</div>
            <div style="flex:1; text-align:center; font-weight:800; font-size:18px; color:#e74c3c;"><i class="fa-solid fa-venus"></i> 女性</div>
        </div>
        <div style="display:flex; justify-content:space-between; gap:20px; padding-bottom:15px;">
            <!-- Male -->
            <div style="flex:1; display:flex; flex-direction:column; gap:20px;">
                ${[10, 20, 30, 40, 50].map(age => `
                    <div style="display:flex; align-items:center;">
                        <span style="width:40px; font-weight:800; font-size:15px; color:#444;">${age}代${age === 50 ? '+' : ''}</span>
                        <div style="flex:1; background:#eee; height:16px; border-radius:8px; margin:0 10px; overflow:hidden;">
                            <div style="width:${m[age]}%; height:100%; background:#3498db; border-radius:8px;"></div>
                        </div>
                        <span style="font-size:14px; font-weight:800; color:#111; width:35px; text-align:right;">${m[age]}%</span>
                    </div>
                `).join('')}
            </div>
            <!-- Female -->
            <div style="flex:1; display:flex; flex-direction:column; gap:20px;">
                ${[10, 20, 30, 40, 50].map(age => `
                    <div style="display:flex; align-items:center;">
                        <span style="width:40px; font-weight:800; font-size:15px; color:#444;">${age}代${age === 50 ? '+' : ''}</span>
                        <div style="flex:1; background:#eee; height:16px; border-radius:8px; margin:0 10px; overflow:hidden;">
                            <div style="width:${f[age]}%; height:100%; background:#e74c3c; border-radius:8px;"></div>
                        </div>
                        <span style="font-size:14px; font-weight:800; color:#111; width:35px; text-align:right;">${f[age]}%</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('demographics-modal').classList.add('active');
    document.getElementById('demographics-modal').style.zIndex = "80";
}

window.closeDemographicsModal = function () {
    document.getElementById('demographics-modal').classList.remove('active');
}

window.closeEvaluateModal = function () {
    document.getElementById('evaluate-modal').classList.remove('active');
}

window.getUsageText = function (val, lang = 'kr') {
    const v = parseInt(val);
    if (lang === 'kr') {
        if (v <= 20) return "거의 사용 안함";
        if (v <= 50) return "가끔 사용함";
        if (v <= 80) return "자주 사용함";
        return "많이 사용함";
    } else {
        if (v <= 20) return "ほとんど使わない";
        if (v <= 50) return "時々使う";
        if (v <= 80) return "よく使う";
        return "常に使う";
    }
};

window.getNuanceText = function (val, lang = 'kr') {
    const v = parseInt(val);
    if (lang === 'kr') {
        if (v <= 25) return "매우 비격식";
        if (v <= 50) return "약간 비격식";
        if (v <= 75) return "약간 격식";
        return "매우 격식";
    } else {
        if (v <= 25) return "非常にカジュアル";
        if (v <= 50) return "少しカジュアル";
        if (v <= 75) return "少しフォーマル";
        return "非常にフォーマル";
    }
};

window.updateEvalValue = function (type, val) {
    const text = type === 'usage' ? getUsageText(val, 'jp') : getNuanceText(val, 'jp');
    document.getElementById('eval-val-' + type).innerText = text;
}

window.submitEvaluation = function () {
    showToast('評価ありがとうございます！10ポイントが支給されました 💰');
    closeEvaluateModal();
    // 시연용으로 디테일 모달까지 한방에 닫아줌
    closeDetailModal();
}

window.toggleLike = function (btn, e) { e.stopPropagation(); btn.classList.toggle('liked'); const icon = btn.querySelector('.icon-wrapper'); icon.classList.remove('like-anim'); void icon.offsetWidth; icon.classList.add('like-anim'); const sp = btn.querySelector('span'); sp.innerText = btn.classList.contains('liked') ? parseInt(sp.innerText) + 1 : parseInt(sp.innerText) - 1; }

window.saveWord = function (id, mode, btn, e) {
    e.stopPropagation();
    const list = mode === 'jp' ? DataJP : DataKR;
    const target = list.find(x => x.id === id);
    const existingIndex = MyWordbook.findIndex(x => x.id === id);

    const iconWrap = btn.querySelector('.icon-wrapper');
    iconWrap.classList.remove('like-anim');
    void iconWrap.offsetWidth;
    iconWrap.classList.add('like-anim');

    if (target && existingIndex === -1) {
        // 저장 로직
        const levels = ['urgent', 'warning', 'safe'];
        const randomLevel = levels[Math.floor(Math.random() * levels.length)];
        MyWordbook.unshift({ ...target, srsLevel: randomLevel });
        showToast("単語帳に追加されました！ 📚");

        btn.querySelector('i').className = 'fa-solid fa-check';
        btn.querySelector('span').innerText = '保存済';
    } else if (existingIndex !== -1) {
        // 보관 취소 로직
        MyWordbook.splice(existingIndex, 1);
        showToast("単語の保存がキャンセルされました。");

        btn.querySelector('i').className = 'fa-solid fa-plus';
        btn.querySelector('span').innerText = '保存';
    }
}

window.shareReel = function (e) { e.stopPropagation(); showToast("リンクをクリップボードにコピーしました！ 🔗"); }

let toastTimeout;
window.showToast = function (msg) {
    const t = document.getElementById('toast');
    t.innerText = msg; t.classList.add('show');
    clearTimeout(toastTimeout); toastTimeout = setTimeout(() => { t.classList.remove('show'); }, 2000);
}

window.openComment = function (count, e) {
    e.stopPropagation();
    document.querySelector('#comment-modal h3 span').innerText = count;
    document.getElementById('modal-body-content').innerHTML = `
        <div class="comment-item"><div class="avatar"><i class="fa-solid fa-user"></i></div><div><strong>Native</strong><p>これは本当によく使いますよ</p></div></div>
    `;
    document.getElementById('comment-modal').classList.add('active');
}
window.closeModal = function () { document.getElementById('comment-modal').classList.remove('active'); }
window.addComment = function () {
    const input = document.getElementById('comment-input');
    if (input.value.trim()) {
        const box = document.getElementById('modal-body-content');
        box.innerHTML += `<div class="comment-item"><div class="avatar"><i class="fa-solid fa-user"></i></div><div><strong>Me</strong><p>${input.value}</p></div></div>`;
        input.value = ''; box.scrollTop = box.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderFeed('kr');
    renderComTabs(); // 처음 DOM 로딩 시 탭 초기화
});
