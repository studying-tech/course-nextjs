import { Metadata } from 'next'
import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts'
import MainContainer from '@/components/MainContainer'
import PageTitle from '@/components/PageTitle'
import { Form } from '@/components/contact/Form'

// メタデータは client コンポーネントでは使えないので注意
export const metadata: Metadata = {
  title: `Contact - ${SITE_TITLE}`,
  description: SITE_DESCRIPTION,
}

export default function Contact() {
  return (
    <MainContainer>
      <PageTitle title='Contact' />

      <div className='max-w-2xl mx-auto'>
        <p className='text-base mb-10 text-text'>
          お問い合わせは以下のフォームからお願いいたします。通常2-3営業日以内にご返信いたします。
        </p>

        <Form />
      </div>
    </MainContainer>
  )
}
