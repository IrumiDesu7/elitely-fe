import Head from 'next/head';
import { useState } from 'react';
import ArrowNav from '../components/ArrowNav';
import Separator from '../components/base/Separator';
import Content from '../components/Content';
import MenuBar from '../components/MenuBar';
import MightCheck from '../components/MightCheck';
import Navbar from '../components/Navbar';
import NewMembers from '../components/NewMembers';
import ProfileHeader from '../components/profile-header/ProfileHeader';

export default function Home() {
  const [isMainActive, setIsMainActive] = useState(true);

  return (
    <div>
      <Head>
        <title>Elitely | Get a date easily</title>
        <meta
          name="description"
          content="Dibuat spesial untuk Malo oleh Ilmi. HBD Malo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ArrowNav desc="Explore" />
        <div className="m-auto max-w-4xl">
          <ProfileHeader />
          <div className="md:flex bg-[#FAFAFA] pb-16 ">
            <div className="flex-1">
              <Navbar
                setIsMainActive={setIsMainActive}
                isMainActive={isMainActive}
              />
              <Separator />
              <Content isMainActive={isMainActive} />
            </div>
            <div>
              <NewMembers />
              <MightCheck />
            </div>
          </div>
        </div>
        <MenuBar />
      </main>
    </div>
  );
}
