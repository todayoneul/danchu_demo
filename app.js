const DataJP = [
    {
        id: 1, word: "ヤバい", reading: "야바이", meaning: "대박 / 헐 / 쩐다",
        example_foreign: "これ、本当にヤバいくない？", example_native: "(이거 완전 대박 아니야?)", tags: ["#일본어_신조어", "#의성어"],
        likes: 1204, comments: 45, usage: 95, nuance: 15, demographic: "10대~20대 남녀 모두 자유롭게 사용"
    },
    {
        id: 2, word: "エモい", reading: "에모이", meaning: "감성적이다 / 뭉클하다",
        example_foreign: "この曲、めっちゃエモいね。", example_native: "(이 노래 엄청 감성적이야.)", tags: ["#트렌드", "#단추단어"],
        likes: 832, comments: 18, usage: 65, nuance: 10, demographic: "20대 여성이 특히 많이 사용하는 유행어"
    },
    {
        id: 5, word: "推し", reading: "오시", meaning: "최애 (가장 좋아하는 아이돌/캐릭터 등)",
        example_foreign: "私の推しが尊すぎてしんどい…", example_native: "(내 최애가 너무 소중해서 힘들다…)", tags: ["#덕질", "#입덕"],
        likes: 3105, comments: 201, usage: 88, nuance: 40, demographic: "주로 덕질을 하는 10~30대 여성층"
    },
    {
        id: 6, word: "映える", reading: "바에루", meaning: "사진이 잘 받다 / 인스타 감성",
        example_foreign: "ここのカフェ、めっちゃインスタ映えする！", example_native: "(여기 카페 완전 인스타 감성 대박이야!)", tags: ["#핫플", "#사진"],
        likes: 1450, comments: 55, usage: 80, nuance: 25, demographic: "SNS를 활발히 사용하는 20대 여성 중심"
    },
    {
        id: 7, word: "草", reading: "쿠사", meaning: "ㅋㅋㅋ (웃김을 표현)",
        example_foreign: "その話ガチで草生えるｗｗｗ", example_native: "(그 얘기 진짜 ㅋㅋㅋㅋ)", tags: ["#인터넷용어", "#오타쿠"],
        likes: 2100, comments: 110, usage: 75, nuance: 60, demographic: "10~20대 남성 중심, 인터넷 커뮤니티"
    },
    {
        id: 8, word: "ガチで", reading: "가치데", meaning: "진심으로 / 진짜로",
        example_foreign: "ガチで美味しいから食べてみて。", example_native: "(진짜 맛있으니까 한 번 먹어봐.)", tags: ["#강조", "#일상"],
        likes: 1899, comments: 90, usage: 95, nuance: 20, demographic: "10대 학생층 사이에서 일상적으로 쓰임"
    },
    {
        id: 9, word: "ワンチャン", reading: "완챤", meaning: "어쩌면 / 가능성 있음 (원 챈스)",
        example_foreign: "ワンチャン間に合うかもしれない。", example_native: "(어쩌면 제시간에 맞출 수 있을지도 몰라.)", tags: ["#대학생", "#도박수"],
        likes: 980, comments: 34, usage: 85, nuance: 30, demographic: "20대 대학생 대화에서 매우 빈번함"
    },
    {
        id: 10, word: "ぴえん", reading: "피엔", meaning: "ㅠㅠ (슬픔/아쉬움을 귀엽게 표현)",
        example_foreign: "テストの点数悪かった…ぴえん🥺", example_native: "(시험 점수 낮게 나왔어… ㅠㅠ)", tags: ["#애교", "#감정표현"],
        likes: 2500, comments: 142, usage: 50, nuance: 5, demographic: "10대 여고생을 중심으로 쓰였으나 최근엔 밈화됨"
    },
    {
        id: 11, word: "チルい", reading: "치루이", meaning: "여유롭다 / 느긋하다 (Chill하다)",
        example_foreign: "海見ながらチルい音楽聴いてる。", example_native: "(바다 보면서 분위기 있는 음악 듣고 있어.)", tags: ["#휴식", "#힙합"],
        likes: 1102, comments: 45, usage: 60, nuance: 20, demographic: "20~30대 직장인 및 힙스터 층"
    },
    {
        id: 12, word: "ディスる", reading: "디스루", meaning: "무시하다 / 디스하다",
        example_foreign: "あいつ、俺のことディスってない？", example_native: "(저 녀석 내 욕 하고 있는 거 아냐?)", tags: ["#불만", "#뒷담"],
        likes: 678, comments: 20, usage: 70, nuance: 50, demographic: "전 연령대, 특히 젊은 층에서 넓게 쓰임"
    }
];

