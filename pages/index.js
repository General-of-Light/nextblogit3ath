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

        <p align = "justify"><strong>Why did I took IT?</strong></p>
        <p align= "justify">I took IT because it was my second choice. My first choice was Accountancy,
          however, after two years of learning from the course, I couldn’t continue in this course
          further because I was getting low grades, as the subjects were becoming more complex
          for me that I failed the qualifying examination so I couldn’t take the course further
          anymore. Therefore, instead of transferring to the Accounting Information System, I
          shifted to Information Technology.</p>

        <p align= "justify">Moreover, I chose IT because I often use my laptop and two smartphones, and I
          was interested in the system that different devices use. Furthermore, another reason is
          that I want to learn about programming and animation because I took Robotics
          Technology and Stop Motion Animation back when I was in Junior High overseas.
          Moreover, I was also interested in Artificial Intelligence when I learned about it back in
          Senior High, so I wanted to know more about it.</p>

          <br></br><br></br>


        <p align = "justify"><strong>Career I see myself after graduation:</strong></p>
        <p align= "justify">After graduating, I would see myself pursuing a career as a Junior Programmer
          or a Beginner Programmer in a Game development organization. My goal is to become
          an Experienced Programmer but to reach it, I must start from the level of a Beginner
          Programmer. I see myself having the required skills and basic knowledge of coding,
          game development software, understanding game mechanics, how a game should
          work, and making use of AI to create NPCs. I also see myself learning from my co-
          workers and learning from mistakes to further acknowledge and improve my skills.</p>

          <br></br><br></br>


        <p align = "justify"><strong>My expectations to learn in the subject:</strong></p>
        <p align= "justify">Based on what I have learned in this subject, I would expect to learn more about
          the terminal and its commands not just on Visual Studio Code, but on the computer
          itself, as well as some other software that has a terminal system. Moreover, I think the
          interaction between different computer systems and how to fix them when a problem
          occurs is also to be expected to learn in the subject. I would also expect to learn about
          Cloud Integration, as this can improve the interoperability of cloud computing.</p>

          <br></br><br></br>

        <p align = "justify"><strong>What I want to be discussed in the subject?</strong></p>
        <p align = "justify">A topic that I want to be discussed in this subject is Artificial Intelligence. Artificial
          Intelligence is a very popular trend in the world, as this significantly supports the
          widespread use of our technology and industries. AI can support the use of the system
          by automatically doing system integration, as well as cloud computing, and data
          integration, and it can assist users in providing and making decisions to improve their
          operations, as it can aid people to do many things in system integration.</p>

          <br></br><br></br>


        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
