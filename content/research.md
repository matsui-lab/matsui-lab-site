# Research

松井研究室では、**計算生物学（Computational Biology）** と **デジタル健康学（Digital Health Science）** の両輪で、  
生命・医療・運動の複雑な現象をデータ駆動的に解析しています。  
オミクス・生理信号・動作データなど多層データをAIで統合し、  
「分子から身体・社会まで」をつなぐ健康科学の基盤を創出します。

---

## 🧬 Computational Biology

### 概要
大規模オミクス解析やネットワーク理論を駆使し、がん・認知症・加齢筋などの複雑な生命現象をシステム的に解明します。  
近年は、新たなオミクスである **グライコミクス（糖鎖解析）** にも積極的に取り組んでいます。

---

### 1. Deep Learning Integration for Alzheimer’s Disease
**深層学習によるアルツハイマー病の分子標的探索**

**背景**  
Aβ-タウ相互作用がAD進行に関わるが、その制御因子は未解明。  
深層学習ベースのネットワーク統合手法「BIONIC」を用い、  
Aβ-タウ相互作用を調節する分子を探索。

**方法**  
ROSMAP由来のプロテオーム＋PPIデータをBIONICで統合し、線形回帰および相互情報量解析で調節因子を検出。

**結果・結論**  
GPNMB陽性ミクログリアが初期ADでAβ-タウ相互作用を調節する可能性を発見。  
新たな治療標的として期待される。

---

### 2. Exercise-Induced Anti-Aging Mechanisms
**運動によるアンチエイジングメカニズム**

**背景**  
加齢筋ではスプライシング異常（イントロン保持; IR）が増加。  
運動がこの分子過程をどう変えるかを解析。

**方法**  
骨格筋のトランスクリプトームを用い、運動・加齢条件でIR発生を比較。  
多層的データ解析でホールマーク遺伝子群との関連を評価。

**結果・結論**  
運動はIRを減少させ、ミトコンドリア機能遺伝子群の回復を誘導。  
IR制御を介した筋アンチエイジング経路を提唱。

---

### 3. Network Medicine for Aging Muscle
**加齢筋の脂肪蓄積を抑えるネットワーク機構**

**方法**  
マウス骨格筋データで身体活動条件間の遺伝子ネットワークを比較。  
PGC-1αを中心とする代謝制御ネットワークを解析。

**結果**  
PGC-1αが脂肪分化抑制ネットワークの中核因子として機能。  
身体活動が加齢筋の脂肪蓄積を抑制する共通経路を同定。

---

### 4. Cytokine Drivers in Osteoarthritis
**膝関節炎（OA）の炎症ドライバー解析**

**結果・結論**  
IL6ファミリーに属する **Oncostatin M（OSM）** が加齢性OAを進行させる主要因子であることを発見。  
炎症主導型OAへの薬剤リポジショニング候補を提示。

---

### 5. Human Tissue-Ageing Atlas – HuTAge
**加齢アトラス「HuTAge」の構築**

- GTEx と Tabula Sapiens データを統合し、  
  ヒト組織・細胞特異的な加齢依存性遺伝子発現を網羅。  
- R Shinyアプリとして公開し、加齢研究の共通基盤を提供。

---

### 6. PhyC: Clustering Cancer Evolutionary Trees
**がん進化系統樹クラスタリングアルゴリズム「phyC」**

- 系統樹のトポロジーとエッジ長に基づくクラスタリング手法を開発。  
- 腎細胞がん・肺がんで、サブクローン進化パターンを同定。

---

### 7. Robust Co-Expression Analysis by Copula
**タンパク質共発現解析アルゴリズム「RoDiCE」**

- 共発現変動をコピュラ理論で検定。  
- がんプロテオミクスでノイズに強い差分共発現解析を実現。

---

### 8. Explainable AI for Omics Embedding
**非線形次元削減結果の解釈手法**

- t-SNE / UMAP 埋め込み空間の構造を生物学的機能と対応づけるフレームワークを提案。  
- GTExやC. elegans胚発生データで可視化・説明可能AIを実証。

---

### 9. D3M: Distributional Differential Methylation
**メチル化変動検出アルゴリズム「D3M」**