const DataKR = [
    {
        id: 3, word: "존맛탱", reading: "JMT", meaning: "めっちゃ美味しい (진짜 맛있다)",
        question: "「존맛탱」と「꿀맛」の違いは何ですか？", example_native: "이 떡볶이 진심 존맛탱이야.", tags: ["#질문대기", "#먹방"],
        likes: 2450, comments: 154, usage: 90, nuance: 20, demographic: "10~20대 중심 인터넷 등에서 광범위하게 사용"
    },
    {
        id: 4, word: "대박", reading: "テバク", meaning: "やばい / すごい",
        question: "目上の人に「대박!」って使っても大丈夫ですか？", example_native: "대박! 이거 진짜 예쁘다.", tags: ["#존댓말방", "#질문대기"],
        likes: 1890, comments: 120, usage: 98, nuance: 25, demographic: "전 연령대 남녀 모두 일상회화로 사용"
    },
    {
        id: 13, word: "헐", reading: "ホル", meaning: "ええ！/ 은/는 (놀람/기가 막힘)",
        question: "「헐」はどんなトーンで言えば自然ですか？", example_native: "헐, 벌써 시간이 이렇게 됐다고?", tags: ["#리액션", "#감탄사"],
        likes: 3100, comments: 210, usage: 95, nuance: 20, demographic: "모든 연령대에서 일상적인 리액션으로 사용"
    },
    {
        id: 14, word: "꿀잼", reading: "クルジェム", meaning: "超おもしろい (꿀+재미)",
        question: "「꿀+〇〇」の他のバリエーションを知りたい！", example_native: "어제 본 영화 진짜 꿀잼이었어.", tags: ["#신조어", "#어원질문"],
        likes: 1540, comments: 85, usage: 85, nuance: 35, demographic: "10대~30대 젊은 층이 매우 자주 씀"
    },
    {
        id: 15, word: "킹받네", reading: "キンバンネ", meaning: "ガチでムカつく / マジで腹立つ",
        question: "스트리머가 자주 쓰는 「킹받네」의 어원은 뭔가요?", example_native: "아 또 지각이야, 아침부터 진짜 킹받네.", tags: ["#유튜브", "#분노"],
        likes: 2901, comments: 195, usage: 88, nuance: 60, demographic: "유튜브/스트리밍에 익숙한 10~20대"
    },
    {
        id: 16, word: "심쿵", reading: "シムクン", meaning: "胸キュン / 心臓がドクンとする",
        question: "K-POP 아이돌에게 주로 쓰는 시츄에이션은 뭔가요?", example_native: "너 방금 웃을 때 나 심쿵했잖아.", tags: ["#설렘", "#연애"],
        likes: 1980, comments: 60, usage: 70, nuance: 20, demographic: "10대~30대 여성층이 주력"
    },
    {
        id: 17, word: "읽씹", reading: "イルシプ", meaning: "既読スルー (읽고 씹기)",
        question: "카카오톡에서 「읽씹」 당했을 때 대처법을 알고 싶어요.", example_native: "너 왜 어제 내 톡 읽씹했어?", tags: ["#메신저", "#인간관계"],
        likes: 2311, comments: 240, usage: 90, nuance: 35, demographic: "전 연령대 카카오톡 사용자"
    },
    {
        id: 18, word: "불금", reading: "プルグム", meaning: "花の金曜日 / 華金",
        question: "한국의 「불금」은 보통 어떻게 보내나요?", example_native: "불금이니까 오늘 곱창에 소주 한잔 어때?", tags: ["#문화", "#회식"],
        likes: 1750, comments: 88, usage: 80, nuance: 20, demographic: "20~40대 직장인 및 대학생"
    },
    {
        id: 19, word: "소확행", reading: "ソファケン", meaning: "小さくて確かな幸せ",
        question: "한국인이 느끼는 「소확행」의 예시를 알려주세요.", example_native: "퇴근 후 마시는 맥주 한 캔이 나의 소확행이야.", tags: ["#힐링", "#트렌드"],
        likes: 1205, comments: 42, usage: 60, nuance: 10, demographic: "20~30대 청년층의 트렌드 지표"
    },
    {
        id: 20, word: "TMI", reading: "ティーエムアイ", meaning: "情報過多 / どうでもいい情報",
        question: "「TMI」는 윗사람에게도 써도 되나요?", example_native: "그건 너무 TMI니까 그만 얘기해.", tags: ["#외래어", "#분위기"],
        likes: 2590, comments: 133, usage: 85, nuance: 40, demographic: "영어권에서 넘어와 10~30대 젊은 층에 정착"
    }
];

// 각 단어별 실감나는 학습자 질문 2쌍 주입
DataKR[0].extra_questions = ["진짜 맛있는 음식 말고, 예쁜 풍경을 볼 때도 존맛탱이라고 할 수 있나요?", "꿀맛이랑 존맛탱은 어떻게 구분하나요?"];
DataKR[1].extra_questions = ["회사 부장님께 '대박!' 이라고 리액션 하면 버릇없어 보이나요?", "지갑 잃어버렸을 때처럼 안 좋은 상황에서도 대박이라고 쓰나요?"];
DataKR[2].extra_questions = ["텍스트로 보낼 때 '헐...' 처럼 점을 붙여야 자연스러운가요?", "놀랐을 때 말고 실망했을 때도 쓰이는지 궁금해요!"];
DataKR[3].extra_questions = ["사람한테 '너 진짜 꿀잼이다'라고 표현해도 되나요?", "노잼 말고 꿀잼의 반대말이 또 있을까요?"];
DataKR[4].extra_questions = ["진짜 진지하게 화났을 때 써도 되나요, 아니면 장난칠 때만 쓰나요?", "텍스트로 '킹받' 이라고만 줄여서 써도 말이 되나요?"];
DataKR[5].extra_questions = ["남자한테도 '나 심쿵했어' 라고 표현할 수 있나요?", "심쿵 대신 쓸 수 있는 다른 유행어가 있다면 알려주세요!"];
DataKR[6].extra_questions = ["카톡 말고 인스타그램 DM 등에서도 읽고 무시당했을 때 읽씹이라고 하나요?", "아예 읽지도 않고 무시하는 걸 표현하는 단어도 있나요?"];
DataKR[7].extra_questions = ["불토나 불목이라는 말도 평소에 자주 쓰는 편인가요?", "주말에도 일하는 분한테 불금 보내라고 하면 실례일까요?"];
DataKR[8].extra_questions = ["명품 가방을 샀을 때도 소확행이라고 부를 수 있나요?", "보통 한국인들은 어떤 행동에서 소확행을 느끼는지 궁금해요!"];
DataKR[9].extra_questions = ["남의 비밀을 실수로 말했을 때도 TMI라고 할 수 있나요?", "투머치토커랑 TMI의 차이점이 뭔가요?"];

