import {Title} from '@mantine/core'

export default function Index() {
  return (
    <>
      <main id="main">
        <Title order={2}>About</Title>
        <p>
          I live in sleepy south Alabama with my beautiful wife{' '}
          <a href="https://tararickaby.com/">Tara</a> and our three children. In
          my spare time, I enjoy taking photos, cheering for the Green Bay
          Packers, and playing bass guitar. Way back in 1997, I built my first
          web site on Geocities and have been passionate about the web since!
        </p>

        <Title order={3}>Work</Title>
        <p>
          I work at <a href="https://webdevstudios.com/">WebDevStudios,</a> a
          web development agency that builds cool shit on the internet. I've
          been there since 2013, and for the last several years I've been the
          Director of Engineering. Some of my responsibilities include
          supporting people and teams, hiring, writing policy, and creating
          training materials. I also partner with the executive team to plan and
          acomplish company goals.
        </p>
        <p>
          To learn more about my professional history, view my resume on
          <a href="https://www.linkedin.com/in/gregrickaby/" rel="author">
            LinkedIn
          </a>
          .
        </p>

        <Title order={3}>Books</Title>
        <p>
          I contract with <em>For Dummies</em> and <em>WROX</em> brands to write
          and edit technical books. I wrote a children's book in 2017 titled{' '}
          <a href="https://amzn.to/34QAxAQ" rel="nofollow">
            <em>Creating a Website for Dummies Jr.</em>
          </a>
          . It guides the reader through the web site planning and development
          process. My book has been translated into other languages and
          currently has a 4/5 rating on Amazon.
        </p>

        <p>I also served as the Technical Editor for three other books:</p>
        <ul>
          <li>
            <a href="https://amzn.to/37XCflU" rel="nofollow">
              <em>WordPress for Dummies</em>
            </a>{' '}
            (Sabin-Wilson, 2021)
          </li>
          <li>
            <a href="https://amzn.to/2BgCg7i" rel="nofollow">
              <em>Professional WordPress Plugin Development</em>
            </a>{' '}
            (Williams et al, 2020)
          </li>
          <li>
            <a href="https://amzn.to/37MMDLp" rel="nofollow">
              <em>WordPress All-In-One For Dummies</em>
            </a>{' '}
            (Sabin-Wilson, 2019)
          </li>
        </ul>

        <Title order={3}>Contributions</Title>
        <p>
          I've been part of the WordPress community since 2006. I've made
          contributions to core, documentation, plugins, and themes. I've also
          spoken at WordCamps and meet-ups. I'm also a contributor to other
          open-source projects like Next.js, Storybook, and Gatsby.
        </p>
        <p>
          Outside of tech, I volunteer my time and efforts at local community
          organizations. The Boy Scouts, Wiregrass Church, and the Enterprise
          High School Band Boosters to name a few.
        </p>

        <p>
          You can find me around the web with the links below. Stay safe out
          there and thanks for reading!{' '}
          <span role="img" aria-label="cheers">
            🍻
          </span>
        </p>
      </main>
    </>
  )
}
