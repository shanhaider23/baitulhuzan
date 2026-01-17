import Hero from './components/Hero'
import ContactPage from './contact/page'
import Events from './event/page'
import CommunityPage from './social-media/page'

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      <CommunityPage />
      <ContactPage />


    </>
  );
}
