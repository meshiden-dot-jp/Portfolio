import React from 'react'

const page = () => {
    return (
        <div className='sm:w-[70%] w-[90%] m-auto pb-32'>
            <h5 className='text-center'>ウェブアクセシビリティ</h5>
            <p>当サイトは、すべてのユーザーが快適にウェブサイトを利用できるよう、ウェブアクセシビリティの向上に努めています。</p>

            <h6>アクセシビリティ対応の取り組み</h6>
            <ul>
                <li>適切なコントラスト比を確保し、視認性を向上</li>
                <li>スクリーンリーダー対応のための適切なHTML構造を維持</li>
                <li>キーボード操作によるナビゲーションの最適化</li>
                <li>画像には代替テキスト（alt属性）を適切に設定</li>
                <li>動画コンテンツには字幕やテキスト説明を提供</li>
            </ul>

            <h6>アクセシビリティ基準の準拠</h6>
            <p>当サイトは、<a href="https://www.w3.org/TR/WCAG/" target="_blank" rel="noopener noreferrer">WCAG (Web Content Accessibility Guidelines)</a> に準拠することを目標としています。</p>

            <h6>今後の取り組み</h6>
            <p>ユーザーの皆様からのフィードバックをもとに、引き続きウェブアクセシビリティの改善に取り組んでまいります。</p>

            <h6>お問い合わせ</h6>
            <p>当サイトのアクセシビリティに関するご意見・ご質問は、以下の連絡先までお寄せください。</p>
            <p>お問い合わせ窓口:support@example.com</p>
        </div>
    )
}

export default page