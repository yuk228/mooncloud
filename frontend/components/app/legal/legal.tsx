type LegalProps = {
  type: "terms" | "privacy";
};

export function Legal({ type }: LegalProps) {
  switch (type) {
    case "terms":
      return <Terms />;
    case "privacy":
      return <Privacy />;
  }
}

function Terms() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">利用規約</h1>

      <div className="max-w-none">
        <p className="mb-6">
          この利用規約（以下「本規約」）は、Yuki（以下「当社」）が提供するMCloudサービス（以下「本サービス」）の利用条件を定めるものです。
          本サービスを利用することで、利用者は本規約に同意したものとみなされます。
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">第1条（適用）</h2>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>
            本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </li>
            <li>
            当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
            </li>
            <li>
            本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">第2条（ユーザーIDおよびパスワードの管理）</h2>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>
            ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
            </li>
            <li>ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
            <li>ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社は一切の責任を負わないものとします。</li>
          </ol>
        </section>

        <section className="mb-8">
           <h2 className="text-xl font-bold mb-4">第3条（禁止事項）</h2>
           <p className="mb-3">ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
           <ol className="list-decimal list-inside space-y-2 pl-4">
             <li>法令または公序良俗に違反する行為</li>
             <li>犯罪行為に関連する行為</li>
             <li>本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li>
             <li>当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
             <li>本サービスによって得られた情報を商業的に利用する行為</li>
             <li>当社のサービスの運営を妨害するおそれのある行為</li>
             <li>不正アクセスをし，またはこれを試みる行為</li>
             <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
             <li>不正な目的を持って本サービスを利用する行為</li>
             <li>本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為</li>
             <li>他のユーザーに成りすます行為</li>
             <li>当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為</li>
             <li>面識のない異性との出会いを目的とした行為</li>
             <li>当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</li>
             <li>その他，当社が不適切と判断する行為</li>
           </ol>
         </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">第4条（完全免責条項）</h2>
          <ol className="list-decimal list-inside space-y-3 pl-4">
            <li className="font-semibold">
            当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </li>
            <li>
            当社は，本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
            </li>
            <li>
            前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
            </li>
            <li>
            当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            第5条（サービスの停止・変更）
          </h2>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>
              当社は事前の通知なく、いつでも本サービスを停止、変更、終了できます。
            </li>
            <li>
              サービス停止により生じた損害について、当社は責任を負いません。
            </li>
            <li>当社は継続的なサービス提供義務を負いません。</li>
            <li>削除されたデータの復旧について、当社は義務を負いません。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">第9条（規約の変更）</h2>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>開発者は事前通知なく本規約を変更できます。</li>
            <li>変更後の継続利用により、変更に同意したものとみなします。</li>
            <li>変更に同意できない場合は、利用を停止してください。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            第10条（準拠法・管轄裁判所）
          </h2>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>本規約は日本法に準拠します。</li>
            <li>
              紛争については開発者の居住地を管轄する地方裁判所を専属管轄とします。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">第11条（その他）</h2>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>
              本規約の一部が無効とされても、他の部分の有効性には影響しません。
            </li>
            <li>
              本サービスは個人の学習・実験目的で提供されており、商業的なサポートは提供されません。
            </li>
            <li>
              本規約について疑義が生じた場合は、開発者の解釈が優先されます。
            </li>
          </ol>
        </section>

        <div className="bg-gray-50 border rounded-lg p-4 mt-8">
          <p className="text-sm text-gray-600">
            制定日：2025年1月{new Date().getDate()}日<br />
            最終更新：2025年1月{new Date().getDate()}日
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-red-700 font-medium">
            ⚠️
            本サービスの利用により生じるあらゆる損害について、開発者は一切の責任を負いません。
            重要なデータは必ずバックアップを取得し、自己責任でご利用ください。
          </p>
        </div>
      </div>
    </div>
  );
}

function Privacy() {
  return <div>Privacy</div>;
}
