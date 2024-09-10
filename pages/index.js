import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><strong>Introduction:</strong></p>
        <p align= "justify">My name is Aaron Joaquin P. Basilio. Classmates and students who know me at
        the university usually call me General. I am from San Nicolas, City of San Fernando,
        Pampanga. My hobbies are playing mobile games, listening to music, watching anime,
        and sleeping. I am a quiet person in class. My favorite foods are Beef Bulalo and Sisig
        with slices of onion and celery, however, I only eat sisig once or twice a week otherwise
        eating sisig every day can affect my health. About my favorite music, they’re many and
        they’re mostly from video games and anime.</p>

        <br></br><br></br>

        <p align = "justify"><strong>10 Things that require Zero Talent</strong></p>
        <ol>
          <li>Being On Time</li>
          <li>Making An Effort</li>
          <li>Being High Energy</li>
          <li>Having A Positive Attitude</li>
          <li>Being Passionate</li>
          <li>Using Good Body Language</li>
          <li>Being Coachable</li>
          <li>Doing A Little Extra</li>
          <li>Being Prepared</li>
          <li>Having A Strong Work Ethic</li>
        </ol>

          <br></br><br></br>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
