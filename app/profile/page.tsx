import React from 'react'

const page = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto sm:flex'>
      <div className='sm:w-1/2 relative'>
        <div className='sm:sticky top-20 sm:pb-32 '>
          <h3>Profile</h3>
          <img src="https://placehold.jp/900x900.png" alt="イメージ画像" />
        </div>
      </div>
      <div className='sm:w-1/2 sm:pl-16 sm:pt-80 pb-24'>
        <div className='sm:pb-32 pt-8'>
          <h2 className='text-4xl'>
            Frontend Engineer <br />
            UI Designer
          </h2>
          <h1 className='text-9xl pt-2 pb-16'>iIDa</h1>
          <p>
            クリエイターをマネジメントする事務所やWEB制作会社などを経て、2015年にイラストレーターとして独立。シンプルな線と目を引く色づかいを特徴として、広告キャンペーン、書籍の表紙、商品パッケージなどの「デザインにフィットする」イラストを描く。プライベートでは3歳の息子を育てる。
          </p>
        </div>
        <h4>SNS</h4>
        <ul className='text-[28px] flex sm:gap-x-10 gap-x-5 justify-center'>
          <li><a href="https://www.x.com/meshiden_jp"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/meshiden.jp"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://discord.com/users/1287985017615679513"><i className="fa-brands fa-discord"></i></a></li>
          <li><a href="https://www.youtube.com/@meshiden_jp"><i className="fa-brands fa-youtube"></i></a></li>
          <li><a href="https://www.github.com/meshiden-dot-jp"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="https://www.behance.net/meganenasi61c5"><i className="fa-brands fa-behance"></i></a></li>
        </ul>
        <h4>Biography</h4>
        <table>
          <tbody>
            <tr>
              <th className='sm:w-1/5 w-1/6'>YEAR</th>
              <th>BIOGRAPHY</th>
            </tr>
            <tr>
              <td>2025</td>
              <td>
                青山学院大学理工学部情報テクノロジー学科　在学中<br />
                青山学院大学情報メディアセンター学生スタッフ
              </td>
            </tr>
            <tr>
              <td>2023</td>
              <td>神奈川県立秦野高等学校　卒業</td>
            </tr>
            <tr>
              <td>2004</td>
              <td>神奈川県平塚市生まれ</td>
            </tr>
          </tbody>
        </table>
        <h4>Award</h4>
        <table>
          <tbody>
            <tr>
              <th className='sm:w-1/5 w-1/6'>YEAR</th>
              <th>BIOGRAPHY</th>
            </tr>
            <tr>
              <td>2024</td>
              <td><a href="https://topaz.dev/projects/ac3c682bb55442262681">Progateハッカソン　優秀賞　<i className="fa-solid fa-arrow-up-right-from-square"></i></a></td>
            </tr>
            <tr>
              <td>2022</td>
              <td>
                <a href="https://express.adobe.com/page/SQ8KHbD94RDKy/">SDGsクリエイティブアイデアコンテスト2021　優秀賞　<i className="fa-solid fa-arrow-up-right-from-square"></i></a><br />
                平塚秦野地区県立学校交通安全大会ポスターの部　最優秀賞
              </td>
            </tr></tbody>
        </table>
      </div>
    </div>
  )
}

export default page