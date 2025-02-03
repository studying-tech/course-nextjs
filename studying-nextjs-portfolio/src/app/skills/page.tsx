import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts'
import MainContainer from '@/components/MainContainer'
import PageTitle from '@/components/PageTitle'
import SkillContainer from '@/components/skills/SkillContainer'

export const metadata = {
  title: `Skills - ${SITE_TITLE}`,
  description: SITE_DESCRIPTION,
}

export default function Skills() {
  return (
    <MainContainer>
      <PageTitle title='Skills' />

      <p className='text-base mb-10 text-text'>
        フロントエンド・サーバサイド・インフラの一通りをやっています。 これら以外にも Rust や FastAPI
        など、好きな言語やフレームワークがあります。
      </p>

      <SkillContainer />
    </MainContainer>
  )
}