DataJP.forEach(d => {
    d.extra_questions = [
        "이 단어의 유래와 정확한 뉘앙스를 알려주세요!",
        "비즈니스 메일이나 회사에서 썼을 때 문제가 되지는 않을까요?"
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
let currentMode = 'jp';
let currentComRole = 'learner';
let currentComTab = 'popular';

let MyWordbook = [
    ...DataJP.map(d => ({ ...d, srsLevel: 'urgent' })),
    ...DataKR.map(d => ({ ...d, id: d.id + 200, srsLevel: 'urgent' }))
].slice(0, 20);

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

function createReelItem(data, mode) {
    const item = document.createElement('div');
    item.className = 'reel-item';

    const foreignExample = mode === 'jp' ? data.example_foreign : (data.question || data.example_foreign);
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
                <div class="icon-wrapper"><i class="${MyWordbook.find(x => x.id === data.id) ? 'fa-solid fa-check' : 'fa-solid fa-plus'}"></i></div><span>${MyWordbook.find(x => x.id === data.id) ? '보관됨' : '보관'}</span>
            </button>
            <button class="action-btn" onclick="shareReel(event)">
                <div class="icon-wrapper"><i class="fa-solid fa-share"></i></div><span>공유</span>
            </button>
        </div>

        <div class="bottom-expandable">
            <div class="row-top">
                <button class="expand-btn" onclick="toggleExpand(this, event)">사용 빈도 / 격식 정도 ▾</button>
            </div>
            <div class="expand-content">
                <div class="demo-info">👤 <b>통계 특성</b><br>${data.demographic}</div>
                <div class="stat-bars-wrapper" style="display:flex; flex-direction:column; gap:20px; width:100%; margin-top:20px; padding-bottom:15px;">
                    <div class="stat-bar-container" style="display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div style="display:flex; align-items:center; gap:6px; font-size:15px; font-weight:800; color:#111; letter-spacing:-0.5px;">
                                🔥 사용 빈도
                                <i class="fa-solid fa-circle-info" onclick="openDemographicsModal(${data.id})" style="color:#aaa; cursor:pointer; font-size:15px; transition:color 0.2s;" onmouseover="this.style.color='#ff8c00'" onmouseout="this.style.color='#aaa'"></i>
                            </div>
                            <span style="font-size:16px; font-weight:900; color:#ff8c00;">${data.usage}%</span>
                        </div>
                        <div style="position:relative; width:100%; height:12px; background:#f0f0f0; border-radius:6px; overflow:hidden;">
                            <div class="bar-fill-usage" data-target="${data.usage}" style="position:absolute; top:0; left:0; height:100%; width:0%; background:#ff8c00; border-radius:6px; transition:width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);"></div>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; font-weight:600;">
                            <span>거의 안 씀</span>
                            <span>매일 씀</span>
                        </div>
                    </div>
                    <div class="stat-bar-container" style="display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:15px; font-weight:800; color:#111; letter-spacing:-0.5px;">👔 격식 정도</span>
                            <span style="font-size:16px; font-weight:900; color:#3498db;">${data.nuance}%</span>
                        </div>
                        <div style="position:relative; width:100%; height:12px; background:#f0f0f0; border-radius:6px; overflow:hidden;">
                            <div class="bar-fill-nuance" data-target="${data.nuance}" style="position:absolute; top:0; left:0; height:100%; width:0%; background:#3498db; border-radius:6px; transition:width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);"></div>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; font-weight:600;">
                            <span>캐주얼 (친근함)</span>
                            <span>격식 (정중함)</span>
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
    const usageLowText = lang === 'kr' ? "몰라요" : "知らない";
    const usageHighText = lang === 'kr' ? "매일 씀" : "毎日使う";
    const nuanceText = lang === 'kr' ? "👔 격식 정도" : "👔 フォーマル度";
    const nuanceLowText = lang === 'kr' ? "캐주얼 (친근함)" : "カジュアル (親近感)";
    const nuanceHighText = lang === 'kr' ? "격식 (정중함)" : "フォーマル (丁寧)";
    
    // Default to "몰라요" / "知らない" initially, so button says "다른 단어 평가하기 🔄"
    const btnText = lang === 'kr' ? "다른 단어 평가하기 🔄" : "別の単語を評価する 🔄";
    const lockText = lang === 'kr' ? "<i class='fa-solid fa-lock'></i> 평가를 완료해야 다음 단어로 넘어갈 수 있습니다." : "<i class='fa-solid fa-lock'></i> 評価を完了しないと次の単語に進めません。";

    const defaultUsageVal = lang === 'kr' ? "몰라요" : "知らない";
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
                    <input type="range" id="eval-reel-usage-${uniqueIndex}" min="0" max="100" value="0" style="width:100%; accent-color:#ff8c00; pointer-events:auto;" oninput="handleUsageSliderInput(this.value, ${uniqueIndex}, '${lang}')">
                    <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; margin-top:5px; font-weight:600;">
                        <span>${usageLowText}</span><span>${usageHighText}</span>
                    </div>
                </div>
                
                <div id="eval-reel-nuance-container-${uniqueIndex}" style="margin-bottom:30px; display:none;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-weight:700; font-size:14px;">
                        <span>${nuanceText}</span>
                        <span id="eval-reel-nuance-val-${uniqueIndex}" style="color:#3498db;">${defaultNuanceVal}</span>
                    </div>
                    <input type="range" id="eval-reel-nuance-${uniqueIndex}" min="0" max="100" value="50" style="width:100%; accent-color:#3498db; pointer-events:auto;" oninput="document.getElementById('eval-reel-nuance-val-${uniqueIndex}').innerText = getNuanceText(this.value, '${lang}')">
                    <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; margin-top:5px; font-weight:600;">
                        <span>${nuanceLowText}</span><span>${nuanceHighText}</span>
                    </div>
                </div>
                
                <button class="btn-eval" onclick="submitReelEval(${data.id}, this, '${lang}', ${uniqueIndex})" style="width:100%; padding:15px; font-size:16px; background:#ff8c00; color:#fff; border:none; border-radius:12px; font-weight:800; box-shadow:0 4px 10px rgba(255,140,0,0.3); transition:all 0.2s; pointer-events:auto;">${btnText}</button>
            </div>
            <div class="eval-lock-msg" style="text-align:center; margin-top:15px; color:#aaa; font-size:13px; font-weight:600;">
                ${lockText}
            </div>
        </div>
    `;
    return item;
}

window.submitReelEval = function (id, btn, lang = 'kr', uniqueIndex) {
    const item = btn.closest('.eval-reel-item');
    const usageSlider = item.querySelector(`#eval-reel-usage-${uniqueIndex}`);
    const usageVal = usageSlider ? parseInt(usageSlider.value) : 0;
    
    if (usageVal <= 20) {
        replaceEvalCardWord(uniqueIndex, lang);
        return;
    }
    
    item.dataset.evaluated = 'true';
    btn.innerHTML = lang === 'kr' ? '<i class="fa-solid fa-check-circle"></i> 평가 완료!' : '<i class="fa-solid fa-check-circle"></i> 評価完了!';
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

    // For app.js (Korean users learning JP)
    // Create an infinite-like feed for demo: 3 learning items (JP) -> 1 eval item (KR)
    // Run this for 12 cycles (total 48 items), wrapping around the word arrays safely.
    let jpIndex = 0;
    let krIndex = 0;

    for (let cycle = 0; cycle < 12; cycle++) {
        for (let i = 0; i < 3; i++) {
            combinedFeed.push({ type: 'learning', data: DataJP[jpIndex % DataJP.length] });
            jpIndex++;
        }
        combinedFeed.push({ type: 'eval', data: DataKR[krIndex % DataKR.length] });
        krIndex++;
    }

    combinedFeed.forEach((item, index) => {
        let el;
        if (item.type === 'learning') {
            el = createReelItem(item.data, 'jp');
        } else {
            el = createEvalItem(item.data, 'kr', index);
        }
        feedContainer.appendChild(el);
        observer.observe(el);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const item = entry.target;

        if (entry.isIntersecting) {
            if (item.classList.contains('eval-reel-item')) {
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
        window.closeAllExpanded();
    }
}

window.toggleExpand = function (btn, event) {
    event.stopPropagation();
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

window.deleteWord = function (id, event) {
    event.stopPropagation();
    MyWordbook = MyWordbook.filter(w => w.id !== id);
    showToast("단어가 삭제되었습니다 🗑️");
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
        showToast("모든 단어가 기억 장기화 상태입니다! 🌱");
        srsFilterMode = false;
        renderWordbook();
        return;
    }

    toggleWordbookView('srs');
    showToast("오늘 복습할 단어들입니다. 🚨");
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
                    <button onclick="handleSRSAnswer(${data.id}, false, this, event)" style="flex:1; padding:15px; border-radius:12px; border:none; background:#ff3b30; color:white; font-size:17px; font-weight:800; cursor:pointer; box-shadow:0 4px 10px rgba(255,59,48,0.3);"><i class="fa-solid fa-xmark"></i> 몰라요</button>
                    <button onclick="handleSRSAnswer(${data.id}, true, this, event)" style="flex:1; padding:15px; border-radius:12px; border:none; background:#34c759; color:white; font-size:17px; font-weight:800; cursor:pointer; box-shadow:0 4px 10px rgba(52,199,89,0.3);"><i class="fa-solid fa-check"></i> 알아요</button>
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
            showToast("기억이 연장되었습니다! 🌱");
        } else {
            word.srsLevel = 'urgent';
            showToast("조금 뒤에 한 번 더 복습합니다.");
        }
    }

    const container = document.getElementById('srs-feed-container');

    if (!known) {
        container.appendChild(createSRSItem(word));
        const newItems = container.querySelectorAll('.reel-item');
        observer.observe(newItems[newItems.length - 1]);
    }

    container.scrollBy({ top: container.clientHeight, behavior: 'smooth' });

    setTimeout(() => {
        const remaining = MyWordbook.filter(x => x.srsLevel === 'urgent').length;
        if (remaining === 0) {
            showToast("오늘의 복습을 모두 마쳤습니다! 🎉");
            toggleWordbookView('dash');
            stopSRS();
        }
    }, 500);
}

function renderWordbook() {
    const box = document.getElementById('wordbook-list');
    box.innerHTML = '';

    const total = MyWordbook.length;
    const urgentCount = MyWordbook.filter(x => x.srsLevel === 'urgent').length;

    const totalEl = document.getElementById('stat-total');
    if (totalEl) totalEl.innerText = total;
    const urgentEl = document.getElementById('stat-urgent');
    if (urgentEl) urgentEl.innerText = urgentCount;

    const totalDashEl = document.getElementById('stat-total-dash');
    if (totalDashEl) totalDashEl.innerText = total;
    const urgentDashEl = document.getElementById('stat-urgent-dash');
    if (urgentDashEl) urgentDashEl.innerText = urgentCount;

    const displayList = srsFilterMode ? MyWordbook.filter(x => x.srsLevel === 'urgent') : MyWordbook;

    if (displayList.length === 0) {
        box.innerHTML = `<div style="text-align:center; padding:30px; color:#aaa; font-weight:700; font-size:15px;">표시할 단어가 없습니다.</div>`;
        return;
    }

    displayList.forEach(d => {
        let badge = '';
        if (d.srsLevel === 'urgent') badge = '<div class="srs-badge srs-urgent">🚨 망각 임박 (오늘 복습!)</div>';
        else if (d.srsLevel === 'warning') badge = '<div class="srs-badge srs-warning">⚠️ 내일 복습 권장</div>';
        else badge = '<div class="srs-badge srs-safe">🌱 장기 기억 형성됨</div>';

        box.innerHTML += `
            <div class="list-item" onclick="openDetail(${d.id})">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    ${badge}
                    <button class="del-btn" onclick="deleteWord(${d.id}, event)"><i class="fa-solid fa-trash"></i></button>
                </div>
                <h4>${d.word} <span style="font-size:15px; color:#999; font-weight:500;">[${d.reading}]</span></h4>
                <div class="desc" style="color:#111; margin-top:5px; font-size: 16px;">💡 ${d.meaning}</div>
                <div class="meta" style="margin-top:10px;"><span>${d.tags[0]}</span></div>
            </div>
        `;
    });
}

function renderCommunity() {
    const box = document.getElementById('community-list');
    box.innerHTML = '';

    if (currentComTab === 'action' && currentComRole === 'learner') {
        box.innerHTML = `
            <div class="form-container" style="background:#fff; border-radius:16px; padding:20px; box-shadow:0 4px 10px rgba(0,0,0,0.03); border:1px solid #eee;">
                <h3 style="margin-bottom: 15px; font-size:17px;">새로운 질문 남기기</h3>
                <input type="text" id="new-q-word" placeholder="질문할 일본어 단어를 입력하세요 (예: ヤバい)" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ccc; font-size:16px; margin-bottom:15px; background:#fdfdfd; outline:none;" />
                <textarea id="new-q-desc" placeholder="어떤 점이 궁금하신가요? 구체적인 맥락을 적어주시면 원어민들이 훨씬 답변하기 좋습니다." style="width:100%; height:120px; padding:12px; border-radius:8px; border:1px solid #ccc; font-size:16px; resize:none; margin-bottom:15px; font-family:inherit; background:#fdfdfd; outline:none;"></textarea>
                <div style="display:flex; justify-content:flex-end;">
                    <button class="btn-eval" onclick="submitQuestion()" style="padding:12px 20px; font-size:16px; width:auto;"><i class="fa-solid fa-paper-plane"></i> 질문 등록하기</button>
                </div>
            </div>
        `;
        return;
    }

    let targetData = currentComRole === 'learner' ? [...DataJP] : [...DataKR];
    const actionText = currentComRole === 'learner' ? "궁금해요 🙋‍♂️" : "답변을 기다려요 🚨";

    if (currentComTab === 'popular') {
        targetData = targetData.sort((a, b) => b.comments - a.comments);
    } else if (currentComTab === 'action' && currentComRole === 'mentor') {
        targetData = targetData.sort((a, b) => a.comments - b.comments);
    }

    targetData.forEach(d => {
        let extraQuestions = "";

        if (currentComRole === 'mentor' && currentComTab === 'action' && d.extra_questions) {
            extraQuestions = `
                <div style="margin-top: 15px; border-top: 1px dashed #eee; padding-top: 12px; display:flex; flex-direction:column; gap:8px;">
                    <div style="font-size:13px; font-weight:700; color:#888;">👀 현재 대기 중인 다른 질문들</div>
                    ${d.extra_questions.map(q => `
                    <div style="background:#fff4ea; padding:10px; border-radius:8px; font-size:14px; color:#333; line-height: 1.4; cursor:pointer;" onclick="event.stopPropagation(); openDetail(${d.id}, '${q.replace(/'/g, "\\'")}\');">
                        <span style="color:#ff8c00; font-weight:700; margin-right:5px;">Q.</span> ${q}
                    </div>
                    `).join('')}
                </div>
            `;
        }

        let actionButton = "";
        if (currentComRole === 'learner') {
            actionButton = `<button class="btn-eval" onclick="event.stopPropagation(); openDetail(${d.id})" style="margin-top: 12px; padding: 10px; font-size: 15px; width: 100%; background: #fff; color: #ff8c00; border: 1px solid #ff8c00; box-shadow: none;"><i class="fa-solid fa-paper-plane"></i> 이 단어에 대해 궁금한 점 질문하기!</button>`;
        } else {
            actionButton = `<button class="btn-eval" onclick="event.stopPropagation(); openEvaluateModal()" style="margin-top: 12px; padding: 10px; font-size: 15px; width: 100%;"><i class="fa-solid fa-check"></i> 네이티브로서 평가하기</button>`;
        }

        box.innerHTML += `
            <div class="list-item" onclick="openDetail(${d.id})">
                <h4 style="font-size: 32px;">${d.word} <span style="font-size:16px;color:#aaa; font-weight: 500;">[${d.reading}]</span></h4>
                <div class="desc" style="color:#111; line-height: 1.4; margin-top: 5px;">💬 ${d.question || d.meaning || "의미 정보가 없습니다."}</div>
                <div class="meta" style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                    <div class="tags" style="margin-bottom: 0;">${d.tags.map(t => `<span style="padding:3px 8px;font-size:12px; background: rgba(0,0,0,0.06); border-radius: 16px; color: #333;">${t}</span>`).join('')}</div>
                    <span>댓글 ${d.comments}</span>
                </div>
                ${extraQuestions}
                ${actionButton}
            </div>
        `;
    });
}

window.renderComTabs = function () {
    const container = document.getElementById('com-tabs-container');
    container.innerHTML = '';

    let tabs = [];
    if (currentComRole === 'learner') {
        tabs = [{ id: 'popular', label: '🔥 인기 단어' }, { id: 'action', label: '📝 질문하기' }];
    } else {
        tabs = [{ id: 'popular', label: '🔥 인기 단어' }, { id: 'action', label: '🙌 답변하기' }];
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
        if (thumb) thumb.innerText = '🇯🇵';
    } else {
        currentComRole = 'mentor';
        if (switchEl) switchEl.classList.add('mentor-mode');
        if (thumb) thumb.innerText = '🇰🇷';
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
        showToast("단어와 질문 내용을 모두 입력해주세요! 🙏");
        return;
    }

    const newId = Date.now();
    const newObj = {
        id: newId,
        word: wordInput,
        reading: "발음 미정",
        meaning: "의미 대기중",
        example_foreign: descInput,
        question: descInput,
        example_native: "",
        tags: ["#질문대기", "#신규등록"],
        likes: 0,
        comments: 0,
        usage: 0,
        nuance: 50,
        demographic: "통계 데이터 수집 전"
    };

    DataJP.unshift(newObj);
    showToast("질문이 성공적으로 등록되었습니다! 🎉");
    switchComTab('popular');
}

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
    const wordsCount = document.getElementById('stat-mypage-words');
    if (wordsCount) wordsCount.innerText = MyWordbook.length;
}

window.openDetail = function (id, customQuestionStr = null) {
    const all = [...DataJP, ...DataKR];
    const data = all.find(x => x.id === id);
    if (!data) return;

    let threads = [];
    threads.push({
        q: data.question || data.example_foreign || "이 표현은 어떻게 쓰면 안전한가요?",
        answered: true,
        answersHtml: `
            <div class="comment-item" style="margin-top:10px; border:none; padding:0; background:transparent;">
                <div class="avatar" style="background:#ddebff; color:#3498db;"><i class="fa-solid fa-chalkboard-user"></i></div>
                <div>
                    <strong>원어민 회원 A</strong>
                    <p style="font-size:14px; line-height:1.4; color:#333; margin-top: 4px;">일상생활에서 정말 자주 씁니다. 다만 윗 분들에게 사용하면 큰일나요!</p>
                </div>
            </div>
            
            <div style="font-size:15px; font-weight:700; margin-bottom:8px; color:#ff8c00; margin-top: 20px;">Q. 친구 외에 직장 동료에게도 쓸 수 있나요?</div>
            <div class="comment-item" style="margin-top:10px; border:none; padding:0; background:transparent;">
                <div class="avatar" style="background:#ffd0d0; color:#ff3b30;"><i class="fa-solid fa-chalkboard-user"></i></div>
                <div>
                    <strong>원어민 회원 B</strong>
                    <p style="font-size:14px; line-height:1.4; color:#333; margin-top: 4px;">나이가 비슷한 동료라면 점심시간 쯤 편하게 쓸 수 있어요.</p>
                </div>
            </div>
        `
    });

    if (data.extra_questions) {
        data.extra_questions.forEach(q => {
            threads.push({
                q: q,
                answered: false,
                answersHtml: `<div style="text-align:center; padding:15px 0; color:#999; font-size:14px;">아직 달린 답변이 없습니다.</div>`
            });
        });
    }

    if (customQuestionStr) {
        const found = threads.find(t => t.q === customQuestionStr);
        if (found) found.autoFocus = true;
    }

    const commentsNum = data.comments;

    const modalBody = document.getElementById('detail-modal-body');
    modalBody.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div class="tags" style="margin-bottom:10px">${data.tags.map(t => `<span>${t}</span>`).join('')}</div>
            <h2 style="font-size: 29px; font-weight:800">${data.word}</h2>
            <p style="font-size: 19px; color: #ff8c00; font-weight:700">${data.meaning}</p>
        </div>

        ${currentComRole === 'learner' ? `
            <div style="background:#fff4ea; padding:15px; border-radius:12px; margin-bottom:20px; border: 1px solid #ffeada;">
                <h4 style="font-size:15px; margin-bottom:12px; color:#111;">📊 원어민 연령별 / 직업별 사용 통계</h4>
                <div style="font-size:14px; color:#555; display:flex; flex-direction:column; gap:8px;">
                    <div style="display:flex; justify-content:space-between"><span>👩‍🎓 10~20대 학생</span> <strong style="color:#ff8c00;">매우 자주 씀 (92%)</strong></div>
                    <div style="display:flex; justify-content:space-between"><span>💼 30대 회사원</span> <strong>가끔 씀 (45%)</strong></div>
                    <div style="display:flex; justify-content:space-between"><span>👴 40대 이상</span> <strong>거의 안 씀 (10%)</strong></div>
                </div>
            </div>
        ` : `
            <div class="action-box">
                <button class="btn-eval" onclick="openEvaluateModal()">
                    <i class="fa-solid fa-check"></i> 네이티브로서 이 단어 직접 평가하기
                </button>
            </div>
        `}

        <div class="stat-bars-wrapper" style="display:flex; flex-direction:column; gap:20px; width:100%; margin-top:20px; padding-bottom:20px; border-bottom: 1px dashed #ddd; margin-bottom:20px;">
            <div class="stat-bar-container" style="display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:6px; font-size:15px; font-weight:800; color:#111; letter-spacing:-0.5px;">
                        🔥 사용 빈도
                        <i class="fa-solid fa-circle-info" onclick="openDemographicsModal(${data.id})" style="color:#aaa; cursor:pointer; font-size:15px; transition:color 0.2s;" onmouseover="this.style.color='#ff8c00'" onmouseout="this.style.color='#aaa'"></i>
                    </div>
                    <span style="font-size:16px; font-weight:900; color:#ff8c00;">${data.usage}%</span>
                </div>
                <div style="position:relative; width:100%; height:12px; background:#f0f0f0; border-radius:6px; overflow:hidden;">
                    <div class="bar-fill-usage" data-target="${data.usage}" style="position:absolute; top:0; left:0; height:100%; width:0%; background:#ff8c00; border-radius:6px; transition:width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);"></div>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; font-weight:600;">
                    <span>거의 안 씀</span>
                    <span>매일 씀</span>
                </div>
            </div>
            <div class="stat-bar-container" style="display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:15px; font-weight:800; color:#111; letter-spacing:-0.5px;">👔 격식 정도</span>
                    <span style="font-size:16px; font-weight:900; color:#3498db;">${data.nuance}%</span>
                </div>
                <div style="position:relative; width:100%; height:12px; background:#f0f0f0; border-radius:6px; overflow:hidden;">
                    <div class="bar-fill-nuance" data-target="${data.nuance}" style="position:absolute; top:0; left:0; height:100%; width:0%; background:#3498db; border-radius:6px; transition:width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);"></div>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:#888; font-weight:600;">
                    <span>캐주얼 (친근함)</span>
                    <span>격식 (정중함)</span>
                </div>
            </div>
        </div>
        <h3 style="margin-top:20px; font-size:17px;">단어 질문 및 토론 (댓글 ${commentsNum}개)</h3>
        
        ${currentComRole === 'learner' ? `
        <div style="margin-top:10px; margin-bottom:15px;">
            <input type="text" placeholder="이 단어에 대해 궁금한 점을 자유롭게 질문해 보세요..." style="width:100%; padding:12px; border-radius:8px; border:1px solid #ccc; font-size:14px; margin-bottom:10px; box-sizing:border-box; outline:none;" />
            <button class="btn-eval" onclick="showToast('추가 질문이 성공적으로 등록되었습니다! 원어민의 답변을 기다려주세요.'); closeDetailModal();" style="padding:10px; font-size:14px; background:#fff; color:#ff8c00; border:1px solid #ff8c00; box-shadow:none;"><i class="fa-solid fa-paper-plane"></i> 이 단어에 대해 질문하기!</button>
        </div>
        ` : ''}

        <div style="background:#f9f9f9; padding:15px; border-radius:12px; border:1px solid #eee; margin-bottom: 30px;">
            ${threads.map((t, index) => `
                <div style="${index > 0 ? 'margin-top: 25px; border-top: 1px dashed #ddd; padding-top: 25px;' : ''}">
                    <div style="font-size:15px; font-weight:700; margin-bottom:8px; color:#ff8c00;">Q. ${t.q}</div>
                    ${t.answersHtml}
                    ${currentComRole === 'mentor' ? `
                        ${t.autoFocus ? `
                        <div id="focus-target-form" style="margin-top:10px; background:#fff; padding:12px; border-radius:8px; border:1px solid #ff8c00;">
                            <input type="text" placeholder="원어민 멘토로서 1~2줄의 가장 명쾌한 답변을 달아주세요..." style="width:100%; padding:8px 0; box-sizing:border-box; border:none; border-bottom:1px solid #ffeada; outline:none; font-size:14px; margin-bottom:8px; background:transparent;" />
                            <div style="display:flex; justify-content:flex-end;">
                                <button class="btn-eval" onclick="showToast('질문에 대한 답변이 성공적으로 등록되었습니다! (+100 매듭)'); closeDetailModal();" style="padding:6px 12px; font-size:13px; width:auto; border-radius:6px;"><i class="fa-solid fa-check"></i> 답변 남기기</button>
                            </div>
                        </div>
                        ` : `
                        <div style="margin-top:10px;">
                            <button class="btn-eval" onclick="showToast('입력 폼이 열립니다 (클릭 동작 모방)'); closeDetailModal();" style="padding:8px 12px; font-size:13px; background:#fff; color:#ff8c00; border:1px solid #ff8c00; box-shadow:none;"><i class="fa-solid fa-reply"></i> ${t.answered ? '나도 의견 보태기 (매듭 +10)' : '첫 답변 달아주기 (매듭 +100 ✨)'}</button>
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
            <div style="flex:1; text-align:center; font-weight:800; font-size:19px; color:#3498db;"><i class="fa-solid fa-mars"></i> 남성</div>
            <div style="flex:1; text-align:center; font-weight:800; font-size:19px; color:#e74c3c;"><i class="fa-solid fa-venus"></i> 여성</div>
        </div>
        <div style="display:flex; justify-content:space-between; gap:20px; padding-bottom:15px;">
            <div style="flex:1; display:flex; flex-direction:column; gap:20px;">
                ${[10, 20, 30, 40, 50].map(age => `
                    <div style="display:flex; align-items:center;">
                        <span style="width:40px; font-weight:800; font-size:16px; color:#444;">${age}대${age === 50 ? '+' : ''}</span>
                        <div style="flex:1; background:#eee; height:16px; border-radius:8px; margin:0 10px; overflow:hidden;">
                            <div style="width:${m[age]}%; height:100%; background:#3498db; border-radius:8px;"></div>
                        </div>
                        <span style="font-size:15px; font-weight:800; color:#111; width:35px; text-align:right;">${m[age]}%</span>
                    </div>
                `).join('')}
            </div>
            <div style="flex:1; display:flex; flex-direction:column; gap:20px;">
                ${[10, 20, 30, 40, 50].map(age => `
                    <div style="display:flex; align-items:center;">
                        <span style="width:40px; font-weight:800; font-size:16px; color:#444;">${age}대${age === 50 ? '+' : ''}</span>
                        <div style="flex:1; background:#eee; height:16px; border-radius:8px; margin:0 10px; overflow:hidden;">
                            <div style="width:${f[age]}%; height:100%; background:#e74c3c; border-radius:8px;"></div>
                        </div>
                        <span style="font-size:15px; font-weight:800; color:#111; width:35px; text-align:right;">${f[age]}%</span>
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
        if (v <= 20) return "몰라요";
        if (v <= 40) return "거의 사용 안함";
        if (v <= 60) return "가끔 사용함";
        if (v <= 80) return "자주 사용함";
        return "많이 사용함";
    } else {
        if (v <= 20) return "知らない";
        if (v <= 40) return "ほとんど使わない";
        if (v <= 60) return "時々使う";
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
    const text = type === 'usage' ? getUsageText(val, 'kr') : getNuanceText(val, 'kr');
    const label = document.getElementById('eval-val-' + type);
    if (label) label.innerText = text;
    
    if (type === 'usage') {
        const nuanceContainer = document.getElementById('eval-nuance-container');
        const btn = document.querySelector('#evaluate-modal .btn-eval');
        if (parseInt(val) <= 20) {
            if (nuanceContainer) nuanceContainer.style.display = 'none';
            if (btn) btn.innerText = '모르는 단어 건너뛰기 🔄';
        } else {
            if (nuanceContainer) nuanceContainer.style.display = 'block';
            if (btn) btn.innerText = '평가 제출하고 매듭 10개 획득 💰';
        }
    }
}

window.submitEvaluation = function () {
    const usageVal = parseInt(document.getElementById('eval-usage').value);
    if (usageVal <= 20) {
        showToast('의견 감사합니다! 다른 단어를 추천해 드릴게요.');
        closeEvaluateModal();
        closeDetailModal();
        setTimeout(() => {
            const all = [...DataJP, ...DataKR];
            const randomWord = all[Math.floor(Math.random() * all.length)];
            openDetailModal(randomWord.id);
        }, 300);
        return;
    }
    showToast('평가 감사합니다! 매듭 10개가 지급되었습니다 💰');
    closeEvaluateModal();
    closeDetailModal();
}

window.handleUsageSliderInput = function (value, uniqueIndex, lang) {
    const v = parseInt(value);
    const label = document.getElementById(`eval-reel-usage-val-${uniqueIndex}`);
    if (label) label.innerText = getUsageText(v, lang);
    
    const nuanceContainer = document.getElementById(`eval-reel-nuance-container-${uniqueIndex}`);
    const card = document.querySelector(`#eval-reel-usage-${uniqueIndex}`).closest('.eval-reel-item');
    const btn = card ? card.querySelector('.btn-eval') : null;
    
    if (v <= 20) {
        if (nuanceContainer) nuanceContainer.style.display = 'none';
        if (btn) {
            btn.innerHTML = lang === 'kr' ? "다른 단어 평가하기 🔄" : "別の単語を評価する 🔄";
            btn.style.background = '#ff8c00';
            btn.style.boxShadow = '0 4px 10px rgba(255,140,0,0.3)';
        }
    } else {
        if (nuanceContainer) nuanceContainer.style.display = 'block';
        if (btn) {
            btn.innerHTML = lang === 'kr' ? "<i class='fa-solid fa-check'></i> 평가 완료하고 다음으로" : "<i class='fa-solid fa-check'></i> 評価を完了して次へ";
            btn.style.background = '#ff8c00';
            btn.style.boxShadow = '0 4px 10px rgba(255,140,0,0.3)';
        }
    }
}

window.replaceEvalCardWord = function (uniqueIndex, lang) {
    const list = lang === 'jp' ? DataJP : DataKR;
    const randomWord = list[Math.floor(Math.random() * list.length)];
    
    const card = document.querySelector(`.eval-reel-item input#eval-reel-usage-${uniqueIndex}`).closest('.eval-reel-item');
    if (!card) return;
    
    card.dataset.id = randomWord.id;
    const wordHeader = card.querySelector('h2');
    if (wordHeader) wordHeader.innerText = randomWord.word;
    
    const wordMeaning = card.querySelector('p');
    if (wordMeaning) wordMeaning.innerText = randomWord.meaning;
    
    const usageSlider = card.querySelector(`#eval-reel-usage-${uniqueIndex}`);
    if (usageSlider) {
        usageSlider.value = 0;
    }
    
    const usageValText = card.querySelector(`#eval-reel-usage-val-${uniqueIndex}`);
    if (usageValText) {
        usageValText.innerText = getUsageText(0, lang);
    }
    
    const nuanceContainer = card.querySelector(`#eval-reel-nuance-container-${uniqueIndex}`);
    if (nuanceContainer) {
        nuanceContainer.style.display = 'none';
    }
    
    const btn = card.querySelector('.btn-eval');
    if (btn) {
        btn.innerHTML = lang === 'kr' ? "다른 단어 평가하기 🔄" : "別の単語を評価する 🔄";
        btn.setAttribute('onclick', `submitReelEval(${randomWord.id}, this, '${lang}', ${uniqueIndex})`);
        btn.style.background = '#ff8c00';
        btn.style.boxShadow = '0 4px 10px rgba(255,140,0,0.3)';
    }
    
    showToast(lang === 'kr' ? "새로운 단어가 추천되었습니다! 🎲" : "新しい単語が推薦されました！ 🎲");
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
        const levels = ['urgent', 'warning', 'safe'];
        const randomLevel = levels[Math.floor(Math.random() * levels.length)];
        MyWordbook.unshift({ ...target, srsLevel: randomLevel });
        showToast("단어장에 저장되었습니다! 📚");

        btn.querySelector('i').className = 'fa-solid fa-check';
        btn.querySelector('span').innerText = '보관됨';
    } else if (existingIndex !== -1) {
        MyWordbook.splice(existingIndex, 1);
        showToast("단어 보관이 취소되었습니다.");

        btn.querySelector('i').className = 'fa-solid fa-plus';
        btn.querySelector('span').innerText = '보관';
    }
}

window.shareReel = function (e) { e.stopPropagation(); showToast("링크가 클립보드 복사됨! 🔗"); }

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
        <div class="comment-item"><div class="avatar"><i class="fa-solid fa-user"></i></div><div><strong>Native</strong><p>이건 정말 많이 써요</p></div></div>
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

window.setupFeedScroll = function (container) {
    if (!container) return;
    let isScrolling = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let isScrollGesture = false;
    
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (isScrolling) return;
        
        const direction = e.deltaY > 0 ? 1 : -1;
        scrollFeed(container, direction);
    }, { passive: false });
    
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isScrollGesture = false;
    }, { passive: true });
    
    container.addEventListener('touchmove', (e) => {
        const diffX = Math.abs(e.touches[0].clientX - touchStartX);
        const diffY = Math.abs(e.touches[0].clientY - touchStartY);
        
        if (diffY > diffX && diffY > 10) {
            isScrollGesture = true;
            if (e.cancelable) e.preventDefault();
        }
    }, { passive: false });
    
    container.addEventListener('touchend', (e) => {
        if (isScrolling || !isScrollGesture) return;
        const touchEndY = e.changedTouches[0].clientY;
        const diffY = touchStartY - touchEndY;
        const diffX = touchStartX - e.changedTouches[0].clientX;
        
        if (Math.abs(diffY) > 50 && Math.abs(diffY) > Math.abs(diffX)) {
            const direction = diffY > 0 ? 1 : -1;
            scrollFeed(container, direction);
        }
    }, { passive: true });

    function scrollFeed(container, direction) {
        const items = Array.from(container.querySelectorAll('.reel-item'));
        if (items.length === 0) return;
        
        const containerRect = container.getBoundingClientRect();
        let activeIndex = 0;
        let minDiff = Infinity;
        
        items.forEach((item, idx) => {
            const itemRect = item.getBoundingClientRect();
            const diff = Math.abs(itemRect.top - containerRect.top);
            if (diff < minDiff) {
                minDiff = diff;
                activeIndex = idx;
            }
        });
        
        const currentItem = items[activeIndex];
        if (direction === 1) {
            if (currentItem.classList.contains('eval-reel-item') && currentItem.dataset.evaluated !== 'true') {
                showToast("평가를 완료해야 다음 단어로 넘어갈 수 있습니다.");
                return;
            }
        }
        
        const targetIndex = activeIndex + direction;
        if (targetIndex >= 0 && targetIndex < items.length) {
            isScrolling = true;
            const targetItem = items[targetIndex];
            const targetScrollTop = container.scrollTop + targetItem.getBoundingClientRect().top - container.getBoundingClientRect().top;
            
            container.scrollTo({
                top: targetScrollTop,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                isScrolling = false;
            }, 600);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderFeed('jp');
    renderComTabs();
    setupFeedScroll(document.getElementById('feed-container'));
    setupFeedScroll(document.getElementById('srs-feed-container'));
});