- ワッサースタイン距離を用いた分布差検定で多峰性を検出。  
- Glioma解析で新規エピジェネティック変化を同定。

---

### 10. Maternal cfRNA Biomarkers in Preeclampsia
**後期子癇前症バイオマーカー研究**

- cfRNA-seqを用い、遅発性PEの診断精度をAUC 0.9超で実証。  
- HLA-G, IL17RB, KLRC4を主要シグネチャーとして抽出。

---

### 11. Sleep & Resilience in Alzheimer’s Disease
**アルツハイマー病における睡眠とレジリエンスの分子機構**

- 睡眠介入マウスデータとADヒト脳解析を統合。  
- TAMM41, KALRN, SREK1 をレジリエンス関連遺伝子として同定。

---

### 12. Personalized Proteogenomics in AD
**遺伝的背景を考慮したペプチドマーカー探索**

- 個人ゲノム情報を反映したプロテオゲノム解析で変異ペプチドを特定。  
- 新規AD関連ペプチドを19個同定。

---

### 13. Supervised Pseudotime Modeling for Disease Progression
**教師付き擬似時間推定による病態進行モデル**

- AD重症度を教師信号としたモデルを開発。  
- FAAH・GPX1を早期バイオマーカー候補として抽出。

---

### 14. Microbiome–Host Interaction Modeling
**腸内細菌−宿主転写制御相互作用のモデル化**

- 腸内細菌による転写因子制御ネットワークを推定。  
- ARNTとFLI1を介した予後関連転写経路を同定。

---

### 15. Pan-Cancer Enzyme Network Analysis
**翻訳後修飾酵素のPan-Cancer解析**

- 32腫瘍の発現異常とCRISPRスクリーニングを統合。  
- ALG14, CDC7, PLK4, TTKを主要酵素標的として同定。

---

## 🧠 Digital Health Science

### 概要
3D深度カメラ・モーションキャプチャ・脳波・筋電図などのセンサーデータを解析し、  
身体機能の数値化とデジタルツイン化を目指します。  
臨床現場や生活空間での「身体の見える化」を通じて、  
リハビリ・健康支援・DX基盤構築に貢献します。

---

### 1. Large-Scale 2D Video Gait Analysis
**大規模2Dビデオ歩行解析**

OpenPoseによる骨格推定を用い、実環境データでの異常補正・品質管理ワークフローを確立。  
未制御環境下でも高精度な歩行解析を実現。

---

### 2. 3D Depth Camera Balance Analysis
**三次元深度カメラによるバランス評価**

Functional Balance Scaleと比較し、体幹動揺をスパースロジスティック回帰で定量化。  
微細なバランス変化を非侵襲で検出。

---

### 3. Pregnancy Motion Simulation
**妊婦の立ち上がり動作解析**

模擬ジャケット実験とEMG・重心解析により、妊娠期特有の腰部負荷を定量化。  
リハビリ・生活指導支援への応用を目指す。

---

### 4. Box and Block Test Motion Analysis
**上肢リハビリ動作の3D動作解析**

MediaPipeによる手指関節の動作分解とPCA解析を組み合わせ、  
主観に依らない定量的な運動評価を実現。

---

### 5. Cortico-Muscular Coupling during Rhythmic Gait
**リズム聴覚刺激下の歩行における皮質-筋制御解析**

脳波＋筋電図同時計測により、RASが歩行中の皮質−筋結合を変化させることを発見。  
リハビリ介入の神経基盤を解明。

---

### 6. Group-Level Motor Module Analysis
**集団レベルのモーターモジュール推定法**

関数データ解析に基づく新アルゴリズムで、ノイズ耐性と推定精度を改善。  
臨床応用に向けた標準化解析法を開発。

---

### 7. Dynamic EMG Module Modeling
**動的運動モジュール解析**

PCA＋ウェーブレット解析により、歩行相ごとの筋間ネットワークを抽出。  
歩行制御のダイナミクスを明らかに。

---

### 8. Web-Based EMG Analysis Tool
**歩行EMG解析ウェブツール開発**

前処理・筋シナジー・コヒーレンス解析を自動化するWebアプリを開発。  
研究・臨床双方で利用可能な解析プラットフォームを構築。

---

