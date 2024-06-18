<template>
  <Container>
    <h1>プロフィールページ(誠意製作中...)</h1>
    <p>ゼロからアプリケーションやサービスを企画し、自分一人でも実装出来るように色々な範囲を勉強しています。新しい物と技術が好きです。</p>
    <h2>学歴</h2>
    <b-table>
      <b-thead>
        <b-tr>
          <b-th scope="col">
            卒業年
          </b-th>
          <b-th scope="col">
            学校名
          </b-th>
          <b-th scope="col">
            取り組んだこと
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td>2019年</b-td>
          <b-td>生駒市立生駒中学校</b-td>
          <b-td>レゴのマインドストームを使ったロボットコンテストに出場しました。</b-td>
        </b-tr>
        <b-tr>
          <b-td>2022年</b-td>
          <b-td>私立奈良育英高校</b-td>
          <b-td>ARDF競技大会で関西2位,全国10位✨でした。</b-td>
        </b-tr>
        <b-tr>
          <b-td>2026年(見込み)</b-td>
          <b-td>京都デザイン＆テクノロジー専門学校</b-td>
          <b-td>現在に至るまで沢山の言語を学習しています。</b-td>
        </b-tr>
      </b-tbody>
    </b-table>
    <h2>掲載された記事一覧</h2>
    <b-table>
      <b-thead>
        <b-tr>
          <b-th scope="col">
            年月
          </b-th>
          <b-th scope="col">
            Link
          </b-th>
          <b-th scope="col">
            取り組んだこと
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td>2023年</b-td>
          <b-td>マイクロソフト<a href="https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2023/04/20/mixed-reality-for-professional-education/">(Link)</a></b-td>
          <b-td>MRデバイス(Hololens2)を用いてサークル用のデモを製作し、新技術の紹介を行いました。</b-td>
        </b-tr>
        <b-tr>
          <b-td>2024年</b-td>
          <b-td>マイクロソフト<a href="https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2024/04/05/case-study-utilization-of-azure-openai-service-by-students/">(Link)</a></b-td>
          <b-td>Azure OpenAI を使い学内の利便性を向上させる事を目的に学生とキャリアセンターが連携できる就活サイトの開発をチームで行いました。</b-td>
        </b-tr>
        <b-tr>
          <b-td>2024年</b-td>
          <b-td>窓の杜<a href="https://forest.watch.impress.co.jp/docs/special/1598339.html">(Link)</a></b-td>
          <b-td>Intel社が開催したOpenVinoとAipcを活用したアプリケーション開発コンテストで最優秀賞を頂き、東京で行われたIntelAiSummitのプログラム内でプレゼンテーションを発表した際の記事です。</b-td>
        </b-tr>
      </b-tbody>
    </b-table>
  </Container>
</template>
<style scoped>
h1 {
  color: #000000;
  position: relative;
  padding-bottom: 15px;
  margin-top: 50px;
  margin-bottom: 20px;
}

h3 {
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: rgb(29, 166, 190);
}

h1::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 6px;
  width: 100%;
  background-color: #8bdaff;
  border-radius: 5px;
}

h2 {
  color:rgb(0, 0, 0);
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;
}
h2::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: -8px;
  height: 3px;
  width: 100%;
  background-color: #aaaaaa;
  border-radius: 3px;
}

p {
  color: rgb(0, 0, 0);
  margin: 0.5px;
}

li {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>